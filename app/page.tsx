import Image from "next/image";
import { BlogPosts } from "components/posts";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col items-center space-y-6 mb-8">
        <Image
          src="/new-profile.webp"
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full mr-4 border border-gray-200"
        />
        <h1 className="text-5xl font-bold tracking-tight">👋 JUNGMIN YOON</h1>
        <div className="text-muted-foreground text-center">
          <p className="text-lg font-semibold mb-4">
            Frontend Developer → Project Manager✈️
          </p>
          <p>
            아이디어를 현실로 만드는데 진심인 사람입니다.
            <br />
            평소에 보고, 읽고, 겪고, 느낀 것들을 기록하고 있습니다.
          </p>
        </div>
      </div>

      <hr className="mb-4" />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
