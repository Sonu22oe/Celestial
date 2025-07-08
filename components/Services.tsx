import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faServer,
  faPenNib,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    id: 1,
    icon: faGlobe,
    title: 'Web Development',
    description: 'We create responsive and user-friendly websites tailored to your business needs.',
  },
  {
    id: 2,
    icon: faCode,
    title: 'Software Development',
    description: 'We build custom software solutions to streamline your operations and improve efficiency.',
  },
  {
    id: 3,
    icon: faPenNib,
    title: 'UI/UX Design',
    description: 'We design intuitive and engaging user interfaces that enhance the user experience.',
  },
  {
    id: 4,
    icon: faServer,
    title: 'Backend Development',
    description: 'We develop robust and scalable backend systems to power your applications.',
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto ">
        <h2 className="text-[4.5em] font-semibold mb-20 Poppins uppercase  mx-5 tracking-wider leading-tight  lg:text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className=" px-6 py-6 rounded-lg hover:shadow-xl bg-gradient-to-bl from-blue-500 to-blue-800 transition-shadow duration-300 mx-5 ">
              <FontAwesomeIcon icon={service.icon} className="text-[2em] text-white  mb-3" />
              <h3 className="text-xl font-semibold text-slate-50 mb-2 my-2">{service.title}</h3>
              <p className="text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;