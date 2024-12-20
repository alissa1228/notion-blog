import Link from 'next/link'
import posts from '../content/posts'

export function BlogPosts() {

  return (
    <div>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.date) > new Date(b.date)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {post.date} 
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              <span className='bg-black text-white dark:text-black dark:bg-white font-bold rounded-md py-0.5 px-2
                text-sm mr-2'>{post.tag}</span>
                {post.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
