// app/blogs/[slug]/page.js
async function fetchPost(slug) {
    const response = await fetch(`https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/posts?slug=${slug}`, {
      next: { revalidate: 10 }, // Revalidate every 10 seconds
    });
    if (!response.ok) throw new Error('Failed to fetch post');
    const data = await response.json();
    return data[0];
  }
  
  export default async function Post({ params }) {
    const post = await fetchPost(params.slug);
  
    if (!post) return <p>Post not found</p>;
  
    return (
      <div className="container mx-auto my-8 p-4">
        <article className="prose lg:prose-xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{post.title.rendered}</h1>
          <div className="text-gray-500 text-sm mb-6">
            Published on: {new Date(post.date).toLocaleDateString()}
          </div>
          <div
            className="content text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>
      </div>
    );
  }
  