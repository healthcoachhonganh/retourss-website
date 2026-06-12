import { CtaLink, CheckList, FeatureImage, SectionHeading, TextCard } from "@/components/ui";
import { outcomes, softFramework, symptoms } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="container-soft grid min-h-[calc(100vh-8rem)] items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 text-sm font-medium text-clay">Retour</p>
            <h1 className="text-balance font-serif text-5xl font-medium leading-[1.16] text-forest md:text-[3.85rem]">
              Điều hòa hệ thần kinh, ngủ sâu & tái tạo năng lượng thông qua Yoga hồi phục.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-earth">
              Dành cho những người vẫn phải tiếp tục làm việc, chăm sóc gia đình và đưa ra quyết định mỗi ngày
              , dù cơ thể đã bắt đầu lên tiếng.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink href="/hanh-trinh-hoi-phuc">Tìm hiểu chương trình</CtaLink>
              <CtaLink href="/bat-dau-tai-day/danh-gia-muc-do-hoi-phuc" tone="light">
                Làm bài đánh giá 3 phút
              </CtaLink>
            </div>
          </div>
          <FeatureImage
            src="/hero-hong-anh-soc-son.jpg"
            alt="Hồng Anh ngồi thiền trong khu vườn xanh tại Sóc Sơn"
            caption="Một khoảnh khắc thực hành giữa thiên nhiên tại Sóc Sơn."
          />
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="container-soft grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Dấu hiệu" title="Bạn có đang ở trong giai đoạn này?" />
          <CheckList items={symptoms} />
        </div>
      </section>

      <section className="section-pad bg-forest text-ivory">
        <div className="container-soft max-w-4xl">
          <p className="text-sm font-medium text-oat">Điều gì đang xảy ra?</p>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-[1.18] md:text-[3.2rem]">
            Không phải bạn thiếu ý chí.
          </h2>
          <p className="mt-6 text-xl leading-9 text-ivory/80">
            Có thể hệ thần kinh của bạn đã ở trong trạng thái căng thẳng kéo dài quá lâu.
          </p>
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-soft">
          <SectionHeading
            eyebrow="SOFT Framework"
            title="Bốn cánh cửa để cơ thể quay về trạng thái an toàn."
            body="Retour không yêu cầu bạn phải cố gắng nhiều hơn. Chúng tôi bắt đầu từ những thực hành đủ nhỏ, đủ rõ và đủ đều để hệ thần kinh có thể tin tưởng."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {softFramework.map((item) => (
              <article key={item.letter} className="rounded-lg border border-forest/10 bg-white/55 p-6">
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-full bg-olive text-xl font-semibold text-ivory">
                  {item.letter}
                </div>
                <h3 className="font-serif text-2xl font-medium leading-snug text-forest">{item.title}</h3>
                <p className="mt-2 font-medium text-clay">{item.vietnamese}</p>
                <p className="mt-4 leading-7 text-earth">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-oat/45">
        <div className="container-soft grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Sau thực hành" title="Kết quả học viên thường cảm nhận" />
          <CheckList items={outcomes} />
        </div>
      </section>

      <section className="section-pad bg-ivory">
        <div className="container-soft grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <FeatureImage
            src="/le-hong-anh.jpg"
            alt="Chân dung Lê Hồng Anh"
            caption="Lê Hồng Anh, giáo viên Yoga & Health Coach đồng hành cùng Retour."
            position="center top"
          />
          <div>
            <SectionHeading eyebrow="Gặp Hồng Anh" title="Một hành trình trở về với cơ thể, nhịp thở và đời sống gần thiên nhiên." />
            <p className="mt-6 leading-8 text-earth">
              Lê Hồng Anh là giáo viên Yoga & Health Coach, sống tại Sóc Sơn. Anh từng trải qua giai đoạn kiệt
              sức, mất ngủ và mất phương hướng trong những năm đại học sau thời gian cố gắng quá mức: học 2
              chương trình đại học song song, làm lớp trưởng, tham gia chương trình đào tạo nội bộ TGM Next.
            </p>
            <p className="mt-5 leading-8 text-earth">
              Sau đó, anh bắt đầu hành trình trở về học cách tự chăm sóc và hồi phục tự nhiên với nông nghiệp
              sinh thái, Integrative Nutrition Health Coach, Yoga, thiền Anapana, thiền Vipassana, và đời sống gần
              thiên nhiên.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/45">
        <div className="container-soft grid gap-5 md:grid-cols-3">
          <TextCard title="Bắt đầu tại đây" body="Làm bài đánh giá 3 phút hoặc nhận audio miễn phí để thử một thực hành nhẹ nhàng ngay hôm nay." />
          <TextCard title="Hành trình 6 buổi" body="Một chương trình có cấu trúc để hiểu hệ thần kinh, thực hành hơi thở, thư giãn cơ thể và nghỉ ngơi sâu." />
          <TextCard title="Tham gia Retour" body="Đăng ký tư vấn để xem chương trình có phù hợp với tình trạng hiện tại và mong muốn hồi phục của bạn không." />
        </div>
      </section>
    </>
  );
}
