'use client';

import { useEffect, useRef } from 'react';

interface CalInlineProps {
  className?: string;
  calLink?: string;
  height?: string;
}

export default function CalInline({
  className = '',
  calLink = 'fascinante-digital/30min',
  height = '600px',
}: CalInlineProps) {
  const calRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Función para cargar el script de Cal.com una sola vez
    const loadCalScript = () => {
      // Verificar si el script ya existe
      const existingScript = document.querySelector('script[src*="cal.com/embed/embed.js"]');
      if (existingScript) {
        return; // Script ya cargado
      }

      // Crear y cargar el script oficial de Cal.com
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `
        (function (C, A, L) {
          let p = function (a, ar) { a.q.push(ar); };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () { p(api, arguments); };
              const namespace = ar[1];
              api.q = api.q || [];
              if(typeof namespace === "string"){
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar);
              return;
            }
            p(cal, ar);
          };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        Cal("init", "30min", {origin:"https://app.cal.com"});
      `;

      document.head.appendChild(script);
    };

    // Función para inicializar el embed inline
    const initInlineEmbed = () => {
      if (window.Cal && window.Cal.ns && window.Cal.ns['30min'] && calRef.current) {
        try {
          // Configurar embed inline
          window.Cal.ns['30min']('inline', {
            elementOrSelector: calRef.current,
            config: { layout: 'month_view' },
            calLink: calLink,
          });

          // Configurar UI
          window.Cal.ns['30min']('ui', {
            hideEventTypeDetails: false,
            layout: 'month_view',
          });
        } catch (error) {
          console.warn('Error inicializando Cal.com inline embed:', error);
        }
      } else {
        // Reintentar en 100ms si Cal no está disponible
        setTimeout(initInlineEmbed, 100);
      }
    };

    // Cargar script y inicializar embed
    loadCalScript();

    // Esperar un poco para que el script se cargue
    setTimeout(initInlineEmbed, 500);
  }, [calLink]);

  return (
    <div
      ref={calRef}
      id="my-cal-inline-30min"
      className={className}
      style={{
        width: '100%',
        height: height,
        overflow: 'scroll',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
      }}
    />
  );
}

// Declarar tipos para Cal.com
declare global {
  interface Window {
    Cal: {
      (action: string, ...args: unknown[]): void;
      ns: {
        [key: string]: {
          (action: string, ...args: unknown[]): void;
        };
      };
    };
  }
}
