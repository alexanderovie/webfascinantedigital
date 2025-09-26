#!/usr/bin/env node

/**
 * 🎯 Performance Monitor para Fascinante Digital
 * Monitorea métricas de performance en tiempo real
 */

const fs = require('fs');
const path = require('path');

class PerformanceMonitor {
  constructor() {
    this.reportsDir = path.join(process.cwd(), 'reports');
    this.metricsFile = path.join(this.reportsDir, 'performance-metrics.json');
    this.ensureReportsDir();
  }

  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  /**
   * Analiza métricas de Lighthouse
   */
  analyzeLighthouseMetrics(reportPath) {
    if (!fs.existsSync(reportPath)) {
      throw new Error(`Reporte no encontrado: ${reportPath}`);
    }

    const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    const metrics = report.lhr.audits;

    return {
      lcp: {
        value: metrics['largest-contentful-paint']?.numericValue || 0,
        score: metrics['largest-contentful-paint']?.score || 0,
        displayValue: metrics['largest-contentful-paint']?.displayValue || 'N/A'
      },
      fcp: {
        value: metrics['first-contentful-paint']?.numericValue || 0,
        score: metrics['first-contentful-paint']?.score || 0,
        displayValue: metrics['first-contentful-paint']?.displayValue || 'N/A'
      },
      tbt: {
        value: metrics['total-blocking-time']?.numericValue || 0,
        score: metrics['total-blocking-time']?.score || 0,
        displayValue: metrics['total-blocking-time']?.displayValue || 'N/A'
      },
      cls: {
        value: metrics['cumulative-layout-shift']?.numericValue || 0,
        score: metrics['cumulative-layout-shift']?.score || 0,
        displayValue: metrics['cumulative-layout-shift']?.displayValue || 'N/A'
      },
      si: {
        value: metrics['speed-index']?.numericValue || 0,
        score: metrics['speed-index']?.score || 0,
        displayValue: metrics['speed-index']?.displayValue || 'N/A'
      },
      performanceScore: report.lhr.categories.performance.score * 100
    };
  }

  /**
   * Genera recomendaciones de optimización
   */
  generateRecommendations(metrics) {
    const recommendations = [];

    // LCP optimizations
    if (metrics.lcp.value > 2500) {
      recommendations.push({
        metric: 'LCP',
        issue: 'Largest Contentful Paint es lento',
        recommendation: 'Optimizar imágenes, usar next/image, implementar lazy loading',
        priority: 'high'
      });
    }

    // FCP optimizations
    if (metrics.fcp.value > 1800) {
      recommendations.push({
        metric: 'FCP',
        issue: 'First Contentful Paint es lento',
        recommendation: 'Minificar CSS, optimizar fuentes, usar critical CSS',
        priority: 'high'
      });
    }

    // TBT optimizations
    if (metrics.tbt.value > 200) {
      recommendations.push({
        metric: 'TBT',
        issue: 'Total Blocking Time es alto',
        recommendation: 'Code splitting, lazy loading de componentes, optimizar JavaScript',
        priority: 'medium'
      });
    }

    // CLS optimizations
    if (metrics.cls.value > 0.1) {
      recommendations.push({
        metric: 'CLS',
        issue: 'Cumulative Layout Shift detectado',
        recommendation: 'Definir dimensiones de imágenes, reservar espacio para elementos dinámicos',
        priority: 'medium'
      });
    }

    // Performance Score
    if (metrics.performanceScore < 90) {
      recommendations.push({
        metric: 'Performance Score',
        issue: 'Score de performance bajo',
        recommendation: 'Implementar optimizaciones agresivas, revisar Core Web Vitals',
        priority: 'high'
      });
    }

    return recommendations;
  }

  /**
   * Guarda métricas históricas
   */
  saveMetrics(metrics, recommendations) {
    const timestamp = new Date().toISOString();
    const data = {
      timestamp,
      metrics,
      recommendations,
      summary: {
        performanceScore: metrics.performanceScore,
        totalRecommendations: recommendations.length,
        highPriorityIssues: recommendations.filter(r => r.priority === 'high').length
      }
    };

    // Leer métricas existentes
    let historicalData = [];
    if (fs.existsSync(this.metricsFile)) {
      historicalData = JSON.parse(fs.readFileSync(this.metricsFile, 'utf8'));
    }

    // Agregar nueva entrada
    historicalData.push(data);

    // Mantener solo las últimas 50 entradas
    if (historicalData.length > 50) {
      historicalData = historicalData.slice(-50);
    }

    // Guardar
    fs.writeFileSync(this.metricsFile, JSON.stringify(historicalData, null, 2));
    
    return data;
  }

  /**
   * Genera reporte de performance
   */
  generateReport(reportPath) {
    console.log('📊 Analizando métricas de performance...');
    
    const metrics = this.analyzeLighthouseMetrics(reportPath);
    const recommendations = this.generateRecommendations(metrics);
    const data = this.saveMetrics(metrics, recommendations);

    console.log('\n🎯 Métricas de Performance:');
    console.log(`  LCP: ${metrics.lcp.displayValue} (Score: ${(metrics.lcp.score * 100).toFixed(0)})`);
    console.log(`  FCP: ${metrics.fcp.displayValue} (Score: ${(metrics.fcp.score * 100).toFixed(0)})`);
    console.log(`  TBT: ${metrics.tbt.displayValue} (Score: ${(metrics.tbt.score * 100).toFixed(0)})`);
    console.log(`  CLS: ${metrics.cls.displayValue} (Score: ${(metrics.cls.score * 100).toFixed(0)})`);
    console.log(`  SI: ${metrics.si.displayValue} (Score: ${(metrics.si.score * 100).toFixed(0)})`);
    console.log(`  Performance Score: ${metrics.performanceScore.toFixed(0)}/100`);

    if (recommendations.length > 0) {
      console.log('\n🔧 Recomendaciones de Optimización:');
      recommendations.forEach((rec, index) => {
        const priority = rec.priority === 'high' ? '🔴' : '🟡';
        console.log(`  ${index + 1}. ${priority} ${rec.metric}: ${rec.issue}`);
        console.log(`     → ${rec.recommendation}`);
      });
    } else {
      console.log('\n✅ ¡Excelente! No se detectaron problemas de performance.');
    }

    return data;
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  const monitor = new PerformanceMonitor();
  const reportPath = process.argv[2];
  
  if (!reportPath) {
    console.error('❌ Uso: node performance-monitor.js <ruta-del-reporte-lighthouse>');
    process.exit(1);
  }

  try {
    monitor.generateReport(reportPath);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

module.exports = PerformanceMonitor;
