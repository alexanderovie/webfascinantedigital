@echo off
echo 🚀 Iniciando Fascinante Digital Web...

REM Iniciar servicios compartidos si no están corriendo
docker-compose -f C:\Users\alexa\docker-templates\docker-compose.shared.yml up -d

REM Iniciar proyecto Fascinante Digital
docker-compose -f docker-compose.fascinante.yml up -d

echo ✅ Fascinante Digital Web iniciado en http://localhost:3000
echo 📧 Mailhog: http://localhost:8025
echo 🔴 Redis: localhost:6379
echo 🌐 Web: http://localhost:3000
