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
      // console.log('Razorpay script loaded');
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
      // console.log('Subscription created:', res.data);
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
            // console.log(response);
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

      // console.log(user?.primaryEmailAddress?.emailAddress);
      
      if (result) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Error saving subscription:', error);
    }
  }

  return (
    <div className='overflow-y-auto w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
      <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 my-8">
        {plans.map((plan) => (
          <li key={plan.name} className="col-span-1 bg-gray-800 rounded-lg shadow-xl shadow-purple-600/20 border-2 border-purple-600/20 divide-y divide-gray-700">
            <div className="p-6 space-y-6">
              <div className="flex flex-col items-center">
                <Image src={plan.icon} alt="plan icon" width={50} height={50} className="mb-3" />
                <h3 className="text-xl font-semibold text-purple-400">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{plan.credits}</p>
              </div>
              
              <ul className="space-y-4">
                {plan.inclusions.map((inclusion) => (
                  <li key={plan.name + inclusion.label} className="flex items-center">
                    <Image
                      src={`/${inclusion.isIncluded ? "check.svg" : "cross.svg"}`}
                      alt={inclusion.isIncluded ? "included" : "not included"}
                      width={20}
                      height={20}
                      className="mr-3 flex-shrink-0"
                    />
                    <p className="text-sm text-gray-300">{inclusion.label}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-6 py-4">
              {plan.name === "Free" ? (
                <Button className="w-full rounded-full bg-purple-800 text-purple-200 hover:bg-purple-700 hover:text-white">
                  Free Consumable
                </Button>
              ) : (
                <Button
                  variant="outline"
                  disabled={loading || userSubscription}
                  onClick={() => createSubscription()}
                  aria-describedby="product1" 
                  className={`w-full rounded-full text-purple-200 hover:bg-purple-700 hover:text-white ${userSubscription ? "bg-yellow-600" : "bg-purple-800"}`}
                >
                  {loading ? (
                    <Loader2Icon className="animate-spin" />
                  ) : userSubscription ? (
                    "Active Plan"
                  ) : (
                    "Buy Now"
                  )}
                </Button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Subscription;