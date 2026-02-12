import React from "react";
import { Resend } from "resend";
import { HomeEmailTemplate } from "@/components/Email/HomeEmailTemplate";
import { render } from "@react-email/components";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
  try {
    console.log("API called");
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return Response.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }
    const body = await request.json();
    const { name, phoneEmail, destination, formattedDate } = body;
    if (!name || !phoneEmail || !destination || !formattedDate) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
    const emailHtml = await render(
      React.createElement(HomeEmailTemplate, {
        name,
        phoneEmail,
        destination,
        formattedDate,
      }),
    );
    const { data, error } = await resend.emails.send({
      from: "Modern World Travel <modernworldtravel.com>",
      to: ["info@modernworldtravel.com", "modernworldtravel@gmail.com"],
      subject: `Modern World Travel Home Enquiry from ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({
      success: true,
      message: "Email sent successfully",
      data,
    });
  } catch (err) {
    console.error("Home send email route error:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
