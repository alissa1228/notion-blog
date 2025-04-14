import NotionRenderer from "components/notion-renderer";
import resume from "content/resume";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {   
        absolute: resume.title,
    },
    description: resume.description,
    openGraph: {
        title: resume.title,
        description: resume.description,
        images: [
            {
                url: resume.image || '/new-profile.webp',
                width: 800,
                height: 600,
                alt: `${resume.title} cover image`,
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: resume.title,
        description: resume.description,
        images: [resume.image || '/new-profile.webp'],
      },
}

export default function Page() {
  return (
    <section className='bg-white'>
      <NotionRenderer post={resume} />
    </section>
  )
}