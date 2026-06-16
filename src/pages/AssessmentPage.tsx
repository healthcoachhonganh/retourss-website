import { Head } from "vite-react-ssg";
import { AssessmentForm } from "@/components/AssessmentForm";
import { SectionHeading } from "@/components/ui";

export default function AssessmentPage() {
  return (
    <>
      <Head>
        <title>Đánh giá nhu cầu hồi phục hệ thần kinh | Retour</title>
        <meta name="description" content="Bài đánh giá 3 phút giúp bạn nhìn lại nhu cầu hồi phục của hệ thần kinh." />
        <link rel="canonical" href="https://retourss.com/bat-dau-tai-day/danh-gia-muc-do-hoi-phuc" />
      </Head>

      <section className="section-pad bg-ivory">
        <div className="container-soft grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Bắt đầu tại đây"
            title="Đánh giá nhu cầu hồi phục hệ thần kinh"
            body="Chọn điểm từ 0 đến 10 cho từng câu hỏi. Không có đáp án đúng sai, chỉ có một lần lắng nghe trung thực với cơ thể."
          />
          <AssessmentForm />
        </div>
      </section>
    </>
  );
}
