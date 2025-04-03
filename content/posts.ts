import post4 from '../notion-data/13d33ccb-0cd0-80a2-a649-f9d3ec7c15fb.json'
import post5 from '../notion-data/13e33ccb-0cd0-8032-a00c-cb5696f58b7e.json'
import post6 from '../notion-data/13e33ccb-0cd0-8092-8665-d493e080a7fc.json'
import post3 from '../notion-data/14433ccb-0cd0-801b-b87e-c5bc26a2c6cb.json'
import post2 from '../notion-data/14433ccb-0cd0-8083-ae72-ffa2ae62b961.json'
import post1 from '../notion-data/14433ccb-0cd0-8065-ac51-d458490a6ec4.json'


const posts = [
  {
    title: "1인 1봇 해커톤: 8시간 Vibe Coding 도전기",
    slug: "8hours-VibeCoding",
    content: post6,
    date: "2025-03-31",
    description: "금요일 밤 10시, 저는 혼자지만 혼자가 아닌 8시간 해커톤을 시작했습니다. 목표는 명확했습니다. AI와 협업해 포트폴리오 블로그 프로토타입을 만드는 것.",
    image: undefined,
    tag:"기획•DEV"
  }
  ,
  {
    title: "Notion blog에 resume 추가하기",
    slug: "add-resume",
    content: post5,
    date: "2024-11-16",
    description: "guide 대신 resume를 추가해봤습니다.",
    image: undefined,
    tag:"DEV"
  },
  {
    title: "2023년 개발자 회고",
    slug: "2023-retrospective.",
    content: post4,
    date: "2024-01-03",
    description: "2022년 회고를 썼던 게 엊그제 같은데 벌써 2024년이 밝았다니.",
    image: undefined,
    tag:"회고"
  },
  {
    title: "[리뷰] <레토> (Leto, Summer, 2018)",
    slug: "movie-leto",
    content: post3,
    date: "2023/01/11",
    description: "🎥 그의 여름, 그때의 청춘, <레토(LETO)>",
    image: undefined,
     tag:"🎬 리뷰"
  },
  {
    title: "[리뷰] <어느 가족> (万引き家族, Shoplifters, 2018)",
    slug: "movie-shoplifters",
    content: post2,
    date: "2023/01/10",
    description: "🎥  가짜를 진짜로 만드는 것",
    image: undefined,
     tag:"🎬 리뷰"
  },
  {
    title: "[리뷰] <카메라를 멈추면 안 돼!> (カメラを止めるな!, One Cut of the Dead, 2017)",
    slug: "movie-camera-o-tomeruna",
    content: post1,
    date: "2023/01/10",
    description: "🎥  마치 자취생 추천 레시피 같은, 짜고 달콤하고 맛있구.",
    image: undefined,
     tag:"🎬 리뷰"
  },
] as Post[];

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  tag:string;
  image?: string;
};
