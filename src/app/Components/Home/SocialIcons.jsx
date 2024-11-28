"use client";

import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn, FaPinterest } from 'react-icons/fa';

const SocialIcons = () => {
    return (
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 md:p-7 p-5 z-50">
            <a
                href="https://www.facebook.com/webdevsphere1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white border-[1px] border-none rounded-full p-3 bg-[#ED1E3A] bg-opacity-80 transition-transform transform hover:scale-110 hover:shadow-lg hover:bg-opacity-100 icon-animation"
            >
                <FaFacebookF size={25} />
            </a>
            <a
                href="https://www.youtube.com/@webdevsphere1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white border-[1px] border-none rounded-full p-3 bg-[#ED1E3A] bg-opacity-80 transition-transform transform hover:scale-110 hover:shadow-lg hover:bg-opacity-100 icon-animation"
            >
                <FaYoutube size={25} />
            </a>
            <a
                href="https://www.instagram.com/webdevsphere/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white border-[1px] border-none rounded-full p-3 bg-[#ED1E3A] bg-opacity-80 transition-transform transform hover:scale-110 hover:shadow-lg hover:bg-opacity-100 icon-animation"
            >
                <FaInstagram size={25} />
            </a>
            <a
                href="https://www.linkedin.com/company/web-dev-sphere"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white border-[1px] border-none rounded-full p-3 bg-[#ED1E3A] bg-opacity-80 transition-transform transform hover:scale-110 hover:shadow-lg hover:bg-opacity-100 icon-animation"
            >
                <FaLinkedinIn size={25} />
            </a>
            <a
                href="https://www.pinterest.com/webdevsphere1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white border-[1px] border-none rounded-full p-3 bg-[#ED1E3A] bg-opacity-80 transition-transform transform hover:scale-110 hover:shadow-lg hover:bg-opacity-100 icon-animation"
            >
                <FaPinterest size={25} />
            </a>
        </div>
    );
};

export default SocialIcons;
