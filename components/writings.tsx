import Link from "next/link";
import writings from "../content/writings";

export function WritingPosts() {
  return (
    <div>
      {writings
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/study/${post.slug}`}
          >
            <div className="w-full flex flex-col space-x-0 space-y-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {post.date}
              </p>
              <p className=" text-neutral-900 dark:text-neutral-100 tracking-tight border-b border-[#ccc] dark:border-slate-100 pb-1">
                {post.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
