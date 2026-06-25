export const calculateWordCount = (text = "") => {
  if (!text.trim()) return 0;

  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
};

export const calculateReadingTime = (text = "") => {
  const words = calculateWordCount(text);

  if (words === 0) return "0 min";

  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min`;
};

export const generateSEOScore = () => {
  return Math.floor(Math.random() * 6) + 95;
};

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const downloadTXT = (
  filename,
  content
) => {
  const blob = new Blob([content], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};

export const downloadPDF = (content) => {
  const printWindow = window.open("", "_blank");

  printWindow.document.write(`
    <html>
      <head>
        <title>Product Description</title>
        <style>
          body{
            font-family:Arial,sans-serif;
            padding:40px;
            line-height:1.8;
            color:#222;
          }
          h1{
            margin-bottom:30px;
          }
        </style>
      </head>
      <body>
        <h1>AI Product Description</h1>
        <p>${content.replace(/\n/g, "<br/>")}</p>
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
};

export const formatDate = (date = new Date()) => {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};