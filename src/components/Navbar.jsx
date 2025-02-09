import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div 
      className="mt-48 "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="tracking-tight text-2xl  text-gray-900">Ahnika Ramachandra</h1> 
      <p className="text-sm text-gray-500 font-light mt-1">I build interfaces that feel just right.</p>

      <motion.p 
        className="text-sm text-gray-800 font-light mt-8 max-w-md "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Bringing design and development together for seamless, high-performance web experiences.
      </motion.p>
    </motion.div>
  );
}

export default Navbar;
