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

const historyData = [
  {
    id: 1,
    product: "Wireless Bluetooth Headphones",
    category: "Electronics",
    date: "18 Jun 2026",
    words: 186,
    seo: 98,
  },
  {
    id: 2,
    product: "Premium Leather Wallet",
    category: "Fashion",
    date: "17 Jun 2026",
    words: 154,
    seo: 95,
  },
  {
    id: 3,
    product: "Gaming Mechanical Keyboard",
    category: "Electronics",
    date: "17 Jun 2026",
    words: 201,
    seo: 97,
  },
  {
    id: 4,
    product: "Smart Fitness Watch",
    category: "Fitness",
    date: "16 Jun 2026",
    words: 172,
    seo: 96,
  },
  {
    id: 5,
    product: "Portable Mini Projector",
    category: "Home Electronics",
    date: "15 Jun 2026",
    words: 194,
    seo: 99,
  },
];

const HistorySection = () => {
  const handleAction = (message) => {
    toast.success(message);
  };

  return (
    <section className="py-24">
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
              placeholder="Search history..."
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
                {historyData.map((item, index) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="border-b border-border transition hover:bg-background/40"
                  >
                    <td className="px-6 py-5 font-medium">
                      {item.product}
                    </td>

                    <td className="px-6 py-5 text-muted">
                      {item.category}
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-muted">
                        <Calendar size={16} />
                        {item.date}
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      {item.words}
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success">
                        {item.seo}%
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() =>
                            handleAction("Copied successfully")
                          }
                          className="rounded-xl border border-border p-3 transition hover:border-primary hover:text-primary"
                        >
                          <Copy size={17} />
                        </button>

                        <button
                          onClick={() =>
                            handleAction("Download started")
                          }
                          className="rounded-xl border border-border p-3 transition hover:border-primary hover:text-primary"
                        >
                          <Download size={17} />
                        </button>

                        <button
                          onClick={() =>
                            handleAction("History deleted")
                          }
                          className="rounded-xl border border-border p-3 transition hover:border-red-500 hover:text-red-500"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;