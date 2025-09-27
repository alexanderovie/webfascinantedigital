#!/usr/bin/env node

/**
 * 🚀 Performance Analyzer con Chrome DevTools MCP
 * Analiza métricas reales de performance de Lighthouse
 */

const fs = require('fs');
const path = require('path');

console.log('📊 Analizando métricas de performance reales...\n');

// Función para extraer métricas clave del reporte de Lighthouse
function extractKeyMetrics(performanceData) {
  const audits = performanceData.audits;
  
  const keyMetrics = {
    // Core Web Vitals
    lcp: {
      value: audits['largest-contentful-paint']?.numericValue || 0,
      score: audits['largest-contentful-paint']?.score || 0,
      displayValue: audits['largest-contentful-paint']?.displayValue || 'N/A',
      status: getPerformanceStatus(audits['largest-contentful-paint']?.numericValue, 'lcp')
    },
    fcp: {
      value: audits['first-contentful-paint']?.numericValue || 0,
      score: audits['first-contentful-paint']?.score || 0,
      displayValue: audits['first-contentful-paint']?.displayValue || 'N/A',
      status: getPerformanceStatus(audits['first-contentful-paint']?.numericValue, 'fcp')
    },
    cls: {
      value: audits['cumulative-layout-shift']?.numericValue || 0,
      score: audits['cumulative-layout-shift']?.score || 0,
      displayValue: audits['cumulative-layout-shift']?.displayValue || 'N/A',
      status: getPerformanceStatus(audits['cumulative-layout-shift']?.numericValue, 'cls')
    },
    tbt: {
      value: audits['total-blocking-time']?.numericValue || 0,
      score: audits['total-blocking-time']?.score || 0,
      displayValue: audits['total-blocking-time']?.displayValue || 'N/A',
      status: getPerformanceStatus(audits['total-blocking-time']?.numericValue, 'tbt')
    },
    si: {
      value: audits['speed-index']?.numericValue || 0,
      score: audits['speed-index']?.score || 0,
      displayValue: audits['speed-index']?.displayValue || 'N/A',
      status: getPerformanceStatus(audits['speed-index']?.numericValue, 'si')
    }
  };

  return keyMetrics;
}

