import type { Metadata } from "next";
import { AudioSignupForm } from "@/components/forms";
import { FeatureImage, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Audio thư giãn miễn phí",
  description: "Nhận audio 10 phút giúp cơ thể chuyển từ trạng thái căng thẳng sang nghỉ ngơi."
};

export default function FreeAudioPage() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-soft grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Audio miễn phí"
            title="Audio 10 phút giúp cơ thể chuyển từ trạng thái căng thẳng sang nghỉ ngơi."
            body="Một thực hành ngắn, chậm và nhẹ để bạn có thể thử ngay khi cơ thể cần hạ nhịp."
          />
          <div className="mt-8">
            <AudioSignupForm />
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
  );
}
