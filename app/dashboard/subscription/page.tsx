'use client'
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { Button } from "@/components/ui/button";
import { db } from "@/utils/dbConnection";
import { UserSubscription } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import axios from 'axios'
import { Loader2Icon } from "lucide-react";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { plans } from '@/constants'
import Image from 'next/image';

declare global {
  interface Window {
    Razorpay: any;
  }
}


function Subscription() {

  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const { user } = useUser()
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext)


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      console.log('Razorpay script loaded');
      setRazorpayLoaded(true);
    };
    script.onerror = () => {
      console.error('Failed to load Razorpay script');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const createSubscription = async () => {
    if (!razorpayLoaded) {
      console.error('Razorpay not loaded yet');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('/api/create-subscription', {});
      console.log('Subscription created:', res.data);
      await opPayment(res.data.id);
    } catch (error) {
      console.error('Subscription creation error:', error);
      setLoading(false);
    }
  };

  const opPayment = (subId: string) => {
    return new Promise((resolve, reject) => {
      if (typeof window.Razorpay === 'undefined') {
        console.error('Razorpay not available');
        setLoading(false);
        reject(new Error('Razorpay not available'));
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        subscription_id: subId,
        name: "Kreato AI",
        description: "Gold Subscription",
        handler: async (response: any) => {
          setLoading(false);
          resolve(response);
          if (response)
            console.log(response);
            saveSubscription(response?.razorpay_payment_id)
        },
      };


      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response: any) => {
        console.error('Payment failed:', response.error);
        setLoading(false);
        reject(new Error('Payment failed'));
      });
      rzp.open();
    });
  };

  const saveSubscription = async (paymentId: string) => {
    try {
      const result = await db.insert(UserSubscription).values({
        // @ts-ignore
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        paymentID: paymentId,
        joinDate: moment().format('DD/MM/yyyy'),
        active: true
      });

      console.log(user?.primaryEmailAddress?.emailAddress);
      
      if (result) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Error saving subscription:', error);
    }
  }

   return (
    <div className='overflow-y-auto max-w-[80%] flex justify-center items-center mx-auto'>
      <ul className="m-5 p-5 grid grid-cols-2 gap-5 sm:grid-cols-1 md:gap-9 xl:grid-cols-2">
        {plans.map((plan) => (
          <li key={plan.name} className="w-full rounded-[16px] border-2 border-purple-600/20 bg-gray-800 p-8 shadow-xl shadow-purple-600/20 lg:max-w-none">
            <div className="flex justify-center items-center flex-col gap-3">
              <Image src={plan.icon} alt="check" width={50} height={50} />
              <p className="font-semibold text-[20px] leading-[140%] mt-2 text-purple-400">
                {plan.name}
              </p>
              {/* <p className="max-w-[500px] flex-wrap text-center text-white shadow-sm">Rs. {plan.price}</p> */}
              <p className="font-normal text-[16px] leading-[140%] text-gray-300">{plan.credits}</p>
            </div>

            {/* Inclusions */}
            <ul className="flex flex-col gap-5 py-9">
              {plan.inclusions.map((inclusion) => (
                <li
                  key={plan.name + inclusion.label}
                  className="flex items-center gap-4"
                >
                  <Image
                    src={`/${inclusion.isIncluded ? "check.svg" : "cross.svg"}`}
                    alt="check"
                    width={24}
                    height={24}
                  />
                  <p className="font-normal text-[16px] leading-[140%] text-gray-300">{inclusion.label}</p>
                </li>
              ))}
            </ul>

            {plan.name === "Free" ? (
              <Button className="w-full rounded-full bg-purple-800 bg-cover text-purple-200 hover:bg-purple-700 hover:text-white">
                Free Consumable
              </Button>
            ) : (
              <Button
              variant="outline"
                disabled={loading || userSubscription}
                onClick={() => createSubscription()}
                aria-describedby="product1" 
                // className="mt-8 w-full text-center text-sm font-semibold bg-purple-600 hover:bg-purple-700 text-white"
                className={`w-full rounded-full  bg-cover text-purple-200 hover:bg-purple-700 hover:text-white ${userSubscription? "bg-yellow-600":"bg-purple-800"}`}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <Loader2Icon className="animate-spin" />
                  </div>
                ) : userSubscription ? (
                  "Active Plan"
                ) : (
                  "Buy Now"
                )}
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Subscription;