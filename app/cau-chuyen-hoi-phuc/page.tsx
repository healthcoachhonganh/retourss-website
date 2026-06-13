import type { Metadata } from "next";
import { SectionHeading, TextCard } from "@/components/ui";
import { caseStudies, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Câu chuyện hồi phục",
  description: "Case study, chia sẻ từ học viên và kết quả đo lường tại Retour."
};

export default function StoriesPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-soft">
          <SectionHeading
            eyebrow="Câu chuyện hồi phục"
            title="Những thay đổi nhỏ nhưng có thể cảm nhận trong giấc ngủ, hơi thở và năng lượng sống."
            body="Các câu chuyện dưới đây là placeholder nội dung để bạn thay bằng dữ liệu thật khi có học viên và kết quả đo lường cụ thể."
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
          <TextCard title="Kết quả đo lường" body="Retour có thể theo dõi thay đổi qua chất lượng giấc ngủ, mức căng thẳng tự đánh giá, cảm giác cổ vai gáy, năng lượng buổi sáng và khả năng duy trì thực hành." />
        </div>
      </section>
    </>
  );
}
