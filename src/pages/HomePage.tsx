import { Head } from "vite-react-ssg";
import { CtaLink, CheckList, FeatureImage, SectionHeading, TextCard } from "@/components/ui";
import { outcomes, softFramework, symptoms } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Retour | Giúp người làm việc trí óc ngủ sâu và giảm kiệt sức</title>
        <meta name="description" content="Retour giúp người làm việc trí óc cường độ cao ngủ sâu hơn, giảm căng thẳng và tái tạo năng lượng thông qua Yoga hồi phục." />
        <meta property="og:title" content="Retour | Giúp người làm việc trí óc ngủ sâu và giảm kiệt sức" />
        <meta property="og:description" content="Retour giúp người làm việc trí óc cường độ cao ngủ sâu hơn, giảm căng thẳng và tái tạo năng lượng thông qua Yoga hồi phục." />
        <meta property="og:url" content="https://retourss.com" />
        <meta property="og:site_name" content="Retour" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <link rel="canonical" href="https://retourss.com" />
      </Head>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-ivory">
        <div className="container-soft grid items-start gap-10 py-12 sm:items-center sm:py-16 lg:min-h-[calc(100svh-8.5rem)] lg:gap-16 lg:py-20 lg:grid-cols-[1fr_0.9fr]">

          {/* ── Left column: copy ─── */}
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-clay shadow-[0_1px_6px_rgba(33,56,42,0.06)] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-olive"></span>
              Yoga hồi phục &amp; điều hòa hệ thần kinh
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-balance font-serif text-[2.05rem] font-medium leading-[1.22] text-forest sm:text-[2.4rem] md:text-[2.75rem]">
              Ngủ sâu hơn. Dịu hệ thần kinh.{" "}
              <span className="text-moss">Hồi phục năng lượng</span> để tiếp tục sống và làm việc.
            </h1>

            {/* Sub-copy */}
            <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.85] text-earth">
              Retour hướng dẫn người làm việc trí óc cường độ cao thả lỏng cơ thể, làm dịu tâm trí và xây lại nhịp hồi phục qua yoga, hơi thở và thư giãn sâu.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink href="/bat-dau-tai-day/danh-gia-muc-do-hoi-phuc">
                Đánh giá nhu cầu hồi phục
              </CtaLink>
              <CtaLink href="/nhip-hoi-phuc" tone="light">
                Xem hành trình 6 buổi
              </CtaLink>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-forest/10 pt-7">
              {[
                { icon: "✦", label: "20/20 học viên cảm nhận thay đổi từ buổi đầu" },
                { icon: "✦", label: "6 buổi hướng dẫn trực tiếp" },
                { icon: "✦", label: "Dành cho người làm việc trí óc quá tải" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-[0.8rem] text-earth/80">
                  <span className="text-[0.55rem] text-olive">{t.icon}</span>
                  {t.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: image card ─── */}
          <div className="relative w-full">
            <FeatureImage
              src="/hero-hong-anh-soc-son.jpg"
              alt="Hồng Anh ngồi thiền trong khu vườn xanh tại Sóc Sơn"
              caption="Một khoảnh khắc thực hành giữa thiên nhiên tại Sóc Sơn."
            />
            {/* Decorative accent ring — only on sm+ to avoid mobile overflow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 -right-4 -z-10 hidden h-full w-full rounded-lg border border-forest/10 sm:block"
            />
          </div>

        </div>
      </section>
      {/* ── / HERO ───────────────────────────────────────────── */}

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
            caption="Lê Hồng Anh, giáo viên Yoga & Health Coach, người sáng lập và hướng dẫn chương trình Retour."
            position="center top"
            aspectRatio="1/1"
          />
          <div>
            <SectionHeading eyebrow="Gặp Hồng Anh" title="Thành công không cần đánh đổi bằng sức khỏe." />
            <div className="mt-6 space-y-5 leading-8 text-earth">
              <p>Mình tin rằng sức khỏe không phải là phần thưởng sau thành công.</p>
              <p>Sức khỏe là nền tảng để một người có thể sống, làm việc and cống hiến một cách bền vững.</p>
              <p>
                Nhưng nhiều người trong chúng ta chỉ nhận ra điều đó khi cơ thể bắt đầu lên tiếng: khó ngủ, kiệt
                sức, mất năng lượng hoặc cảm thấy lạc hướng giữa guồng quay công việc và cuộc sống.
              </p>
              <p>Mình cũng từng ở đó.</p>
              <p>
                Trong những năm đại học, mình trải qua giai đoạn mất ngủ, kiệt sức và mất phương hướng khi cố gắng
                theo đuổi quá nhiều mục tiêu cùng lúc. Chính trải nghiệm đó đã đưa mình bước vào hành trình học cách
                chăm sóc và hồi phục sức khỏe một cách tự nhiên.
              </p>
              <p>
                Từ Yoga, dinh dưỡng tích hợp, thiền định cho đến đời sống gần thiên nhiên, mình dần nhận ra rằng sự
                hồi phục không bắt đầu từ việc cố gắng nhiều hơn, mà từ việc biết dừng lại, lắng nghe cơ thể và trở về
                với những điều đơn giản nhất.
              </p>
              <p>Retour ra đời từ hành trình đó.</p>
              <p>
                Mình tin rằng chúng ta hoàn toàn có thể sống và thành công mà không cần đánh đổi bằng sức khỏe. Mà
                bắt đầu từ ngủ sâu hơn, thở chậm lại, hồi phục năng lượng và xây dựng một nhịp sống bền vững từ bên
                trong.
              </p>
            </div>
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
