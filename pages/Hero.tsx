
// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-12 overflow-x-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="order-2 md:w-1/2 mb-10 md:mb-0 lg:order-1">
          <h1 className="text-[3em] md:text-5xl font-bold mb-2 leading-tight ">
            Empower Your Business with <span className="text-blue-900">Smart Solutions</span>
          </h1>
          <p className="text-lg text-gray-700 mb-10">
            Discover powerful tools to boost productivity, streamline operations, and grow online.From AI-driven insights to cloud-based management, we have everything you need.
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
          <a
            href="#get-started"
            className="inline-block bg-slate-900 text-white px-6 py-4 font-semibold transition w-full lg:h-[60px] text-center"
          >
            Get Started
          </a>

          <a
            href="#get-started"
            className="inline-block bg-transparent hover:bg-blue-600 text-slate-900 px-6 py-4 border-1 border-slate-700 lg:my-0 font-semibold transition w-full text-center lg:h-[60px] lg:mx-5"
          >
            Learn More
          </a>
          </div>

          
        </div>
        <div className="md:w-[50%] max-w-[100vw]  flex justify-center lg:mx-[15px]">
  <Image
    src="/hero-page.jpg"
    alt="Illustration of digital solutions"
   height={400}
    width={600}
  
    
    className="   my-10  bg-cover  order-1 lg:mx-10 md:mx-6 lg:order-2"
    priority
  />
</div>
      </div>
    </section>
  );
}
