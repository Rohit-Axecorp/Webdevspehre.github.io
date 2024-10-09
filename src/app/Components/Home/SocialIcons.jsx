"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const SocialIcons = () => {
    return (
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 md:p-7 p-5 z-50">
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white border-[1px] border-none rounded-full p-3 bg-[#ED1E3A] bg-opacity-80 transition-transform transform hover:scale-110 hover:shadow-lg hover:bg-opacity-100 icon-animation"
            >
                <FaFacebookF size={25} />
            </a>
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white border-[1px] border-none rounded-full p-3 bg-[#ED1E3A] bg-opacity-80 transition-transform transform hover:scale-110 hover:shadow-lg hover:bg-opacity-100 icon-animation"
            >
                <FaTwitter size={25} />
            </a>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white border-[1px] border-none rounded-full p-3 bg-[#ED1E3A] bg-opacity-80 transition-transform transform hover:scale-110 hover:shadow-lg hover:bg-opacity-100 icon-animation"
            >
                <FaInstagram size={25} />
            </a>
            <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white border-[1px] border-none rounded-full p-3 bg-[#ED1E3A] bg-opacity-80 transition-transform transform hover:scale-110 hover:shadow-lg hover:bg-opacity-100 icon-animation"
            >
                <FaLinkedinIn size={25} />
            </a>
        </div>
    );
};

export default SocialIcons;
