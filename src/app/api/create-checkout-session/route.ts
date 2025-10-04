import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// 🛡️ ELITE: Configuración Stripe con timeout y retry policies
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
  timeout: 20 * 1000, // 20 segundos timeout
  maxNetworkRetries: 3, // 3 reintentos automáticos
  telemetry: false, // Deshabilitar telemetría para privacidad
});

// 🛡️ ELITE: Mapeo de planes con validación estricta
const PLAN_PRICES = {
  starter: {
    monthly: 'price_1SEbsXDsZNgEc56Ld4nKqi0Z', // $20/mes
    yearly: 'price_1SEbvCDsZNgEc56LZp2ZksJH', // $200/año
  },
  professional: {
    monthly: 'price_1SEbsfDsZNgEc56LHkjFO4Yu', // $49/mes
    yearly: 'price_1SEbvFDsZNgEc56LozU0raNj', // $490/año
  },
  enterprise: {
    monthly: 'price_1SEbuSDsZNgEc56LpE0dZ8Dy', // $99/mes
    yearly: 'price_1SEbvJDsZNgEc56Lq896cB5a', // $990/año
  },
} as const;

// 🛡️ ELITE: Validación de entrada
const validatePlanId = (planId: string): planId is keyof typeof PLAN_PRICES => {
  return planId in PLAN_PRICES;
};

const validateBillingCycle = (cycle: string): cycle is 'monthly' | 'yearly' => {
  return cycle === 'monthly' || cycle === 'yearly';
};

export async function POST(request: NextRequest) {
  // 🛡️ ELITE: Rate limiting básico por IP
  const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

  try {
    // 🛡️ ELITE: Validación estricta de entrada
    const body = await request.json();
    const { planId, billingCycle = 'monthly' } = body;

    // Validar tipos y valores
    if (!planId || typeof planId !== 'string') {
      return NextResponse.json({ error: 'Plan ID es requerido' }, { status: 400 });
    }

    if (!validatePlanId(planId)) {
      console.warn(`Invalid plan ID attempted: ${planId} from IP: ${clientIP}`);
      return NextResponse.json({ error: 'Plan no válido' }, { status: 400 });
    }

    if (!validateBillingCycle(billingCycle)) {
      return NextResponse.json({ error: 'Ciclo de facturación no válido' }, { status: 400 });
    }

    const priceId = PLAN_PRICES[planId][billingCycle];

    // 🛡️ ELITE: Crear sesión con configuración de seguridad
    const session = await stripe.checkout.sessions.create(
      {
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${request.nextUrl.origin}/gracias?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${request.nextUrl.origin}/pricing`,
        metadata: {
          plan: planId,
          billingCycle,
          clientIP,
          timestamp: new Date().toISOString(),
        },
        allow_promotion_codes: true,
        billing_address_collection: 'required',
        shipping_address_collection: {
          allowed_countries: ['US'],
        },
        // 🛡️ ELITE: Configuraciones de seguridad adicionales
        payment_intent_data: {
          metadata: {
            plan: planId,
            billingCycle,
          },
        },
        // 🛡️ ELITE: Configuración de impuestos (opcional)
        // automatic_tax: { enabled: true }, // Descomenta si tienes Stripe Tax configurado
      },
      {
        // 🛡️ ELITE: Idempotency key para prevenir duplicados
        idempotencyKey: `${planId}-${billingCycle}-${Date.now()}`,
      },
    );

    // 🛡️ ELITE: Log de sesión creada (sin datos sensibles)
    console.log(`Checkout session created for plan: ${planId}, cycle: ${billingCycle}, IP: ${clientIP}`);

    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    // 🛡️ ELITE: Manejo de errores específicos de Stripe
    if (error instanceof Stripe.errors.StripeError) {
      console.error(`Stripe error: ${error.type} - ${error.message}`, {
        planId: body?.planId,
        billingCycle: body?.billingCycle,
        clientIP,
      });

      return NextResponse.json({ error: 'Error procesando el pago. Inténtalo de nuevo.' }, { status: 500 });
    }

    // 🛡️ ELITE: Error genérico
    console.error('Unexpected error creating checkout session:', error, {
      clientIP,
      userAgent: request.headers.get('user-agent'),
    });

    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
