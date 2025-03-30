import Link from "next/link";
import Image from "next/image";
import writings from "../content/writings";
import { Card, CardBody, CardFooter } from "@heroui/card";

export function WritingPosts() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
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
            className="flex flex-col space-y-2 mb-4"
            href={`/study/${post.slug}`}
          >
            <Card className="max-w-[300px] contents">
              <CardBody className="p-2">
                <Image
                  className="w-full rounded-md mb-3"
                  src="/preview_study.webp"
                  alt="preview_study"
                  width={300}
                  height={120}
                />
                <div className="space-y-3">
                  <p className="font-bold leading-[1.2] text-md text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {post.title}
                  </p>
                  <p className="text-neutral-900  text-sm dark:text-neutral-100 tracking-tight">
                    {post.description}
                  </p>
                </div>
              </CardBody>
              <CardFooter>
               <div className="w-full font-light text-sm text-neutral-600 dark:text-neutral-400 tabular-nums">
                    <p className=" text-right">{post.date}</p>
                  </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
    </div>
  );
}
