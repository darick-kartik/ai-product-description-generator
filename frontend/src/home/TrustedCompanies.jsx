import { motion } from "framer-motion";

const companies = [
  "OpenAI",
  "Vercel",
  "Stripe",
  "Shopify",
  "Amazon",
  "Notion",
  "Adobe",
  "Linear",
];

const TrustedCompanies = () => {
  return (
    <section className="py-24">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted">
            Trusted By Modern Teams
          </p>

          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            Built for creators, startups and enterprises
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Thousands of businesses use AI Product Description Generator
            to create high-converting product content in seconds.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-8">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.45,
              }}
              whileHover={{
                y: -6,
                scale: 1.04,
              }}
              className="glass-card flex h-24 items-center justify-center transition-all duration-300 hover:border-primary/40 hover:shadow-glow"
            >
              <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-lg font-bold text-transparent">
                {company}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;