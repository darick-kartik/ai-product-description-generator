import { useState } from "react";
import { Button, Input, Loader } from "../components/ui";
import api from "../services/api";
import toast from "react-hot-toast";

const GeneratorSection = () => {
  const [loading, setLoading] = useState(false);

  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [features, setFeatures] = useState("");

  const [output, setOutput] = useState("");

  const handleGenerate = async () => {
  if (loading) return;

  if (!product.trim() || !category.trim() || !features.trim()) {
    toast.error("Please fill all fields.");
    return;
  }

  try {
    setLoading(true);
    setOutput("");

    const response = await api.post("/ai/generate", {
      productName: product.trim(),
      category: category.trim(),
      features: features.trim(),
    });

    setOutput(
  response.data.description ||
  "No description was returned by the AI."
);

    toast.success("Description generated successfully!");
  } catch (error) {
    console.error(error);

    const message =
      error.response?.data?.message ||
      "Failed to generate description.";

    toast.error(message);

    setOutput("");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Left Section */}
      <div className="space-y-4">

        <Input
          label="Product Name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Wireless Bluetooth Headphones"
        />

        <Input
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Electronics"
        />

        <Input
          label="Features"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          placeholder="Bluetooth 5.3, Noise Cancellation, Fast Charging"
        />

        <Button
  onClick={handleGenerate}
  disabled={loading}
  className="w-full"
>
  {loading ? "Generating..." : "Generate Description"}
</Button>

      </div>

      {/* Right Section */}
      <div
        className="
          rounded-xl
          border
          p-4
          min-h-[350px]
          bg-white
          text-gray-900
          dark:bg-[#0f172a]
          dark:text-white
          border-gray-200
          dark:border-gray-700
        "
      >
       {loading ? (
  <div className="flex h-full flex-col items-center justify-center gap-3">
    <Loader />
    <p className="text-sm text-gray-500 dark:text-gray-400">
      AI is generating your description...
    </p>
  </div>
) : (
          <pre className="whitespace-pre-wrap font-sans text-gray-700 dark:text-gray-300">
            {output || "Generated product description will appear here..."}
          </pre>
        )}
      </div>

    </div>
  );
};

export default GeneratorSection;