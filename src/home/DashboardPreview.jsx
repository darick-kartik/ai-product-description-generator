import { motion } from "framer-motion";
import {
  BarChart3,
  Sparkles,
  FileText,
  Search,
  Clock,
  Copy,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const DashboardPreview = () => {
  const metrics = [
    {
      title: "Descriptions",
      value: "12,846",
      change: "+18.4%",
      icon: FileText,
    },
    {
      title: "SEO Score",
      value: "96%",
      change: "+3.2%",
      icon: Search,
    },
    {
      title: "Avg. Time",
      value: "2.3s",
      change: "-0.4s",
      icon: Clock,
    },
    {
      title: "Success Rate",
      value: "99.2%",
      change: "+1.1%",
      icon: CheckCircle2,
    },
  ];

  const activity = [
    "Wireless Bluetooth Headphones",
    "Gaming Mechanical Keyboard",
    "Premium Leather Wallet",
    "Smart Fitness Watch",
    "Portable Mini Projector",
  ];

  return (
    <section className="py-24">
      <div className="container-app">
        <div className="mb-16 text-center">
          <span className="badge gap-2">
            <BarChart3 size={16} />
            Live AI Workspace
          </span>

          <h2 className="section-title mt-6">
            Premium Dashboard Preview
          </h2>

          <p className="section-subtitle mt-6">
            Experience a modern AI dashboard inspired by the
            world's best SaaS products with analytics, history,
            templates and one-click content generation.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-border p-6">
            <div>
              <p className="text-sm text-muted">
                AI Workspace
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Product Dashboard
              </h3>
            </div>

            <button className="primary-btn gap-2">
              <Sparkles size={18} />
              New Generation
            </button>
          </div>

          <div className="grid lg:grid-cols-[260px_1fr]">
            {/* Sidebar */}
            <aside className="border-b border-border p-6 lg:border-b-0 lg:border-r">
              <div className="space-y-3">
                {[
                  "Dashboard",
                  "Generator",
                  "History",
                  "Templates",
                  "Analytics",
                  "Favorites",
                  "Settings",
                ].map((item) => (
                  <button
                    key={item}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition ${
                      item === "Dashboard"
                        ? "bg-primary text-white"
                        : "hover:bg-background"
                    }`}
                  >
                    {item}

                    <TrendingUp size={16} />
                  </button>
                ))}
              </div>
            </aside>

            {/* Main */}
            <div className="p-6">
              {/* Metrics */}
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {metrics.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border bg-background/60 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <item.icon className="text-primary" />

                      <span className="rounded-full bg-success/10 px-2 py-1 text-xs text-success">
                        {item.change}
                      </span>
                    </div>

                    <h4 className="mt-5 text-3xl font-bold">
                      {item.value}
                    </h4>

                    <p className="mt-2 text-sm text-muted">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
                {/* Chart */}
                <div className="rounded-2xl border border-border bg-background/60 p-6">
                  <div className="mb-8 flex items-center justify-between">
                    <h4 className="text-lg font-semibold">
                      Weekly AI Usage
                    </h4>

                    <span className="text-sm text-success">
                      +24%
                    </span>
                  </div>

                  <div className="flex h-56 items-end justify-between gap-3">
                    {[55, 82, 65, 95, 74, 110, 92].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          whileInView={{
                            height,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.08,
                          }}
                          className="w-full rounded-t-xl bg-gradient-to-t from-primary to-accent"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="rounded-2xl border border-border bg-background/60 p-6">
                  <h4 className="mb-6 text-lg font-semibold">
                    Recent AI Generations
                  </h4>

                  <div className="space-y-4">
                    {activity.map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl border border-border p-4"
                      >
                        <div>
                          <p className="font-medium">
                            {item}
                          </p>

                          <p className="mt-1 text-xs text-muted">
                            Generated just now
                          </p>
                        </div>

                        <Copy
                          size={17}
                          className="cursor-pointer text-muted transition hover:text-primary"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;