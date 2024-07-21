'use client'
import React, { useState, useEffect } from 'react';
import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import UsageTrack from './UsageTrack';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, toggleSidebar, isMobileMenuOpen, closeMobileMenu }) => {
  const path = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarContent = (
    <div className='p-4 flex flex-col h-full'>
      
      {isExpanded && (
        <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={120}
          height={100}
          className='flex justify-center items-center mb-8'
        />
        </Link>
        
      )}
      
      {!isMobile && (
        <button 
          onClick={toggleSidebar}
          className={`top-4 right-4 text-gray-400 hover:text-white ${isExpanded ? 'absolute' : 'mb-4'}`}
        >
          {isExpanded ? '<<' : '>>'}
        </button>
      )}

      <nav className='flex-grow'>
        <ul className='space-y-2'>
          {navLinks.map((link, index) => (
            <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={link.route}
                className={`
                  flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ease-in-out
                  ${path === link.route ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'}
                `}
                onClick={isMobile ? closeMobileMenu : undefined}
              >
                <link.icon className='w-6 h-6'/>
                {(isExpanded || isMobile) && <span className='text-sm'>{link.label}</span>}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className='mt-auto'>
        <UsageTrack isExpanded={isExpanded || isMobile} />
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className='fixed inset-0 bg-gray-900 text-white z-50'
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <button 
              onClick={closeMobileMenu}
              className='absolute top-4 right-4 text-gray-400 hover:text-white'
            >
              <X size={24} />
            </button>
            {sidebarContent}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <motion.div 
      className='h-screen bg-gray-900 text-white relative hidden md:block'
      animate={{ width: isExpanded ? 250 : 80 }}
      transition={{ duration: 0.3 }}
    >
      {sidebarContent}
    </motion.div>
  );
}

export default Sidebar;