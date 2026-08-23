import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Replace with your verified domain
      to: ['makhubuts4@gmail.com'], // Your email address
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { border-bottom: 2px solid #4f46e5; padding-bottom: 20px; margin-bottom: 20px; }
              h1 { color: #1a1a1a; font-size: 24px; margin: 0; }
              .field { margin-bottom: 16px; }
              .label { font-weight: 600; color: #4b5563; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
              .value { font-size: 16px; padding: 8px 12px; background: #f9fafb; border-radius: 6px; border-left: 3px solid #4f46e5; }
              .message-content { background: #f9fafb; padding: 16px; border-radius: 6px; border-left: 3px solid #4f46e5; margin-top: 4px; white-space: pre-wrap; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>📬 New Portfolio Contact</h1>
            </div>
            
            <div class="field">
              <div class="label">From</div>
              <div class="value"><strong>${name}</strong> (${email})</div>
            </div>
            
            <div class="field">
              <div class="label">Subject</div>
              <div class="value">${subject}</div>
            </div>
            
            <div class="field">
              <div class="label">Message</div>
              <div class="message-content">${message}</div>
            </div>
            
            <div class="footer">
              <p>This message was sent from your portfolio contact form.</p>
              <p style="font-size: 12px; color: #9ca3af;">Reply directly to this email to respond to ${name}.</p>
            </div>
          </body>
        </html>
      `,
      text: `
New Portfolio Contact

From: ${name} (${email})
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to ${name}.
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}