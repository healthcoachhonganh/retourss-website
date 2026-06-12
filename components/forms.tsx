"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

function useLeadForm() {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 60000);

    try {
      const response = await fetch("/api/free-audio-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
        signal: controller.signal
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null;
        setStatus("error");
        setMessage(data?.message || "Chưa gửi được thông tin. Bạn vui lòng thử lại sau.");
        return;
      }

      event.currentTarget.reset();
      setStatus("success");
      setMessage("Cảm ơn bạn. Retour đã nhận thông tin và sẽ gửi audio tới email của bạn.");
    } catch {
      setStatus("success");
      setMessage("Team Retour sẽ gửi bạn sớm nhất, liên hệ qua Zalo 0949.341.863 bạn sẽ nhận được audio sớm hơn.");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return { status, message, submit };
}

function FormMessage({ status, message }: { status: SubmitState; message: string }) {
  if (!message) {
    return null;
  }

  return (
    <p className={`rounded-md px-4 py-3 text-sm leading-6 ${status === "success" ? "bg-oat/70 text-forest" : "bg-red-50 text-red-700"}`}>
      {message}
    </p>
  );
}

export function AudioSignupForm() {
  const { status, message, submit } = useLeadForm();

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-forest/10 bg-white/55 p-6 shadow-soft">
      <label className="grid gap-2 text-sm text-forest">
        Họ tên
        <input required className="rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="name" />
      </label>
      <label className="grid gap-2 text-sm text-forest">
        Email
        <input required className="rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="email" type="email" />
      </label>
      <FormMessage status={status} message={message} />
      <button disabled={status === "submitting"} type="submit" className="rounded-full bg-forest px-6 py-3 font-medium text-ivory transition hover:bg-moss disabled:cursor-not-allowed disabled:opacity-70">
        {status === "submitting" ? "Đang gửi..." : "Nhận audio miễn phí"}
      </button>
    </form>
  );
}

export function ContactForm() {
  const { status, message, submit } = useLeadForm();

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-forest/10 bg-white/55 p-6 shadow-soft">
      <label className="grid gap-2 text-sm text-forest">
        Họ tên
        <input required className="rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="name" />
      </label>
      <label className="grid gap-2 text-sm text-forest">
        Email
        <input required className="rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="email" type="email" />
      </label>
      <FormMessage status={status} message={message} />
      <button disabled={status === "submitting"} type="submit" className="rounded-full bg-forest px-6 py-3 font-medium text-ivory transition hover:bg-moss disabled:cursor-not-allowed disabled:opacity-70">
        {status === "submitting" ? "Đang gửi..." : "Gửi thông tin"}
      </button>
    </form>
  );
}

export function ConsultationForm() {
  const { status, message, submit } = useLeadForm();

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-lg border border-forest/10 bg-white/55 p-6 shadow-soft">
      <label className="grid gap-2 text-sm text-forest">
        Họ tên
        <input required className="rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="name" />
      </label>
      <label className="grid gap-2 text-sm text-forest">
        Email
        <input required className="rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="email" type="email" />
      </label>
      <label className="grid gap-2 text-sm text-forest">
        Số điện thoại
        <input className="rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="phone" />
      </label>
      <label className="grid gap-2 text-sm text-forest">
        Tình trạng hiện tại
        <textarea className="min-h-28 rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="currentState" />
      </label>
      <label className="grid gap-2 text-sm text-forest">
        Mong muốn sau chương trình
        <textarea className="min-h-28 rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="goal" />
      </label>
      <FormMessage status={status} message={message} />
      <button disabled={status === "submitting"} type="submit" className="rounded-full bg-forest px-6 py-3 font-medium text-ivory transition hover:bg-moss disabled:cursor-not-allowed disabled:opacity-70">
        {status === "submitting" ? "Đang gửi..." : "Đăng ký tư vấn"}
      </button>
    </form>
  );
}
