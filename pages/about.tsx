import Image from "next/image";
import Head from "next/head";
import Link from "next/link"; // ✅ Import Link for internal navigation
import Stats from '../components/Stats';
import Ourteam from '../components/Ourteam';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Ceslest3l Digital Agency</title>
        <meta
          name="description"
          content="Learn how Ceslest3l empowers businesses with digital solutions, from innovation to execution, building future-ready platforms."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Us | Ceslest3l Digital Agency" />
        <meta
          property="og:description"
          content="We empower startups and enterprises with powerful digital solutions and world-class platforms."
        />
        <meta property="og:image" content="/data-analysis.jpg" />
      </Head>

      <section className="bg-white py-15 px-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how we merge technology, creativity, and business goals to craft
              digital products that matter.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-10">
            {/* Block 1 */}
            <article className="p-6 rounded-x lg:row-span-2 flex flex-col items-center">
              <Image
                src="/data-analysis.jpg"
                alt="Digital success strategy"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full shadow-md aspect-[12/9]"
                priority
              />
              <div className="mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  We Build Digital Success
                </h2>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                  At Ceslest3l, we empower businesses with innovative solutions,
                  stunning designs, and powerful digital tools. From startups to
                  enterprises, we partner with visionaries to create world-class web
                  and mobile platforms.
                </p>

                <h3 className="text-2xl font-bold text-slate-600 mt-6 mb-4">Here’s what sets us apart:</h3>
                <ul className="list-disc pl-5 mt-2 space-y-5">
                  <li><b>Custom Solutions:</b> Tailored strategies for your unique needs.</li>
                  <li><b>Cutting-Edge Tech:</b> Leveraging the latest technologies for optimal results.</li>
                  <li><b>Dedicated Support:</b> A committed team ensuring your success every step of the way.</li>
                  <li><b>Proven Results:</b> Delivering measurable impact and ROI.</li>
                  <li><b>Client-Centric Approach:</b> Your goals are our top priority.</li>
                </ul>
              </div>

              {/* ✅ Updated with Link */}
              <Link
                href="/api/about"
                className="bg-black text-white px-6 py-4 my-10 justify-left w-[100%] text-center block"