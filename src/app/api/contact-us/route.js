import { ContactUsTemplate } from "@/components/Email/ContactUsTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;
    if (!name || !phone || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email address" }, { status: 400 });
    }
    const { data: adminEmail, error: adminError } = await resend.emails.send({
      from: "Modern World Travel <onboarding@resend.dev>",
      to: ["info@modernworldtravel.com", "sales@modernworldtravel.com"],
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,
      react: ContactUsTemplate({
        name,
        phone,
        email,
        message,
      }),
    });

    if (adminError) {
      console.error("Resend error:", adminError);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({
      success: true,
      message: "Message sent successfully",
      data: {
        adminEmail: adminEmail,
        userEmail: userEmail || null,
      },
    });
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
