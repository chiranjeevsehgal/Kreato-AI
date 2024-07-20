"use client";

import React from 'react';

const CancellationsAndRefunds: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Cancellations and Refunds</h1>
        <p className="mb-4">
          Thank you for choosing our online subscription service. We strive to provide you with the best possible experience. Please read our Cancellations and Refunds policy carefully.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">No Cancellations</h2>
        <p className="mb-4">
          Once you have purchased a subscription to our service, the subscription cannot be cancelled. We do not offer cancellations for any of our subscription plans. Please ensure that you have reviewed your purchase carefully before completing the transaction.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">No Refunds</h2>
        <p className="mb-4">
          All subscription purchases are final and non-refundable. We do not provide refunds, prorated or otherwise, for any subscription periods that you have already used or have started to use.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Exceptions</h2>
        <p className="mb-4">
          In rare cases, we may consider exceptions to this policy at our sole discretion. If you believe you have a valid reason for an exception, please contact our support team at support@example.com with detailed information regarding your request.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-4">
          If you have any questions or need further clarification regarding our Cancellations and Refunds policy, please do not hesitate to contact our support team at support@example.com.
        </p>
        
        <p className="mt-6 text-center">
          Thank you for your understanding and for being a valued customer.
        </p>
      </div>
    </div>
  );
};

export default CancellationsAndRefunds;
