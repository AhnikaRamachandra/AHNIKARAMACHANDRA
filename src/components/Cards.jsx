import { motion } from "framer-motion";

function Cards() {
  const skills = ["Skills","HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS", "Figma"];

  return (
    <div className="mt-16 text-center">
     
      

      <motion.div 
        className="p-4 rounded-lg bg-white shadow-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="px-4 py-2  text-gray-800 text-sm  rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Cards;
