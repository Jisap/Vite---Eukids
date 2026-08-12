export const pricingPlans = [
  {
    id: "basic",
    planName: "Basic Plan",
    price: "$39",
    bgColor: "bg-primary-2",
    badgeBg: "bg-white",
    description:
      "A great starting point for families exploring our programs with limited weekly sessions.",
    features: [
      { label: "Small (12 students) 3–6 years", included: true },
      { label: "Basic subjects, limited access", included: true },
      { label: "Track student progress", included: false },
      { label: "Priority scheduling", included: false },
      { label: "1-on-1 mentor sessions", included: false },
    ],
  },
  {
    id: "standard",
    planName: "Standard Plan",
    price: "$59",
    bgColor: "bg-primary-5",
    badgeBg: "bg-primary",
    description:
      "Our most popular plan — full subject access plus regular progress check-ins.",
    features: [
      { label: "Small (12 students) 3–6 years", included: true },
      { label: "Full subject access", included: true },
      { label: "24/7 system monitoring", included: true },
      { label: "Priority scheduling", included: false },
      { label: "1-on-1 mentor sessions", included: false },
    ],
  },
  {
    id: "premium",
    planName: "Premium Plan",
    price: "$99",
    bgColor: "bg-primary-2",
    badgeBg: "bg-white",
    description:
      "The complete experience — every feature unlocked, with dedicated mentor support.",
    features: [
      { label: "Small (12 students) 3–6 years", included: true },
      { label: "Full subject access", included: true },
      { label: "24/7 system monitoring", included: true },
      { label: "Join millions of students worldwide", included: true },
      { label: "Secure finance backup", included: true },
    ],
  },
];
