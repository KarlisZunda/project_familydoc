import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-5xl">
              Welcome to FamilyDoc
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your trusted platform for managing family health records and medical history. 
              Keep all your important medical information organized and accessible in one secure place.
            </p>
          </div>

          {/* Image */}
          <div className="order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/placeholder-hero.jpg"
                alt="Family healthcare illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;