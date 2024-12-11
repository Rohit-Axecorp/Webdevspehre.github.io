import Link from "next/link";
import Header from "../Components/Header";
import CTAsection from "../Components/Home/CTAsection";
import Footer from "../Components/Footer";
import GlobalPresenceSlider from "../Components/About/GlobalPresenceSlider";
import RootLayout from "../layout";

// Fetch posts from WordPress API
async function fetchPosts() {
  const response = await fetch(
    "https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/posts",
    { next: { revalidate: 10 } } // Revalidate every 10 seconds
  );
  if (!response.ok) throw new Error("Failed to fetch posts");
  return response.json();
}

// Fetch featured image for a given media ID
async function fetchFeaturedImage(mediaId) {
  if (!mediaId) {
    console.warn("No media ID provided for featured image.");
    return "https://via.placeholder.com/500x300"; // Placeholder image
  }

  try {
    const response = await fetch(
      `https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/media/${mediaId}`
    );
    if (!response.ok) throw new Error("Failed to fetch featured image");

    const image = await response.json();

    console.log("Fetched featured image:", image); // Debugging log

    if (image && image.source_url) {
      return image.source_url; // Return the actual image URL
    }

    console.warn("Featured image URL not found in the response.");
    return "https://via.placeholder.com/500x300"; // Fallback placeholder
  } catch (error) {
    console.error(`Error fetching featured image for media ID ${mediaId}:`, error);
    return "https://via.placeholder.com/500x300"; // Fallback image
  }
}


// Fetch category name for a given category ID
async function fetchCategory(categoryId) {
  try {
    const response = await fetch(
      `https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/categories/${categoryId}`
    );
    if (!response.ok) throw new Error("Failed to fetch category");
    const category = await response.json();
    return category.name || "Uncategorized";
  } catch (error) {
    console.error(`Error fetching category for ID ${categoryId}:`, error);
    return "Uncategorized";
  }
}

// Fetch author data for a given author ID
async function fetchAuthor(authorId) {
  try {
    const response = await fetch(
      `https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/users/${authorId}`
    );
    if (!response.ok) throw new Error("Failed to fetch author");
    return response.json();
  } catch (error) {
    console.error(`Error fetching author for ID ${authorId}:`, error);
    return {
      name: "Unknown Author",
      description: "No description available.",
      avatar_urls: { 96: "https://via.placeholder.com/40" },
    };
  }
}

export default async function Blog() {
  const canonicalUrl = "https://webdevsphere.com/blogs";
  let posts = [];

  try {
    posts = await fetchPosts();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <>
      <RootLayout canonicalUrl={canonicalUrl} />
      <Header />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-[#ED1E3A] text-4xl font-bold text-center mb-12">
          Blogs
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map(async (post) => {
              // Fetch the featured image, category name, and author data
              const featuredImageUrl = await fetchFeaturedImage(post.featured_media);
              const categoryName = post.categories.length > 0
                ? await fetchCategory(post.categories[0])
                : "Uncategorized";
              const authorData = await fetchAuthor(post.author);

              return (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="cursor-pointer">
                      {/* Featured Image */}
                      <img
                        src={featuredImageUrl}
                        alt="Post image"
                        className="w-full object-cover"
                      />
                      <div className="p-4">
                        {/* Category Name */}
                        <span className="text-[#ED1E3A] text-sm font-semibold">
                          {categoryName}
                        </span>
                        {/* Post Title */}
                        <h2 className="text-xl font-bold text-gray-800 mt-2 hover:text-[#ED1E3A]">
                          {post.title.rendered}
                        </h2>
                        {/* Post Excerpt */}
                        <p className="text-gray-500 mt-2">
                          {post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").slice(0, 100)}...
                        </p>
                        <span className="text-[#ED1E3A] font-semibold inline-flex items-center mt-4 cursor-pointer">
                          Read More <span className="ml-2">&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                  {/* Author Info */}
                  <div className="flex items-center p-4 border-t">
                    <img
                      src={authorData.avatar_urls[96] || "https://via.placeholder.com/40"}
                      alt="Author"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {authorData.name}
                      </p>
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
