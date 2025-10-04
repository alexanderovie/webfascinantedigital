# 🔧 Guía de Actualización DNS - Cloudflare

## 📊 Estado Actual
- **DKIM:** ✅ Configurado
- **DMARC:** ✅ Configurado
- **SPF:** ⚠️ Necesita actualización
- **CNAME:** ❌ Necesita verificación

## 🎯 Acciones Requeridas

### **1. Actualizar SPF Record**

**En Cloudflare Dashboard:**
1. Ir a **DNS** > **Records**
2. Buscar record TXT con SPF
3. Editar contenido:

**Actual:**
```
v=spf1 include:_spf.google.com ~all
```

**Nuevo:**
```
v=spf1 include:_spf.google.com include:_spf.resend.com ~all
```

### **2. Verificar CNAME para Vercel**

**En Cloudflare Dashboard:**
1. Ir a **DNS** > **Records**
2. Buscar record CNAME para `www`
3. Verificar que apunte a `cname.vercel-dns.com`

**Si no existe, crear:**
```
Tipo: CNAME
Nombre: www
Contenido: cname.vercel-dns.com
TTL: Auto
```

## 🔍 Verificación Post-Actualización

### **Comando de Verificación:**
```bash
node scripts/verify-dns.js
```

### **Resultado Esperado:**
```
📊 Resumen:
1. SPF: ✅
2. DKIM: ✅
3. DMARC: ✅
4. CNAME: ✅
```

## ⏱️ Tiempo de Propagación
- **SPF:** 1-24 horas
- **CNAME:** 1-24 horas
- **Verificación:** Inmediata en Cloudflare

## 🚨 Troubleshooting

### **Si SPF no se actualiza:**
1. Verificar que no hay múltiples records SPF
2. Esperar 24 horas para propagación
3. Usar herramientas online para verificar

### **Si CNAME no funciona:**
1. Verificar que Vercel esté configurado
2. Verificar que el dominio esté en Vercel
3. Verificar que el DNS esté delegado a Cloudflare

## 📞 Soporte
- **Cloudflare:** Dashboard > Support
- **Vercel:** Dashboard > Support
- **Resend:** Dashboard > Support

## 🎯 Próximos Pasos
1. Actualizar SPF en Cloudflare
2. Verificar CNAME en Cloudflare
3. Ejecutar script de verificación
4. Test de envío de emails
5. Configurar rate limiting
