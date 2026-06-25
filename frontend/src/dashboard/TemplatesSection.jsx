import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  Star,
  Copy,
  Eye,
  ShoppingBag,
  Laptop,
  Shirt,
  Smartphone,
  Home,
  Dumbbell,
} from "lucide-react";
import toast from "react-hot-toast";

const templates = [
  {
    icon: Smartphone,
    title: "Electronics",
    category: "Technology",
    description:
      "Professional AI template for gadgets, accessories, and consumer electronics.",
  },
  {
    icon: Shirt,
    title: "Fashion",
    category: "Clothing",
    description:
      "Create engaging product descriptions for apparel, footwear and accessories.",
  },
  {
    icon: Home,
    title: "Home & Kitchen",
    category: "Lifestyle",
    description:
      "Generate premium descriptions for home décor, furniture and kitchen products.",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    category: "Health",
    description:
      "AI templates designed for gym equipment, supplements and fitness accessories.",
  },
  {
    icon: Laptop,
    title: "Software",
    category: "Digital",
    description:
      "Create compelling SaaS and software product descriptions with ease.",
  },
  {
    icon: ShoppingBag,
    title: "General eCommerce",
    category: "Marketplace",
    description:
      "A versatile template suitable for Amazon, Shopify, WooCommerce and more.",
  },
];

const TemplatesSection = () => {
  const handleUse = () => {
    toast.success("Template selected");
  };

  return (
    <section className="py-24">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="badge gap-2">
            <Sparkles size={15} />
            AI Templates
          </span>

          <h1 className="section-title mt-6">
            Ready-to-Use Product Templates
          </h1>

          <p className="section-subtitle mt-6">
            Choose a professionally designed template and generate
            high-converting product descriptions even faster.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="glass-card flex items-center gap-4 p-4">
            <Search className="text-muted" />

            <input
              type="text"
              placeholder="Search templates..."
              className="w-full bg-transparent outline-none placeholder:text-muted"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {templates.map((template, index) => (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
              }}
              whileHover={{
                y: -10,
              }}
              className="glass-card group overflow-hidden p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <template.icon size={30} />
                </div>

                <button className="rounded-xl border border-border p-3 transition hover:border-primary hover:text-primary">
                  <Star size={18} />
                </button>
              </div>

              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {template.category}
              </span>

              <h2 className="mt-5 text-2xl font-bold">
                {template.title}
              </h2>

              <p className="mt-5 leading-7 text-muted">
                {template.description}
              </p>

              <div className="mt-8 flex gap-3">
                <button className="secondary-btn flex-1 gap-2">
                  <Eye size={17} />
                  Preview
                </button>

                <button
                  onClick={handleUse}
                  className="primary-btn flex-1 gap-2"
                >
                  <Copy size={17} />
                  Use
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;