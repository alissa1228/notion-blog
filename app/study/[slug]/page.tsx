import { notFound } from 'next/navigation'
import { baseUrl } from 'app/sitemap'
import writingPosts from 'content/writings'
import NotionRenderer from 'components/notion-renderer'

export const runtime = 'edge';

export async function generateStaticParams() {
  return writingPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }) {
  let post = writingPosts.find((post) => post.slug === params.slug)
  if (!post) {
    return
  }
  let {
    title,
    date: publishedTime,
    description,
    image,
  } = post
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/study/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }) {
  const { slug } = await params
  let post = writingPosts.find((post) => post.slug === slug)
  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.date,
            dateModified: post.date,
            description: post.description,
            image: post.image
              ? `${baseUrl}${post.image}`
              : `/og?title=${encodeURIComponent(post.title)}`,
            url: `${baseUrl}/write/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Writing',
            },
          }),
        }}
      />
      <NotionRenderer post={post} />
    </section>
  )
}
