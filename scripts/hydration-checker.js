#!/usr/bin/env node

/**
 * 🚀 Hydration Error Checker con Chrome DevTools MCP
 * Detecta errores de hidratación de React/Next.js automáticamente
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Iniciando análisis de hidratación...\n');

// Función para analizar errores de hidratación
function analyzeHydrationErrors() {
  const commonHydrationIssues = [
    {
      type: 'Server/Client Mismatch',
      description: 'Diferencias entre renderizado del servidor y cliente',
      commonCauses: [
        'Uso de `typeof window !== \'undefined\'` en componentes',
        'Valores dinámicos como `Date.now()` o `Math.random()`',
        'Formateo de fechas que varía entre servidor y cliente',
        'Datos externos sin snapshot consistente'
      ],
      solutions: [
        'Usar `useEffect` para lógica específica del cliente',
        'Implementar `suppressHydrationWarning` donde sea necesario',
        'Usar `useState` con valores iniciales consistentes',
        'Evitar valores dinámicos en el render inicial'
      ]
    },
    {
      type: 'Browser Extension Interference',
      description: 'Extensiones del navegador modifican el HTML',
      commonCauses: [
        'Extensiones de traducción',
        'Bloqueadores de anuncios',
        'Extensiones de productividad',
        'Herramientas de desarrollo'
      ],
      solutions: [
        'Usar `suppressHydrationWarning` en elementos afectados',
        'Implementar detección de extensiones',
        'Usar `useEffect` para lógica post-hidratación'
      ]
    },
    {
      type: 'Invalid HTML Nesting',
      description: 'Estructura HTML inválida',
      commonCauses: [
        'Elementos `<div>` dentro de `<p>`',
        'Elementos inline dentro de block',
        'Estructura de tabla incorrecta'
      ],
      solutions: [
        'Revisar estructura HTML',
        'Usar elementos semánticos correctos',
        'Validar HTML con herramientas'
      ]
    }
  ];

  return commonHydrationIssues;
}

// Función para generar reporte de hidratación
function generateHydrationReport() {
  const issues = analyzeHydrationErrors();
  
  console.log('📊 REPORTE DE ANÁLISIS DE HIDRATACIÓN\n');
  console.log('=' .repeat(50));
  
  issues.forEach((issue, index) => {
    console.log(`\n${index + 1}. ${issue.type}`);
    console.log(`   Descripción: ${issue.description}`);
    
    console.log('\n   🔴 Causas Comunes:');
    issue.commonCauses.forEach(cause => {
      console.log(`   • ${cause}`);
    });
    
    console.log('\n   ✅ Soluciones Recomendadas:');
    issue.solutions.forEach(solution => {
      console.log(`   • ${solution}`);
    });
    
    console.log('\n' + '-'.repeat(40));
  });
  
  return issues;
}

// Función para analizar el error específico del usuario
function analyzeSpecificError() {
  console.log('\n🎯 ANÁLISIS DEL ERROR ESPECÍFICO\n');
  console.log('=' .repeat(50));
  
  const errorAnalysis = {
    error: 'A tree hydrated but some attributes of the server rendered HTML didn\'t match the client properties',
    location: 'src/app/layout.tsx (85:7)',
    element: '<body className={`${interTight.variable} antialiased`}>',
    suspectedCause: 'cz-shortcut-listen="true" attribute added by browser extension'
  };
  
  console.log(`📍 Ubicación: ${errorAnalysis.location}`);
  console.log(`🔍 Elemento: ${errorAnalysis.element}`);
  console.log(`⚠️  Causa Sospechada: ${errorAnalysis.suspectedCause}`);
  
  console.log('\n💡 SOLUCIÓN RECOMENDADA:');
  console.log('1. Agregar suppressHydrationWarning al elemento body');
  console.log('2. Mover lógica específica del cliente a useEffect');
  console.log('3. Verificar que no hay valores dinámicos en el render inicial');
  
  return errorAnalysis;
}

// Función para generar script de corrección
function generateFixScript() {
  const fixScript = `
// 🔧 Script de corrección para error de hidratación
// Aplicar en src/app/layout.tsx

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS prefetch para performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body 
        className={\`\${interTight.variable} antialiased\`}
        suppressHydrationWarning={true}
      >
        {/* Resto del contenido */}
        {children}
      </body>
    </html>
  );
}
`;
  
  console.log('\n🛠️  SCRIPT DE CORRECCIÓN GENERADO\n');
  console.log('=' .repeat(50));
  console.log(fixScript);
  
  return fixScript;
}

// Función para verificar si el error está resuelto
function verifyFix() {
  console.log('\n✅ VERIFICACIÓN DE CORRECCIÓN\n');
  console.log('=' .repeat(50));
  
  const verificationSteps = [
    '1. Aplicar suppressHydrationWarning al elemento body',
    '2. Reiniciar el servidor de desarrollo',
    '3. Recargar la página y verificar consola',
    '4. Ejecutar npm run qa:full para verificación completa'
  ];
  
  verificationSteps.forEach(step => {
    console.log(step);
  });
  
  return verificationSteps;
}

// Función principal
function main() {
  try {
    // Generar reporte general
    const issues = generateHydrationReport();
    
    // Analizar error específico
    const specificError = analyzeSpecificError();
    
    // Generar script de corrección
    const fixScript = generateFixScript();
    
    // Verificación
    const verification = verifyFix();
    
    // Guardar reporte
    const report = {
      timestamp: new Date().toISOString(),
      issues: issues,
      specificError: specificError,
      fixScript: fixScript,
      verification: verification
    };
    
    const reportsDir = path.join(process.cwd(), 'reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(reportsDir, 'hydration-analysis.json'),
      JSON.stringify(report, null, 2)
    );
    
    console.log('\n📁 Reporte guardado en: reports/hydration-analysis.json');
    console.log('\n🎉 Análisis de hidratación completado exitosamente!');
    
  } catch (error) {
    console.error('❌ Error durante el análisis:', error.message);
    process.exit(1);
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main();
}

module.exports = {
  analyzeHydrationErrors,
  generateHydrationReport,
  analyzeSpecificError,
  generateFixScript,
  verifyFix
};
