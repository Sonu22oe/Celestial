import React from 'react';
import Hero from './Hero';
import Footer from './Footer';
import About from './About';
import Services from './Services'

import Testimonial from './Testimonial'
import Contact from './Contact'

import Head from 'next/head';
import Clients from "./Clients"
import Stats from './Stats'
      


import Ourteam from './Ourteam'
const Home: React.FC = () => {
  return (
    <>
     <Head>
        <title>Home Page | Celest3l | your ladder for business growth</title>
        <meta name="description" content="Page description here." />
        <meta name="keywords" content="your, keywords, here" />
        <meta name="author" content="Your Name" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph for Facebook/LinkedIn */}
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Description for social share." />
        <meta property="og:image" content="https://yourdomain.com/image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Page Title" />
        <meta name="twitter:description" content="Twitter share description." />
        <meta name="twitter:image" content="https://yourdomain.com/image.jpg" />
      </Head>

      <Hero />
      <Stats/>
      <Services/>
      <About />
      <Clients/>
      <Testimonial/>
      <Ourteam/>
      
      <Contact/>
      <Footer />
      
    </>
  );
};

export default Home;