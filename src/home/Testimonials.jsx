import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "eCommerce Seller",
    company: "Amazon",
    review:
      "This AI tool has completely transformed the way I write product listings. What used to take hours now takes just a few seconds.",
  },
  {
    name: "Sophia Wilson",
    role: "Marketing Manager",
    company: "Shopify Store",
    review:
      "The generated descriptions are professional, SEO-friendly and require almost no editing. It has significantly improved our workflow.",
  },
  {
    name: "Rahul Verma",
    role: "Startup Founder",
    company: "D2C Brand",
    review:
      "The premium interface and AI quality feel comparable to enterprise SaaS products. Highly recommended for online businesses.",
  },
];

const Testimonials = () => {
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
            Testimonials
          </span>

          <h2 className="section-title mt-6">
            Loved by
            <span className="gradient-text"> Thousands of Users</span>
          </h2>

          <p className="section-subtitle mt-6">
            Businesses, creators and marketers rely on our AI platform
            to generate high-quality product descriptions every day.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
                duration: 0.45,
              }}
              whileHover={{
                y: -10,
              }}
              className="glass-card relative overflow-hidden p-8"
            >
              <Quote
                size={42}
                className="absolute right-6 top-6 text-primary/20"
              />

              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-muted">
                "{testimonial.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-lg font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-muted">
                    {testimonial.role}
                  </p>

                  <p className="text-xs text-primary">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;