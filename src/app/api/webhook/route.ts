import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// 🛡️ ELITE: Configuración Stripe moderna con lazy initialization
let stripe: Stripe | null = null;

const getStripe = (): Stripe => {
  if (!stripe) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-09-30.clover',
      timeout: 20 * 1000,
      maxNetworkRetries: 3,
      telemetry: false,
    });
  }
  return stripe;
};

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

// 🛡️ ELITE: Tipos modernos para webhook handlers con type mapping
type StripeEventDataMap = {
  'checkout.session.completed': Stripe.Checkout.Session;
  'payment_intent.succeeded': Stripe.PaymentIntent;
  'payment_intent.payment_failed': Stripe.PaymentIntent;
  'invoice.payment_succeeded': Stripe.Invoice;
  'customer.subscription.created': Stripe.Subscription;
  'customer.subscription.updated': Stripe.Subscription;
  'customer.subscription.deleted': Stripe.Subscription;
};

type WebhookHandler<T extends keyof StripeEventDataMap> = (data: StripeEventDataMap[T]) => Promise<void>;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    // 🛡️ ELITE: Verificar firma del webhook con manejo moderno de errores
    event = getStripe().webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // 🛡️ ELITE: Procesar eventos con type safety moderno
  try {
    const handlers: {
      [K in keyof StripeEventDataMap]: WebhookHandler<K>;
    } = {
      'checkout.session.completed': handleCheckoutSessionCompleted,
      'payment_intent.succeeded': handlePaymentIntentSucceeded,
      'payment_intent.payment_failed': handlePaymentIntentFailed,
      'invoice.payment_succeeded': handleInvoicePaymentSucceeded,
      'customer.subscription.created': handleSubscriptionCreated,
      'customer.subscription.updated': handleSubscriptionUpdated,
      'customer.subscription.deleted': handleSubscriptionDeleted,
    };

    const eventType = event.type as keyof StripeEventDataMap;
    const handler = handlers[eventType];

    if (handler) {
      await handler(event.data.object as StripeEventDataMap[typeof eventType]);
    } else {
      console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}

// 🛡️ ELITE: Handlers modernos con type safety
async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  console.log('Checkout session completed:', {
    sessionId: session.id,
    customerEmail: session.customer_details?.email,
    amountTotal: session.amount_total,
    currency: session.currency,
    metadata: session.metadata,
  });

  // 🚀 MODERNO: Aquí puedes integrar con:
  // - Resend para emails
  // - Supabase para base de datos
  // - Slack/Discord para notificaciones
  // - Analytics tracking
}

async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  console.log('Payment succeeded:', {
    paymentIntentId: paymentIntent.id,
    amount: paymentIntent.amount,
    currency: paymentIntent.currency,
    metadata: paymentIntent.metadata,
  });

  // 🚀 MODERNO: Integraciones modernas
  // - Actualizar estado en tiempo real
  // - Enviar recibo automático
  // - Activar servicios premium
}

async function handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
  console.log('Payment failed:', {
    paymentIntentId: paymentIntent.id,
    lastPaymentError: paymentIntent.last_payment_error,
    metadata: paymentIntent.metadata,
  });

  // 🚀 MODERNO: Manejo de errores moderno
  // - Notificaciones automáticas
  // - Retry logic inteligente
  // - Fallback a métodos alternativos
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log('Invoice payment succeeded:', {
    invoiceId: invoice.id,
    customerId: invoice.customer,
    amountPaid: invoice.amount_paid,
    subscriptionId: invoice.subscription,
  });
}

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  console.log('Subscription created:', {
    subscriptionId: subscription.id,
    customerId: subscription.customer,
    status: subscription.status,
  });
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  console.log('Subscription updated:', {
    subscriptionId: subscription.id,
    status: subscription.status,
  });
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  console.log('Subscription deleted:', {
    subscriptionId: subscription.id,
    customerId: subscription.customer,
    canceledAt: subscription.canceled_at,
  });
}
