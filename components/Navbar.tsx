import Image from 'next/image';
import { Button } from './ui/button';
import { UsersIcon } from 'lucide-react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='border-b border-gray-200 max-w-[85rem] w-full mx-auto px-4 flex items-center md:justify-between justify-center sm:px-6 lg:px-8 py-3 sm:py-1'>
      <Link href="/">
        <Image
            src="/logo.svg"
            alt="Kreato AI"
            width={150}
            height={110}
            />
      </Link>
      <div>
        <Link href="/dashboard" className='md:flex items-center gap-x-2 font-medium text-white
         hover:text-primary sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6
         hidden
         '>
            {/* <UsersIcon/> */}
            <Image
            src="/Join.svg"
            alt="A beautiful landscape"
            width={20}
            height={40}
            />
            <span>Get Started</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
