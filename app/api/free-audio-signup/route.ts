import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailTo = "retourss.com@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { name?: string; email?: string };
    const name = body.name?.trim();
    const email = body.email?.trim();

    if (!name || !email) {
      return NextResponse.json({ message: "Vui lòng nhập họ tên và email." }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json({ message: "Email service is not configured." }, { status: 500 });
    }

    const submittedAt = new Date().toLocaleString("vi-VN", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Asia/Ho_Chi_Minh"
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: (process.env.SMTP_SECURE || "true") === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || smtpUser,
      to: emailTo,
      replyTo: email,
      subject: "[Retour] Đăng ký Audio miễn phí",
      text: [`Full name: ${name}`, `Email: ${email}`, `Submission date: ${submittedAt}`].join("\n"),
      html: `
        <div>
          <p><strong>Full name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Submission date:</strong> ${submittedAt}</p>
        </div>
      `
    });

    return NextResponse.json({ message: "Đăng ký thành công." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Không thể gửi đăng ký lúc này." }, { status: 500 });
  }
}
