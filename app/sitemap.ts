import posts from "content/posts"
import writes from "content/writings"

export const baseUrl = 'https://notion-blog-kappa-eight-83.vercel.app/'

export default async function sitemap2() {
  let blogs = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }))

  let writePosts = writes.map((write) => ({
    url: `${baseUrl}/write/${write.slug}`,
    lastModified: write.date,
  }))

  let routes = ['', '/blog','/write','/resume'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs, ...writePosts]
}
