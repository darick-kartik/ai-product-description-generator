import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  Star,
  History,
  TrendingUp,
  Activity,
  Sparkles,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import HistorySection from "./HistorySection";

const chartData = [
  { day: "Mon", value: 18 },
  { day: "Tue", value: 25 },
  { day: "Wed", value: 21 },
  { day: "Thu", value: 35 },
  { day: "Fri", value: 30 },
  { day: "Sat", value: 42 },
  { day: "Sun", value: 39 },
];

const sidebar = [
  { title: "Dashboard", icon: LayoutDashboard },
  { title: "History", icon: History },
  { title: "Templates", icon: FileText },
  { title: "Favorites", icon: Star },
  { title: "Analytics", icon: TrendingUp },
];

const recentActivity = [
  "Wireless Bluetooth Headphones",
  "Gaming Mechanical Keyboard",
  "Premium Leather Wallet",
  "Portable Smart Projector",
  "Smart Fitness Band",
];

const stats = [
  { title: "Generated", value: "12,846" },
  { title: "Templates", value: "42" },
  { title: "Favorites", value: "318" },
  { title: "SEO Avg", value: "96%" },
];

const DashboardSection = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <section className="py-24">
      <div className="container-app">

        {/* HEADER */}
        <div className="mb-12">
          <span className="badge gap-2">
            <Sparkles size={15} />
            Dashboard
          </span>

          <h1 className="section-title mt-6">
            Analytics Dashboard
          </h1>

          <p className="section-subtitle mt-6 text-gray-600 dark:text-gray-300">
            Monitor AI usage, recent generations,
            templates, favorites and productivity
            in one place.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[260px_1fr]">

          {/* SIDEBAR */}
          <aside className="glass-card h-fit p-6">
            <div className="space-y-3">
              {sidebar.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setActiveTab(item.title)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
                    activeTab === item.title
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  <item.icon size={18} />
                  {item.title}
                </button>
              ))}
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div>
            {activeTab === "History" ? (

              <HistorySection />

            ) : (

              <div className="space-y-8">

                {/* STATS */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  {stats.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      viewport={{ once: true }}
                      className="glass-card p-6"
                    >
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.title}
                      </p>

                      <h2 className="mt-4 text-4xl font-black">
                        {item.value}
                      </h2>
                    </motion.div>
                  ))}
                </div>

                {/* CHART + ACTIVITY */}
                <div className="grid gap-8 xl:grid-cols-[1.6fr_0.9fr]">

                  {/* CHART */}
                  <div className="glass-card p-8 w-full">
                    <div className="mb-8 flex items-center justify-between">
                      <h2 className="text-2xl font-bold">
                        Weekly AI Usage
                      </h2>

                      <span className="rounded-full bg-green-100 dark:bg-green-900/20 px-3 py-1 text-sm text-green-600 dark:text-green-400">
                        +24%
                      </span>
                    </div>

                    <div className="w-full h-[340px]">
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient
                              id="gradient"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#6366F1"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#6366F1"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>

                          <CartesianGrid
                            stroke="#334155"
                            strokeDasharray="4 4"
                          />

                          <XAxis dataKey="day" />
                          <YAxis />
                          <Tooltip />

                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#6366F1"
                            fillOpacity={1}
                            fill="url(#gradient)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* ACTIVITY */}
                  <div className="glass-card p-8">
                    <div className="mb-8 flex items-center gap-3">
                      <Activity className="text-indigo-500" />

                      <h2 className="text-2xl font-bold">
                        Recent Activity
                      </h2>
                    </div>

                    <div className="space-y-5">
                      {recentActivity.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                          className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f172a] p-4"
                        >
                          <h3 className="font-medium">
                            {item}
                          </h3>

                          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            Generated 2 minutes ago
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardSection;
