import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the AI Product Description Generator work?",
    answer:
      "Simply enter your product details such as name, category, keywords and features. The AI generates a professional, SEO-friendly description in a few seconds.",
  },
  {
    question: "Can I generate descriptions for Amazon or Shopify?",
    answer:
      "Yes. The generator supports multiple platforms including Amazon, Shopify, Flipkart, WooCommerce, Etsy and many others.",
  },
  {
    question: "Can I download the generated description?",
    answer:
      "Yes. You can copy the generated content instantly or download it as TXT or PDF directly from the generator page.",
  },
  {
    question: "Does the AI optimize content for SEO?",
    answer:
      "Yes. Every generated description includes SEO-friendly structure, readability improvements and keyword optimization.",
  },
  {
    question: "Can I regenerate the content?",
    answer:
      "Absolutely. You can regenerate unlimited variations to find the version that best matches your product and audience.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
            Frequently Asked Questions
          </span>

          <h2 className="section-title mt-6">
            Everything You Need
            <span className="gradient-text"> To Know</span>
          </h2>

          <p className="section-subtitle mt-6">
            Find answers to the most common questions about our AI
            Product Description Generator.
          </p>
        </motion.div>

        <div className="mx-auto mt-20 max-w-4xl space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={faq.question}
                layout
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="pr-6 text-lg font-semibold">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                  >
                    <ChevronDown />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div className="border-t border-border px-6 pb-6 pt-5">
                        <p className="leading-8 text-muted">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default FAQ;