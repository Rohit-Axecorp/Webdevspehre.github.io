import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import CTAsection from "@/app/Components/Home/CTAsection";

// app/blogs/[slug]/page.js

async function fetchPosts() {
  const response = await fetch('https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/posts', {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const posts = await fetchPosts();

  // Generate paths for each post slug
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function fetchPost(slug) {
  const response = await fetch(`https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/posts?slug=${slug}&_embed=true`, {
    next: { revalidate: 10 },
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

  const categories = post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0]
    ? post._embedded['wp:term'][0]
    : [];

  return (
    <>
      <Header />
      <div className="container mx-auto my-8 px-4">
        <div className="md:flex md:justify-between md:gap-10">
          <div className="w-full md:w-2/3 mb-8 md:mb-0">
            <h1 className="text-2xl lg:text-[#ED1E3A]xl 2xl:text-4xl font-bold mb-4">{post.title.rendered}</h1>

            {categories.length > 0 && (
              <div className="mb-4">
                {categories.map(category => (
                  <span key={category.id} className="inline-block text-[#ED1E3A]  text-lg font-semibold mr-2">
                    Category: {category.name}
                  </span>
                ))}
              </div>
            )}

            {featuredMedia && featuredMedia.source_url ? (
              <img
                src={featuredMedia.source_url}
                alt={post.title.rendered}
                className="mb-4 w-full h-auto rounded-lg"
              />
            ) : (
              <img
                src="https://via.placeholder.com/500x300"
                alt="Placeholder Image"
                className="mb-4 w-full h-auto rounded-lg"
              />
            )}

            <div
              className="content text-base md:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>

          <div className="w-full md:w-1/3 p-4 bg-gray-100 rounded-lg h-auto md:h-48">
            <h2 className="text-xl font-semibold mb-4">On this Page</h2>
            <p>{post.title.rendered}</p>
          </div>
        </div>
      </div>
      <CTAsection />
      <Footer />
    </>
  );
}
