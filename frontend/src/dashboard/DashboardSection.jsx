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
import Loader from "../components/ui/Loader";
import useDashboardData from "../hooks/useDashboardData";

const sidebar = [
  { title: "Dashboard", icon: LayoutDashboard },
  { title: "History", icon: History },
  { title: "Templates", icon: FileText },
  { title: "Favorites", icon: Star },
  { title: "Analytics", icon: TrendingUp },
];

const DashboardSection = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { loading, stats, chartData, recentActivity } = useDashboardData();

  if (loading) {
    return (
      <div className="py-24">
        <Loader />
      </div>
    );
  }

  return (
    <section className="py-24">
      <div className="container-app">
        {/* HEADER */}
        <div className="mb-12">
          <span className="badge gap-2">
            <Sparkles size={15} />
            Dashboard
          </span>
          <h1 className="section-title mt-6">Analytics Dashboard</h1>
          <p className="section-subtitle mt-6 text-gray-600 dark:text-gray-300">
            Monitor AI usage, recent generations, templates, favorites and
            productivity in one place.
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

                {/* COMBINED CHART + ACTIVITY CARD */}
                <div className="glass-card p-8 w-full">
                  <div className="grid gap-8 xl:grid-cols-[1.6fr_0.9fr]">
                    {/* CHART */}
                    <div>
                      <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Weekly AI Usage</h2>
                        <span className="rounded-full bg-green-100 dark:bg-green-900/20 px-3 py-1 text-sm text-green-600 dark:text-green-400">
                          {chartData.reduce((sum, item) => sum + item.value, 0)}{" "}
                          Products
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
                            <CartesianGrid stroke="#334155" strokeDasharray="4 4" />
                            <XAxis dataKey="day" />
                            <YAxis allowDecimals={false} />
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
                    <div className="border-t xl:border-t-0 xl:border-l border-gray-200 dark:border-gray-700 pt-8 xl:pt-0 xl:pl-8">
                      <div className="mb-8 flex items-center gap-3">
                        <Activity className="text-indigo-500" />
                        <h2 className="text-2xl font-bold">Recent Activity</h2>
                      </div>
                      <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                        {recentActivity.length > 0 ? (
                          recentActivity.map((item, index) => (
                            <motion.div
                              key={item._id}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.08 }}
                              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0f172a] p-4"
                            >
                              <h3 className="font-medium">{item.productName}</h3>
                              <div className="mt-2 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                                <span>{item.category}</span>
                                <span>
                                  {new Date(item.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                              <p className="mt-2 text-sm text-indigo-500">
                                {item.tone}
                              </p>
                            </motion.div>
                          ))
                        ) : (
                          <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center">
                            <p className="text-gray-500 dark:text-gray-400">
                              No recent activity found.
                            </p>
                          </div>
                        )}
                      </div>
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
