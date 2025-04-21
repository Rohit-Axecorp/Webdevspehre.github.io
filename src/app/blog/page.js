"use client";
import React, { useState } from "react";
import Link from "next/link";
import Header from "../Components/Header";
import CTAsection from "../Components/Home/CTAsection";
import Footer from "../Components/Footer";

async function getPosts() {
  const res = await fetch("https://blogs.webdevsphere.com/wp-json/wp/v2/posts", {
    cache: "no-store",
  });
  const posts = await res.json();
  return posts;
}

async function getCategories() {
  const res = await fetch("https://blogs.webdevsphere.com/wp-json/wp/v2/categories", {
    cache: "no-store",
  });
  const categories = await res.json();
  return categories;
}

async function getFeaturedImage(imageId) {
  const res = await fetch(
    `https://blogs.webdevsphere.com/wp-json/wp/v2/media/${imageId}`,
    {
      cache: "no-store",
    }
  );
  const image = await res.json();
  return image.source_url;
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryMapping, setCategoryMapping] = useState({});

  // Fetch posts and categories
  React.useEffect(() => {
    const fetchData = async () => {
      const postsData = await getPosts();
      setPosts(postsData);

      const categoriesData = await getCategories();
      setCategories(categoriesData);

      // Create category mapping (ID -> Name)
      const categoryDict = categoriesData.reduce((acc, category) => {
        acc[category.id] = category.name;
        return acc;
      }, {});
      setCategoryMapping(categoryDict);
    };

    fetchData();
  }, []);

  // Fetch and set featured image URLs for each post
  React.useEffect(() => {
    const fetchFeaturedImages = async () => {
      const updatedPosts = await Promise.all(
        posts.map(async (post) => {
          if (post.featured_media) {
            const imageUrl = await getFeaturedImage(post.featured_media);
            return { ...post, featured_media_url: imageUrl };
          }
          return post;
        })
      );
      setPosts(updatedPosts);
    };

    if (posts.length) fetchFeaturedImages();
  }, [posts]);

  // Filter posts based on the selected category
  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) =>
        post.categories.includes(parseInt(selectedCategory))
      );

  return (
    <>
      <Header />
      <section className="w-full bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
              Blogs
            </h1>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 my-12">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`py-2 px-6 rounded-full text-xl ${selectedCategory === "All"
                  ? "bg-[#ED1E3A] text-white"
                  : "bg-gray-100 text-gray-700"
                  }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`py-2 px-6 rounded-full text-xl ${selectedCategory === category.id
                    ? "bg-[#ED1E3A] text-white"
                    : "bg-gray-100 text-gray-700"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            {/* Blog Posts Section */}
            <div className="w-full lg:w-8/12 px-4 mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col"
                  >
                    <div>
                      {/* Featured Image */}
                      {post.featured_media_url && (
                        <img
                          src={post.featured_media_url}
                          alt={post.title.rendered}
                          className="w-full h-60 object-cover mb-6 rounded-2xl"
                        />
                      )}
                      {/* Categories (Mapped from IDs to Names) */}
                      <span className="text-base bg-[#ED1E3A] font-semibold inline-block py-1 px-4 text-white rounded-full mb-4">
                        {post.categories
                          .map((categoryId) => categoryMapping[categoryId])
                          .join(", ")}
                      </span>
                      <h2 className="text-2xl font-semibold text-gray-800 mb-3 leading-snug hover:text-[#ED1E3A] transition">
                        {post.title.rendered}
                      </h2>
                      <div
                        className="text-lg text-gray-800 mb-4"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                    </div>
                    {/* Read More Link */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <span className="text-[#ED1E3A] hover:text-black font-semibold text-lg inline-block transition">
                        Read More →
                      </span>
                    </div>
                  </Link>

                ))}
              </div>
            </div>

            {/* Popular Blogs Section */}
            <div className="w-full lg:w-4/12 px-4">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                Popular Blogs
              </h3>
              <div className="space-y-6">
                {posts.slice(0, 4).map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="flex items-center"
                  >
                    {/* Featured Image for Popular Blogs */}
                    {post.featured_media_url && (
                      <img
                        src={post.featured_media_url}
                        alt={post.title.rendered}
                        className="w-48 h-28 object-cover rounded-md mr-4"
                      />
                    )}
                    <div>
                      {/* Display Categories (Mapped from IDs to Names) */}
                      <span className="text-sm bg-[#ED1E3A] font-semibold inline-block py-1 px-3 text-white rounded-full mb-2">
                        {post.categories
                          .map((categoryId) => categoryMapping[categoryId])
                          .join(", ")}
                      </span>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 leading-snug hover:text-[#ED1E3A] transition">
                        {post.title.rendered}
                      </h4>
                    </div>

                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTAsection />
      <Footer />
    </>
  );
}
