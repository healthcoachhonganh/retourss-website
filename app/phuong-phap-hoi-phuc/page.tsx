import type { Metadata } from "next";
import { SectionHeading, TextCard } from "@/components/ui";
import { softFramework } from "@/data/site";

export const metadata: Metadata = {
  title: "Phương pháp hồi phục",
  description: "SOFT Framework và cách hồi phục hệ thần kinh diễn ra tại Retour."
};

export default function MethodPage() {
  return (
    <>
      <section className="section-pad bg-ivory">
        <div className="container-soft">
          <SectionHeading
            eyebrow="Phương pháp hồi phục"
            title="SOFT Framework giúp bạn đi từ căng thẳng kéo dài về nghỉ ngơi sâu."
            body="Phương pháp của Retour không bắt đầu từ việc ép tâm trí phải yên. Chúng tôi bắt đầu từ những tín hiệu cơ thể có thể cảm nhận được."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {softFramework.map((item) => (
              <TextCard key={item.letter} title={`${item.letter}: ${item.title}`} body={`${item.vietnamese}. ${item.body}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-oat/45">
        <div className="container-soft grid gap-5 md:grid-cols-2">
          <TextCard title="Hồi phục hệ thần kinh diễn ra như thế nào?" body="Cơ thể cần được lặp lại các trải nghiệm an toàn: thở chậm hơn, cơ bớt gồng, tâm trí bớt bị kéo đi, và giấc nghỉ trở nên sâu hơn." />
          <TextCard title="Hồi phục khác thư giãn ở điểm nào?" body="Thư giãn có thể là cảm giác dễ chịu tạm thời. Hồi phục là quá trình giúp hệ thần kinh xây lại khả năng tự điều hòa trong đời sống thật." />
        </div>
      </section>
    </>
  );
}
