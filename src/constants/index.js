import InsightCard from "../components/InsightCard";

export const navLinks = [
  {
    name: "How It Works",
    link: "/",
  },
  {
    name: "About",
    link: "/",
    selected: true,
  },
  {
    name: "Work",
    link: "/",
  },
  {
    name: "Pricing",
    link: "/",
  },
  {
    name: "Blog",
    link: "/",
  },
];

export const taglines = [
  "No hiring headaches",
  "Weekly turnaround times",
  "One flat monthly rate",
];

export const clients = [
  {
    name: "ycombinator",
    image: "images/ycombinator.webp",
  },
  {
    name: "sequioia",
    image: "images/sequioia.webp",
  },
  {
    name: "accel",
    image: "images/accel.webp",
  },
  {
    name: "a16z",
    image: "images/a16z.webp",
  },
];

export const selling_points = [
  {
    image: "images/costs_70_less.webp",
    title: "Costs 70% less",
    description:
      "We developed highly-optimized design processes to let us work fast and deliver incredible results—and we pass those savings on to you",
  },
  {
    image: "images/adaptable.webp",
    title: "Adaptable and scalable",
    description:
      "High-velocity is crucial to a startup’s success, and that’s why TDP delivers new designs every week so your momentum never falters",
  },
  {
    image: "images/fast_turnaround.webp",
    title: "Fast turnaround times",
    description:
      "TDP was built for flexibility—we quickly adapt and grow as you grow",
  },
];

export const promotions = [
  {
    id: "01",
    title: "Sign up for one of our services",
    image: "images/promotion_01.webp",
    description:
      "Sign up for one of our affordable subscription play which offer a variety of options to fit your unique needs.",
  },
  {
    id: "02",
    title: "Meet your perfect match",
    image: "images/promotion_02.webp",
    description:
      "We match you with the best TDP design expert for your needs. Then we schedule a call to learn about your startup.",
  },
  {
    id: "03",
    title: "The first sprint begins (hold on tight)",
    image: "images/promotion_03.webp",
    description:
      "TDP manages the project, learns the intimate details of what your users want, and delivers impactful design iterations.",
  },
];

export const reviews = [
  {
    name: "Erick Desoto",
    role: "VP of Product as Socure",
    image: "images/reviewer.webp",
    review:
      "TDP helped identify the main pain points and designed a new UX that is accessible and easy to understand. The redesign pushed us forward on our mission to be able to verify 100% of IDs in real-time, and we raised over $100M in funding.",
  },
];

export const plans = [
  {
    name: "Essential",
    description: "Great for basic UI/UX design needs",
    price: {
      monthly: "$2600",
      quarterly: "$7020",
      yearly: "$26520",
    },
    including: [
      "Ui execution",
      "Connect on slack",
      "One 30 minutes meeting a week",
    ],
    design_team: ["1 designer working with 4-5 other customers at the same time"],
  },
  {
    name: "Pro",
    description: "Great for end-to-end product design",
    price: {
      monthly: "$3595",
      quarterly: "$9706",
      yearly: "$36669",
    },
    including: [
      "Everything in essential",
      "Full UI/UX design and research",
      "Dev ready figma files",
      "One 1 hour meeting a week",
    ],
    design_team: [
      "1 design lead",
      "1 designer working on 2-3 other customers at the same time",
    ],
  },
  {
    name: "Turbo",
    description: "Great for products that require more design horsepower and tight timelines",
    price: {
      monthly: "$5200",
      quarterly: "$14040",
      yearly: "$53040",
    },
    including: [
      "Everything in Essential and Pro",
      "User testing",
      "Figma Prototypes",
      "Flexible meetings",
      "Custom workflows to speed up delivery"
    ],
    design_team: [
      "1 design lead",
      "1 designer working on 1 other customer at the same time",
    ],
  },
];

export const plan_time_intervals = [
  {
    time : 'monthly',
    saving : '',
    duration : 'per month'
  },
  {
    time : 'quarterly',
    saving : 'save 10%',
    duration : 'per quarter'
  },
  {
    time : 'yearly',
    saving : 'save 15%',
    duration : 'per year'
  },

]