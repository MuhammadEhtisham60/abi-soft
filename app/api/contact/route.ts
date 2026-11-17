import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  selectedServices?: string[];
  budget?: string;
  timeline?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const company = body.company?.trim() || "";
    const message = body.message?.trim() || "";
    const selectedServices = Array.isArray(body.selectedServices) ? body.selectedServices : [];
    const budget = body.budget?.trim() || "Not specified";
    const timeline = body.timeline?.trim() || "Not specified";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, work email, and project details." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || "mzleodye75@gmail.com";
    const fromAddress = process.env.SMTP_FROM || `"KoderFors Contact" <${user}>`;

    if (!host || !user || !pass) {
      return NextResponse.json(
        { error: "SMTP is not configured yet. Please add SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subject = `Project Inquiry from ${name}${company ? ` (${company})` : ""}`;
    const servicesText = selectedServices.length ? selectedServices.join(", ") : "None selected";

    const textContent = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "N/A"}`,
      `Company: ${company || "N/A"}`,
      `Selected Services: ${servicesText}`,
      `Budget Range: ${budget}`,
      `Estimated Timeline: ${timeline}`,
      "",
      "Project Scope & Objectives:",
      message,
    ].join("\n");

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #00171f; line-height: 1.6; max-width: 640px;">
        <h2 style="color: #003459; margin-bottom: 16px;">New Project Inquiry – KoderFors</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px;">
          <tr><td style="padding: 6px 0; font-weight: bold; width: 150px;">Name:</td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Email:</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Phone:</td><td>${escapeHtml(phone || "N/A")}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Company:</td><td>${escapeHtml(company || "N/A")}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Services:</td><td>${escapeHtml(servicesText)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Budget:</td><td>${escapeHtml(budget)}</td></tr>
          <tr><td style="padding: 6px 0; font-weight: bold;">Timeline:</td><td>${escapeHtml(timeline)}</td></tr>
        </table>
        <div style="background: #f8fafc; border-left: 4px solid #003459; padding: 14px 16px; border-radius: 6px;">
          <strong>Project Scope &amp; Objectives:</strong>
          <p style="margin: 8px 0 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: fromAddress,
      to: toEmail,
      replyTo: email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form SMTP error:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please verify your SMTP settings or try again." },
      { status: 500 }
    );
  }
}
