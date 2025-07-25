import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">

        {/* Left: Logo and Tagline */}
        <div className="text-[3em] md:text-left">
          Celest3l
          <p className="text-sm text-gray-400 mt-2">
            Building digital experiences that connect, inspire, and grow businesses.
          </p>
        </div>

        {/* Center: Navigation */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Social Icons */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex md:justify-start gap-4">
            <Link
              href="https://facebook.com"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
            </Link>

            <Link
              href="https://twitter.com"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </Link>

            <Link
              href="https://instagram.com"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </Link>

            <Link
              href="https://linkedin.com"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;