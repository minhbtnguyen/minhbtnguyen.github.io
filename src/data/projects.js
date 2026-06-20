export const projects = [
  {
    code: 'P-01',
    name: 'BYOB: Bring Your Own Bike',
    href: 'https://github.com/minhbtnguyen/geolife-human-psychology',
    imageSrc: '/screenshots/byob.png',
    description:
      'End-to-end agentic mobility pipeline on the Microsoft Geolife GPS dataset: classifies commute mode from raw GPS, estimates per-user carbon footprint, and simulates how Apple ESG nudges shift behavior using LLM-powered agents.',
    tags: ['Python', 'Streamlit', 'LightGBM', 'Claude API', 'Docker', 'Fly.io'],
    date: 'May 2026',
    award: null,
    featured: true,
  },
  {
    code: 'P-02',
    name: 'RentalGPT',
    href: 'https://github.com/minhbtnguyen/rental-gpt',
    imageSrc: '/screenshots/rentalgpt.png',
    description:
      'Rental analytics platform combining predictive modeling and a GPT-powered assistant, serving landlords, renters, and analysts from a single data pipeline.',
    tags: ['Python', 'SQL', 'Dash', 'Docker', 'Kubernetes', 'Google Cloud Platform'],
    date: 'Dec 2023',
    award: "Plotly's ChatGPT & Generative AI Hackathon",
    featured: false,
  },
];
