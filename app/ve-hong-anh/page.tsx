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
            captionClassName="bg-forest/[0.92] px-4 py-3 text-base/7 font-semibold text-ivory ring-1 ring-ivory/[0.14] backdrop-blur-md sm:px-5 sm:py-3.5 sm:text-[1.05rem]/7"
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
          <TextCard
            title="Câu chuyện của mình"
            body={`Những năm đại học, mình học hai chương trình cùng lúc, làm lớp trưởng và tham gia nhiều hoạt động đào tạo, phát triển bản thân.

Bên ngoài mình vẫn đang tiến lên. Nhưng bên trong, cơ thể dần lên tiếng bằng mất ngủ, kiệt sức và cảm giác mất kết nối với chính mình.

Khoảng thời gian đó giúp mình nhận ra một điều quan trọng:

Không phải lúc nào cố gắng nhiều hơn sẽ có kết quả là thành công.

Đôi khi điều chúng ta cần là học cách nghỉ ngơi và hồi phục đúng cách.`}
          />
          <TextCard
            title="Chứng chỉ & đào tạo"
            body={`Hành trình học tập của mình trải dài từ Yoga cổ điển, Dinh dưỡng tích hợp, thiền định cho đến các phương pháp hồi phục tự nhiên dựa trên sự tin tưởng vào chính cơ thể của mình.

Nhưng điều quan trọng nhất không phải là số lượng chứng chỉ.

Điều quan trọng là những kiến thức đó đã được thể nghiệm qua tiến trình hồi phục tự nhiên của chính mình và hàng trăm giờ đồng hành cùng nhiều học viên.`}
          />
          <TextCard
            title="Cuộc sống tại Sóc Sơn"
            body={`Hiện tại mình sống tại Sóc Sơn, gần thiên nhiên, với một nhịp sống chậm và đơn giản hơn.

Leo núi, làm vườn, thực hành Yoga, thiền định và chăm sóc sức khỏe tự nhiên không chỉ là công việc, mà là cách mình sống mỗi ngày.

Mình tin rằng để làm trọn vẹn vai trò người hướng dẫn, chính mình phải sống với những giá trị đó mỗi ngày sâu sắc hơn.`}
          />
          <TextCard
            title="Vì sao mình chọn công việc này"
            body={`Thú thật là công việc này chọn mình!

Retour không được tạo ra để giúp mọi người làm nhiều hơn. Retour được tạo ra để giúp mọi người hồi phục đủ sâu, để có thể tiếp tục sống, làm việc và cống hiến mà không đánh mất chính mình.`}
          />
        </div>
      </section>
    </>
  );
}
