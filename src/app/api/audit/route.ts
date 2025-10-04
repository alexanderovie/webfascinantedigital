import { AuditFormData, sendAuditNotification, sendWelcomeEmail } from '@/lib/email';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body: AuditFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Send notification to admin
    const notificationResult = await sendAuditNotification(body);

    if (!notificationResult.success) {
      console.error('Failed to send audit notification:', notificationResult.error);
    }

    // Send welcome email to user
    const welcomeResult = await sendWelcomeEmail(body.email, body.name);

    if (!welcomeResult.success) {
      console.error('Failed to send welcome email:', welcomeResult.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Audit request submitted successfully'
    });

  } catch (error) {
    console.error('Audit API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
