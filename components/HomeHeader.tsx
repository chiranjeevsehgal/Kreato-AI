import React from "react"
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CircleArrowRight } from "lucide-react";
import FeaturesContent from "./Features";
import Navbar from "./Navbar";


const HomeHeader = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 via-purple-900 to-purple-700 text-white">
            <Navbar/>
            <Image
                className="hidden lg:block absolute top-[40%] -translate-y-1/2 -left-24 xl:-left-2 opacity-70"
                src="/DM-2.webp"
                alt="Robot"
                width={120}
                height={100}
            />
            <Image
                className="hidden lg:block absolute top-[40%] -translate-y-1/2 -right-24 xl:-right-2 opacity-70"
                src="/DM-2.webp"
                alt="Robot"
                width={120}
                height={100}
            />
            <div className="flex flex-col gap-6 justify-center items-center max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                <div>
                    <Link href="/dashboard/subscription" className="inline-flex items-center gap-x-2 bg-gray-800 text-sm text-white p-2 ps-3 rounded-full transition hover:bg-gray-700">
                        Kreato Ai Membership - Join Now
                        <CircleArrowRight className="w-5 h-5" />
                    </Link>
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        {/* AI Content */}
                        AI-Powered 
                        <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                            {/* Generator */}
                            Content Creation

                        </span>
                    </h1>
                </div>
                <div className="mt-3 max-w-xl text-center mx-auto">
                    <p className="text-base sm:text-lg text-gray-300">Revolutionize your content creation with our AI-powered app, delivering tailored, high-quality content in seconds.</p>
                </div>
                <div className="mt-3">
                    <Link href="/dashboard" className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 py-3 px-6 transition-all duration-300">
                        <span>Get started</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
            <FeaturesContent/>
        </div>
    )
}

export default HomeHeader
