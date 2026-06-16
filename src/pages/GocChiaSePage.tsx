import { Head } from "vite-react-ssg";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui";

const channels = [
  {
    label: "Substack",
    title: "Đọc các bài viết chuyên sâu trên Substack",
    description: "Những bài viết dài về điều hòa hệ thần kinh, ngủ sâu và hồi phục năng lượng.",
    cta: "Theo dõi trên Substack",
    href: "https://retourss.substack.com"
  },
  {
    label: "Facebook",
    title: "Theo dõi những chia sẻ hằng ngày trên Facebook",
    description: "Những chia sẻ ngắn, quan sát đời sống và cập nhật mới nhất từ Retour.",
    cta: "Theo dõi trên Facebook",
    href: "https://web.facebook.com/honganh.retour"
  }
];

export default function GocChiaSePage() {
  return (
    <>
      <Head>
        <title>Theo dõi Retour | Retour</title>
        <meta name="description" content="Đọc các bài viết, audio thực hành và chia sẻ mới nhất của Retour trên Substack và Facebook." />
        <link rel="canonical" href="https://retourss.com/goc-chia-se" />
      </Head>

      <section className="section-pad bg-ivory">
        <div className="container-soft">
          <SectionHeading
            eyebrow="Theo dõi Retour"
            title="Theo dõi Retour."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {channels.map((channel) => (
              <article
                key={channel.href}
                className="flex h-full flex-col rounded-lg border border-forest/10 bg-white/60 p-7 shadow-soft sm:p-8"
              >
                <p className="text-sm font-medium text-clay">{channel.label}</p>
                <h2 className="mt-5 font-serif text-3xl font-medium leading-snug text-forest">
                  {channel.title}
                </h2>
                <p className="mt-5 leading-8 text-earth">{channel.description}</p>
                <div className="mt-auto pt-8">
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-medium text-ivory transition hover:bg-moss"
                  >
                    {channel.cta}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
