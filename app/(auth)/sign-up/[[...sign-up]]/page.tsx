import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 via-purple-900 to-purple-700">
        <SignUp 
        forceRedirectUrl="/dashboard"
        />
    </div>
  )
  ;
}