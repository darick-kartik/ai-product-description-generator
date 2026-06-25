import { useState } from "react";

const useCopyToClipboard = (timeout = 2000) => {
  const [copied, setCopied] = useState(false);

  const copy = async (text) => {
    if (!text) return false;

    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, timeout);

      return true;
    } catch (error) {
      console.error("Failed to copy:", error);
      setCopied(false);
      return false;
    }
  };

  return {
    copied,
    copy,
  };
};

export default useCopyToClipboard;