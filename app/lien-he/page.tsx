import type { Metadata } from "next";
import { ContactForm } from "@/components/forms";
import { SectionHeading, TextCard } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ Retour để được tư vấn về chương trình hồi phục hệ thần kinh."
};

export default function ContactPage() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-soft grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Liên hệ"
          title="Kết nối với tụi mình để nhận sự hỗ trợ sớm nhất."
          body="Hãy chia sẻ tình trạng hiện tại, điều bạn đang mong muốn và thời điểm bạn muốn bắt đầu."
        />
        <div className="grid gap-5">
          <TextCard
            title="Retour"
            body={`Zalo: ${site.zalo}. Facebook: ${site.facebook}. Email: ${site.contactEmail}.`}
          />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
