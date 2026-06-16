import { Head } from "vite-react-ssg";
import { ArrowRight } from "lucide-react";
import { FeatureImage, SectionHeading } from "@/components/ui";

export default function AudioPage() {
  return (
    <>
      <Head>
        <title>Audio thư giãn miễn phí | Retour</title>
        <meta name="description" content="Nhận audio 10 phút giúp cơ thể chuyển từ trạng thái căng thẳng sang nghỉ ngơi." />
        <link rel="canonical" href="https://retourss.com/bat-dau-tai-day/audio-thu-gian-mien-phi" />
      </Head>

      <section className="section-pad bg-ivory">
        <div className="container-soft grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Audio miễn phí"
              title="Audio 10 phút giúp cơ thể chuyển từ trạng thái căng thẳng sang nghỉ ngơi."
              body="Retour xuất bản audio hướng dẫn thở, thư giãn và nghỉ ngơi sâu miễn phí trên Substack."
            />
            <div className="mt-8 rounded-lg border border-forest/10 bg-white/55 p-6 shadow-soft">
              <p className="leading-7 text-earth">
                Theo dõi Retour trên Substack để nhận audio thực hành và các bài viết mới nhất — miễn phí.
              </p>
              <a
                href="https://retourss.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-medium text-ivory transition hover:bg-moss"
              >
                Theo dõi trên Substack
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <FeatureImage
            src="/free-audio-relaxation.jpg"
            alt="Một người thực hành nghỉ ngơi sâu trong không gian ấm áp"
            caption="Một thực hành nghỉ ngơi sâu để cơ thể có thể hạ nhịp và phục hồi."
            position="center 55%"
          />
        </div>
      </section>
    </>
  );
}
