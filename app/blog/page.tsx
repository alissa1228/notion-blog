import { BlogPosts } from 'components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <div className='mb-8 tracking-tighter px-8 py-16 border-b-2 border-black'>
      <h1 className="font-semibold text-2xl">My Blog</h1>
      <p>블로그용 글 아카이브</p>
      </div>
      <BlogPosts />
    </section>
  )
}
