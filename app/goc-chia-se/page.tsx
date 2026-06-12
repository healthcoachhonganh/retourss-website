import type { Metadata } from "next";
import { SectionHeading, TextCard } from "@/components/ui";
import { articles, faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Góc chia sẻ",
  description: "Bài viết, audio hướng dẫn, bản tin Retour và câu hỏi thường gặp."
};

export default function ResourcesPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-soft">
          <SectionHeading
            eyebrow="Góc chia sẻ"
            title="Những gợi ý nhỏ để bạn trở về với cơ thể giữa đời sống nhiều áp lực."
            body="Nơi lưu lại bài viết, audio hướng dẫn, bản tin Retour và các câu hỏi thường gặp."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="rounded-lg border border-forest/10 bg-white/55 p-6 shadow-soft">
                <p className="text-sm font-medium text-clay">{article.category}</p>
                <h2 className="mt-5 font-serif text-2xl font-medium leading-snug text-forest">{article.title}</h2>
                <p className="mt-4 leading-7 text-earth">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-oat/45">
        <div className="container-soft grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <TextCard key={faq.question} title={faq.question} body={faq.answer} />
          ))}
        </div>
      </section>
    </>
  );
}
