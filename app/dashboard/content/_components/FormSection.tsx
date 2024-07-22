'use client'
import { useState, useEffect } from "react";
import { SELECTEDTEMPLATE } from "@/app/(type)/Type";
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader, Loader2Icon } from "lucide-react";
import { motion } from 'framer-motion';

const FormSection = ({ selectedTemplate, userFormInput, loading }: SELECTEDTEMPLATE) => {
    const [formData, setFormData] = useState<any>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        // console.log('formData', formData);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        userFormInput(formData);
    }

    return (
        <motion.div 
            className="shadow-md border border-gray-700 rounded-lg p-4 sm:p-5 bg-gray-800 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center mb-4">
                {selectedTemplate?.icon && (
                    <Image
                        src={selectedTemplate.icon}
                        alt="icon"
                        width={50}
                        height={50}
                        className="mr-3"
                    />
                )}
                <div>
                    <h2 className="font-bold text-xl sm:text-2xl text-purple-400">{selectedTemplate?.name}</h2>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">{selectedTemplate?.desc}</p>
                </div>
            </div>
            <form className="mt-4 sm:mt-6" onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className="flex flex-col gap-2 my-2 mb-5 sm:mb-7"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <label className="font-bold text-sm sm:text-base text-purple-300" htmlFor={item.name}>
                            {item.label}
                        </label>
                        {item.field === 'input' && (
                            <Input
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-xs sm:text-sm text-white"
                            />
                        )}
                        {item.field === 'textarea' && (
                            <Textarea
                                name={item.name}
                                onChange={handleInputChange}
                                required={item?.required}
                                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-xs sm:text-sm text-white"
                                
                            />
                        )}
                    </motion.div>
                ))}
                <Button 
                    type="submit" 
                    className="bg-purple-600 hover:bg-purple-700 w-full py-4 sm:py-6 text-white text-sm sm:text-base" 
                    disabled={loading}
                >
                    {loading && <Loader2Icon className="animate-spin mr-2"/>}
                    Generate Content
                </Button>
            </form>
        </motion.div>
    );
};

export default FormSection;