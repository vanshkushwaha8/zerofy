import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  // sneha,
  // vikas,
  // rahul,
  // ayesha,
  shield, 
  star
} from "../assets";
import sneha from '../assets/sneha.jpg';
import rahul from '../assets/rahul.jpg';
import ayesha from '../assets/ayesha.jpg';
import vikas from '../assets/vikas.jpg';

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "career",
    title: "Careers",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "internship",
    title: "Internship",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    name: "Herman Jensen",
    title: "CEO, CleanGo Services",
    project: "Cleaner Service",
    work: "Developed a modern, real-time service booking platform with admin and user dashboards.",
    content:
      "The team created an incredible cleaning service app. It works smoothly across devices and made booking so much easier for our clients.",
    img: sneha,
  },
  {
    id: "feedback-2",
    name: "Steve Mark",
    title: "Founder, ZestyBites",
    project: "Restaurant Review",
    work: "Built an engaging review-based platform with rich content, live ratings, and filters for food lovers.",
    content:
      "Absolutely loved how they turned my vision into a sleek, functional review platform. It’s beautiful and engaging!",
    img: vikas,
  },
  {
    id: "feedback-3",
    name: "Kenn Gallagher",
    title: "CTO, KiranaKart",
    project: "Online Kirana Store",
    work: "Engineered a scalable e-commerce system with inventory sync, cart functionality, and order tracking.",
    content:
      "A solid team that delivered a kirana store that runs like a charm! Our customers are loving the seamless shopping experience.",
    img: rahul,
  },
  {
    id: "feedback-4",
    name: "Sneha Reddy",
    title: "Fitness Coach & App Owner",
    project: "Smart Gym Tracker",
    work: "Created a fitness tracker with personalized plans, daily logs, and performance insights using React Native.",
    content:
      "The fitness app they built has elevated my coaching business. Clients track workouts daily and love the personalized plans!",
    img: ayesha, 
  },
];


export const stats = [
  {
    id: "stats-1",
    title: "Employees",
    value: "380+",
  },
  {
    id: "stats-2",
    title: "Completed Projects",
    value: "12+",
  },
  {
    id: "stats-3",
    title: "Followers",
    value: "500+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
export const internships = [
  {
    id: "intern-1",
    name: "Aarav Sharma",
    company: "Zerofy Limits",
    role: "Frontend Developer Intern",
    duration: "Jan 2024 - Mar 2024",
    description: "Collaborated on building user-centric web interfaces using React.js and integrated design systems to improve UI consistency. This internship helped me bridge the gap between design and development."
  },
  {
    id: "intern-2",
    name: "Meera Nair",
    company: "Zerofy Limits",
    role: "Backend Developer Intern",
    duration: "Feb 2024 - Apr 2024",
    description: "I worked with Node.js and MongoDB to build scalable APIs. This experience taught me the importance of clean code and modular architecture in real-world backend systems."
  },
  {
    id: "intern-3",
    name: "Karthik Reddy",
    company: "Zerofy Limits",
    role: "Full Stack Developer Intern",
    duration: "Mar 2024 - May 2024",
    description: "Handled end-to-end development of a dashboard application, integrating Express.js backend with a React.js frontend. The mentorship and code reviews significantly boosted my confidence."
  },
  {
    id: "intern-4",
    name: "Priya Sinha",
    company: "Zerofy Limits",
    role: "Data Analyst Intern",
    duration: "Jan 2024 - Mar 2024",
    description: "Analyzed customer usage data to identify trends and presented insights using Power BI. I gained valuable experience in data cleaning, visualization, and reporting."
  },
  {
    id: "intern-5",
    name: "Rohan Verma",
    company: "Zerofy Limits",
    role: "UI/UX Design Intern",
    duration: "Apr 2024 - June 2024",
    description: "Created user-friendly design prototypes in Figma and conducted user testing sessions. The experience taught me how design decisions directly impact usability and user retention."
  },
  {
    id: "intern-6",
    name: "Sneha Kulkarni",
    company: "Zerofy Limits",
    role: "Mobile App Developer Intern",
    duration: "Feb 2024 - Apr 2024",
    description: "Built cross-platform features using React Native and integrated push notifications. It was exciting to see my code go live on real user devices!"
  },
  {
    id: "intern-7",
    name: "Yash Mehta",
    company: "Zerofy Limits",
    role: "DevOps Intern",
    duration: "Mar 2024 - May 2024",
    description: "Set up CI/CD pipelines using GitHub Actions and Docker. This internship gave me hands-on experience with deployment strategies and server monitoring."
  },
  {
    id: "intern-8",
    name: "Ishita Banerjee",
    company: "Zerofy Limits",
    role: "Software Testing Intern",
    duration: "Apr 2024 - June 2024",
    description: "Developed automated test scripts using Jest and Cypress, and helped reduce manual testing time. I learned the significance of quality assurance in the software lifecycle."
  },
];


