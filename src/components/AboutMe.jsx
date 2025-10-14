import profileImg from '../assets/ahnika1.png';
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaFileAlt } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="mt-10 flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12">
      
      {/* Left Image */}
      <div className="flex-shrink-0 md:w-1/2 lg:w-2/5">
        <img 
          src={profileImg} 
          alt="Ahnika Ramachandra" 
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      {/* Right Text + Contact */}
      <div className="md:w-1/2 lg:w-2/5 text-gray-800 mt-6 space-y-6">
        <h1 className="text-lg md:text-xl font-semibold mb-2">Hi, I am Ahnika Ramachandra.</h1>
        
        <p className="text-base md:text-md">
          I have always been curious about the world and how things work. I love creating, whether it is designing a simple, clean interface or just sketching for fun. For me, design isn’t just a job it is a way to share ideas, tell stories, and add a little joy to everyday life.
        </p>
        
        <p className="text-base md:text-md">
          I believe creativity grows when you stay curious, kind, and open to learning.
        </p>

        {/* Contact Information */}
        <div className="mt-4 space-y-2">
          <h2 className="text-md font-semibold">Contact Me</h2>
          
          <p className="flex items-center gap-2 text-sm md:text-md">
            <MdEmail className="text-blue-600" /> 
            <a href="mailto:ahnikaramachandra@gmail.com" className="text-blue-600 hover:underline">
              ahnikaramachandra@gmail.com
            </a>
          </p>

          <p className="flex items-center gap-2 text-sm md:text-md">
            <MdPhone className="text-blue-600" /> 
            <a href="tel:+919740859198" className="text-blue-600 hover:underline">
              +91 9740859198
            </a>
          </p>

          <p className="flex items-center gap-2 text-sm md:text-md">
            <FaLinkedin className="text-blue-600" /> 
            <a href="https://www.linkedin.com/in/ahnika9" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              linkedin.com/in/ahnika9
            </a>
          </p>

          {/* Resume Link */}
          <p className="flex items-center gap-2 text-sm md:text-md">
            <FaFileAlt className="text-gray-900" />
            <a href="/Ahnika.pdf" download className="text-gray-900 hover:underline">
              Download Resume
            </a>
          </p>

        </div>
      </div>

    </div>
  );
}

export default AboutMe;
