import img1 from '../assets/showbeat.png'
import img2 from '../assets/figma1.png'
import edueval from '../assets/eduevals.png'
import design from '../assets/designsystem.png'
import weather from '../assets/weather.png'
import chic from '../assets/chic.png'
export const PROJECTS = [

  {
    title: "Beat Flow (Figma design)",
    description: " A sleek recipe app for discovering, cooking, and sharing delicious meals with ease.",
    technologies: ["Figma", "Canva"],
    image:img1,
    link:"/Beatflow"      
  },  {
    title: "Bitecraft",
    description: "Designed an user interface using Figma, focusing on user experience and accessibility.",
    technologies: ["Figma", "Canva"],
    image:img2,
    link: "/figma1"
  },
  {
  title: "UI Design System",
  description: "A reusable, scalable UI design system built using Figma. It includes components like buttons, checkboxes, form fields, modals, and a consistent color & typography style guide to ensure visual consistency across products.",
  technologies: ["Figma", "Auto Layout", "Variants", "Typography", "Color Tokens"],
  image: design,
  link: "https://www.figma.com/design/d4X5ZrlgyAQI87aDfqDY2v/icons?node-id=0-1&t=muHdxloKfBdVmRzH-1" 
}
,
    {
      title: "Chic & Shine",
      description: "A stylish and user-friendly e-commerce platform built using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image:chic,
      link: "https://chicshine-ahnikas-projects.vercel.app/"    
    },
    {
      title: "Weather App",
      description: "A simple and responsive weather app built with HTML, CSS, and JavaScript. Displays temperature, humidity, wind speed, and conditions based on the searched city.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: weather,
      link: "https://ahnikaramachandra.github.io/weather.io.github/"     
    },
 
   
    {
      title: "EduEval",
      description: "Edueval is a grading platform built using Next.js, Node.js with Express.js, integrating OCR and NLP for automated, accurate paper evaluation",
      technologies: ["Python", "NLP", "Machine Learning"],
       image: edueval,
      link: "https://github.com/AhnikaRamachandra/EduEvall"     
    }
 
    
  ];
  