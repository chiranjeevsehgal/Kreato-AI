'use client'
import React, { useState, useEffect } from 'react';
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UpdateCreditUsage } from "../(context)/UpdateCreditUsage";
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const [userSubscription, setUserSubscription] = useState<boolean>(false);
  const [updateUsage, setUpdateUsage] = useState<any>();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);


  const toggleSidebar = () => setIsSidebarExpanded(!isSidebarExpanded);
  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // <PayPalScriptProvider options={{ clientId }}>
      <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
        <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>
          <UpdateCreditUsage.Provider value={{ updateUsage, setUpdateUsage }}>
            <div className="flex h-screen bg-gray-800 text-white">
              {!isMobile && (
                <motion.div
                  className="bg-gray-900 h-full"
                  animate={{ width: isSidebarExpanded ? 250 : 80 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sidebar 
                    isExpanded={isSidebarExpanded} 
                    toggleSidebar={toggleSidebar}
                    isMobileMenuOpen={false}
                    closeMobileMenu={() => {}}
                  />
                </motion.div>
              )}

              <div className="flex-1 flex flex-col overflow-hidden">
                <Header toggleSidebar={isMobile ? openMobileMenu : toggleSidebar} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-800">
                  <div className="container mx-auto px-6 py-6">
                    {children}
                  </div>
                </main>
              </div>

              {isMobile && (
                <Sidebar 
                  isExpanded={true}
                  toggleSidebar={toggleSidebar}
                  isMobileMenuOpen={isMobileMenuOpen}
                  closeMobileMenu={closeMobileMenu}
                />
              )}

              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  style: {
                    background: '#333',
                    color: '#fff',
                  },
                }}
              />
            </div>
          </UpdateCreditUsage.Provider>
        </UserSubscriptionContext.Provider>
      </TotalUsageContext.Provider>
    // </PayPalScriptProvider>
  );
};

export default Layout;