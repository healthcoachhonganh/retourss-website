import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CtaLink, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Theo dõi Retour | Substack & Facebook",
  description: "Đọc các bài viết, audio thực hành và chia sẻ mới nhất của Retour trên Substack và Facebook."
};

const channels = [
  {
    label: "Newsletter",
    title: "Đọc các bài viết chuyên sâu trên Substack",
    description:
      "Các bài viết dài về điều hòa hệ thần kinh, ngủ sâu, burnout, nhịp sống chậm và hành trình hồi phục tự nhiên.",
    cta: "Đọc trên Substack",
    href: "https://retourss.substack.com/"
  },
  {
    label: "Facebook",
    title: "Theo dõi những chia sẻ hằng ngày",
    description:
      "Những góc nhìn ngắn, câu chuyện thực tế, hình ảnh đời sống tại Sóc Sơn và các cập nhật mới nhất từ Retour.",
    cta: "Theo dõi Facebook",
    href: "https://web.facebook.com/honganh.retour"
  }
];

export default function ResourcesPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-soft">
          <SectionHeading
            eyebrow="Theo dõi Retour"
            title="Tiếp tục hành trình hồi phục cùng Retour."
            body={`Những bài viết và chia sẻ mới nhất của Retour được xuất bản trên Substack và Facebook.

Nếu bạn muốn ngủ sâu hơn, giảm căng thẳng và xây dựng một nhịp hồi phục bền vững, hãy theo dõi các nền tảng dưới đây.`}
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {channels.map((channel) => (
              <article
                key={channel.href}
                className="flex h-full flex-col rounded-lg border border-forest/10 bg-white/60 p-7 shadow-soft sm:p-8"
              >
                <p className="text-sm font-medium text-clay">{channel.label}</p>
                <h2 className="mt-5 font-serif text-3xl font-medium leading-snug text-forest">{channel.title}</h2>
                <p className="mt-5 leading-8 text-earth">{channel.description}</p>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-medium text-ivory transition hover:bg-moss"
                >
                  {channel.cta}
                  <ArrowRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-oat/45">
        <div className="container-soft">
          <div className="rounded-lg border border-forest/10 bg-white/55 p-7 shadow-soft sm:p-8 md:flex md:items-center md:justify-between md:gap-10">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl font-medium leading-snug text-forest md:text-4xl">
                Bạn đang cần bắt đầu từ đâu?
              </h2>
              <p className="mt-5 leading-8 text-earth">
                Nếu bạn đang mất ngủ, quá tải hoặc cảm thấy cơ thể cần được nghỉ ngơi thật sự, hãy bắt đầu bằng bài
                đánh giá nhu cầu hồi phục của Retour.
              </p>
            </div>
            <div className="mt-8 shrink-0 md:mt-0">
              <CtaLink href="/bat-dau-tai-day/danh-gia-muc-do-hoi-phuc">Đánh giá nhu cầu hồi phục</CtaLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
