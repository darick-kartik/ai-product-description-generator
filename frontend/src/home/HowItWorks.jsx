import { motion } from "framer-motion";
import {
  ClipboardList,
  Sparkles,
  FileText,
  Download,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Enter Product Details",
    description:
      "Provide the product name, brand, category, features, keywords, tone and preferred platform.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "AI Generates Content",
    description:
      "Our AI creates a compelling, SEO-friendly product description in just a few seconds.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Review & Optimize",
    description:
      "Check SEO score, reading time and word count before finalizing your description.",
  },
  {
    icon: Download,
    step: "04",
    title: "Copy or Export",
    description:
      "Copy instantly or download the generated description as TXT or PDF for use anywhere.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="badge">
            Simple Workflow
          </span>

          <h2 className="section-title mt-6">
            Generate Professional Content
            <span className="gradient-text"> In Four Easy Steps</span>
          </h2>

          <p className="section-subtitle mt-6">
            A streamlined AI workflow designed to help you create
            high-quality product descriptions without any writing experience.
          </p>
        </motion.div>

        <div className="relative mt-20 grid gap-8 lg:grid-cols-4">
          {/* Connection Line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30 lg:block" />

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
              }}
              className="relative z-10 glass-card p-8 text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-accent shadow-glow">
                <item.icon className="text-white" size={34} />
              </div>

              <div className="mt-8 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Step {item.step}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 leading-7 text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;