// Función para determinar el estado de performance
function getPerformanceStatus(value, metric) {
  const thresholds = {
    lcp: { good: 2500, poor: 4000 },
    fcp: { good: 1800, poor: 3000 },
    cls: { good: 0.1, poor: 0.25 },
    tbt: { good: 200, poor: 600 },
    si: { good: 3400, poor: 5800 }
  };

  const threshold = thresholds[metric];
  if (!threshold) return 'unknown';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// Función para analizar oportunidades de mejora
function analyzeOpportunities(performanceData) {
  const audits = performanceData.audits;
  const opportunities = [];

  // Análisis de imágenes
  if (audits['serve-images-in-next-gen-formats']?.score < 1) {
    opportunities.push({
      category: 'Imágenes',
      issue: 'Formato de imágenes no optimizado',
      impact: 'Alto',
      description: 'Usar WebP/AVIF para reducir el tamaño de las imágenes',
      savings: audits['serve-images-in-next-gen-formats']?.details?.overallSavingsMs || 0
    });
  }

  // Análisis de CSS
  if (audits['unused-css-rules']?.score < 1) {
    opportunities.push({
      category: 'CSS',
      issue: 'CSS no utilizado',
      impact: 'Medio',
      description: 'Eliminar CSS no utilizado para reducir el tamaño del bundle',
      savings: audits['unused-css-rules']?.details?.overallSavingsMs || 0
    });
  }

  // Análisis de JavaScript
  if (audits['unused-javascript']?.score < 1) {
    opportunities.push({
      category: 'JavaScript',
      issue: 'JavaScript no utilizado',
      impact: 'Alto',
      description: 'Eliminar JavaScript no utilizado para mejorar el tiempo de carga',
      savings: audits['unused-javascript']?.details?.overallSavingsMs || 0
    });
  }

  // Análisis de render-blocking
  if (audits['render-blocking-resources']?.score < 1) {
    opportunities.push({
      category: 'Render',
      issue: 'Recursos que bloquean el renderizado',
      impact: 'Alto',
      description: 'Optimizar recursos críticos para mejorar FCP',
      savings: audits['render-blocking-resources']?.details?.overallSavingsMs || 0
    });
  }

  return opportunities;
}

// Función para generar reporte de performance
function generatePerformanceReport(performanceData) {
  const keyMetrics = extractKeyMetrics(performanceData);
  const opportunities = analyzeOpportunities(performanceData);
  
  console.log('🎯 MÉTRICAS DE PERFORMANCE REALES\n');
  console.log('=' .repeat(60));
  
  // Core Web Vitals
  console.log('\n📈 CORE WEB VITALS:');
  console.log(`LCP (Largest Contentful Paint): ${keyMetrics.lcp.displayValue} - ${keyMetrics.lcp.status.toUpperCase()}`);
  console.log(`FCP (First Contentful Paint): ${keyMetrics.fcp.displayValue} - ${keyMetrics.fcp.status.toUpperCase()}`);
  console.log(`CLS (Cumulative Layout Shift): ${keyMetrics.cls.displayValue} - ${keyMetrics.cls.status.toUpperCase()}`);
  console.log(`TBT (Total Blocking Time): ${keyMetrics.tbt.displayValue} - ${keyMetrics.tbt.status.toUpperCase()}`);
  console.log(`SI (Speed Index): ${keyMetrics.si.displayValue} - ${keyMetrics.si.status.toUpperCase()}`);
  
  // Score general
  const overallScore = performanceData.categories?.performance?.score || 0;
  const scorePercentage = Math.round(overallScore * 100);
  console.log(`\n🏆 SCORE GENERAL: ${scorePercentage}/100`);
  
  // Análisis de score
  if (scorePercentage >= 90) {
    console.log('✅ EXCELENTE: Performance óptima');
  } else if (scorePercentage >= 70) {
    console.log('⚠️  BUENO: Hay margen de mejora');
  } else if (scorePercentage >= 50) {
    console.log('🔴 REGULAR: Necesita optimización urgente');
  } else {
    console.log('🚨 CRÍTICO: Performance muy pobre');
  }
  
  // Oportunidades de mejora
  if (opportunities.length > 0) {
    console.log('\n🚀 OPORTUNIDADES DE MEJORA:');
    console.log('=' .repeat(60));
    
    opportunities.forEach((opp, index) => {
      console.log(`\n${index + 1}. ${opp.category}: ${opp.issue}`);
      console.log(`   Impacto: ${opp.impact}`);
      console.log(`   Descripción: ${opp.description}`);
      if (opp.savings > 0) {
        console.log(`   Ahorro potencial: ${opp.savings}ms`);
      }
    });
  }
  
  return {
    keyMetrics,
    opportunities,
    overallScore: scorePercentage
  };
}

// Función para generar recomendaciones específicas
function generateRecommendations(analysis) {
  console.log('\n💡 RECOMENDACIONES ESPECÍFICAS:\n');
  console.log('=' .repeat(60));
  
  const recommendations = [];
  
  // Recomendaciones basadas en métricas
  if (analysis.keyMetrics.lcp.status === 'poor') {
    recommendations.push({
      priority: 'ALTA',
      action: 'Optimizar LCP',
      steps: [
        'Preload de imágenes críticas',
        'Optimizar servidor y CDN',
        'Reducir JavaScript bloqueante',
        'Implementar lazy loading para imágenes no críticas'
      ]
    });
  }
  
  if (analysis.keyMetrics.fcp.status === 'poor') {
    recommendations.push({
      priority: 'ALTA',
      action: 'Mejorar FCP',
      steps: [
        'Minificar y comprimir CSS',
        'Eliminar recursos render-blocking',
        'Optimizar fuentes web',
        'Implementar critical CSS inline'
      ]
    });
  }
  
  if (analysis.keyMetrics.cls.status === 'poor') {
    recommendations.push({
      priority: 'MEDIA',
      action: 'Reducir CLS',
      steps: [
        'Agregar dimensiones explícitas a imágenes',
        'Reservar espacio para anuncios',
        'Evitar inserción dinámica de contenido',
        'Usar font-display: swap'
      ]
    });
  }
  
  // Mostrar recomendaciones
  recommendations.forEach((rec, index) => {
    console.log(`\n${index + 1}. [${rec.priority}] ${rec.action}:`);
    rec.steps.forEach(step => {
      console.log(`   • ${step}`);
    });
  });
  
  return recommendations;
}

// Función para calcular ROI del MCP
function calculateMCProi(analysis) {
  console.log('\n💰 ROI DEL CHROME DEVTOOLS MCP:\n');
  console.log('=' .repeat(60));
  
  const benefits = [
    {
      benefit: 'Detección automática de problemas',
      value: 'Alto',
      description: 'Identifica issues antes que afecten a usuarios'
    },
    {
      benefit: 'Monitoreo continuo',
      value: 'Alto',
      description: 'Tracking de métricas en tiempo real'
    },
    {
      benefit: 'Reportes estructurados',
      value: 'Medio',
      description: 'Documentación automática de performance'
    },
    {
      benefit: 'Integración CI/CD',
      value: 'Alto',
      description: 'Prevención de regresiones en producción'
    }
  ];
  
  benefits.forEach((benefit, index) => {
    console.log(`${index + 1}. ${benefit.benefit} [${benefit.value}]`);
    console.log(`   ${benefit.description}`);
  });
  
  console.log('\n🎯 CONCLUSIÓN:');
  if (analysis.overallScore < 70) {
    console.log('✅ MCP ES CRÍTICO: Performance actual requiere monitoreo constante');
  } else if (analysis.overallScore < 90) {
    console.log('✅ MCP ES RECOMENDADO: Ayuda a mantener y mejorar performance');
  } else {
    console.log('✅ MCP ES PREVENTIVO: Mantiene la excelencia de performance');
  }
  
  return benefits;
}

// Función principal
function main() {
  try {
    const reportPath = path.join(process.cwd(), 'reports', 'performance.json');
    
    if (!fs.existsSync(reportPath)) {
      console.error('❌ No se encontró el reporte de performance');
      console.log('Ejecuta: npm run audit:perf');
      process.exit(1);
    }
    
    const performanceData = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    
    // Generar análisis
    const analysis = generatePerformanceReport(performanceData);
    const recommendations = generateRecommendations(analysis);
    const mcpROI = calculateMCProi(analysis);
    
    // Guardar reporte completo
    const fullReport = {
      timestamp: new Date().toISOString(),
      url: performanceData.requestedUrl,
      analysis,
      recommendations,
      mcpROI,
      rawData: performanceData
    };
    
    const reportsDir = path.join(process.cwd(), 'reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(reportsDir, 'performance-analysis.json'),
      JSON.stringify(fullReport, null, 2)
    );
    
    console.log('\n📁 Reporte completo guardado en: reports/performance-analysis.json');
    console.log('\n🎉 Análisis de performance completado exitosamente!');
    
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
  extractKeyMetrics,
  analyzeOpportunities,
  generatePerformanceReport,
  generateRecommendations,
  calculateMCProi
};
