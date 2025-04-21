"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/Components/Header";
import CTAsection from "@/app/Components/Home/CTAsection";
import Footer from "@/app/Components/Footer";
import Form2 from "@/app/Components/Form2/Form2";


export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);

  useEffect(() => {
    if (!slug) return;

    // Fetch the post data
    fetch(`https://blogs.webdevsphere.com/wp-json/wp/v2/posts?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setPost(data[0]);

          // Fetch the featured image URL if it exists
          if (data[0].featured_media) {
            fetch(`https://blogs.webdevsphere.com/wp-json/wp/v2/media/${data[0].featured_media}`)
              .then((res) => res.json())
              .then((imageData) => {
                setFeaturedImage(imageData.source_url);
              });
          }
        }
      });
  }, [slug]);

  if (!post) return <div className="text-center py-10 text-gray-500">Loading blog post...</div>;

  return (
    <>
      <Header />

      {/* Banner Section */}
      <section
        className="w-full text-white py-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/single-blog-banner.webp')" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold mb-4">{post.title.rendered}</h1>
          <p className="text-lg sm:text-xl">{/* Optional subtitle or description */}</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full bg-gray-50 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:flex justify-center gap-10">

          {/* Left Column - Blog Content */}
          <div className="w-full lg:w-3/5 overflow-y-auto"> {/* Add overflow-y-auto for scrolling */}
            {/* Feature Image */}
            {featuredImage && (
              <div className="mb-8">
                <img
                  src={featuredImage}
                  alt="Feature Image"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}

            {/* Blog Title and Content */}
            <article className="prose prose-lg prose-headings:text-[#ED1E3A] prose-a:text-[#ED1E3A] prose-img:rounded-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </article>

          </div>

          {/* Right Column - Form Component */}
          <div className="w-full lg:w-2/5 sticky top-40 h-screen lg:pt-0 pt-5"> {/* Sticky form with full height */}
            <Form2 />
          </div>
        </div>
      </section>

      <CTAsection />
      <Footer />
    </>
  );
}
