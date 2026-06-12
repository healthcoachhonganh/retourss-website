export function AudioSignupForm() {
  return (
    <form className="grid gap-4 rounded-lg border border-forest/10 bg-white/55 p-6 shadow-soft">
      <label className="grid gap-2 text-sm text-forest">
        Họ tên
        <input className="rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="name" />
      </label>
      <label className="grid gap-2 text-sm text-forest">
        Email
        <input className="rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="email" type="email" />
      </label>
      <button type="submit" className="rounded-full bg-forest px-6 py-3 font-medium text-ivory transition hover:bg-moss">
        Nhận audio miễn phí
      </button>
    </form>
  );
}

export function ConsultationForm() {
  return (
    <form className="grid gap-4 rounded-lg border border-forest/10 bg-white/55 p-6 shadow-soft">
      <label className="grid gap-2 text-sm text-forest">
        Họ tên
        <input className="rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="name" />
      </label>
      <label className="grid gap-2 text-sm text-forest">
        Email
        <input className="rounded-md border border-forest/15 bg-ivory px-4 py-3 outline-none focus:border-moss" name="email" type="email" />
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
      <button type="submit" className="rounded-full bg-forest px-6 py-3 font-medium text-ivory transition hover:bg-moss">
        Đăng ký tư vấn
      </button>
    </form>
  );
}
