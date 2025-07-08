// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Video Background (Optional) */}
         
        { /* <Image
          src="/hero-page.jpg"
          alt="Illustration of digital solutions"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full"
        />*/}
        <video
          src="/Hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className=" inset-0 w-full h-full          aspect-[5/7] lg:aspect-[7/4] object-cover"
        /> 
        {/* Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/10"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-white max-w-4xl mt-20 mb-12 lg:my-25">
          <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight mb-4">
            Empower Your Business with <span className="text-blue-200">Smart Solutions</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center">
            Discover powerful tools to boost productivity, streamline operations, and grow online. From AI-driven insights to cloud-based management, we have everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
            <a
              href="#get-started"
              className="bg-white text-slate-900 px-10 py-4 font-semibold text-center sm:w-auto w-full transition hover:bg-gray-100 mx-5"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="bg-transparent border border-white text-white px-6 py-4 font-semibold text-center sm:w-auto w-full transition hover:bg-white hover:text-slate-900"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}