import { useEffect, useState } from "react";

const useTypingAnimation = (
  text = "",
  speed = 20,
  start = true
) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!start) {
      setDisplayText("");
      return;
    }

    setDisplayText("");

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return displayText;
};

export default useTypingAnimation;