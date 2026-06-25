import { useEffect } from "react";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        className={`${colors[type]} text-white px-4 py-2 rounded-xl shadow-lg animate-fade-in`}
      >
        {message}
      </div>
    </div>
  );
};

export default Toast;