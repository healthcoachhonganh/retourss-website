import type { Metadata } from "next";
import { FeatureImage, TextCard } from "@/components/ui";

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
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium text-clay">Về Hồng Anh</p>
            <h1 className="text-balance font-serif text-4xl font-medium leading-[1.18] text-forest md:text-[3.2rem]">
              Thành công không cần đánh đổi bằng sức khỏe.
            </h1>
            <div className="mt-6 space-y-5 leading-8 text-earth">
              <p>Mình tin rằng sức khỏe không phải là phần thưởng sau thành công.</p>
              <p>Sức khỏe là nền tảng để một người có thể sống, làm việc và cống hiến một cách bền vững.</p>
              <p>
                Nhưng nhiều người chỉ nhận ra điều đó khi cơ thể bắt đầu lên tiếng: khó ngủ, kiệt sức, mất năng
                lượng hoặc cảm thấy lạc hướng giữa guồng quay công việc và cuộc sống.
              </p>
              <p>Mình cũng từng ở đó.</p>
              <p>
                Hành trình học Yoga, dinh dưỡng tích hợp, thiền định và đời sống gần thiên nhiên giúp mình nhận ra
                rằng sự hồi phục không bắt đầu từ việc cố gắng nhiều hơn, mà từ việc biết dừng lại, lắng nghe cơ thể và
                trở về với những điều đơn giản nhất.
              </p>
              <p>Retour ra đời từ hành trình đó.</p>
            </div>
          </div>
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
