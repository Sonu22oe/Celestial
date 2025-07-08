import React from 'react';
import Image from 'next/image';

const storyData = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

const OurStory = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto lg:px-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our Story
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg md:order-2">
            <Image
              src="/hero-page.jpg"
              alt="Our Story"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="space-y-5 md:order-1 space-x-6">
            {storyData.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;