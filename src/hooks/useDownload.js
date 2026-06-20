import toast from "react-hot-toast";

const useDownload = () => {
  const downloadTXT = (
    filename = "product-description.txt",
    content = ""
  ) => {
    try {
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

      toast.success("TXT downloaded successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Unable to download TXT.");
    }
  };

  const downloadPDF = (
    title = "AI Product Description",
    content = ""
  ) => {
    try {
      const printWindow = window.open("", "_blank");

      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${title}</title>
            <style>
              *{
                box-sizing:border-box;
              }

              body{
                font-family:Arial,Helvetica,sans-serif;
                padding:40px;
                color:#222;
                line-height:1.8;
              }

              h1{
                margin-bottom:30px;
              }

              p{
                white-space:pre-wrap;
              }
            </style>
          </head>

          <body>
            <h1>${title}</h1>
            <p>${content}</p>
          </body>
        </html>
      `);

      printWindow.document.close();
      printWindow.focus();
      printWindow.print();

      toast.success("PDF ready to print.");
    } catch (error) {
      console.error(error);
      toast.error("Unable to generate PDF.");
    }
  };

  return {
    downloadTXT,
    downloadPDF,
  };
};

export default useDownload;