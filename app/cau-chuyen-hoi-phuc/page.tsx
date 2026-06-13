import type { Metadata } from "next";
import { SectionHeading, TextCard } from "@/components/ui";
import { caseStudies, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Câu chuyện hồi phục",
  description: "Case study, chia sẻ từ học viên và kết quả đo lường tại Retour."
};

const recoveryStats = [
  {
    number: "20/20",
    label: "Học viên cảm nhận thay đổi ngay buổi đầu tiên"
  },
  {
    number: "6 buổi",
    label: "Thời gian trung bình để thấy kết quả rõ rệt"
  },
  {
    number: "3+",
    label: "Thay đổi tích cực ngoài giấc ngủ được học viên ghi nhận"
  }
];

export default function StoriesPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-soft">
          <SectionHeading
            eyebrow="Câu chuyện hồi phục"
            title="Những thay đổi nhỏ nhưng có thể cảm nhận trong giấc ngủ, hơi thở và năng lượng sống."
            body="Không phải phép màu. Không phải cố gắng thêm. Chỉ là cơ thể được trao cơ hội để nghỉ thật sự - lần đầu tiên sau rất lâu."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {caseStudies.map((item) => (
              <TextCard key={item.title} title={item.title} body={item.summary} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white/45">
        <div className="container-soft">
          <SectionHeading title="Chia sẻ từ học viên" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="h-full rounded-lg border border-forest/10 bg-white/55 p-6 shadow-soft sm:p-7">
                <p className="leading-8 text-earth">“{item.quote}”</p>
                <p className="mt-6 font-medium text-forest">{item.name}</p>
                <p className="text-sm text-clay">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-oat/45">
        <div className="container-soft">
          <h2 className="font-serif text-3xl font-medium leading-tight text-forest">Kết quả đo lường</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recoveryStats.map((item) => (
              <article key={item.number} className="rounded-lg border border-forest/10 bg-white/55 p-6 shadow-soft sm:p-7">
                <p className="font-serif text-4xl font-semibold leading-none text-forest sm:text-[2.9rem]">{item.number}</p>
                <p className="mt-5 text-base font-medium leading-7 text-earth">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
