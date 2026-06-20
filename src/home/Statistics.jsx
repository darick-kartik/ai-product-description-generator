import { motion } from "framer-motion";
import {
  FileText,
  Users,
  Globe2,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: FileText,
    value: "250K+",
    label: "Descriptions Generated",
  },
  {
    icon: Users,
    value: "18K+",
    label: "Active Users",
  },
  {
    icon: Globe2,
    value: "120+",
    label: "Countries Reached",
  },
  {
    icon: Clock3,
    value: "2.4 Sec",
    label: "Average Generation Time",
  },
];

const Statistics = () => {
  return (
    <section className="relative py-24">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card overflow-hidden"
        >
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.45,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="border-b border-border p-10 transition-all duration-300 last:border-b-0 md:border-r md:last:border-r-0 xl:border-b-0"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon size={30} />
                </div>

                <h3 className="mt-8 text-5xl font-black tracking-tight">
                  {item.value}
                </h3>

                <p className="mt-4 text-base leading-7 text-muted">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;