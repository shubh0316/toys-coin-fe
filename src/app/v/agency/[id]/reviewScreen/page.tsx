import React from 'react';

function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-5 text-center">
      <div className="max-w-2xl w-full p-10 rounded-lg bg-white shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Onboarding Status is Under Review
        </h2>
        
        <p className="text-lg text-gray-600 mb-2">
          Please wait until Admin verifies your agency details.
        </p>
        
        <p className="text-lg text-gray-600 mb-6">
          Thank you for your patience.
        </p>

        <div className="text-base text-gray-500">
          Contact us: {' '}
          <a 
            href="mailto:support@toyscoin.org" 
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            support@toyscoin.org
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;