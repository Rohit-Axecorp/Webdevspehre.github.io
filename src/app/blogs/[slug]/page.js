import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import CTAsection from "@/app/Components/Home/CTAsection";

// app/blogs/[slug]/page.js
async function fetchPost(slug) {
  const response = await fetch(`https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/posts?slug=${slug}&_embed=true`, {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });
  if (!response.ok) throw new Error('Failed to fetch post');
  const data = await response.json();
  return data[0];
}

export default async function Post({ params }) {
  const post = await fetchPost(params.slug);

  if (!post) return <p>Post not found</p>;

  const featuredMedia = post._embedded && post._embedded['wp:featuredmedia']
    ? post._embedded['wp:featuredmedia'][0]
    : null;

  // Fetching categories from the post
  const categories = post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0]
    ? post._embedded['wp:term'][0]
    : [];

  return (
    <>
      <Header />
      <div className="container mx-auto my-8 p-4">
        <div className="flex justify-between gap-10">
          {/* Main Content */}
          <div className="w-2/3">
            <h1 className="text-4xl font-bold mb-4">{post.title.rendered}</h1>

            {/* Render Categories */}
            {categories.length > 0 && (
              <div className="mb-4">
                {categories.map(category => (
                  <span key={category.id} className="inline-block text-red-500 text-lg font-semibold mr-2" >
                    Category:{" "}
                    {category.name}
                  </span>
                ))}
              </div>
            )}

            {featuredMedia && featuredMedia.source_url && (
              <img
                src={featuredMedia.source_url}
                alt={post.title.rendered}
                className="mb-4 w-full h-auto"
              />
            )}
            <div
              className="content text-lg leading-relaxed "
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>

          {/* Static Text Column */}
          <div className="w-1/3 p-4 bg-gray-100 rounded-lg h-48">
            <h2 className="text-xl font-semibold mb-4">On this Page</h2>
            <p>
              {post.title.rendered}
            </p>
          </div>
        </div>
      </div>
      <CTAsection />
      <Footer />
    </>
  );
}
