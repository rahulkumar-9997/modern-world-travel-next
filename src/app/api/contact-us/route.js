import { Resend } from "resend";
import { ContactUsTemplate } from "@/components/Email/ContactUsTemplate";
import { render } from "@react-email/components";
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
    const emailHtml = await render(
      <ContactUsTemplate
        name={name}
        phone={phone}
        email={email}
        message={message}
      />,
    );
    const { error } = await resend.emails.send({
      from: "Modern World Travel <seo@modernworldtravel.com>",
      to: ["info@modernworldtravel.com", "modernworldtravel@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,
      html: emailHtml,
    });
    if (error) {
      console.error("Resend error:", error.message);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }
    return Response.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Resend error:", error.message);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
