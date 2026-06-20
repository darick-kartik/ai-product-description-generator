import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Empower businesses to create high-quality product descriptions with AI in seconds.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "We combine modern AI with beautiful design to deliver a premium writing experience.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Fast, secure and scalable solutions built for startups, agencies and enterprises.",
  },
];

const AboutSection = () => {
  return (
    <section className="relative py-24">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="badge gap-2">
            <Sparkles size={15} />
            About Us
          </span>

          <h1 className="section-title mt-6">
            Building the Future of
            <span className="gradient-text"> AI Content Creation</span>
          </h1>

          <p className="section-subtitle mt-6">
            AI Product Description Generator helps businesses,
            creators and eCommerce brands produce professional,
            SEO-friendly product descriptions in seconds using
            Artificial Intelligence.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
              }}
              className="glass-card p-8"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <item.icon size={30} />
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card mt-20 p-10 md:p-14"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold">
                Why Choose Our Platform?
              </h2>

              <p className="mt-6 leading-8 text-muted">
                Our platform combines premium UI, modern AI,
                analytics and productivity tools to help you
                generate compelling product descriptions faster
                than ever before.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "AI Powered Content Generation",
                  "SEO Optimized Output",
                  "Multi-Platform Support",
                  "Professional Dashboard",
                  "Export as PDF & TXT",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-success" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="glass-card flex h-80 w-full max-w-md items-center justify-center">
                <Sparkles
                  size={90}
                  className="text-primary animate-pulse"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;