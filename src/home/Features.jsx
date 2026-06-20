import { motion } from "framer-motion";
import {
  Sparkles,
  Search,
  Globe,
  Zap,
  BarChart3,
  Languages,
  FileDown,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Powered Writing",
    description:
      "Generate premium product descriptions using advanced AI that writes naturally and professionally.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Automatically include keywords and improve search engine visibility with optimized content.",
  },
  {
    icon: Globe,
    title: "Multi Platform",
    description:
      "Generate descriptions for Amazon, Shopify, Flipkart, WooCommerce, Etsy and more.",
  },
  {
    icon: Languages,
    title: "Multiple Languages",
    description:
      "Create engaging product descriptions in different languages with natural readability.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Track generated content, SEO scores, word count and performance from your dashboard.",
  },
  {
    icon: FileDown,
    title: "Export Options",
    description:
      "Download generated descriptions as TXT or PDF with one click.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Generate complete descriptions within seconds with a smooth AI experience.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Ready",
    description:
      "Modern architecture designed for startups, agencies and enterprise businesses.",
  },
];

const Features = () => {
  return (
    <section className="relative py-24">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="badge">
            Premium Features
          </span>

          <h2 className="section-title mt-6">
            Everything You Need To Create
            <span className="gradient-text"> Amazing Content</span>
          </h2>

          <p className="section-subtitle mt-6">
            Powerful AI features designed for modern eCommerce
            businesses, marketers, agencies and creators.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
              }}
              className="glass-card group relative overflow-hidden p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <feature.icon size={30} />
              </div>

              <h3 className="text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-5 leading-7 text-muted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;