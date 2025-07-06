import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="relative mt-12 px-4 md:px-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Work Experience</h1>

      <motion.div
        className="group w-full p-6 rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Internships</h2>

        {/* Uzence */}
        <div className="mb-5">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-medium">Uzence Design Studio</p>
            <p className="text-gray-500 text-sm">April 2025 - Present</p>
          </div>
        </div>

        {/* Pace Wisdom */}
        <div>
          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-medium">Pace Wisdom Solutions</p>
            <p className="text-gray-500 text-sm">Aug 2023 - Oct 2023</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
