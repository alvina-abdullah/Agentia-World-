
  import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Brand Section */}
        <div>
        <span className="text-purple-400 text-2xl">🤖</span>
          <h1 className="text-3xl font-bold"><a href="#hero">Agentia World</a></h1>
          <p className="mt-4 text-sm leading-relaxed">
          Next-generation AI agents powering the future of enterprise intelligence.
          </p>
          <div className="flex justify-center md:justify-start mt-6 space-x-4">
            <a href="https://github.com/alvina-abdullah" target="blank" aria-label="GitHub" className="text-xl hover:text-blue-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/alvina-abdullah" target="blank" aria-label="LinkedIn" className="text-xl hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61555959117909" target="blank" aria-label="Facebook" className="text-xl hover:text-blue-400">
              <FaFacebook />
            </a>
            
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-lg font-semibold text-white cursor-pointer">Product</h2>
          <ul className="mt-6 space-y-3 text-sm">
            
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Documentation</li>
            <li className="cursor-pointer" >Documentation</li>
            <li className="cursor-pointer">API</li>
            
          </ul>
        </div>

        {/* Links Section */}
        <div className="space-x-1">
          <h2 className="text-lg font-semibold text-white">Company</h2>
          <ul className="mt-6 space-y-3 text-sm ">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Careers</li>
                <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-x-1 max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center">
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <ul className="mt-6 space-y-3 text-sm ">
            <li className="flex items-center space-x-3">
              <HiOutlineMail className="text-white" size={20} />
              <a
                href="mailto:alvinaabdullah16@gmail.com"
                className="hover:underline "
              >
                alvinaabdullah16@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <GoLocation className="text-white" size={20} />
              <span>Karachi, Pakistan</span>
            </li>
            <li className="flex items-center space-x-3">
              <FiPhone className="text-white" size={20}/>
              <span>03 23547698</span>
            </li>
          </ul>
        </div>
      </div>
              {/* Bottom Section */}
              <div className="mt-10 text-center text-gray-200 text-sm border-t border-gray-800 pt-4">
          © 2025 Agentia World. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
