import Image from "next/image";
import InChat from "components/InChat";
import { Button } from "@heroui/button";
import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="flex flex-col-reverse items-center justify-center border-b-2 border-black gap-10 px-8 py-16 md:flex-row">
        <div className="text-muted-foreground">
        <h1 className="text-5xl font-bold tracking-tight">JUNGMIN YOON 👩🏻‍💻</h1>
          <p className="text-lg font-semibold mb-4">
            Frontend Developer → Project Manager✈️
          </p>
          <p>
            아이디어를 현실로 만드는데 진심인 사람입니다.
            <br />
            평소에 보고, 읽고, 겪고, 느낀 것들을 기록하고 있습니다.
          </p>
        </div>
        <Image
          src="/new_image.webp"
          alt="profile image"
          width={200}
          height={200}
          className="rounded-full border-2 border-gray-200"
        />
      </div>

      <div className="my-8">
        <InChat/>
      </div>

      <div className="flex justify-between border-t-2 border-black">
        <div className="text-center w-[50%] py-8">
          <h3 className="text-xl font-bold tracking-tight text-center">혹시, 제가 더 궁금하신가요? 👀 </h3>
          <Link  href="/resume">
              <Button className="mt-4 bg-black text-white rounded-lg px-3 py-2 transition-all ease-linear hover:bg-[#d5bfff] hover:text-black hover:border-2 hover:border-black">궁금해요 💭</Button>
          </Link>
        </div>
        <div className="text-center w-[50%] py-8 bg-[#a3baff] border-l-2 border-black">
        <h3 className="text-xl font-bold tracking-tight text-center">저는 이런 글을 썼어요 📝 </h3>
          <Link  href="/blog">
              <Button className="mt-4 bg-black text-white rounded-lg px-3 py-2 transition-all ease-linear hover:bg-[#d5bfff] hover:text-black hover:border-2 hover:border-black">보러가기 🔍</Button>
          </Link>
        </div>
        </div>
    </section>

  );
}
