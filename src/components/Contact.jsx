import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="mt-14 ">
      <h1 className=" mb-5">Connect</h1>
      <p className="text-sm text-gray-700 tracking-tight">
        Feel free to contact at 
        <span className="underline ml-1">ahnikaramachandra@gmail.com</span>
      </p>
      <div className="flex flex-wrap justify-start mt-6 gap-4">
        {[
          { name: "GitHub", link: "https://github.com/AhnikaRamachandra" },
          { name: "LinkedIn", link: "https://www.linkedin.com/in/ahnika9" },
          { name: "Instagram", link: "https://www.instagram.com/ahnikaramachandra/" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-gray-200 text-xs hover:bg-gray-300 transition-all shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name} <MdArrowOutward className="text-sm" />
          </motion.a>
        ))}
        <motion.a
          href="ahnika_ramachandra..pdf"
          download
          className="px-4 py-2 bg-gray-800 text-white text-xs rounded-2xl shadow-md hover:shadow-lg hover:bg-gray-700 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;
