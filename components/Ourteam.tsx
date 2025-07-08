import React from 'react';
import Image from 'next/image';
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
      <h2 className="text-[5em] font-semibold text-black mb-5 Poppins leading-tight text-center">Meet Our Team</h2>
      <p className="text-gray-500 text-center mb-16 text-[1.2em]">
        We are a team of dedicated professionals passionate about delivering exceptional results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-[300px] bg-transparent rounded shadow-lg overflow-hidden flex flex-col justify-center items-center border border-slate-500/10"
          >
            <div className={index % 2 ? 'xl:order-2' : 'order-1'}>
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                width={300}
                height={400}
                className="object-cover w-full aspect-[6/8]"
                priority={index === 0}
              />
            </div>

            <div className={index === 1 || index === 3 ? 'order-1 p-4' : 'xl:order-2 p-4'}>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-700 mt-2">{member.description}</p>
              <div className="flex justify-start mt-4">
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-slate-700 hover:text-blue-500 mr-4">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-700 hover:text-pink-600 mr-4">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-700 hover:text-blue-900">
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