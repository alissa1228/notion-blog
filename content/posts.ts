import post1 from '../notion-data/13d33ccb-0cd0-80a2-a649-f9d3ec7c15fb.json'
import post2 from '../notion-data/13e33ccb-0cd0-8032-a00c-cb5696f58b7e.json'
import post3 from '../notion-data/13e33ccb-0cd0-8092-8665-d493e080a7fc.json'

const posts = [
  {
    title: "1인 1봇 해커톤: 8시간 Vibe Coding 도전기",
    slug: "8hours-VibeCoding",
    content: post3,
    date: "2025-03-31",
    description: "금요일 밤 10시, 저는 혼자지만 혼자가 아닌 8시간 해커톤을 시작했습니다. 목표는 명확했습니다. AI와 협업해 포트폴리오 블로그 프로토타입을 만드는 것.",
    image: undefined,
    tag:"기획•DEV"
  }
  ,
  {
    title: "Notion blog에 resume 추가하기",
    slug: "add-resume",
    content: post2,
    date: "2024-11-16",
    description: "guide 대신 resume를 추가해봤습니다.",
    image: undefined,
    tag:"DEV"
  },
  {
    title: "2023년 개발자 회고",
    slug: "2023-retrospective.",
    content: post1,
    date: "2024-01-03",
    description: "2022년 회고를 썼던 게 엊그제 같은데 벌써 2024년이 밝았다니.",
    image: undefined,
    tag:"회고"
  }
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
