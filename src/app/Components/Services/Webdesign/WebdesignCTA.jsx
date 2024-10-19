import React from 'react'
import { FaArrowRight } from 'react-icons/fa'; // Importing an icon from react-icons


export default function WebdesignCTA() {
    return (
        <>
            <section className="bg-red-500 py-12 ">
                <div className="container mx-auto px-4 flex flex-col justify-center items-center ">
                    <h2 className="text-white text-6xl font-bold mb-6 w-2/3 text-center">Ready to Grow Your Business With
                        Atlanta Web Design Services?</h2>
                    <p className="text-white text-2xl mb-8">Click the button below for a free proposal

                    </p>
                    <button className="flex items-center justify-center bg-white text-red-500 py-5 px-10 rounded-lg text-xl font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">
                        GET FREE PROPOSAL
                        <FaArrowRight className="ml-2 text-xl" />
                    </button>
                </div>
            </section>

        </>
    )
}
