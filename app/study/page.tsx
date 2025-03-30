import { WritingPosts } from 'components/writings';

export const metadata = {
  title: 'Writing',
  description: 'Writing about movies, books, and more',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">📚 Study</h1>
      <WritingPosts/>
    </section>
  )
}
