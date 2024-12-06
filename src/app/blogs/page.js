// app/blogs/page.js
import Link from 'next/link';
import Header from '../Components/Header';
import CTAsection from '../Components/Home/CTAsection';
import Footer from '../Components/Footer';
import GlobalPresenceSlider from '../Components/About/GlobalPresenceSlider';
import RootLayout from '../layout';

async function fetchPosts() {
  const response = await fetch('https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/posts', {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}

async function fetchFeaturedImage(mediaId) {
  const response = await fetch(`https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/media/${mediaId}`);
  if (!response.ok) throw new Error('Failed to fetch featured image');
  return response.json();
}

async function fetchCategory(categoryId) {
  const response = await fetch(`https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/categories/${categoryId}`);
  if (!response.ok) throw new Error('Failed to fetch category');
  return response.json();
}

async function fetchAuthor(authorId) {
  const response = await fetch(`https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/users/${authorId}`);
  if (!response.ok) throw new Error('Failed to fetch author');
  return response.json();
}

export default async function Blog() {
  const canonicalUrl = "https://webdevsphere.com/blogs";
  const posts = await fetchPosts();

  return (
    <>
      <RootLayout canonicalUrl={canonicalUrl} />
      <Header />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-[#ED1E3A]xl lg:text-4xl 2xl:text-5xl font-bold text-center 2xl:mb-20 mb-12">Blogs</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map(async (post) => {
              // Fetch the featured image if it exists
              const featuredImageUrl = post.featured_media
                ? await fetchFeaturedImage(post.featured_media).then(image => image.source_url)
                : "https://via.placeholder.com/500x300";

              // Fetch the category name for the first category (if exists)
              const categoryName = post.categories.length > 0
                ? await fetchCategory(post.categories[0]).then(category => category.name)
                : "Uncategorized";

              // Fetch author data
              const authorData = await fetchAuthor(post.author);

              return (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="cursor-pointer">
                      {/* Use the featured image */}
                      <img
                        src={featuredImageUrl}
                        alt="Post image"
                        className="w-full object-cover"
                      />
                      <div className="p-4">
                        {/* Dynamic Category Name */}
                        <span className="text-[#ED1E3A] text-sm font-semibold">{categoryName}</span>
                        <h2 className="text-xl font-bold text-gray-800 mt-2 hover:text-[#ED1E3A]">
                          {post.title.rendered}
                        </h2>
                        <p className="text-gray-500 mt-2">
                          {post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").slice(0, 100)}...
                        </p>
                        <span className="text-[#ED1E3A] font-semibold inline-flex items-center mt-4 cursor-pointer">
                          Read More
                          <span className="ml-2">&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="flex items-center p-4 border-t">
                    {/* Author Image */}
                    <img
                      src={authorData.avatar_urls ? authorData.avatar_urls[96] : "https://via.placeholder.com/40"}
                      alt="Author"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      {/* Author Name */}
                      <p className="text-sm font-semibold text-gray-800">{authorData.name}</p>
                      {/* Author Description */}
                      <p className="text-gray-500 text-sm">
                        {authorData.description || "No description available."}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center">No posts found.</p>
          )}
        </div>
      </div>
      <GlobalPresenceSlider />
      <CTAsection />
      <Footer />
    </>
  );
}
