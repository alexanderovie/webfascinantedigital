# Dockerfile para Fascinante Digital - Next.js 15 con TypeScript
# Multi-stage build optimizado para desarrollo y producción

# ===========================================
# STAGE 1: Base - Node.js con pnpm
# ===========================================
FROM node:20-alpine AS base

# Instalar pnpm globalmente
RUN npm install -g pnpm@latest

# Configurar directorio de trabajo
WORKDIR /app

# ===========================================
# STAGE 2: Dependencies - Instalar dependencias
# ===========================================
FROM base AS deps

# Copiar archivos de dependencias
COPY package.json yarn.lock* pnpm-lock.yaml* ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# ===========================================
# STAGE 3: Builder - Construir la aplicación
# ===========================================
FROM base AS builder

# Copiar dependencias desde stage anterior
COPY --from=deps /app/node_modules ./node_modules

# Copiar código fuente
COPY . .

# Variables de entorno para build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Construir la aplicación
RUN pnpm build

# ===========================================
# STAGE 4: Runner - Imagen de producción
# ===========================================
FROM node:20-alpine AS runner

# Instalar pnpm
RUN npm install -g pnpm@latest

WORKDIR /app

# Crear usuario no-root para seguridad
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos necesarios para producción
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Cambiar ownership a usuario nextjs
RUN chown -R nextjs:nodejs /app
USER nextjs

# Exponer puerto
EXPOSE 3000

# Variables de entorno
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

# Comando de inicio
CMD ["node", "server.js"]

# ===========================================
# STAGE 5: Development - Para desarrollo
# ===========================================
FROM base AS development

# Copiar dependencias
COPY --from=deps /app/node_modules ./node_modules

# Copiar código fuente
COPY . .

# Variables de entorno para desarrollo
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Exponer puerto de desarrollo
EXPOSE 3000

# Comando de desarrollo con hot reload
CMD ["pnpm", "dev"]
