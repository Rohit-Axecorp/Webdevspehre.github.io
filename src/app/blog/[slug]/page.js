"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/app/Components/Header";
import CTAsection from "@/app/Components/Home/CTAsection";
import Footer from "@/app/Components/Footer";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!slug) return;
    fetch(`https://blogs.webdevsphere.com/wp-json/wp/v2/posts?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) setPost(data[0]);
      });
  }, [slug]);

  if (!post) return <div className="text-center py-10 text-gray-500">Loading blog post...</div>;

  return (
    <>
      <Header />
      <section className="w-full bg-gray-50 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#ED1E3A] leading-snug"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <p className="text-gray-500 text-sm sm:text-base mb-8">
            Published on: {new Date(post.date).toLocaleDateString()}
          </p>

          <article
            className="prose prose-lg prose-headings:text-[#ED1E3A] prose-a:text-[#ED1E3A] prose-blockquote:border-[#ED1E3A] prose-img:rounded-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </section>
      <CTAsection />
      <Footer />
    </>
  );
}
