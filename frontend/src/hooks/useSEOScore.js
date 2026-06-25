import { useMemo } from "react";

const useSEOScore = (text = "") => {
  const score = useMemo(() => {
    if (!text.trim()) {
      return 0;
    }

    let value = 60;

    const wordCount = text
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

    if (wordCount >= 50) value += 10;
    if (wordCount >= 100) value += 8;
    if (wordCount >= 150) value += 6;

    if (/[.,!?]/.test(text)) value += 5;

    const keywords = [
      "premium",
      "quality",
      "durable",
      "lightweight",
      "wireless",
      "portable",
      "advanced",
      "comfortable",
      "designed",
      "performance",
    ];

    const lower = text.toLowerCase();

    const matchedKeywords = keywords.filter((keyword) =>
      lower.includes(keyword)
    ).length;

    value += Math.min(matchedKeywords * 2, 10);

    return Math.min(value, 100);
  }, [text]);

  return score;
};

export default useSEOScore;