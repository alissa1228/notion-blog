import Link from "next/link";
import posts from "../content/posts";
import Image from "next/image";

export function BlogPosts() {
  return (
    <div className="p-8">
      {posts
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col mb-8"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col-reverse justify-between gap-3 sm:flex-row border-b-2 border-black pb-8">
              <div>
                <p className=" text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.title}
                </p>
                <p className="max-w-lg text-sm text-neutral-500 mb-6">
                  {post.description}
                </p>
                <div className="flex gap-3 text-xs font-thin">
                  <p className="text-neutral-600">{post.tag}</p>
                  <span className="text-neutral-600">|</span>
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {post.date}
                  </p>
                </div>
              </div>
              <Image
                className="rounded-md min-w-44 w-full sm:w-auto "
                src="/preview_article.webp"
                alt="preview_article"
                width={120}
                height={80}
              />
            </div>
          </Link>
        ))}
    </div>
  );
}
