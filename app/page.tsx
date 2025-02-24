import Image from 'next/image'
import { BlogPosts } from 'components/posts'

export default function Page() {
  return (
    <section>
      <div className="flex items-center mb-8">
        <Image
          src="/new-profile.webp"
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full mr-4 border border-gray-200"
        />
        <h1 className="text-2xl font-semibold tracking-tighter">
          Welcome to my playaground
        </h1>
      </div>
      <p className="mb-4">
        {`안녕하세요.👋 2년 차 프론트엔드 개발자, 서비스 기획자 직무 이동을 준비 중인 윤정민입니다. 아이디어를 현실로 만드는 사람이 되고자 합니다. 팀 효율성 증진에 관심이 많습니다. 평소에 보고, 읽고, 겪은 것들을 기록하고 있습니다. `}
      </p>
      {/* <p className="mb-4">
        {`Hello!👋 I’m Jungmin Yoon, a frontend developer with two years of experience. I’m passionate about building content-centered products and improving team efficiency. I regularly document insights from what I see, read, and learn to enhance my skills and knowledge.`}
      </p> */}
      <hr className='mb-4'/>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
