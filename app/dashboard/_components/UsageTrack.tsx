'use client'
import React, { useContext, useEffect, useState } from 'react';
import { db } from "@/utils/dbConnection"
import { AIOutput, UserSubscription } from "@/utils/Schema"
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { HISTORY } from "@/app/(type)/Type";
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsage } from '@/app/(context)/UpdateCreditUsage';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import Link from 'next/link';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface UsageTrackProps {
  isExpanded: boolean;
}

const UsageTrack: React.FC<UsageTrackProps> = ({ isExpanded }) => {
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const { updateUsage } = useContext(UpdateCreditUsage);
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
  const [maxWords, setMaxWords] = useState<number>(800);

  useEffect(() => {
    if (user) {
      getData();
      IsUserSubscribe();
    }
  }, [user, updateUsage]);

  const getData = async (): Promise<void> => {
    const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy as any, user?.primaryEmailAddress?.emailAddress));
    countTotalUsage(result);
  }

  const countWords = (text: string): number => {
    return text ? text.replace(/[#*]/g, '').split(/\s+/).filter(word => word.length > 0).length : 0;
  };

  const countTotalUsage = (result: HISTORY[]): void => {
    const total = result.reduce((acc, element) => {
      return acc + (element.aiResponse ? countWords(element.aiResponse) : 0);
    }, 0);
    setTotalUsage(total);
  };

  const IsUserSubscribe = async (): Promise<void> => {
    const result = await db.select().from(UserSubscription).where(eq(UserSubscription.email as any, user?.primaryEmailAddress?.emailAddress));
    setUserSubscription(result && result.length > 0);
    setMaxWords(result && result.length > 0 ? 10000 : 800);
  }

  const percentage = Math.min((totalUsage / maxWords) * 100, 100);

  return (
    <div className={`bg-gray-800 p-4 rounded-lg ${isExpanded ? 'text-sm' : 'text-xs'}`}>
      {isExpanded ? (
        <>
          <h2 className="font-medium text-white mb-3">Credits Usage</h2>
          <div className="w-24 h-24 mx-auto mb-3">
            <CircularProgressbar
              value={percentage}
              text={`${Math.round(percentage)}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: totalUsage > maxWords ? '#EF4444' : '#10B981',
                textColor: '#FFFFFF',
                trailColor: '#4B5563',
              })}
            />
          </div>
          <p className="text-center text-white mb-3">
            {totalUsage}/{Intl.NumberFormat('en-US').format(maxWords)} Used
          </p>
          {!userSubscription ? (
            <Link href="/dashboard/billing" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Upgrade
            </Link>
          ) : (
            <div className="block w-full text-center bg-yellow-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
              Gold Member
            </div>
          )}
        </>
      ) : (
        <div className="text-center">
          <CircularProgressbar
            value={percentage}
            text={`${Math.round(percentage)}%`}
            styles={buildStyles({
              textSize: '24px',
              pathColor: totalUsage > maxWords ? '#EF4444' : '#10B981',
              textColor: '#FFFFFF',
              trailColor: '#4B5563',
            })}
          />
        </div>
      )}
    </div>
  );
}

export default UsageTrack;
