"use client";

import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4">
          We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information about you when you use our online subscription services.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect information that you provide directly to us when you create an account, subscribe to our services, or communicate with us. This information may include your name, email address, payment information, and any other details you choose to provide.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Provide, maintain, and improve our services</li>
          <li>Process your transactions and manage your subscriptions</li>
          <li>Send you technical notices, updates, security alerts, and support messages</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Communicate with you about products, services, offers, and events</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Personalize and improve the services and provide advertisements, content, or features that match user profiles or interests</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
        <p className="mb-4">
          We may share information about you as follows or as otherwise described in this Privacy Policy:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
          <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
          <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of us or others</li>
          <li>With your consent or at your direction</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4">4. Security</h2>
        <p className="mb-4">
          We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
        <p className="mb-4">
          You may update, correct, or delete information about you at any time by logging into your account or contacting us. If you wish to delete or deactivate your account, please contact us, but note that we may retain certain information as required by law or for legitimate business purposes.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide additional notice (such as adding a statement to our homepage or sending you a notification). We encourage you to review the Privacy Policy whenever you access our services to stay informed about our information practices and the ways you can help protect your privacy.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at support@example.com.
        </p>
        
        <p className="mt-6 text-center">
          Thank you for trusting us with your information.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
