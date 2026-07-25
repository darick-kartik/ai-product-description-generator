import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  History,
  Search,
  Calendar,
  Copy,
  Download,
  Trash2,
} from "lucide-react";
import toast from "react-hot-toast";

import api from "../services/api";
import Loader from "../components/ui/Loader";

const HistorySection = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const loadHistory = async () => {
    setLoading(true);

    try {
      const response = await api.get("/products");
      setHistoryData(response.data.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load history");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);

  const filteredHistory = useMemo(() => {
    return historyData.filter((item) => {
      const query = search.toLowerCase();

      return (
        item.productName?.toLowerCase().includes(query) ||
        item.category?.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query)
      );
    });
  }, [historyData, search]);

  const handleCopy = async (description) => {
    try {
      await navigator.clipboard.writeText(description);
      toast.success("Description copied successfully");
    } catch (error) {
      toast.error("Failed to copy description");
    }
  };

  const handleDownload = (product) => {
    const content = `
Product Name: ${product.productName}

Category: ${product.category}

Description:

${product.description}
`;

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
   link.download = `${product.productName
  .replace(/[^a-zA-Z0-9]/g, "_")
  .toLowerCase()}.txt`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    toast.success("Download started");
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    try {
      await api.delete(`/products/${id}`);

      setHistoryData((prev) =>
        prev.filter((item) => item._id !== id)
      );

      toast.success("Product deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete product");
    }
  };

  if (loading) {
    return (
      <div className="py-24">
        <Loader />
      </div>
    );
  }

  return (<section className="py-24">
      <div className="container-app">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="badge gap-2">
            <History size={15} />
            Generation History
          </span>

          <h1 className="section-title mt-6">
            Previously Generated Descriptions
          </h1>

          <p className="section-subtitle mt-6">
            Access your recent AI-generated product descriptions,
            review performance metrics and reuse them anytime.
          </p>
        </motion.div>

        {/* Search */}
        <div className="mx-auto mt-14 max-w-xl">
          <div className="glass-card flex items-center gap-4 px-5 py-4">
            <Search className="text-muted" size={20} />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by product, category or description..."
              className="w-full bg-transparent outline-none placeholder:text-muted"
            />
          </div>
        </div>

        {/* Table */}
        <div className="glass-card mt-14 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="border-b border-border bg-background/60">
                <tr>
                  <th className="px-6 py-5 text-left font-semibold">
                    Product
                  </th>

                  <th className="px-6 py-5 text-left font-semibold">
                    Category
                  </th>

                  <th className="px-6 py-5 text-left font-semibold">
                    Date
                  </th>

                  <th className="px-6 py-5 text-left font-semibold">
                    Words
                  </th>

                  <th className="px-6 py-5 text-left font-semibold">
                    SEO
                  </th>

                  <th className="px-6 py-5 text-center font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredHistory.length > 0 ? (
                  filteredHistory.map((item, index) => (
                    <motion.tr
                      key={item._id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="border-b border-border transition hover:bg-background/40"
                    >
                      <td className="px-6 py-5 font-medium">
                        {item.productName}
                      </td>

                      <td className="px-6 py-5 text-muted">
                        {item.category}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-muted">
                          <Calendar size={16} />
                          {new Date(item.createdAt).toLocaleDateString(
                            "en-IN",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        {item.description
                          ? item.description.split(" ").length
                          : 0}
                      </td>

                      <td className="px-6 py-5">
                        <span className="rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success">
                          98%
                        </span>
                      </td>
                                            <td className="px-6 py-5">
                        <div className="flex justify-center gap-3">
                          <button
                            onClick={() => handleCopy(item.description||"")}
                            title="Copy Description"
                            className="rounded-xl border border-border p-3 transition hover:border-primary hover:text-primary"
                          >
                            <Copy size={17} />
                          </button>

                          <button
                            onClick={() => handleDownload(item)}
                            title="Download Description"
                            className="rounded-xl border border-border p-3 transition hover:border-primary hover:text-primary"
                          >
                            <Download size={17} />
                          </button>

                          <button
                            onClick={() => handleDelete(item._id)}
                            title="Delete Product"
                            className="rounded-xl border border-border p-3 transition hover:border-red-500 hover:text-red-500"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-16 text-center"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <History
                          size={56}
                          className="mb-5 text-gray-400"
                        />

                        <h3 className="text-2xl font-bold">
                          No Products Found
                        </h3>

                        <p className="mt-3 text-gray-500 dark:text-gray-400">
                          {search
                            ? "No products match your search."
                            : "Generate your first AI product description to see it here."}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;