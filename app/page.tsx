import Image from "next/image";
import InChat from "components/InChat";
import { Button } from "@heroui/button";
import Link from "next/link";

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
        <h1 className="text-5xl font-bold tracking-tight">JUNGMIN YOON 👩🏻‍💻</h1>
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
        <InChat/>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight text-center">혹시, 제가 더 궁금하신가요? 👀 </h3>
        <div className="text-center">
        <Link  href="/resume">
            <Button className="mt-4 bg-black text-white rounded-lg px-3 py-2 transition-all ease-linear hover:bg-blue-500">궁금해요 💭</Button>
          </Link>
          </div>
        </div>
    </section>

  );
}
