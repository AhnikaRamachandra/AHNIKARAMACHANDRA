import img1 from '../assets/showbeat.png'
import img2 from '../assets/Mainbite.png'
import edueval from '../assets/eduevals.png'
import design from '../assets/Designsystem.png'
import weather from '../assets/weather.png'
import chic from '../assets/chic.png'
import beatflow from '../assets/beat.png'
import alertOverview from '../assets/dashboard.png';

export const PROJECTS = [
   {
  title: "Opsolute",
  description:
    "A product design case study covering cloud cost overview, cost optimization, alerting dashboards, and design systems to make complex cloud data easier to understand and act on.",
  technologies: [
    "UX Research",
    "Product Design",
    "FinOps",
    "Dashboard Design"
  ],
  image: alertOverview,
  link: "/opsolute",
  nda: true
},

  {
    title: "Beat Flow (Figma design)",
    description: " A minimal music app interface that helps users discover and enjoy their favorite songs across various genres.",
    technologies: ["Figma", "Canva"],
    image:beatflow,
    link:"/Beatflow"      
  },
  {
    title: "Bitecraft",
    description: " A sleek recipe app for discovering, cooking, and sharing delicious meals with ease.",
    technologies: ["Figma", "Canva"],
    image:img2,
    link: "/figma1"
  },
   {
  title: "UI Design System",
  description: "A reusable, scalable UI design system built using Figma. It includes components like buttons, checkboxes, form fields, modals, and a consistent color & typography style guide to ensure visual consistency across products.",
  technologies: ["Figma", "Auto Layout", "Variants", "Typography", "Color Tokens"],
  image: design,
  link: "https://www.figma.com/design/d4X5ZrlgyAQI87aDfqDY2v/icons?node-id=0-1&t=imDAYUIfl6Qxve94-1" 
}
   
    
 
    
  ];
  