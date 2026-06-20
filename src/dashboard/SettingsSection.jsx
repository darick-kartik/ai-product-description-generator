import { motion } from "framer-motion";
import {
  Settings,
  Bell,
  Moon,
  Shield,
  Globe,
  Save,
} from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SettingsSection = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      notifications: true,
      darkMode: true,
      autoSave: true,
      language: "English",
    },
  });

  const onSubmit = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <section className="py-24">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="badge gap-2">
            <Settings size={15} />
            Settings
          </span>

          <h1 className="section-title mt-6">
            Personalize Your Experience
          </h1>

          <p className="section-subtitle mt-6">
            Configure preferences, notifications, language and
            privacy settings for your AI workspace.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit(onSubmit)}
          className="glass-card mx-auto mt-16 max-w-4xl space-y-8 p-8 md:p-10"
        >
          {/* Notifications */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-background/40 p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-primary/10 p-4 text-primary">
                <Bell size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Email Notifications
                </h3>

                <p className="text-sm text-muted">
                  Receive updates and AI generation alerts.
                </p>
              </div>
            </div>

            <input
              type="checkbox"
              {...register("notifications")}
              className="h-5 w-5 accent-primary"
            />
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-background/40 p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-primary/10 p-4 text-primary">
                <Moon size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Dark Theme
                </h3>

                <p className="text-sm text-muted">
                  Keep the premium dark interface enabled.
                </p>
              </div>
            </div>

            <input
              type="checkbox"
              {...register("darkMode")}
              className="h-5 w-5 accent-primary"
            />
          </div>

          {/* Auto Save */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-background/40 p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-primary/10 p-4 text-primary">
                <Shield size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Auto Save History
                </h3>

                <p className="text-sm text-muted">
                  Automatically store generated descriptions.
                </p>
              </div>
            </div>

            <input
              type="checkbox"
              {...register("autoSave")}
              className="h-5 w-5 accent-primary"
            />
          </div>

          {/* Language */}
          <div>
            <label className="mb-3 flex items-center gap-2 font-medium">
              <Globe size={18} />
              Preferred Language
            </label>

            <select
              {...register("language")}
              className="input-field"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>

          <button
            type="submit"
            className="primary-btn w-full gap-2"
          >
            <Save size={18} />
            Save Settings
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default SettingsSection;