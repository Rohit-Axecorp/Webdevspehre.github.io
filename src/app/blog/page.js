import React from 'react';
import Link from 'next/link';
import Header from '../Components/Header';
import CTAsection from '../Components/Home/CTAsection';
import Footer from '../Components/Footer';

async function getPosts() {
  const res = await fetch('https://blogs.webdevsphere.com/wp-json/wp/v2/posts', {
    cache: 'no-store',
  });
  const posts = await res.json();
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <section className="w-full bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Latest Blog Posts
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Discover tips, trends, and insights from our experts to help you grow your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between">
                <div>
                  <h2
                    className="text-xl font-semibold text-gray-800 mb-3 leading-snug hover:text-[#ED1E3A] transition"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div
                    className="text-sm text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#ED1E3A] hover:text-[#ED1E3A] font-medium text-sm inline-block transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTAsection />
      <Footer />
    </>
  );
}
