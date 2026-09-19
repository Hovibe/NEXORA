import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { success: false, message: "Email service not configured. Please contact us directly." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();

    const { name, email, phone, company, projectType, budget, description, preferredContact } = body;

    if (!name || !email || !description) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Project Inquiry</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333; width: 140px;">Name:</td>
            <td style="padding: 8px 0; color: #555;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
            <td style="padding: 8px 0; color: #555;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
            <td style="padding: 8px 0; color: #555;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Company:</td>
            <td style="padding: 8px 0; color: #555;">${company || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Project Type:</td>
            <td style="padding: 8px 0; color: #555;">${projectType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Budget:</td>
            <td style="padding: 8px 0; color: #555;">${budget || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #333;">Preferred Contact:</td>
            <td style="padding: 8px 0; color: #555;">${preferredContact}</td>
          </tr>
        </table>

        <div style="margin-top: 20px;">
          <h3 style="color: #333;">Project Description</h3>
          <p style="color: #555; line-height: 1.6; background: #f9f9f9; padding: 15px; border-radius: 8px;">${description}</p>
        </div>

        <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;" />
        <p style="color: #999; font-size: 12px; margin-top: 10px;">
          Sent from the Nexora website contact form
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "Nexora Website <onboarding@resend.dev>",
      to: "eric22000055@gmail.com",
      replyTo: email,
      subject: `New Project Inquiry - ${projectType}`,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. We will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
