import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    text: "This product has transformed our workflow. We’ve become faster and more organized than ever.",
    name: "Sarah Johnson",
    title: "Marketing Lead, BlueWave Co.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    text: "Absolutely love it! The support team is responsive and the features are exactly what we needed.",
    name: "Michael Chen",
    title: "CTO, Nexa Labs",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    rating: 4,
  },
  {
    text: "Efficient and intuitive. It’s a must-have for any growing business.",
    name: "Priya Mehta",
    title: "Founder, Creatix Studio",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="bg-slate-100 py-16 px-4">
      <div className="lg:text-center mb-10">
        <h2 className="text-[4em] uppercase font-bold mb-4 text-slate-900 tracking-wide leading-tight Poppins">Hear <span className=" text-red-500">Our</span>  Clients</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Read what our satisfied clients are saying about their experiences with our product.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md hover:shadow-xl transition-shadow duration-300"
          >
            <FaQuoteLeft className="text-blue-600 text-xl mb-4" />
            <p className="text-gray-800 mb-4">{testimonial.text}</p>

            <div className="flex items-center mb-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.title}</div>
              </div>
            </div>

            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < testimonial.rating ? '' : 'text-gray-300'} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;