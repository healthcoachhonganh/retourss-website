import type { Metadata } from "next";
import { FeatureImage, SectionHeading, TextCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Về Hồng Anh",
  description: "Câu chuyện, chứng chỉ, đào tạo và cuộc sống tại Sóc Sơn của Lê Hồng Anh."
};

export default function HongAnhPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-soft grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <FeatureImage
            src="/hong-anh-workspace.jpg"
            alt="Hồng Anh thực hành trong không gian làm việc mộc mạc"
            caption="Không gian thực hành và làm việc của Hồng Anh trong đời sống gần thiên nhiên."
            position="center 42%"
          />
          <SectionHeading
            eyebrow="Về Hồng Anh"
            title="Tôi chọn công việc này vì hiểu cảm giác cơ thể đã mệt nhưng cuộc sống vẫn đòi mình tiếp tục."
            body="Từ giai đoạn kiệt sức, mất ngủ và mất phương hướng, Hồng Anh đi qua một hành trình học lại cách chăm sóc bản thân bằng những thực hành tự nhiên, chậm rãi và bền vững."
          />
        </div>
      </section>
      <section className="section-pad bg-white/45">
        <div className="container-soft grid gap-5 md:grid-cols-2">
          <TextCard title="Câu chuyện của tôi" body="Những năm đại học, Hồng Anh học 2 chương trình song song, làm lớp trưởng và tham gia đào tạo nội bộ TGM Next. Sau thời gian cố gắng quá mức, cơ thể bắt đầu lên tiếng bằng mất ngủ và kiệt sức." />
          <TextCard title="Chứng chỉ & đào tạo" body="Integrative Nutrition Health Coach, Yoga, thiền Anapana, thiền Vipassana và các thực hành hồi phục tự nhiên dựa trên cơ thể." />
          <TextCard title="Cuộc sống tại Sóc Sơn" body="Đời sống gần thiên nhiên, nông nghiệp sinh thái và nhịp sống giản dị giúp Hồng Anh tiếp tục thực hành điều mình chia sẻ." />
          <TextCard title="Vì sao tôi chọn công việc này" body="Vì rất nhiều người không cần bị thúc phải mạnh mẽ hơn. Họ cần một nơi đủ an toàn để cơ thể được hồi phục." />
        </div>
      </section>
    </>
  );
}
