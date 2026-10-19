// Placeholder projects for the tabbed detail view.
// Swap copy, stack, and URLs with real project details as they become available.

export const projects = [
  {
    slug: 'f1-pitwall',
    title: 'F1 Pitwall Analysis Tool',
    tagline: 'Race strategy workspace for tyre degradation and pit-window calls.',
    category: 'Data / Machine Learning',
    stack: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    status: 'prototype',
    year: '2026',
    githubUrl: 'https://github.com/your-username/f1-pitwall',
    demoUrl: 'https://f1-pitwall.example.com',
    overview:
      'A placeholder concept for a race-strategy analysis tool that models tyre degradation and predicts pit-stop windows using historical F1 timing data.',
    approach:
      'The planned build centers on cleaned lap-by-lap timing data, feature engineering around tyre compound and stint length, and lightweight models for degradation curves.',
    features: [
      'Tyre degradation prediction by compound',
      'Pit-window recommendation based on pace loss',
      'Lap-time comparison views across race stints',
    ],
    challenges:
      'The main product challenge is making noisy race data legible enough that strategy recommendations feel explainable instead of magical.',
  },
  {
    slug: 'travel-itinerary',
    title: 'Travel Itinerary Application',
    tagline: 'Collaborative planner for flexible multi-day trips.',
    category: 'Full-Stack Product',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    status: 'in-progress',
    year: '2026',
    githubUrl: 'https://github.com/your-username/travel-itinerary',
    demoUrl: 'https://travel-itinerary.example.com',
    overview:
      'A placeholder MERN app for building, organizing, and sharing day-by-day travel itineraries.',
    approach:
      'The data model is organized around trips, days, stops, and notes so itinerary details can be reordered without losing context.',
    features: [
      'Day-by-day itinerary builder',
      'Stop reordering and editing',
      'Shareable trip overview pages',
      'Planned AI-assisted recommendations and re-planning',
    ],
    challenges:
      'The tricky part is supporting both structured planning and spontaneous edits without turning the interface into a spreadsheet.',
  },
  {
    slug: 'portfolio-lab',
    title: 'Portfolio Lab',
    tagline: 'A modular case-study system for presenting technical work.',
    category: 'Frontend / Design System',
    stack: ['React', 'Vite', 'CSS', 'Content Modeling'],
    status: 'placeholder',
    year: '2026',
    githubUrl: 'https://github.com/your-username/portfolio-lab',
    demoUrl: 'https://portfolio-lab.example.com',
    overview:
      'A placeholder internal project for turning portfolio entries into expandable, case-study style modules.',
    approach:
      'Project content is kept in data objects so new work can be added without changing the page layout or interaction model.',
    features: [
      'Reusable project schema',
      'Tabbed detail sections for scanning',
      'Live-site and repository calls to action',
    ],
    challenges:
      'The design needs to feel expressive while staying simple enough to grow as more finished work is added.',
  },
]
