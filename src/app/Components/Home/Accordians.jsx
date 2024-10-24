"use client";

import React from 'react';

export default function Accordians({ title, content, isOpen, onToggle }) {
    return (
        <div
            className={`mb-2 rounded-lg transition-all duration-300 ${isOpen ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' : 'bg-gray-100 text-gray-800'}`}
        >
            <button
                className="flex justify-between w-full p-4 text-lg font-medium text-left focus:outline-none"
                onClick={onToggle}
            >
                <span>{title}</span>
                <span
                    className={`flex items-center justify-center w-6 h-6 text-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 bg-red-600' : 'bg-red-500'}`}
                >
                    {isOpen ? (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="4" x2="12" y2="20" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                        </svg>
                    )}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
            >
                <div className="p-4 text-gray-200">
                    {content}
                </div>
            </div>
        </div>
    );
}