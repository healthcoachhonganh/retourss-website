import type { Metadata } from "next";
import { FeatureImage, SectionHeading, TextCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Về Retour",
  description: "Triết lý, lý do ra đời và ý nghĩa của Retour."
};

export default function AboutRetourPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-soft grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <SectionHeading
            eyebrow="Về Retour"
            title='"Retour" trong tiếng Pháp có nghĩa là Trở về. Trở về với chính mình để chăm sóc và hồi phục tự nhiên.'
            body="Retour được tạo ra để dẫn người khác tìm được đường về nhà của họ"
          />
          <FeatureImage
            src="/about-retour-practice.jpg"
            alt="Thực hành hơi thở và thiền trên bãi biển"
            caption="Một khoảnh khắc thực hành hơi thở, cơ thể và sự tĩnh lặng."
            position="center"
          />
        </div>
      </section>
      <section className="section-pad bg-white/45">
        <div className="container-soft grid gap-5 md:grid-cols-3">
          <TextCard title="Triết lý của Retour" body="Con người vốn đã có khả năng tự hồi phục khi được trở về đúng nhịp của mình." />
          <TextCard title="Vì sao Retour ra đời" body="Retour ra đời từ trải nghiệm kiệt sức, mất ngủ và hành trình học cách tự chăm sóc và hồi phục tự nhiên thông qua hơi thở, cơ thể và nghỉ ngơi sâu." />
          <TextCard title="Ý nghĩa của từ Retour" body="Retour nghĩa là trở về, trở về với nhịp tự nhiên, với tiến trình hồi phục trong sự tả lỏng và thư giãn." />
        </div>
      </section>
    </>
  );
}
