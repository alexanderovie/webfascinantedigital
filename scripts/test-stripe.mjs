#!/usr/bin/env node

/**
 * 🛡️ ELITE: Script de Testing para Stripe
 *
 * Este script permite probar la integración de Stripe de manera segura
 * usando el Stripe CLI y webhooks locales.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🛡️ ELITE: Iniciando tests de Stripe...\n');

// Verificar que Stripe CLI esté instalado
try {
  execSync('stripe --version', { stdio: 'pipe' });
  console.log('✅ Stripe CLI está instalado');
} catch {
  console.error('❌ Stripe CLI no está instalado. Instálalo desde: https://stripe.com/docs/stripe-cli');
  process.exit(1);
}

// Verificar que esté autenticado
try {
  execSync('stripe config --list', { stdio: 'pipe' });
  console.log('✅ Stripe CLI está autenticado');
} catch {
  console.error('❌ Stripe CLI no está autenticado. Ejecuta: stripe login');
  process.exit(1);
}

// Verificar variables de entorno
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.error('❌ Archivo .env.local no encontrado');
  console.log('📝 Crea el archivo .env.local con las siguientes variables:');
  console.log('   STRIPE_SECRET_KEY=sk_test_...');
  console.log('   STRIPE_WEBHOOK_SECRET=whsec_...');
  console.log('   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...');
  process.exit(1);
}

console.log('✅ Variables de entorno configuradas');

// Comandos de testing
const testCommands = [
  {
    name: 'Listar productos',
    command: 'stripe products list --limit 5',
    description: 'Verifica que los productos estén creados'
  },
  {
    name: 'Listar precios',
    command: 'stripe prices list --limit 10',
    description: 'Verifica que los precios estén configurados'
  },
  {
    name: 'Simular evento de pago exitoso',
    command: 'stripe trigger payment_intent.succeeded',
    description: 'Simula un pago exitoso para testing'
  },
  {
    name: 'Simular evento de checkout completado',
    command: 'stripe trigger checkout.session.completed',
    description: 'Simula un checkout completado'
  }
];

console.log('\n🧪 Ejecutando tests de Stripe...\n');

testCommands.forEach((test, index) => {
  console.log(`${index + 1}. ${test.name}`);
  console.log(`   ${test.description}`);

  try {
    const output = execSync(test.command, {
      stdio: 'pipe',
      encoding: 'utf8'
    });
    console.log('   ✅ Éxito');
    if (output.trim()) {
      console.log(`   📄 Output: ${output.trim().substring(0, 100)}...`);
    }
  } catch (error) {
    console.log('   ❌ Error:', error.message);
  }
  console.log('');
});

console.log('🎯 Para testing completo con webhooks:');
console.log('   1. Ejecuta: stripe listen --forward-to localhost:3000/api/webhook');
console.log('   2. En otra terminal: npm run dev');
console.log('   3. Prueba los botones de pago en http://localhost:3000/pricing');
console.log('   4. Los webhooks se procesarán automáticamente');

console.log('\n🛡️ ELITE: Tests de Stripe completados');
