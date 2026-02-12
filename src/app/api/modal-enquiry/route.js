import { Resend } from "resend";
import { EnquiryModalTemplate } from "@/components/Email/EnquiryModalTemplate";
import { render } from "@react-email/components";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, name, phone, email, message, source } = body;
    if (!name || !phone) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
    if (email) {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        return Response.json(
          { error: "Invalid email address" },
          { status: 400 },
        );
      }
    }
    const emailHtml = await render(
      <EnquiryModalTemplate
        title={title}
        name={name}
        phone={phone}
        email={email}
        message={message}
        source={source}
      />,
    );
    const { error } = await resend.emails.send({
      from: "Modern World Travel <seo@modernworldtravel.com>",
      to: ["info@modernworldtravel.com", "modernworldtravel@gmail.com"],
      replyTo: email || undefined,
      subject: `New Enquiry Modal Form - ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({
      success: true,
      message: "Enquiry sent successfully",
    });
  } catch (error) {
    console.error("Server error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
