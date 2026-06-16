import { Head } from "vite-react-ssg";
import { FeatureImage, TextCard } from "@/components/ui";

export default function VeRetourPage() {
  return (
    <>
      <Head>
        <title>Về Retour | Retour</title>
        <meta name="description" content="Triết lý, lý do ra đời và ý nghĩa của Retour." />
        <link rel="canonical" href="https://retourss.com/ve-retour" />
      </Head>

      <section className="section-pad bg-ivory">
        <div className="container-soft grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium text-clay">Về Retour</p>
            <div className="space-y-5 text-earth">
              <h1 className="font-serif text-2xl font-medium leading-[1.45] text-forest md:text-[2.15rem]">
                Retour là hành trình trở về với cơ thể, hơi thở và nhịp sống tự nhiên của chính mình.
              </h1>
              <p className="text-base leading-8 md:text-lg">
                Chúng tôi tin rằng con người vốn có khả năng tự hồi phục khi hệ thần kinh được điều hòa, cơ thể được nghỉ ngơi và tâm trí được lắng dịu.
              </p>
              <p className="text-base leading-8 md:text-lg">
                Thông qua Yoga hồi phục, thư giãn sâu và những thực hành đơn giản hằng ngày, Retour giúp những ai đang làm việc cường độ cao hồi phục năng lượng, thiết lập trạng thái cân bằng và bình an từ bên trong.
              </p>
            </div>
            <p className="mt-6 text-lg leading-8 text-earth">
              Retour được tạo ra để hướng dẫn người khác tìm được đường trở về với chính mình để sống trọn vẹn cuộc đời mình
            </p>
          </div>
          <FeatureImage
            src="/about-retour-practice.jpg"
            alt="Thực hành hơi thở và thiền trên bãi biển"
            caption="Một khoảnh khắc thực hành hơi thở, cơ thể và sự tĩnh lặng."
            position="center"
          />
        </div>
      </section>
      <section className="section-pad bg-white/45">
        <div className="container-soft grid gap-5 md:grid-cols-3">
          <TextCard title="Triết lý của Retour" body="Con người vốn đã có khả năng tự hồi phục khi được trở về đúng nhịp của mình." />
          <TextCard title="Vì sao Retour ra đời" body="Retour ra đời từ trải nghiệm kiệt sức, mất ngủ và hành trình học cách tự chăm sóc và hồi phục tự nhiên thông qua hơi thở, cơ thể và nghỉ ngơi sâu." />
          <TextCard title="Ý nghĩa của từ Retour" body="Retour nghĩa là trở về, trở về với nhịp tự nhiên, với tiến trình hồi phục trong sự thả lỏng và thư giãn." />
        </div>
      </section>
    </>
  );
}
