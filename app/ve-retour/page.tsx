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
            title="Trở về với một cơ thể biết nghỉ, biết thở và biết hồi phục."
            body="Retour được tạo ra cho những giai đoạn con người vẫn phải tiếp tục sống, làm việc và chăm sóc người khác trong khi bên trong đã quá tải."
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
          <TextCard title="Triết lý của Retour" body="Hồi phục bắt đầu khi cơ thể cảm thấy đủ an toàn để buông bớt phòng vệ. Vì vậy, chúng tôi chọn sự chậm rãi, rõ ràng và thực tế." />
          <TextCard title="Vì sao Retour ra đời" body="Retour ra đời từ trải nghiệm kiệt sức, mất ngủ và hành trình học cách chăm sóc bản thân bằng hơi thở, cơ thể, nghỉ ngơi sâu." />
          <TextCard title="Ý nghĩa của từ Retour" body="Retour nghĩa là trở về. Trở về với nhịp tự nhiên, với cảm nhận thân thể và với phần mình không cần phải cố thêm nữa." />
        </div>
      </section>
    </>
  );
}
