// // app/blogs/page.js
// import Link from "next/link";
// import Header from "../Components/Header";
// import CTAsection from "../Components/Home/CTAsection";
// import Footer from "../Components/Footer";
// import GlobalPresenceSlider from "../Components/About/GlobalPresenceSlider";
// import RootLayout from "../layout";

// // Fetch posts
// async function fetchPosts() {
//   const response = await fetch(
//     "https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/posts",
//     { next: { revalidate: 10 } }
//   );
//   if (!response.ok) throw new Error("Failed to fetch posts");
//   return response.json();
// }

// async function fetchFeaturedImage(mediaId) {
//   try {
//     const response = await fetch(
//       `https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/media/${mediaId}`
//     );
//     if (!response.ok) throw new Error("Failed to fetch image");
//     const image = await response.json();
//     return image.source_url || "https://via.placeholder.com/500x300";
//   } catch {
//     return "https://via.placeholder.com/500x300";
//   }
// }

// async function fetchCategory(categoryId) {
//   try {
//     const response = await fetch(
//       `https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/categories/${categoryId}`
//     );
//     if (!response.ok) throw new Error("Failed to fetch category");
//     const category = await response.json();
//     return category.name || "Uncategorized";
//   } catch {
//     return "Uncategorized";
//   }
// }

// async function fetchAuthor(authorId) {
//   try {
//     const response = await fetch(
//       `https://webdev.roboticintelligencelabs.com/wp-json/wp/v2/users/${authorId}`
//     );
//     if (!response.ok) throw new Error("Failed to fetch author");
//     return response.json();
//   } catch {
//     return {
//       name: "Unknown Author",
//       description: "No description available.",
//       avatar_urls: { 96: "https://via.placeholder.com/40" },
//     };
//   }
// }

// export default async function Blog() {
//   const canonicalUrl = "https://webdevsphere.com/blogs";
//   let posts = [];

//   try {
//     posts = await fetchPosts();
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//   }

//   const enrichedPosts = await Promise.all(
//     posts.map(async (post) => {
//       const featuredImageUrl = await fetchFeaturedImage(post.featured_media);
//       const categoryName =
//         post.categories.length > 0
//           ? await fetchCategory(post.categories[0])
//           : "Uncategorized";
//       const authorData = await fetchAuthor(post.author);

//       return { ...post, featuredImageUrl, categoryName, authorData };
//     })
//   );

//   return (
//     <>
//       <RootLayout canonicalUrl={canonicalUrl} />
//       <Header />
//       <div className="container mx-auto px-6 py-12">
//         <h1 className="text-[#ED1E3A] text-4xl font-bold text-center mb-12">Blogs</h1>
//         <div className="grid md:grid-cols-3 gap-8">
//           {enrichedPosts.length > 0 ? (
//             enrichedPosts.map((post) => (
//               <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <Link href={`/blogs/${post.slug}`}>
//                   <div className="cursor-pointer">
//                     <img
//                       src={post.featuredImageUrl}
//                       alt={post.title.rendered}
//                       className="w-full h-52 object-cover"
//                     />
//                     <div className="p-4">
//                       <span className="text-[#ED1E3A] text-sm font-semibold">
//                         {post.categoryName}
//                       </span>
//                       <h2 className="text-xl font-bold text-gray-800 mt-2 hover:text-[#ED1E3A]">
//                         {post.title.rendered}
//                       </h2>
//                       <p className="text-gray-500 mt-2">
//                         {post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").slice(0, 100)}...
//                       </p>
//                       <span className="text-[#ED1E3A] font-semibold inline-flex items-center mt-4 cursor-pointer">
//                         Read More <span className="ml-2">&rarr;</span>
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//                 <div className="flex items-center p-4 border-t">
//                   <img
//                     src={post.authorData.avatar_urls[96]}
//                     alt="Author"
//                     className="w-10 h-10 rounded-full mr-4"
//                   />
//                   <div>
//                     <p className="text-sm font-semibold text-gray-800">
//                       {post.authorData.name}
//                     </p>
//                     <p className="text-gray-500 text-sm">
//                       {post.authorData.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center">No posts found.</p>
//           )}
//         </div>
//       </div>
//       <GlobalPresenceSlider />
//       <CTAsection />
//       <Footer />
//     </>
//   );
// }
