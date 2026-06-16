import { Head } from "vite-react-ssg";
import { CheckList, SectionHeading } from "@/components/ui";
import { audiences } from "@/data/site";

export default function AudiencePage() {
  return (
    <>
      <Head>
        <title>Chúng tôi đồng hành cùng ai | Retour</title>
        <meta name="description" content="Những nhóm người phù hợp với chương trình hồi phục hệ thần kinh của Retour." />
        <link rel="canonical" href="https://retourss.com/chung-toi-dong-hanh-cung-ai" />
      </Head>

      <section className="section-pad bg-ivory">
        <div className="container-soft grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Đồng hành"
            title="Dành cho những người cần hồi phục nhưng đời sống chưa thể dừng lại."
            body="Retour phù hợp với người đang căng thẳng kéo dài, khó ngủ, suy nghĩ nhiều hoặc làm việc trí óc cường độ cao."
          />
          <CheckList items={audiences} />
        </div>
      </section>
    </>
  );
}
