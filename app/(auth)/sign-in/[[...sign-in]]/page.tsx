import { SignIn } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 via-purple-900 to-purple-700">
      <SignIn

        // appearance={{
        //   baseTheme: shadesOfPurple,
        // }}
      />
    </div>
  );
}
