import { Resend } from "resend";
import { AirportEnquiryTemplate } from "@/components/Email/AirportEnquiryTemplate";
import { render } from "@react-email/components";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      phone, 
      email, 
      nationality, 
      city, 
      date, 
      guests, 
      language, 
      services, 
      message, 
      source, 
      currenturl,
      defaultCity 
    } = body;
    if (!name || !phone || !nationality || !city || !date || !guests) {
      return Response.json(
        { error: "Missing required fields. Please fill all required fields." },
        { status: 400 }
      );
    }
    if (!/^\d{10}$/.test(phone)) {
      return Response.json(
        { error: "Phone number must be 10 digits" },
        { status: 400 }
      );
    }
    if (email) {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        return Response.json(
          { error: "Invalid email address" },
          { status: 400 }
        );
      }
    }

    const emailHtml = await render(
      <AirportEnquiryTemplate
        name={name}
        phone={phone}
        email={email}
        nationality={nationality}
        city={city}
        travelDate={date}
        guests={guests}
        language={language}
        services={services}
        message={message}
        source={source}
        currenturl={currenturl}
        defaultCity={defaultCity}
      />
    );

    const { error } = await resend.emails.send({
      from: "Modern World Travel <mwt@modernworldtravel.com>",
      to: ["info@modernworldtravel.com", "modernworldtravel@gmail.com", "akshat@wizards.co.in"],
      replyTo: email || undefined,
      subject: `New Airport Service Enquiry From - ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error.message);
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