import React, { useContext, useState } from 'react';
import { UserButton } from "@clerk/nextjs";
import { Search, Menu, X } from "lucide-react";
import Link from 'next/link';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { userSubscription } = useContext(UserSubscriptionContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md z-20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar}
              className="text-gray-300 hover:text-white focus:outline-none mr-4 md:hidden lg:hidden"
            >
              <Menu size={24} />
            </button>
            {/* <div className="hidden sm:block relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-700 transition-all duration-300 w-64 placeholder-gray-400"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            </div> */}
            {/* <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="sm:hidden text-gray-300 hover:text-white focus:outline-none"
            >
              <Search size={24} />
            </button> */}
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            {!userSubscription ? (
              <Link href="/dashboard/subscription" className="bg-blue-600 text-white text-xs font-semibold py-2 px-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
                🔥 Join Membership
              </Link>
            ) : (
              <div className="cursor-pointer bg-yellow-600 text-white text-xs font-semibold py-2 px-3 rounded-full">
                🌟 Gold Member
              </div>
            )}
            
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "border-2 border-white"
                }
              }}
            />
          </div>
        </div>
      </div>
      {/* {isSearchOpen && (
        <div className="sm:hidden px-4 py-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-700 transition-all duration-300 w-full placeholder-gray-400"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-3 top-2.5 text-gray-400 focus:outline-none"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;