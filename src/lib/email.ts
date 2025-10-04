import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}

export interface AuditFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  currentChallenges?: string;
  goals?: string;
}

// Email templates
export const emailTemplates = {
  welcome: (name: string) => ({
    subject: '¡Bienvenido a Fascinante Digital!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #2563eb;">¡Hola ${name}!</h1>
        <p>Gracias por contactar con Fascinante Digital. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
        <p>Mientras tanto, puedes:</p>
        <ul>
          <li>Explorar nuestros servicios de SEO y marketing digital</li>
          <li>Leer nuestro blog con consejos actualizados</li>
          <li>Agendar una consulta gratuita</li>
        </ul>
        <p>Saludos,<br>El equipo de Fascinante Digital</p>
      </div>
    `
  }),

  contact: (data: ContactFormData) => ({
    subject: `Nuevo mensaje de contacto de ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
        ${data.company ? `<p><strong>Empresa:</strong> ${data.company}</p>` : ''}
        ${data.service ? `<p><strong>Servicio:</strong> ${data.service}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${data.message}</p>
      </div>
    `
  }),

  audit: (data: AuditFormData) => ({
    subject: `Solicitud de auditoría de ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Nueva solicitud de auditoría gratuita</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
        ${data.company ? `<p><strong>Empresa:</strong> ${data.company}</p>` : ''}
        ${data.website ? `<p><strong>Sitio web:</strong> ${data.website}</p>` : ''}
        ${data.currentChallenges ? `<p><strong>Desafíos actuales:</strong> ${data.currentChallenges}</p>` : ''}
        ${data.goals ? `<p><strong>Objetivos:</strong> ${data.goals}</p>` : ''}
      </div>
    `
  })
};

// Email sending functions
export const sendEmail = async (data: EmailData) => {
  try {
    const result = await resend.emails.send({
      from: data.from || process.env.RESEND_FROM_EMAIL || 'noreply@fascinantedigital.com',
      to: data.to,
      subject: data.subject,
      html: data.html,
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

export const sendWelcomeEmail = async (email: string, name: string) => {
  const template = emailTemplates.welcome(name);
  return await sendEmail({
    to: email,
    subject: template.subject,
    html: template.html,
  });
};

export const sendContactNotification = async (data: ContactFormData) => {
  const template = emailTemplates.contact(data);
  return await sendEmail({
    to: process.env.RESEND_FROM_EMAIL || 'info@fascinantedigital.com',
    subject: template.subject,
    html: template.html,
  });
};

export const sendAuditNotification = async (data: AuditFormData) => {
  const template = emailTemplates.audit(data);
  return await sendEmail({
    to: process.env.RESEND_FROM_EMAIL || 'info@fascinantedigital.com',
    subject: template.subject,
    html: template.html,
  });
};
