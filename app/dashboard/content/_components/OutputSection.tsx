'use client'
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { PROPS } from '@/app/(type)/Type';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

interface OutputSectionProps {
  aiGeneratedOutput?: string;
}

const OutputSection = ({ aiGeneratedOutput }: OutputSectionProps) => {
  const editRef: any = useRef();

  useEffect(() => {
    const editorInstance = editRef.current.getInstance();
    if (editorInstance) {
      editorInstance.setMarkdown(aiGeneratedOutput || "");
    }
  }, [aiGeneratedOutput]);

  const copyToClipboard = () => {
    if (aiGeneratedOutput) {
      navigator.clipboard.writeText(aiGeneratedOutput).then(() => {
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
      className={`bg-gray-800 shadow-lg border border-gray-700 rounded-lg overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-5 bg-gray-700'>
        <h2 className='font-medium text-base sm:text-lg text-purple-300 mb-2 sm:mb-0'>Your Result</h2>
        <Button 
          className='flex gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base w-full sm:w-auto' 
          onClick={copyToClipboard}
        >
          <Copy className='h-4 w-4' /> Copy
        </Button>
      </div>
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Editor
          ref={editRef}
          initialValue="Your Result will appear here!"
          initialEditType="wysiwyg"
          height="100%"
          theme="dark"
          useCommandShortcut={true}
          previewStyle="vertical"
        />
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
}

export default OutputSection;