import React from 'react'
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa'; // Import phone icon

export default function Aboutlocationcontact() {
  const googleMapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093037!2d-122.3969491846816!3d37.78802297975756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809e1f82aef1%3A0xe9c04eaa90cc6337!2s548%20Market%20St.%20%2341895%2C%20San%20Francisco%2C%20CA%2094104%2C%20USA!5e0!3m2!1sen!2sus!4v1693935898978!5m2!1sen!2sus";

  return (

    <>

      <section className='bg-gray-100'>
        <div className="flex justify-between container py-12">

          <div className="formdiv w-2/5">
            <h2 className="text-7xl font-bold text-red-500 mb-10">
              Lets talk Business
            </h2>
            <div className=" p-6 bg-white shadow-lg rounded-lg ">
              <form action="#" method="POST">
                <div className="space-y-4">
                  {/* First and Last Name in one row */}
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <input
                        id="first-name"
                        type="text"
                        className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                        placeholder="First Name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="w-1/2">
                      <input
                        id="email"
                        type="email"
                        className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                      placeholder="Phone"
                      required
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <input
                      id="budget"
                      type="text"
                      className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                      placeholder="Select Your Budget"
                      required
                    />
                  </div>

                  {/* Textarea for Project Info */}
                  <div>
                    <textarea
                      id="messgae"
                      className="w-full p-3 border rounded-md placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                      placeholder="Your Message"
                      rows="5"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 transition mt-6"
                  >
                    Submit Your Request
                  </button>
                </div>
              </form>
            </div>
          </div>


          <div className="md:w-1/2">
            <iframe
              src={googleMapEmbed}
              width="100%"
              height="570"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map of Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}