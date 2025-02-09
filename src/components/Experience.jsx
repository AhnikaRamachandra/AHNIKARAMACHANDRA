import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="relative mt-7 flex flex-col">
      <h1 className="mt-10   text-black ">Work Experience</h1>

      <motion.div
        className="group relative mt-7 w-full p-6 rounded-lg border border-gray-300 transition-all duration-300 hover:border-gray-500 shadow-md hover:shadow-lg bg-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='flex flex-wrap justify-between items-center mb-3'>
          <h5 className='text-lg font-semibold text-gray-800'>Internship</h5>
          <p className="text-gray-500 text-xs">Aug 2023 - Oct 2023</p>
        </div>
        <p className="text-gray-600 text-sm">Pace Wisdom Solutions</p>
      </motion.div>
    
      <motion.div
        className="group relative mt-5 w-full p-6 rounded-lg border border-gray-300 transition-all duration-300 hover:border-gray-500 shadow-md hover:shadow-lg bg-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='flex flex-wrap justify-between items-center mb-3'>
          <h5 className='text-lg font-semibold text-gray-800'>Project Experience</h5>
          <p className="text-gray-500 text-xs">2024</p>
        </div>
        <p className="text-gray-600 text-sm">Developed various frontend applications using React and Tailwind CSS.</p>
      </motion.div>
    </div>
  );
}
