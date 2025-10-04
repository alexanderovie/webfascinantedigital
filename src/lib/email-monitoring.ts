// Sistema de monitoreo para emails
export interface EmailMetrics {
  sent: number;
  delivered: number;
  bounced: number;
  opened: number;
  clicked: number;
  failed: number;
}

class EmailMonitor {
  private metrics: EmailMetrics = {
    sent: 0,
    delivered: 0,
    bounced: 0,
    opened: 0,
    clicked: 0,
    failed: 0,
  };

  private events: Array<{
    timestamp: Date;
    type: keyof EmailMetrics;
    email: string;
    data?: Record<string, unknown>;
  }> = [];

  // Incrementar métrica
  increment(type: keyof EmailMetrics, email: string, data?: Record<string, unknown>) {
    this.metrics[type]++;
    this.events.push({
      timestamp: new Date(),
      type,
      email,
      data,
    });

    // Log para debugging
    console.log(`Email ${type}:`, { email, data });
  }

  // Obtener métricas
  getMetrics(): EmailMetrics {
    return { ...this.metrics };
  }

  // Obtener eventos recientes
  getRecentEvents(limit = 100) {
    return this.events
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit);
  }

  // Calcular tasa de entrega
  getDeliveryRate(): number {
    if (this.metrics.sent === 0) return 0;
    return (this.metrics.delivered / this.metrics.sent) * 100;
  }

  // Calcular tasa de apertura
  getOpenRate(): number {
    if (this.metrics.delivered === 0) return 0;
    return (this.metrics.opened / this.metrics.delivered) * 100;
  }

  // Calcular tasa de clics
  getClickRate(): number {
    if (this.metrics.delivered === 0) return 0;
    return (this.metrics.clicked / this.metrics.delivered) * 100;
  }

  // Reset métricas (para testing)
  reset() {
    this.metrics = {
      sent: 0,
      delivered: 0,
      bounced: 0,
      opened: 0,
      clicked: 0,
      failed: 0,
    };
    this.events = [];
  }
}

// Singleton instance
export const emailMonitor = new EmailMonitor();

// Webhook handler para eventos de Resend
export const handleResendWebhook = (event: Record<string, unknown>) => {
  const { type, data } = event;
  
  if (typeof data !== 'object' || data === null) return;
  
  const eventData = data as Record<string, unknown>;
  
  switch (type) {
    case 'email.sent':
      if (typeof eventData.to === 'string') {
        emailMonitor.increment('sent', eventData.to);
      }
      break;
    case 'email.delivered':
      if (typeof eventData.to === 'string') {
        emailMonitor.increment('delivered', eventData.to);
      }
      break;
    case 'email.bounced':
      if (typeof eventData.to === 'string') {
        emailMonitor.increment('bounced', eventData.to, { reason: eventData.reason });
      }
      break;
    case 'email.opened':
      if (typeof eventData.to === 'string') {
        emailMonitor.increment('opened', eventData.to);
      }
      break;
    case 'email.clicked':
      if (typeof eventData.to === 'string') {
        emailMonitor.increment('clicked', eventData.to, { url: eventData.url });
      }
      break;
    case 'email.failed':
      if (typeof eventData.to === 'string') {
        emailMonitor.increment('failed', eventData.to, { error: eventData.error });
      }
      break;
  }
};
