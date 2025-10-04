'use client';

import { cn } from '@/utils/cn';
import { useEffect } from 'react';

interface BotonCalMobileProps {
  className?: string;
  children?: React.ReactNode;
  calLink?: string;
  onBookingSuccess?: () => void;
}

export default function BotonCalMobile({
  className = '',
  children = 'Agendar Consulta',
  calLink = 'fascinante-digital/30min',
  onBookingSuccess,
}: BotonCalMobileProps) {
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

        Cal.ns["30min"]("ui", {"hideEventTypeDetails":true,"layout":"month_view"});
      `;

      document.head.appendChild(script);
    };

    // Función para configurar eventos de reserva exitosa
    const setupBookingEvents = () => {
      // Esperar a que Cal esté disponible
      const checkCal = () => {
        if (window.Cal && window.Cal.ns && window.Cal.ns['30min']) {
          try {
            // Escuchar evento de reserva exitosa
            window.Cal.ns['30min']('on', {
              action: 'bookingSuccessful',
              callback: (e: { detail: unknown }) => {
                console.log('Reserva exitosa:', e.detail);

                // Ejecutar callback si existe
                if (onBookingSuccess) {
                  onBookingSuccess();
                } else {
                  // Redirigir a página de agradecimiento
                  window.location.href = '/gracias';
                }
              },
            });
          } catch (error) {
            console.warn('Error configurando eventos de Cal.com:', error);
          }
        } else {
          // Reintentar en 100ms si Cal no está disponible
          setTimeout(checkCal, 100);
        }
      };

      checkCal();
    };

    // Cargar script y configurar eventos
    loadCalScript();
    setupBookingEvents();
  }, [onBookingSuccess]);

  return (
    <button
      data-cal-namespace="30min"
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={cn(
        'btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md transition-all duration-200',
        className,
      )}>
      {children}
    </button>
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
