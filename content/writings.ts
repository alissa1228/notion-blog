import post1 from '../notion-data/13d33ccb-0cd0-8039-926a-fa16f4122b2f.json'
import post2 from '../notion-data/13e33ccb-0cd0-8078-9086-fef61e596879.json'
import post3 from '../notion-data/13e33ccb-0cd0-801f-b0a4-daf50da47520.json'
import post4 from '../notion-data/13e33ccb-0cd0-8025-9b0b-e6b407a07924.json'
import post5 from '../notion-data/13e33ccb-0cd0-8020-830d-df60b5f99d3e.json'
import post6 from '../notion-data/13e33ccb-0cd0-801a-b741-e04bbaf8b2b3.json'
import post7 from '../notion-data/13e33ccb-0cd0-80b5-ae19-eb5c96c1b9ad.json'
import post8 from '../notion-data/13e33ccb-0cd0-8083-b6a2-d408ed3cbe9a.json'
import post9 from '../notion-data/13e33ccb-0cd0-8053-8e03-d9428abba057.json'

const writes = [
   {
    title: "[study] 프로그래머스 PCCE 모의고사 python3 4번 문제 풀이",
    slug: "pcce-python-4",
    content: post1,
    date: "2024-01-17",
    description: "PCCE 모의고사 python3 4번 문제를 풀어보자.",
    image: undefined
  }
  ,
  {
    title: "[study] 웹앱 ? 하이브리드 앱 ? 네이티브 앱? 모바일 앱에 대하여",
    slug: "about-mobile-app",
    content: post2,
    date: "2024-01-24",
    description: "모바일 앱을 만드는 방법은 개발 방법과 내부 기능에 따라 다양한 유형으로 나뉜다.",
    image: undefined,
  }
  ,
  {
    title: "[study] CSR, SSR 훑어보기",
    slug: "csr-ssr",
    content: post3,
    date: "2024-01-26",
    description: "CSR,SSR의 차이는 무엇일까?",
    image: undefined,
  }
  ,
  {
    title: "[study] 시간복잡도와 공간복잡도, Big O 표기법 훑어보기",
    slug: "Big-O-Notation",
    content: post4,
    date: "2024-02-15",
    description: "‘시간 복잡도’와 ‘공간 복잡도’ 그리고 Big O 표기법(빅오 표기법)",
    image: undefined,
  },
  {
    title: "[study] 시간복잡도 로그 시간, 지수시간 등 더 훑어보기",
    slug: "log-Big-O",
    content: post5,
    date: "2024-02-20",
    description: "로그시간, 지수 시간 복잡도에 대해",
    image: undefined,
  },
  {
    title: "[study] Stack & Queue",
    slug: "Stack-queue",
    content: post6,
    date: "2024-02-25",
    description: "‘스택과 큐에 대해 알아보자",
    image: undefined,
  },
  {
    title: "[study] 완전탐색 알고리즘, Brute Force(브루트 포스)",
    slug: "Brute-Force",
    content: post7,
    date: "2024-03-14",
    description: "완전탐색 알고리즘, Brute Force(브루트 포스)에 대해 알아보자",
    image: undefined,
  },
  {
    title: "[study] '정렬'에 대해 알아보자",
    slug: "sort-algorithm",
    content: post8,
    date: "2024-03-20",
    description: "버블, 선택, 삽입, 퀵 정렬에 대해",
    image: undefined,
  },
  {
    title: "[study] 그리디와 이분탐색 알고리즘",
    slug: "greedy-binary",
    content: post9,
    date: "2024-03-28",
    description: "버블, 선택, 삽입, 퀵 정렬에 대해",
    image: undefined,
  }
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
