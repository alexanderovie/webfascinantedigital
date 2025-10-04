import { ContactFormData, sendContactNotification, sendWelcomeEmail } from '@/lib/email';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Send notification to admin
    const notificationResult = await sendContactNotification(body);

    if (!notificationResult.success) {
      console.error('Failed to send notification:', notificationResult.error);
    }

    // Send welcome email to user
    const welcomeResult = await sendWelcomeEmail(body.email, body.name);

    if (!welcomeResult.success) {
      console.error('Failed to send welcome email:', welcomeResult.error);
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
