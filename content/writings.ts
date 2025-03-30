import post1 from '../notion-data/14433ccb-0cd0-801b-b87e-c5bc26a2c6cb.json'
import post2 from '../notion-data/14433ccb-0cd0-8083-ae72-ffa2ae62b961.json'
import post3 from '../notion-data/14433ccb-0cd0-8065-ac51-d458490a6ec4.json'

const writes = [
  {
    title: "[리뷰] <레토> (Leto, Summer, 2018)",
    slug: "movie-leto",
    content: post1,
    date: "2023/01/11",
    description: "🎥 그의 여름, 그때의 청춘, <레토(LETO)>",
    image: undefined
  },
  {
    title: "[리뷰] <어느 가족> (万引き家族, Shoplifters, 2018)",
    slug: "movie-shoplifters",
    content: post2,
    date: "2023/01/10",
    description: "🎥  가짜를 진짜로 만드는 것",
    image: undefined
  },
  {
    title: "[리뷰] <카메라를 멈추면 안 돼!> (カメラを止めるな!, One Cut of the Dead, 2017)",
    slug: "movie-camera-o-tomeruna",
    content: post3,
    date: "2023/01/10",
    description: "🎥  마치 자취생 추천 레시피 같은, 짜고 달콤하고 맛있구.",
    image: undefined
  },
  
] as Post[];

export default writes;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
};
