import  { useState } from "react";
import { Button, Input, Loader } from "../components/ui";
import api from "../services/api";

const GeneratorSection = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = async () => {
  if (!product.trim()) return;

  try {
    setLoading(true);

    const response = await api.post("/products", {
  productName: product,
});

    setOutput(response.data.data.description);
  } catch (error) {
    console.error(error);
    setOutput("Something went wrong!");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* LEFT SIDE */}
      <div className="space-y-4">

        <Input
          label="Product Name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Enter product name"
        />

        <Button onClick={handleGenerate}>
          Generate Description
        </Button>
      </div>

      {/* RIGHT SIDE */}
      <div className="
        rounded-xl border p-4 min-h-[200px]
        bg-white text-gray-900
        dark:bg-[#0f172a] dark:text-white
        border-gray-200 dark:border-gray-700
      ">

        {loading ? (
          <div className="flex items-center justify-center h-full">
            <Loader />
          </div>
        ) : (
          <p className="text-gray-700 dark:text-gray-300">
            {output || "Generated output will appear here..."}
          </p>
        )}

      </div>
    </div>
  );
};

export default GeneratorSection;