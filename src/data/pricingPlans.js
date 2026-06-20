const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    price: "Free",
    monthly: 0,
    badge: "",
    popular: false,
    description:
      "Perfect for students, beginners and personal projects.",
    features: [
      "20 AI generations per day",
      "Basic AI templates",
      "SEO score",
      "Word count & reading time",
      "TXT export",
      "Community support",
    ],
  },
  {
    id: 2,
    name: "Professional",
    price: "$19",
    monthly: 19,
    badge: "Most Popular",
    popular: true,
    description:
      "Ideal for freelancers, creators and growing businesses.",
    features: [
      "Unlimited AI generations",
      "Premium templates",
      "Advanced SEO optimization",
      "PDF & TXT export",
      "Generation history",
      "Analytics dashboard",
      "Priority support",
      "Faster AI processing",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$49",
    monthly: 49,
    badge: "",
    popular: false,
    description:
      "Built for agencies, teams and enterprise organizations.",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Dedicated workspace",
      "API access",
      "Advanced analytics",
      "Custom AI models",
      "Role management",
      "24×7 premium support",
    ],
  },
];

export default pricingPlans;