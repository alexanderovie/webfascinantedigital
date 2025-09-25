# Scripts de Docker para Fascinante Digital
# Comandos simplificados para desarrollo

# ===========================================
# Colores para output
# ===========================================
$Red = "`e[31m"
$Green = "`e[32m"
$Yellow = "`e[33m"
$Blue = "`e[34m"
$Magenta = "`e[35m"
$Cyan = "`e[36m"
$White = "`e[37m"
$Reset = "`e[0m"

# ===========================================
# Funciones de utilidad
# ===========================================
function Write-ColorOutput {
    param(
        [string]$Message,
        [string]$Color = $White
    )
    Write-Host "$Color$Message$Reset"
}

function Show-Header {
    Write-ColorOutput "🐳 Fascinante Digital - Docker Scripts" $Cyan
    Write-ColorOutput "=====================================" $Cyan
}

# ===========================================
# Comandos de Desarrollo
# ===========================================
function Start-Development {
    Show-Header
    Write-ColorOutput "🚀 Iniciando entorno de desarrollo..." $Green
    docker-compose up -d
    Write-ColorOutput "✅ Servicios iniciados:" $Green
    Write-ColorOutput "   🌐 Web: http://localhost:3000" $Blue
    Write-ColorOutput "   🔴 Redis: localhost:6379" $Blue
}

function Stop-Development {
    Show-Header
    Write-ColorOutput "🛑 Deteniendo entorno de desarrollo..." $Yellow
    docker-compose down
    Write-ColorOutput "✅ Servicios detenidos" $Green
}

function Restart-Development {
    Show-Header
    Write-ColorOutput "🔄 Reiniciando entorno de desarrollo..." $Yellow
    docker-compose restart
    Write-ColorOutput "✅ Servicios reiniciados" $Green
}

function Show-Logs {
    param([string]$Service = "")
    Show-Header
    if ($Service) {
        Write-ColorOutput "📋 Mostrando logs de $Service..." $Blue
        docker-compose logs -f $Service
    } else {
        Write-ColorOutput "📋 Mostrando logs de todos los servicios..." $Blue
        docker-compose logs -f
    }
}

function Show-Status {
    Show-Header
    Write-ColorOutput "📊 Estado de los servicios:" $Blue
    docker-compose ps
}

# ===========================================
# Comandos de Build
# ===========================================
function Build-Image {
    param([string]$Target = "development")
    Show-Header
    Write-ColorOutput "🔨 Construyendo imagen Docker..." $Yellow
    docker-compose build --target $Target
    Write-ColorOutput "✅ Imagen construida exitosamente" $Green
}

function Build-Production {
    Show-Header
    Write-ColorOutput "🏭 Construyendo para producción..." $Yellow
    docker-compose build --target runner
    Write-ColorOutput "✅ Imagen de producción construida" $Green
}

# ===========================================
# Comandos de Base de Datos
# ===========================================
function Start-Database {
    Show-Header
    Write-ColorOutput "🗄️ Iniciando base de datos..." $Green
    docker-compose --profile database up -d postgres
    Write-ColorOutput "✅ PostgreSQL iniciado en localhost:5432" $Green
}

function Stop-Database {
    Show-Header
    Write-ColorOutput "🛑 Deteniendo base de datos..." $Yellow
    docker-compose stop postgres
    Write-ColorOutput "✅ PostgreSQL detenido" $Green
}

# ===========================================
# Comandos de Limpieza
# ===========================================
function Clean-All {
    Show-Header
    Write-ColorOutput "🧹 Limpiando contenedores, imágenes y volúmenes..." $Yellow
    docker-compose down -v --remove-orphans
    docker system prune -f
    Write-ColorOutput "✅ Limpieza completada" $Green
}

function Clean-Volumes {
    Show-Header
    Write-ColorOutput "🗑️ Eliminando volúmenes..." $Yellow
    docker-compose down -v
    Write-ColorOutput "✅ Volúmenes eliminados" $Green
}

# ===========================================
# Comandos de Producción
# ===========================================
function Start-Production {
    Show-Header
    Write-ColorOutput "🏭 Iniciando entorno de producción..." $Green
    docker-compose --profile production up -d
    Write-ColorOutput "✅ Producción iniciada:" $Green
    Write-ColorOutput "   🌐 Web: http://localhost" $Blue
    Write-ColorOutput "   🔒 HTTPS: https://localhost" $Blue
}

# ===========================================
# Comandos de Shell
# ===========================================
function Enter-Container {
    param([string]$Service = "web")
    Show-Header
    Write-ColorOutput "🐚 Entrando al contenedor $Service..." $Blue
    docker-compose exec $Service sh
}

# ===========================================
# Menú Principal
# ===========================================
function Show-Menu {
    Show-Header
    Write-ColorOutput "Comandos disponibles:" $White
    Write-ColorOutput "  dev          - Iniciar desarrollo" $Green
    Write-ColorOutput "  stop         - Detener desarrollo" $Red
    Write-ColorOutput "  restart      - Reiniciar servicios" $Yellow
    Write-ColorOutput "  logs         - Ver logs" $Blue
    Write-ColorOutput "  status       - Ver estado" $Cyan
    Write-ColorOutput "  build        - Construir imagen" $Magenta
    Write-ColorOutput "  prod         - Construir producción" $Magenta
    Write-ColorOutput "  db:start     - Iniciar base de datos" $Green
    Write-ColorOutput "  db:stop      - Detener base de datos" $Red
    Write-ColorOutput "  clean        - Limpiar todo" $Yellow
    Write-ColorOutput "  shell        - Entrar al contenedor" $Blue
    Write-ColorOutput "  menu         - Mostrar este menú" $Cyan
}

# ===========================================
# Manejo de argumentos
# ===========================================
param(
    [string]$Command = "menu"
)

switch ($Command.ToLower()) {
    "dev" { Start-Development }
    "stop" { Stop-Development }
    "restart" { Restart-Development }
    "logs" { Show-Logs }
    "status" { Show-Status }
    "build" { Build-Image }
    "prod" { Build-Production }
    "db:start" { Start-Database }
    "db:stop" { Stop-Database }
    "clean" { Clean-All }
    "shell" { Enter-Container }
    "menu" { Show-Menu }
    default { 
        Write-ColorOutput "Comando no reconocido: $Command" $Red
        Show-Menu 
    }
}
