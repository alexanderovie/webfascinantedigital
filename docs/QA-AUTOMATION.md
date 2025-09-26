# 🎯 QA Automation - Fascinante Digital

## Descripción

Sistema de automatización de QA integrado con Chrome DevTools MCP para garantizar la calidad y performance del sitio web de Fascinante Digital.

## 🚀 Características

### ✅ Automatización de QA
- **Verificación de formularios**: Contact, Signup, Login
- **Navegación**: Todas las rutas principales
- **Responsive design**: Mobile, Tablet, Desktop
- **Performance monitoring**: Core Web Vitals

### 📊 Métricas de Performance
- **LCP** (Largest Contentful Paint)
- **FCP** (First Contentful Paint)
- **TBT** (Total Blocking Time)
- **CLS** (Cumulative Layout Shift)
- **SI** (Speed Index)

### 🔧 Recomendaciones Automáticas
- Optimización de imágenes
- Code splitting
- Lazy loading
- Critical CSS
- JavaScript optimization

## 📋 Comandos Disponibles

### QA Automation
```bash
# Ejecutar QA completo
npm run qa:full

# Solo automatización de QA
npm run qa:automation

# Solo monitoreo de performance
npm run qa:performance ./reports/local-audit.json

# Configurar Chrome DevTools MCP
npm run mcp:setup
```

### Lighthouse Audits
```bash
# Auditoría completa
npm run audit:full

# Solo performance
npm run audit:perf

# Mobile audit
npm run audit:mobile

# Local development
npm run audit:local

# CI/CD
npm run audit:ci
```

## 🏗️ Estructura del Sistema

```
├── mcp-config.json              # Configuración Chrome DevTools MCP
├── scripts/
│   ├── qa-automation.js         # Automatización de QA
│   └── performance-monitor.js   # Monitoreo de performance
├── reports/                     # Reportes generados
│   ├── performance-metrics.json # Métricas históricas
│   └── *.html                   # Reportes Lighthouse
└── .github/workflows/
    └── qa-automation.yml        # CI/CD automation
```

## 🔧 Configuración

### 1. Chrome DevTools MCP
```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["chrome-devtools-mcp@latest"],
      "env": {
        "NODE_ENV": "development"
      }
    }
  }
}
```

### 2. Variables de Entorno
```bash
NODE_ENV=development
PORT=3000
```

## 📈 Métricas Objetivo

### Performance Score
- **Objetivo**: 90+ (Elite)
- **Actual**: 71+ (Mobile)
- **Meta**: 85+ (Mobile)

### Core Web Vitals
- **LCP**: < 2.5s
- **FCP**: < 1.8s
- **TBT**: < 200ms
- **CLS**: < 0.1

## 🚨 Alertas Automáticas

### High Priority Issues
- LCP > 2.5s
- FCP > 1.8s
- Performance Score < 90

### Medium Priority Issues
- TBT > 200ms
- CLS > 0.1
- SI > 3.4s

## 🔄 CI/CD Integration

### GitHub Actions
- **Trigger**: Push, PR, Schedule
- **Frequency**: Diario a las 6 AM UTC
- **Artifacts**: QA reports (30 días)
- **Failure**: High priority issues

### Workflow
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Build project
5. Start application
6. Run QA automation
7. Upload reports
8. Performance check
9. Fail on critical issues

## 📊 Reportes

### Generados Automáticamente
- `performance-metrics.json` - Métricas históricas
- `local-audit.html` - Reporte Lighthouse local
- `mobile-audit.html` - Reporte Lighthouse mobile
- `full-audit.html` - Reporte Lighthouse completo

### Análisis de Tendencias
- Performance score histórico
- Core Web Vitals trends
- Recomendaciones acumuladas
- Issues resueltos

## 🎯 Casos de Uso

### 1. Desarrollo Local
```bash
# Iniciar desarrollo
npm run dev

# En otra terminal, ejecutar QA
npm run qa:full
```

### 2. Pre-deployment
```bash
# Build y test
npm run build
npm run qa:full

# Verificar que no hay issues críticos
```

### 3. Monitoreo Continuo
```bash
# Ejecutar diariamente
npm run audit:perf
npm run qa:performance ./reports/performance.json
```

## 🔧 Troubleshooting

### Chrome DevTools MCP
```bash
# Verificar instalación
npm run mcp:setup

# Reinstalar si es necesario
npm uninstall chrome-devtools-mcp
npm install chrome-devtools-mcp@latest
```

### Performance Issues
```bash
# Analizar reporte específico
npm run qa:performance ./reports/performance.json

# Ver métricas históricas
cat reports/performance-metrics.json | jq '.[-1]'
```

## 📚 Recursos

- [Chrome DevTools MCP](https://developer.chrome.com/blog/chrome-devtools-mcp)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Core Web Vitals](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)

## 🤝 Contribución

1. Fork el proyecto
2. Crear feature branch
3. Implementar cambios
4. Ejecutar QA automation
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para Fascinante Digital**
