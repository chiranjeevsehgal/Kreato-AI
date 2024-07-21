'use client'
import { useContext, useState } from "react";
import { PROPS } from "@/app/(type)/Type"
import FormSection from "../_components/FormSection"
import OutputSection from "../_components/OutputSecton"
import { Templates } from '@/app/(data)/Templates'
import { TEMPLATES } from '@/app/(type)/Type'
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { chatSession } from "@/utils/AiModel"
import { db } from "@/utils/dbConnection";
import { AIOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from 'next/navigation';
import { UpdateCreditUsage } from "@/app/(context)/UpdateCreditUsage";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

const CreateNewContent = (props: PROPS) => {
    const [loading, setLoading] = useState(false);
    const [aiGeneratedOutput, setAiGeneratedOutput] = useState<string>();
    const { user } = useUser()
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { updateUsage, setUpdateUsage } = useContext(UpdateCreditUsage);
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
    const router = useRouter()

    const selectedTemplate: TEMPLATES | undefined = Templates?.find((item) => item.slug === props.params["template-slug"]);

    const generateAiContent = async (formData: string) => {
        if (totalUsage > 800 && !userSubscription) {
            toast.error("Please Upgrade", {
                style: {
                    background: '#333',
                    color: '#fff',
                }
            });
            router.push("/dashboard/billing");
            console.log("Please Upgrade");
            return;
        }

        setLoading(true);
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const finalPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

        try {
            const result = await chatSession.sendMessage(finalPrompt);
            const responseText = await result?.response.text();
            console.log('responseText', responseText);
            setAiGeneratedOutput(responseText);
            if (formData && selectedTemplate?.slug && responseText) {
                await saveInDB(formData, selectedTemplate?.slug, responseText);
            }
            setLoading(false);
            setUpdateUsage(Date.now());
        } catch (error) {
            console.error('Error generating content:', error);
            toast.error("Error generating content", {
                style: {
                    background: '#333',
                    color: '#fff',
                }
            });
        }
    };

    const saveInDB = async (formData: string, slug: string, aiResponse: string) => {
        try {
            const result = await db.insert(AIOutput).values({
                formData: formData as string,
                templateSlug: slug as string,
                aiResponse: aiResponse as string,
                createdBy: user?.primaryEmailAddress?.emailAddress || '',
                createdAt: moment().format("DD/MM/YYYY")
            });
            console.log(result, user?.primaryEmailAddress?.emailAddress);
        } catch (error) {
            console.error('Error saving to database:', error);
        }
    };

    if (!selectedTemplate) {
        return (
            <motion.div 
                className="p-4 sm:p-6 md:p-10 bg-gray-800 text-white min-h-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/dashboard">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        <ArrowLeft className="mr-2" />
                        <span>Back</span>
                    </Button>
                </Link>
                <p className="text-red-400 mt-4">Template not found</p>
            </motion.div>
        );
    }

    return (
        <motion.div 
            className="p-4 sm:p-6 md:p-10 bg-gray-800 text-white min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Link href="/dashboard">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <ArrowLeft className="mr-2" />
                    <span>Back</span>
                </Button>
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-5">
                <div className="lg:col-span-1">
                    <FormSection
                        selectedTemplate={selectedTemplate}
                        userFormInput={(value: any) => generateAiContent(value)}
                        loading={loading}
                    />
                </div>
                <div className="lg:col-span-2">
                    <OutputSection aiGeneratedOutput={aiGeneratedOutput} />
                </div>
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
    )
}

export default CreateNewContent;