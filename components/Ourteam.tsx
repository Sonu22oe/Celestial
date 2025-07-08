import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    image: '/Ourteam1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    image: '/Ourteam0.jpg',
  },
  {
    name: 'Peter Jones',
    role: 'Marketing Manager',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    image: '/Ourteam2.jpg',
  },
  {
    name: 'Alice Brown',
    role: 'Sales Director',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    image: '/Ourteam3.jpg',
  },
];

const OurTeam = () => {
  return (
    <div className="container mx-auto py-12 px-5">
      <h2 className="text-[5em] font-semibold  text-black mb-5 Poppins leading-tight lg:text-center"> Meet Our Team</h2>
      <p className="text-gray-500 lg:text-center mb-16 text-[1.2em] ">
        We are a team of dedicated professionals passionate about delivering exceptional results.
      </p>
    




      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center ">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-transparent w-[300px] rounded shadow-lg overflow-hidden flex flex-col justify-center items-center  xl:border-1 xl:border-slate-500/20 my-6">
            <img className={index%2?"xl:order-2 w-full h-66 xl:aspect-[6/8] xl:h-auto object-cover":"order-1 w-full h-66 xl:h-auto object-cover xl:aspect-[6/8]"} src={member.image} alt={member.name} />
            <div className={(index==1||3)?'order-1 p-4':'xl:order-2 p-4'}>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-700 mt-2">{member.description}</p>
              <div className="flex justify-start mt-4">
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-700 mr-4">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-pink-700 mr-4">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-900">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;