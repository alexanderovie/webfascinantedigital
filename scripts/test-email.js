#!/usr/bin/env node

/**
 * 📧 SCRIPT DE PRUEBA DE EMAIL
 * Envía un email de prueba a alexanderovie@gmail.com
 */

const { Resend } = require('resend');

// Cargar variables de entorno
require('dotenv').config({ path: '.env.local' });

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
  console.log('📧 Enviando email de prueba...');
  console.log('📧 Desde: info@fascinantedigital.com');
  console.log('📧 Para: alexanderovie@gmail.com');
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'Fascinante Digital <info@fascinantedigital.com>',
      to: ['alexanderovie@gmail.com'],
      subject: '🧪 Email de Prueba - Fascinante Digital',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb;">🧪 Email de Prueba</h1>
          <p>¡Hola Alexander!</p>
          <p>Este es un email de prueba para verificar que el sistema de Resend está funcionando correctamente.</p>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">📊 Detalles del Test:</h3>
            <ul style="color: #6b7280;">
              <li><strong>Servicio:</strong> Resend</li>
              <li><strong>Dominio:</strong> fascinantedigital.com</li>
              <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
              <li><strong>Status:</strong> ✅ Funcionando</li>
            </ul>
          </div>
          
          <p>Si recibes este email, significa que:</p>
          <ul>
            <li>✅ Resend está configurado correctamente</li>
            <li>✅ El dominio está verificado</li>
            <li>✅ Los formularios de contacto funcionarán</li>
          </ul>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            Saludos,<br>
            El equipo de Fascinante Digital
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Error enviando email:', error);
      return;
    }

    console.log('✅ Email enviado exitosamente!');
    console.log('📧 ID del email:', data?.id);
    console.log('📧 Revisa tu bandeja de entrada en alexanderovie@gmail.com');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Ejecutar
sendTestEmail();
