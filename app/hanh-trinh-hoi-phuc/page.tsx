import type { Metadata } from "next";
import { CtaLink, SectionHeading, TextCard } from "@/components/ui";
import { faqs, sessions } from "@/data/site";

export const metadata: Metadata = {
  title: "Hành trình hồi phục",
  description: "Chương trình Retour 6 buổi, nội dung từng buổi, thư viện thực hành và câu hỏi thường gặp."
};

export default function RecoveryJourneyPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-soft grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Chương trình 6 buổi"
            title="Một hành trình có cấu trúc để cơ thể học lại cách nghỉ."
            body="Mỗi buổi đi từ hiểu biết nền tảng đến thực hành cụ thể, để bạn có thể mang sự hồi phục vào ngày sống thật."
          />
          <div className="rounded-lg bg-forest p-8 text-ivory">
            <p className="font-serif text-[1.9rem] font-medium leading-tight">6 buổi</p>
            <p className="mt-4 leading-7 text-ivory/78">Học chậm, thực hành nhẹ, có không gian hỏi đáp và điều chỉnh theo tình trạng hiện tại.</p>
            <div className="mt-7">
              <CtaLink href="/tham-gia-retour" tone="light">Tham gia Retour</CtaLink>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-white/45">
        <div className="container-soft">
          <SectionHeading title="Nội dung từng buổi" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sessions.map((session) => (
              <TextCard key={session.title} title={session.title} body={session.body} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-oat/45">
        <div className="container-soft grid gap-5 md:grid-cols-2">
          <TextCard title="Thư viện thực hành" body="Sau mỗi buổi, bạn nhận được các bài thở, thư giãn cơ thể và nghỉ ngơi sâu để thực hành lại theo nhịp của mình." />
          <div className="rounded-lg border border-forest/10 bg-white/55 p-6 shadow-soft">
            <h2 className="font-serif text-3xl font-medium leading-snug text-forest">Câu hỏi thường gặp</h2>
            <div className="mt-6 grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <p className="font-medium text-forest">{faq.question}</p>
                  <p className="mt-2 leading-7 text-earth">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
