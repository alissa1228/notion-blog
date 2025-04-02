import { WritingPosts } from 'components/writings';

export const metadata = {
  title: 'Writing',
  description: 'Writing about movies, books, and more',
}

export default function Page() {
  return (
    <section>
      <div className='px-8 py-16 border-b-2 border-black mb-8 tracking-tighter'>
        <h1 className="font-semibold text-2xl ">📚 Study</h1>
        <p>스터디 글 아카이브</p>
      </div>
      <WritingPosts/>
    </section>
  )
}
