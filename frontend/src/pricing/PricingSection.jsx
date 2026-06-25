import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import toast from "react-hot-toast";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for students and beginners.",
    features: [
      "20 AI Generations / Day",
      "Basic AI Templates",
      "SEO Score",
      "TXT Download",
      "Community Support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$19",
    description: "Best for creators and growing businesses.",
    features: [
      "Unlimited AI Generations",
      "Premium Templates",
      "SEO Optimization",
      "PDF & TXT Export",
      "History & Dashboard",
      "Priority Support",
      "Fast AI Processing",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    description: "Built for agencies and enterprise teams.",
    features: [
      "Everything in Professional",
      "Unlimited Team Members",
      "Dedicated Workspace",
      "API Access",
      "Advanced Analytics",
      "Custom AI Models",
      "24×7 Premium Support",
    ],
    featured: false,
  },
];

const PricingSection = () => {
  const choosePlan = (plan) => {
    toast.success(`${plan} plan selected`);
  };

  return (
    <section className="py-24">
      <div className="container-app">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="badge gap-2">
            <Sparkles size={15} />
            Pricing Plans
          </span>

          <h1 className="section-title mt-6">
            Choose The Perfect Plan
          </h1>

          <p className="section-subtitle mt-6">
            Flexible pricing designed for individuals, startups
            and enterprises. Upgrade whenever your business grows.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className={`glass-card relative overflow-hidden p-8 ${
                plan.featured
                  ? "border-primary shadow-glow"
                  : ""
              }`}
            >
              {plan.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <h2 className="text-3xl font-bold">
                {plan.name}
              </h2>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-6xl font-black">
                  {plan.price}
                </span>

                {plan.price !== "Free" && (
                  <span className="pb-2 text-muted">
                    /month
                  </span>
                )}
              </div>

              <p className="mt-5 leading-7 text-muted">
                {plan.description}
              </p>

              <div className="mt-10 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <div className="rounded-full bg-success/10 p-1">
                      <Check
                        size={16}
                        className="text-success"
                      />
                    </div>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => choosePlan(plan.name)}
                className={`mt-10 w-full ${
                  plan.featured
                    ? "primary-btn"
                    : "secondary-btn"
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;