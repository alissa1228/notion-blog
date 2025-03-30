import post1 from '../notion-data/13d33ccb-0cd0-80a2-a649-f9d3ec7c15fb.json'
import post2 from '../notion-data/13e33ccb-0cd0-8032-a00c-cb5696f58b7e.json'

const posts = [
  {
    title: "2023년 개발자 회고",
    slug: "2023-retrospective.",
    content: post1,
    date: "2024-01-03",
    description: "2022년 회고를 썼던 게 엊그제 같은데 벌써 2024년이 밝았다니.",
    image: undefined,
    tag:"회고"
  },
  {
    title: "Notion blog에 resume 추가하기",
    slug: "add-resume",
    content: post2,
    date: "2024-11-16",
    description: "guide 대신 resume를 추가해보자",
    image: undefined,
    tag:"DEV"
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
