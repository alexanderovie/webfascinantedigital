# 🐳 Docker Setup - Fascinante Digital

Configuración Docker completa para el proyecto Fascinante Digital con Next.js 15, TypeScript y Tailwind CSS.

## 📋 Requisitos

- ✅ Docker Desktop v28.4.0+
- ✅ Docker Compose v2.39.2+
- ✅ Windows 10/11 con WSL2
- ✅ Arquitectura AMD64

## 🚀 Inicio Rápido

### 1. Desarrollo
```bash
# Iniciar entorno de desarrollo
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

### 2. Usando Scripts PowerShell
```powershell
# Iniciar desarrollo
.\docker-scripts.ps1 dev

# Ver estado
.\docker-scripts.ps1 status

# Ver logs
.\docker-scripts.ps1 logs

# Detener servicios
.\docker-scripts.ps1 stop
```

## 🏗️ Arquitectura

### Servicios Incluidos

| Servicio | Puerto | Descripción |
|----------|--------|-------------|
| **web** | 3000 | Next.js App (desarrollo) |
| **redis** | 6379 | Cache y Session Store |
| **postgres** | 5432 | Base de datos (opcional) |
| **nginx** | 80/443 | Reverse proxy (producción) |

### Volúmenes

- `redis_data`: Datos persistentes de Redis
- `postgres_data`: Datos persistentes de PostgreSQL

## 🔧 Comandos Disponibles

### Desarrollo
```bash
# Iniciar desarrollo
docker-compose up -d

# Con hot reload
docker-compose up

# Reiniciar servicios
docker-compose restart

# Ver logs específicos
docker-compose logs -f web
```

### Base de Datos
```bash
# Iniciar PostgreSQL
docker-compose --profile database up -d postgres

# Conectar a PostgreSQL
docker-compose exec postgres psql -U fascinante -d fascinante_digital
```

### Producción
```bash
# Build para producción
docker-compose build --target runner

# Iniciar producción
docker-compose --profile production up -d
```

### Limpieza
```bash
# Detener y eliminar contenedores
docker-compose down

# Eliminar volúmenes
docker-compose down -v

# Limpieza completa
docker system prune -f
```

## 📁 Estructura de Archivos

```
webfascinantedigital/
├── Dockerfile              # Multi-stage build
├── docker-compose.yml      # Orquestación de servicios
├── .dockerignore           # Archivos a excluir
├── docker-scripts.ps1      # Scripts PowerShell
├── nginx.conf              # Configuración Nginx
└── README-Docker.md        # Esta documentación
```

## 🎯 Perfiles de Ejecución

### Desarrollo (por defecto)
```bash
docker-compose up -d
```
- Next.js con hot reload
- Redis para cache
- Volúmenes para desarrollo

### Base de Datos
```bash
docker-compose --profile database up -d
```
- Incluye PostgreSQL
- Datos persistentes

### Producción
```bash
docker-compose --profile production up -d
```
- Nginx como reverse proxy
- SSL/TLS habilitado
- Optimizaciones de performance

## 🔒 Seguridad

### Headers de Seguridad
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Content-Security-Policy
- Strict-Transport-Security

### Rate Limiting
- API: 10 requests/segundo
- Login: 1 request/segundo

## 📊 Monitoreo

### Health Checks
```bash
# Verificar estado de servicios
docker-compose ps

# Health check de la aplicación
curl http://localhost/health
```

### Logs
```bash
# Todos los servicios
docker-compose logs -f

# Servicio específico
docker-compose logs -f web
```

## 🛠️ Troubleshooting

### Problemas Comunes

1. **Puerto 3000 ocupado**
   ```bash
   # Cambiar puerto en docker-compose.yml
   ports:
     - "3001:3000"
   ```

2. **Hot reload no funciona**
   ```bash
   # Verificar WATCHPACK_POLLING
   environment:
     - WATCHPACK_POLLING=true
   ```

3. **Permisos de archivos**
   ```bash
   # En Windows, ejecutar como administrador
   ```

### Comandos de Diagnóstico
```bash
# Ver recursos utilizados
docker stats

# Inspeccionar contenedor
docker-compose exec web sh

# Verificar red
docker network ls
```

## 🚀 Despliegue

### Variables de Entorno
Crear archivo `.env`:
```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
DATABASE_URL=postgresql://fascinante:fascinante123@postgres:5432/fascinante_digital
REDIS_URL=redis://redis:6379
```

### Build de Producción
```bash
# Construir imagen optimizada
docker-compose build --target runner

# Iniciar en producción
docker-compose --profile production up -d
```

## 📚 Recursos Adicionales

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Reference](https://docs.docker.com/compose/)
- [Next.js Docker Guide](https://nextjs.org/docs/deployment#docker-image)
- [Nginx Configuration](https://nginx.org/en/docs/)

## 🤝 Contribución

Para contribuir al setup de Docker:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Desarrollado con ❤️ para Fascinante Digital**
