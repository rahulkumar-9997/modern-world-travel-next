import { HomeEmailTemplate } from '@/components/Email/HomeEmailTemplate';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phoneEmail, destination, formattedDate } = body;
    if (!name || !phoneEmail || !destination || !formattedDate) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    const { data, error } = await resend.emails.send({
      from: 'Acme Travel <onboarding@resend.dev>',
      to: ['your-email@example.com'],
      subject: `New Travel Enquiry from ${name}`,
      react: HomeEmailTemplate({ 
        name, 
        phoneEmail, 
        destination, 
        formattedDate 
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: 'Email sent successfully',
      data
    });

  } catch (error) {
    console.error('Server error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}