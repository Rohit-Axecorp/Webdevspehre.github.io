"use client";
import React from "react";
import Form from "../Form/Form";


export default function AboutLocationContact() {

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row py-12 justify-between space-y-8 md:space-y-0">
        {/* Form Section */}
        <Form />

        {/* Map Section */}
        <div className="md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093037!2d-122.3969491846816!3d37.78802297975756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809e1f82aef1%3A0xe9c04eaa90cc6337!2s548%20Market%20St.%20%2341895%2C%20San%20Francisco%2C%20CA%2094104%2C%20USA!5e0!3m2!1sen!2sus!4v1693935898978!5m2!1sen!2sus"
            width="100%"
            height="700"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Map of Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
