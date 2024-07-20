"use client";

import React from 'react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Shipping Policy</h1>
        <p className="mb-4">
          Thank you for your interest in our online subscription services. We appreciate your business and are committed to providing you with the best possible service.
        </p>
        <h2 className="text-2xl font-semibold mb-4">No Physical Products</h2>
        <p className="mb-4">
          Please note that our products are purely digital subscriptions. There are no physical products to ship. Upon purchasing a subscription, you will gain immediate access to our online platform and the associated services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Subscription Activation</h2>
        <p className="mb-4">
          Your subscription will be activated as soon as your payment is processed. You will receive a confirmation email with details on how to access your subscription. If you do not receive this email within a few minutes, please check your spam folder or contact our support team.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Support</h2>
        <p className="mb-4">
          If you have any questions or need assistance with your subscription, please do not hesitate to contact our support team at support@example.com. We are here to help you and ensure that you have a seamless experience with our services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Changes to this Policy</h2>
        <p className="mb-4">
          We reserve the right to update or change our Shipping Policy at any time. Any changes will be posted on this page. We encourage you to review this policy periodically to stay informed about our shipping practices.
        </p>
        <p className="mt-6 text-center">
          Thank you for choosing our services. We look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
