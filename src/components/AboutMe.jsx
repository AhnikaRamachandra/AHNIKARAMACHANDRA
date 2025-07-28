import { useNavigate } from "react-router-dom";

import Contact from "./Contact";
import Footer from "./Footer";

function AboutMe() {
  const navigate = useNavigate();

  return (
    <div className="mt-10">
      <div className="text-sm text-gray-800 leading-relaxed space-y-4">
        <h2 className="text-xl font-semibold mb-4">Fun facts about me</h2>

        <p>
          🎨 I’m a passionate UI/UX designer from Udupi. I enjoy
          creating meaningful and user-friendly digital experiences.
          I’ve always loved the balance between creativity and logic it's what
          drew me toward design and frontend development.
        </p>

        <p>
          💻 During my engineering days, I worked on projects like a translator app,
          e-commerce website, recipe site, and weather dashboard. These helped me build
          confidence in turning ideas into real, usable designs.
        </p>

        <p>
          🖌️ My internships at Uzence and Pace Wisdom helped me dive deeper into UI/UX,
          where I discovered my interest in design systems, wireframing, user flows, and solving
          real world problems through design.
        </p>

        <p>
          ☁️ I’m a simple, cheerful person who loves making new friends, journaling,
          and sipping chai on quiet evenings. I believe in staying kind, curious,
          and open to learning.
        </p>
<p>
  ✏️ Recently, I’ve started learning Procreate to experiment with digital illustration and bring a more playful side to my creativity.</p>
      </div>

   
    
      <Contact />
      <Footer />
    </div>
  );
}

export default AboutMe;
