import img1 from '../assets/showbeat.png'
import img2 from '../assets/figma1.png'
import weather from '../assets/weather.mp4'
import vedio3 from '../assets/v3.mp4'
import vedio4 from '../assets/v4.mp4'
import design from '../assets/design.png'
export const PROJECTS = [
  {
    title: "Bitecraft",
    description: "Designed an user interface using Figma, focusing on user experience and accessibility.",
    technologies: ["Figma", "Canva"],
    image:img2,
    link: "/figma1"
  },
  {
    title: "Beat Flow (Figma design)",
    description: " A sleek recipe app for discovering, cooking, and sharing delicious meals with ease.",
    technologies: ["Figma", "Canva"],
    image:img1,
    link:"/Beatflow"      
  },
  {
    title: "Design system",
    description: "Design system using figma.",
    technologies: ["Figma"],
    image:design,
    link: "https://www.figma.com/design/4X0fAAzDxlgqOgDUdSxRlf/Ahnika?node-id=0-1&p=f&t=CyKJHQ2WPFzrhcJW-0"    
  },
    {
      title: "Chic & Shine",
      description: "A stylish and user-friendly e-commerce platform built using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      video: vedio3,
      link: "https://chicshine-ahnikas-projects.vercel.app/"    
    },
    {
      title: "Weather App",
      description: "A simple and responsive weather app built with HTML, CSS, and JavaScript. Displays temperature, humidity, wind speed, and conditions based on the searched city.",
      technologies: ["HTML", "CSS", "JavaScript"],
      video: weather,
      link: "https://ahnikaramachandra.github.io/weather.io.github/"     
    },
 
   
    {
      title: "EduEval",
      description: "Edueval is a grading platform built using Next.js, Node.js with Express.js, integrating OCR and NLP for automated, accurate paper evaluation",
      technologies: ["Python", "NLP", "Machine Learning"],
      video: vedio4,
      link: "https://github.com/AhnikaRamachandra/EduEvall"     
    }
 
    
  ];
  