"use client";

import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
        <p className="mb-4">
          Welcome to our online subscription service. By accessing or using our services, you agree to be bound by the terms and conditions set forth below. Please read them carefully.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions, as well as our Privacy Policy. If you do not agree to these terms, please do not use our services.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">2. Subscription Services</h2>
        <p className="mb-4">
          Our services are offered as online subscriptions. Upon purchasing a subscription, you will receive access to our online platform and services for the duration of the subscription period.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">3. User Conduct</h2>
        <p className="mb-4">
          You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the services. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
        <p className="mb-4">
          All content included in our services, such as text, graphics, logos, images, and software, is the property of our company or its content suppliers and protected by international copyright laws. Unauthorized use of the content may violate copyright, trademark, and other laws.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">5. Termination</h2>
        <p className="mb-4">
          We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users of our services, us, or third parties, or for any other reason.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
        <p className="mb-4">
          Our company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of our services.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and your continued use of our services after such changes have been made constitutes your acceptance of the new Terms and Conditions.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about these Terms and Conditions, please contact us at support@example.com.
        </p>
        
        <p className="mt-6 text-center">
          Thank you for using our services.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
