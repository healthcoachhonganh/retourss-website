import { Head } from "vite-react-ssg";
import { ArrowRight } from "lucide-react";
import { SectionHeading, TextCard } from "@/components/ui";

export default function JoinPage() {
  return (
    <>
      <Head>
        <title>Tham gia Retour | Retour</title>
        <meta name="description" content="Đăng ký tư vấn chương trình Retour, học phí và hình thức học." />
        <link rel="canonical" href="https://retourss.com/tham-gia-retour" />
      </Head>

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
          
          <div className="grid gap-4 rounded-lg border border-forest/10 bg-white/55 p-6 shadow-soft h-fit">
            <p className="font-serif text-2xl font-medium leading-snug text-forest">
              Liên hệ để đăng ký tư vấn
            </p>
            <p className="leading-7 text-earth">
              Nhắn tin qua Facebook hoặc gửi email để đặt lịch tư vấn miễn phí.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="https://web.facebook.com/honganh.retour"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-medium text-ivory transition hover:bg-moss"
              >
                Nhắn tin Facebook <ArrowRight size={16} />
              </a>
              <a
                href="mailto:retourss.com@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-ivory px-5 py-3 text-sm font-medium text-forest transition hover:bg-oat"
              >
                Gửi email <ArrowRight size={16} />
              </a>
            </div>
          </div>
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
