import Image from "next/image";
import Head from "next/head";
import Stats from './Stats'
const AboutUs = () => {
  return (
    <>
      { /*<Head>
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



*/}
      
      
      <section className="gradient-to-br  from-blue-300 to-white py-15 px-6 md:px-20 ">
        <div className="max-w-6xl mx-auto">
          <header className=" lg:text-center  mb-14">
            <h1 className="text-[4em]  font-bold  mb-2  tracking-wide Poppins uppercase">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mx-auto">
              Discover how we merge technology, creativity, and business goals to craft
              digital products that matter.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-row-2 gap-x-8">
        
            
       
        {/* Block 1 */}
            <article className="   lg:row-span-2 flex flex-col items-center">
              <Image
                src="/data-analysis.jpg"
                alt="Digital success strategy"
                width={600}
                height={400}
                className="rounded  object-cover w-full shadow-md aspect-[3/4]"
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
                  and mobile platforms.</p>
                 
                    
                
              </div>
              <a className="bg-black text-white px-6 py-4 my-10 justify-left  w-[100%] text-center" href="/api/about">Read More</a>
            </article>

            {/* Block 2 */}
            <article className=" py-4 rounded-xl flex flex-col  items-center">
              <Image
                src="/community.jpg"
                alt="Creative innovation team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full aspect-video"
              />
               <div className="mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  Innovation Meets Execution
                </h2>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                  Our team bridges creativity and technical excellence, delivering
                  high-performance applications and memorable user experiences that
                  drive growth.
                </p>
              </div>
            </article>

            {/* Block 3 */}
            <article className="py-4 rounded-xl flex flex-col items-center">
              <Image
                src="/innovation.jpg"
                alt="Scalable digital platform design"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full aspect-video"
              />
              <div className="mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                  Future-Ready Platforms
                </h2>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                  We build scalable, secure, and adaptable platforms that meet the
  challenges of tomorrow’s digital landscape.
       </p>
              </div>
            </article>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default AboutUs;