import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailTo = "retourss.com@gmail.com";
const subjects = {
  audio: "[Retour] Đăng ký Audio miễn phí",
  contact: "[Retour] Liên hệ từ website",
  consultation: "[Retour] Đăng ký tư vấn chương trình"
};

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
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      phone?: string;
      currentState?: string;
      goal?: string;
      share?: string;
      formType?: "audio" | "contact" | "consultation";
    };
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const currentState = body.currentState?.trim();
    const goal = body.goal?.trim();
    const share = body.share?.trim();
    const formType = body.formType || "audio";

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

    const extraLines = [
      phone ? `Số điện thoại: ${phone}` : "",
      share ? `Chia sẻ: ${share}` : "",
      currentState ? `Tình trạng hiện tại: ${currentState}` : "",
      goal ? `Mong muốn sau chương trình: ${goal}` : ""
    ].filter(Boolean);

    const extraHtml = [
      phone ? `<p><strong>Số điện thoại:</strong> ${escapeHtml(phone)}</p>` : "",
      share ? `<p><strong>Chia sẻ:</strong> ${escapeHtml(share)}</p>` : "",
      currentState ? `<p><strong>Tình trạng hiện tại:</strong> ${escapeHtml(currentState)}</p>` : "",
      goal ? `<p><strong>Mong muốn sau chương trình:</strong> ${escapeHtml(goal)}</p>` : ""
    ].join("");

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || smtpUser,
      to: emailTo,
      replyTo: email,
      subject: subjects[formType],
      text: [`Full name: ${name}`, `Email: ${email}`, ...extraLines, `Submission date: ${submittedAt}`].join("\n"),
      html: `
        <div>
          <p><strong>Full name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${extraHtml}
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
