'use client'
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { db } from "@/utils/dbConnection";
import { AIOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import { eq } from 'drizzle-orm';
import { Templates } from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { Loader2Icon, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

interface ResultItem {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
  wordCount: number;
}

const HistoryList: React.FC = () => {
  const { user } = useUser();
  const [result, setResult] = useState<ResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const userEmail = user?.primaryEmailAddress?.emailAddress;

  const getData = async () => {
    setLoading(true);
    try {
      const fetchedResult = await db.select().from<typeof AIOutput>(AIOutput).where(eq(AIOutput.createdBy as any, userEmail));
      const resultWithWordCount: ResultItem[] = fetchedResult.map(item => ({
        id: item.id,
        formData: item.formData,
        aiResponse: item.aiResponse,
        templateSlug: item.templateSlug,
        createdBy: item.createdBy,
        createdAt: item.createdAt,
        wordCount: countWords(item.aiResponse),
      }));
      setResult(resultWithWordCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);

  const findTemplate = (slug: string) => {
    return Templates.find(template => template.slug === slug);
  };

  const countWords = (text: string | null) => {
    return text ? text.replace(/[#*]/g, '').split(/\s+/).filter(word => word.length > 0).length : 0;
  };

  const copyToClipboard = (resp:any) => {
    if (resp) {
      navigator.clipboard.writeText(resp).then(() => {
        toast.success("Copied!")
        // You could add a toast notification here for successful copy
      }).catch(err => {
        console.error("Failed to copy: ", err);
        // You could add a toast notification here for failed copy
      });
    }
  };

  return (
    <motion.div 
      className='overflow-y-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='m-2 sm:m-5 p-3 sm:p-5 rounded-lg bg-gray-800 text-white shadow-xl'>
        <h2 className='font-bold text-2xl sm:text-3xl text-purple-400'>History</h2>
        <p className='text-gray-300 mb-3 sm:mb-5 text-sm sm:text-base'>Search your previously generated AI content</p>
        <div className='hidden sm:grid grid-cols-12 gap-2 sm:gap-4 bg-gray-700 py-2 sm:py-3 px-2 sm:px-3 rounded-t-lg font-semibold text-xs sm:text-sm'>
          <h2 className='col-span-2'>TEMPLATE</h2>
          <h2 className='col-span-4'>AI RESPONSE</h2>
          <h2 className='col-span-2'>DATE</h2>
          <h2 className='col-span-2'>WORDS</h2>
          <h2 className='col-span-2'>ACTIONS</h2>
        </div>
        {loading ? (
          <div className='flex justify-center items-center mx-auto mt-5'>
            <Loader2Icon className="animate-spin text-purple-500" />
          </div>
        ) : (
          result.map((item, index) => {
            const template = findTemplate(item.templateSlug);
            const formattedDate = item.createdAt;
            return (
              <motion.div 
                key={index} 
                className='flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-4 py-3 px-2 sm:px-3 border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className='sm:col-span-2 flex gap-2 items-center'>
                  <img src={template?.icon} alt={template?.name} className='w-6 h-6 sm:w-8 sm:h-8' />
                  <span className='text-purple-300 truncate text-sm sm:text-base'>{template?.name}</span>
                </div>
                <div className='sm:col-span-4 line-clamp-2 text-gray-300 text-sm sm:text-base mt-2 sm:mt-0'>{item.aiResponse}</div>
                <div className='sm:col-span-2 text-gray-400 text-xs sm:text-sm mt-2 sm:mt-0'>{formattedDate}</div>
                <div className='sm:col-span-2 text-gray-300 text-sm sm:text-base mt-2 sm:mt-0'>{item.wordCount} Words</div>
                <div className='sm:col-span-2 mt-2 sm:mt-0'>
                  <Button 
                    variant={"secondary"} 
                    className="bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4"
                    onClick={() => copyToClipboard(item.aiResponse || '')}
                    >
                    <Copy className="w-4 h-4 mr-1 sm:mr-2" />
                    Copy
                  </Button>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
      <Toaster 
                position="top-center"
                toastOptions={{
                    style: {
                        background: '#333',
                        color: '#fff',
                    },
                }}
            />
    </motion.div>
  );
};

export default HistoryList;