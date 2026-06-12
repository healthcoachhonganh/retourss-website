import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading, TextCard } from "@/components/ui";
import { startLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Bắt đầu tại đây",
  description: "Làm bài đánh giá mức độ hồi phục hoặc nhận audio thư giãn miễn phí từ Retour."
};

export default function StartHerePage() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-soft">
        <SectionHeading
          eyebrow="Bắt đầu tại đây"
          title="Chọn một bước nhỏ để lắng nghe cơ thể hôm nay."
          body="Bạn có thể bắt đầu bằng bài đánh giá 3 phút hoặc nhận audio 10 phút để thử đi vào nghỉ ngơi sâu."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {startLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <TextCard title={link.title} body={link.description} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
