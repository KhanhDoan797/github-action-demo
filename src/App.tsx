import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-2xl font-bold text-center mb-8">Deployment Info</h1>
                <div className="space-y-4">
                  <p className="flex justify-between">
                    <span className="font-semibold">Branch:</span>
                    <span className="text-green-600">{'Not available'}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Build Time:</span>
                    <span className="text-blue-600">{'Not available'}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Environment:</span>
                    <span className="text-purple-600">{'development'}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
