import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Star,
  Wand2,
  Zap,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-[320px] w-[320px] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="container-app">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="badge mb-8 gap-2">
              <Sparkles size={16} />
              AI Powered Product Content Platform
            </div>

            <h1 className="text-5xl font-black leading-tight md:text-6xl xl:text-7xl">
              Generate
              <span className="gradient-text"> Premium </span>
              Product Descriptions
              <br />
              In Seconds
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
              Create SEO-optimized, conversion-focused product
              descriptions using Artificial Intelligence.
              Perfect for Amazon, Shopify, Flipkart, WooCommerce,
              Etsy and every modern eCommerce platform.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/generator"
                className="primary-btn gap-2"
              >
                Start Generating
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/pricing"
                className="secondary-btn"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <h3 className="text-3xl font-bold">25K+</h3>
                <p className="mt-2 text-muted">
                  Descriptions Generated
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">4.9★</h3>
                <p className="mt-2 text-muted">
                  Customer Rating
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">99%</h3>
                <p className="mt-2 text-muted">
                  SEO Optimized
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="glass-card relative overflow-hidden p-8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">
                    AI Generator
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Smart Writer
                  </h2>
                </div>

                <div className="rounded-2xl bg-primary/15 p-4">
                  <Wand2 className="text-primary" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="h-4 w-full rounded-full bg-border" />
                <div className="h-4 w-11/12 rounded-full bg-border" />
                <div className="h-4 w-10/12 rounded-full bg-border" />
                <div className="h-4 w-8/12 rounded-full bg-border" />
                <div className="h-4 w-9/12 rounded-full bg-border" />
              </div>

              <div className="mt-10 flex items-center justify-between rounded-2xl bg-background/60 p-5">
                <div>
                  <p className="text-sm text-muted">
                    SEO Score
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-success">
                    98%
                  </h3>
                </div>

                <Zap
                  className="text-accent"
                  size={38}
                />
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 7,
              }}
              className="glass-card absolute -left-10 top-14 hidden w-56 p-5 lg:block"
            >
              <div className="flex items-center gap-3">
                <Star
                  size={18}
                  className="text-yellow-400"
                />

                <div>
                  <h4 className="font-semibold">
                    AI Quality
                  </h4>

                  <p className="text-xs text-muted">
                    Human Like Writing
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="glass-card absolute -bottom-8 -right-8 hidden w-60 p-5 lg:block"
            >
              <p className="text-sm text-muted">
                Average Generation
              </p>

              <h2 className="mt-3 text-4xl font-bold">
                2.4s
              </h2>

              <div className="mt-4 h-2 rounded-full bg-border">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;