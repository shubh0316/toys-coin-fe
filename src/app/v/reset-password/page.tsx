import React, { Suspense } from 'react';
import ResetPassword from './resetPassword';

function Page() {
  return (
    <div>
      <Suspense fallback={
        <div className="max-w-md mt-20 mx-auto border-2 border-gray-500 rounded-2xl p-6 shadow-md">
          <h2 className="text-4xl font-frank mb-4 text-center">Loading...</h2>
        </div>
      }>
        <ResetPassword />
      </Suspense>
    </div>
  );
}

export default Page;

