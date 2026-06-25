import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for beginners and students.",
    features: [
      "20 AI Generations / Day",
      "Basic Templates",
      "SEO Score",
      "TXT Download",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$19",
    description: "Ideal for creators and businesses.",
    features: [
      "Unlimited AI Generations",
      "Premium Templates",
      "Advanced SEO",
      "PDF & TXT Export",
      "History & Dashboard",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    description: "For teams and large organizations.",
    features: [
      "Everything in Professional",
      "API Access",
      "Custom AI Models",
      "Team Workspace",
      "Advanced Analytics",
      "24×7 Premium Support",
    ],
    highlighted: false,
  },
];

const PricingPreview = () => {
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
          <span className="badge gap-2">
            <Sparkles size={15} />
            Pricing
          </span>

          <h2 className="section-title mt-6">
            Simple Pricing For
            <span className="gradient-text"> Everyone</span>
          </h2>

          <p className="section-subtitle mt-6">
            Choose a plan that matches your workflow. Upgrade anytime
            as your business grows.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.45,
              }}
              whileHover={{
                y: -10,
              }}
              className={`glass-card relative overflow-hidden p-8 ${
                plan.highlighted
                  ? "border-primary shadow-glow"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute right-5 top-5 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-black">
                  {plan.price}
                </span>

                {plan.price !== "Free" && (
                  <span className="pb-2 text-muted">
                    /month
                  </span>
                )}
              </div>

              <p className="mt-4 leading-7 text-muted">
                {plan.description}
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-success/10 p-1">
                      <Check
                        size={15}
                        className="text-success"
                      />
                    </div>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full ${
                  plan.highlighted
                    ? "primary-btn"
                    : "secondary-btn"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/pricing"
            className="primary-btn"
          >
            View Full Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;