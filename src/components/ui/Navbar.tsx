'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, List, Wallet, BarChart } from 'lucide-react';

// Navigation items
const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: <Home size={18} /> },
  { name: 'Transactions', href: '/transactions', icon: <List size={18} /> },
  { name: 'Budgeting', href: '/budgeting', icon: <Wallet size={18} /> },
  { name: 'Reports', href: '/reports', icon: <BarChart size={18} /> },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen w-64 bg-blue-600 text-white p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-10">💰 Personal Finance</h2>
      <nav>
        <ul className="space-y-4">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={item.href}
                className={`flex items-center space-x-3 p-2 rounded-md transition ${
                  pathname === item.href
                    ? 'bg-blue-500 font-semibold'
                    : 'hover:bg-blue-400'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
