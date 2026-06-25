import { useMemo } from "react";

const useWordCount = (text = "") => {
  const wordCount = useMemo(() => {
    if (!text.trim()) return 0;

    return text
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
  }, [text]);

  const readingTime = useMemo(() => {
    if (wordCount === 0) return "0 min";

    const minutes = Math.max(1, Math.ceil(wordCount / 200));

    return `${minutes} min`;
  }, [wordCount]);

  return {
    wordCount,
    readingTime,
  };
};

export default useWordCount;