import { Head } from "vite-react-ssg";
import { CtaLink, SectionHeading, TextCard } from "@/components/ui";
import { faqs, softFramework } from "@/data/site";

export default function NhipHoiPhucPage() {
  return (
    <>
      <Head>
        <title>Nhịp hồi phục | Retour</title>
        <meta name="description" content="Retour là chương trình 6 buổi theo nhịp của SOFT Framework, thư viện thực hành và các hướng dẫn nhẹ nhàng giúp người làm việc trí óc ngủ sâu hơn, giảm căng thẳng và tái tạo năng lượng." />
        <link rel="canonical" href="https://retourss.com/nhip-hoi-phuc" />
      </Head>

      <section className="section-pad bg-ivory">
        <div className="container-soft grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Chương trình 6 buổi"
              title="Một hành trình có cấu trúc để cơ thể học lại cách nghỉ."
              body="Mỗi buổi đi từ hiểu biết nền tảng đến thực hành cụ thể, để bạn có thể mang sự hồi phục vào ngày sống thật."
            />
          </div>
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
          <SectionHeading
            eyebrow="Framework"
            title="SOFT Framework giúp bạn đi từ căng thẳng kéo dài về nghỉ ngơi sâu."
            body={`Cách tiếp cận của Retour không bắt đầu từ việc ép tâm trí phải yên.

Chúng mình bắt đầu từ hơi thở, những chuyển động đơn giản và khả năng cảm nhận lại cơ thể.

Khi cơ thể cảm thấy an toàn, sự thư giãn và nghỉ ngơi sâu sẽ xuất hiện một cách tự nhiên.`}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {softFramework.map((item) => (
              <TextCard key={item.letter} title={`${item.letter}: ${item.title}`} body={`${item.vietnamese}. ${item.body}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-oat/45">
        <div className="container-soft grid gap-5 md:grid-cols-2">
          <TextCard title="Thư Viện Thực Hành" body="Sau mỗi buổi, bạn nhận được các bài thở, thư giãn cơ thể và nghỉ ngơi sâu để thực hành lại theo nhịp của mình." />
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
