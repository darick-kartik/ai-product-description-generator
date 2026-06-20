import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = () => {
    toast.success("Message sent successfully!");
    reset();
  };

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
          <span className="badge">
            Contact Us
          </span>

          <h1 className="section-title mt-6">
            We'd Love To
            <span className="gradient-text"> Hear From You</span>
          </h1>

          <p className="section-subtitle mt-6">
            Have a question, suggestion or feedback? Send us a
            message and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h2 className="text-3xl font-bold">
              Get in Touch
            </h2>

            <p className="mt-5 leading-8 text-muted">
              Reach out to our team anytime. We're always happy
              to answer your questions and help you get started.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "support@aiproduct.ai",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+91 98765 43210",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Dehradun, India",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4"
                >
                  <div className="rounded-2xl bg-primary/10 p-4 text-primary">
                    <item.icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-muted">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card space-y-6 p-8"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <input
                {...register("name")}
                placeholder="Full Name"
                className="input-field"
              />

              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className="input-field"
              />
            </div>

            <input
              {...register("subject")}
              placeholder="Subject"
              className="input-field"
            />

            <textarea
              {...register("message")}
              rows="7"
              placeholder="Write your message..."
              className="input-field resize-none"
            />

            <button
              type="submit"
              className="primary-btn w-full gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;