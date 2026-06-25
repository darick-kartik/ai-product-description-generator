import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card relative overflow-hidden rounded-[32px] border border-primary/20 p-10 md:p-16"
        >
          {/* Background Glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-[140px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
              <Sparkles size={16} />
              Start Creating Better Product Descriptions
            </div>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Ready to Supercharge
              <span className="gradient-text"> Your eCommerce Business?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              Generate high-converting, SEO-optimized product descriptions
              within seconds using the power of Artificial Intelligence.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/generator"
                className="primary-btn gap-2"
              >
                Generate Now
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/pricing"
                className="secondary-btn"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted">
              <span>✓ No Credit Card Required</span>
              <span>✓ AI Powered</span>
              <span>✓ Instant Generation</span>
              <span>✓ SEO Optimized</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;