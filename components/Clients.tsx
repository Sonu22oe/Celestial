// components/Clients.tsx
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Clients = () => {
  const clients = [
    {
      image: '/clients/Clients1.jpg',
      caption:
        'Sanofi Corp is a leading global innovator in enterprise solutions, helping organizations streamline operations and scale efficiently with advanced digital transformation strategies.',
    },
    {
      image: '/clients/Clients2.jpg',
      caption:
        'Beta Solutions provides powerful cloud-based tools for logistics and retail businesses, enabling smarter inventory control and faster, data-driven decision-making at every level.',
    },
    {
      image: '/clients/Clients3.jpg',
      caption:
        'Gamma Industries is known for its cutting-edge engineering and manufacturing excellence, producing high-precision components used across automotive, aerospace, and medical technology sectors.',
    },
    {
      image: '/clients/Clients4.jpg',
      caption:
        'Delta Group partners with enterprises worldwide to deliver custom IT services, cybersecurity infrastructure, and enterprise-grade mobile and web platforms built for performance and scale.',
    },
    {
      image: '/clients/Clients5.jpg',
      caption:
        'Epsilon Tech is a forward-thinking startup creating intuitive AI solutions that enhance productivity, automate workflows, and empower small teams to operate at enterprise efficiency levels.',
    },
    {
      image: '/clients/Clients6.jpg',
      caption:
        'Zeta Labs develops next-generation IoT and smart automation systems for smart homes, industrial robotics, and intelligent energy management solutions across diverse use cases.',
    },
  ];

  return (
    <div className="bg-gray-800 py-16 px-4 lg:px-20">
      <h2 className="text-[5em] sm:text-[4em] lg:text-[5em]  lg:text-center mb-12  text-white leading-tight tracking-wide uppercase  font-semibold Poppins">
        Our Clients
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        loop={true}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1424: { slidesPerView: 5 },
        }}
        className="px-2"
      >
        {clients.map((client, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-center items-center text-white"
          >
            <Image
              src={client.image}
              alt={`Client ${index + 1}`}
              width={350}
              height={250}
              className="rounded-xl mx-2 aspect-[3/2] object-cover object-center"
              priority={index === 0}
            />
            <p className="mt-3 text-sm font-medium mx-3 text-left">{client.caption}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Container */}
      <div className="custom-swiper-pagination mt-6 flex justify-center gap-2" />

      {/* Pagination Style */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          background-color: white;
          opacity: 0.4;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-swiper-pagination .swiper-pagination-bullet:hover {
          transform: scale(1.2);
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: #ffffff;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default Clients;