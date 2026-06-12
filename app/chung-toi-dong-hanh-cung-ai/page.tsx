import type { Metadata } from "next";
import { CheckList, SectionHeading } from "@/components/ui";
import { audiences } from "@/data/site";

export const metadata: Metadata = {
  title: "Chúng tôi đồng hành cùng ai",
  description: "Những nhóm người phù hợp với chương trình hồi phục hệ thần kinh của Retour."
};

export default function AudiencePage() {
  return (
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
  );
}
