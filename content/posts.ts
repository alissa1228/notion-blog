import post1 from '../notion-data/13d33ccb-0cd0-80a2-a649-f9d3ec7c15fb.json'
import post2 from '../notion-data/13d33ccb-0cd0-8039-926a-fa16f4122b2f.json'

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
    title: "프로그래머스 PCCE 모의고사 python3 4번 문제 풀이",
    slug: "pcce-python-4",
    content: post2,
    date: "2024-01-17",
    description: "PCCE 모의고사 python3 4번 문제를 풀어보자.",
    image: undefined,
    tag:"알고리즘"
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
