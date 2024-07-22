"use client"
import { SignIn } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';


export default function Page() {
  const searchParams = useSearchParams();
  const toastShown = useRef(false);

  useEffect(() => {
    if (!toastShown.current) {
      const unauthorizedAccess = searchParams.get('unauthorized_access');
      if (unauthorizedAccess === 'true') {
        toast.error("Please sign in to access this page");
        toastShown.current = true;
      }
    }
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 via-purple-900 to-purple-700">
      <SignIn
      forceRedirectUrl="/dashboard"
      // appearance={{
      //   baseTheme: shadesOfPurple,
      // }}
      />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}
