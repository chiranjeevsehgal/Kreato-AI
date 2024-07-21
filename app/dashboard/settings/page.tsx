'use client'
import { UserProfile } from "@clerk/nextjs";
import { useTheme } from "next-themes"; // If you're using next-themes for theme management
import { dark } from "@clerk/themes";

const Settings = () => {
  const { theme } = useTheme(); // If you're using next-themes

  return (
    <div className="flex items-center justify-center h-full p-5 m-5 bg-gray-800">
      <UserProfile
        routing="hash"
        
      />
    </div>
  );
};

export default Settings;