import React from 'react';
import { TEMPLATES } from "@/app/(type)/Type"
import Image from 'next/image';
import Link from "next/link";

const TemplateCard: React.FC<TEMPLATES> = (item) => {
  return (
    <Link 
      href={`/dashboard/content/${item.slug}`} 
      className="p-6 shadow-md flex flex-col rounded-lg bg-gray-800 border border-gray-700 gap-3 cursor-pointer hover:scale-105 transition-all hover:bg-gray-750 group w-full"
    >
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
          <Image
            src={item.icon}
            alt={`${item.name} icon`}
            layout="fill"
            objectFit="contain"
            className="group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h2 className="font-medium text-lg sm:text-lg text-white group-hover:text-blue-400 transition-colors">{item.name}</h2>
      </div>
      <p className="text-sm sm:text-base text-gray-400 line-clamp-3 group-hover:text-gray-300 transition-colors">{item.desc}</p>
    </Link>
  )
}

export default TemplateCard;