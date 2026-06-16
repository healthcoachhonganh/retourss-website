import { useMemo, useState } from "react";

const questions = [
  "Chất lượng giấc ngủ",
  "Mức độ căng thẳng",
  "Mức độ suy nghĩ quá nhiều",
  "Năng lượng buổi sáng",
  "Căng cổ vai gáy",
  "Cảm giác burnout"
];

function getResult(score: number) {
  if (score <= 20) {
    return {
      title: "Nhu cầu hồi phục thấp",
      body: "Cơ thể bạn có thể đang còn khá nhiều khoảng đệm. Hãy duy trì các nhịp nghỉ nhỏ trong ngày để bảo vệ nền năng lượng này."
    };
  }

  if (score <= 39) {
    return {
      title: "Nhu cầu hồi phục trung bình",
      body: "Hệ thần kinh của bạn có thể đang chịu áp lực đáng kể. Đây là thời điểm tốt để xây một thực hành đều, nhẹ và có cấu trúc."
    };
  }

  return {
    title: "Nhu cầu hồi phục cao",
    body: "Cơ thể có thể đã ở trong trạng thái căng thẳng kéo dài. Bạn nên ưu tiên nghỉ ngơi sâu, giảm kích hoạt và tìm sự đồng hành phù hợp."
  };
}

export function AssessmentForm() {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(questions.map((question) => [question, 5]))
  );
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => Object.values(values).reduce((sum, value) => sum + value, 0), [values]);
  const result = getResult(score);

  return (
    <div className="rounded-lg border border-forest/10 bg-white/55 p-5 shadow-soft md:p-8">
      <form
        className="grid gap-7"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        {questions.map((question) => (
          <label key={question} className="grid gap-3">
            <span className="flex items-center justify-between gap-4 text-forest">
              <span>{question}</span>
              <span className="rounded-full bg-oat px-3 py-1 text-sm font-medium">{values[question]}/10</span>
            </span>
            <input
              type="range"
              min="0"
              max="10"
              value={values[question]}
              onChange={(event) => setValues((current) => ({ ...current, [question]: Number(event.target.value) }))}
              className="accent-forest"
            />
          </label>
        ))}
        <button type="submit" className="rounded-full bg-forest px-6 py-3 font-medium text-ivory transition hover:bg-moss">
          Xem kết quả
        </button>
      </form>

      {submitted ? (
        <div className="mt-8 rounded-lg bg-oat/70 p-6">
          <p className="text-sm font-medium text-clay">Tổng điểm: {score}/60</p>
          <h2 className="mt-3 font-serif text-3xl font-medium leading-snug text-forest">{result.title}</h2>
          <p className="mt-4 leading-7 text-earth">{result.body}</p>
        </div>
      ) : null}
    </div>
  );
}
