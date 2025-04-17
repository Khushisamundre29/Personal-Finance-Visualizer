'use client';

import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white px-6 py-4 shadow-sm sticky top-0 z-10"
    >
      <h1 className="text-2xl font-bold text-gray-800">Personal Finance Dashboard</h1>
    </motion.header>
  );
};

export default Header;
