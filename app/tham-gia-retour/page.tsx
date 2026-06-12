import type { Metadata } from "next";
import { ConsultationForm } from "@/components/forms";
import { SectionHeading, TextCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Tham gia Retour",
  description: "Đăng ký tư vấn chương trình Retour, học phí và hình thức học."
};

export default function JoinPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-soft grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Tham gia Retour"
              title="Chương trình 6 buổi dành cho người muốn hồi phục một cách chậm rãi và thực tế."
              body="Học phí: 1.499.000 VNĐ. Trước khi bắt đầu, bạn có thể đăng ký tư vấn để xem chương trình có phù hợp với tình trạng hiện tại không."
            />
            <div className="mt-8 rounded-lg bg-forest p-6 text-ivory">
              <p className="text-sm font-medium text-oat">Học phí</p>
              <p className="mt-3 font-serif text-[1.9rem] font-medium leading-tight">1.499.000 VNĐ</p>
            </div>
          </div>
          <ConsultationForm />
        </div>
      </section>
      <section className="section-pad bg-white/45">
        <div className="container-soft grid gap-5 md:grid-cols-3">
          <TextCard title="Chương trình dành cho ai" body="Người đang khó ngủ, căng thẳng kéo dài, suy nghĩ quá nhiều, cổ vai gáy thường gồng và muốn có thực hành đơn giản để tự điều hòa." />
          <TextCard title="Không dành cho ai" body="Người đang cần can thiệp y khoa khẩn cấp, muốn kết quả tức thì hoặc không sẵn sàng dành vài phút mỗi ngày để thực hành." />
          <TextCard title="Học như thế nào" body="Học theo 6 buổi có chủ đề rõ ràng, kết hợp hiểu biết nền tảng, thực hành hướng dẫn và bài tập ngắn giữa các buổi." />
        </div>
      </section>
    </>
  );
}
