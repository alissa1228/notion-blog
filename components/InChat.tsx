"use client";

import { Avatar} from "@heroui/avatar";
import {Card, CardBody} from "@heroui/card";

export default function InChat() {
  const messages = [
    { type: "left", text: "안녕하세요! 자기소개 해주시겠어요?" },
    { type: "right", text: "안녕하세요! 저는 기획과 개발, 그리고 크리에이터 경험까지. 다양한 현장에서 얻은 감각을 바탕으로, 문제를 정의하고 팀을 이끌어 실행하는 기획자 윤정민입니다." },
    { type: "left", text: "개발도 하셨다면서요?" },
    { type: "right", text: "네! 프론트엔드 개발자로 2년 반 정도 일했고, 지금은 기획자로 직무이동을 준비 중이에요." },
    { type: "left", text: "왜 기획자가 되려고 하세요?" },
    { type: "right", text: " 단순히 기획안에 따라 개발에 참여하는 걸 넘어, 기획 단계부터 문제를 정의하고 해결책을 제시했던 경험이 인상적이었거든요. 더 나은 방법을 제시하고 그걸 현실로 만드는 걸 좋아해요. 기계보다 사람에 더 파고 들고 싶기도 하고요." },
    { type: "left", text: "최근에 기억에 남는 프로젝트가 있다면요?" },
    { type: "right", text: "영화관 대관 행사 이벤트 프로젝트가 기억에 남네요. 전석 매진이었을 뿐더러 영화에 참여한 성우에게까지 저희 행사가 알려졌더라고요! 제가 데이터 수집부터 후처리까지 모두 리드해본 프로젝트라 더 아끼는 것도 있는 것 같아요" },
  ];

  return (
    <Card className="max-w-xl mx-auto p-6 space-y-4">
        <CardBody>
      <div className="space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`w-full flex ${msg.type === "right" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-xl px-3 py-3 text-sm max-w-[60%] whitespace-pre-line
                ${msg.type === "right" ? "bg-green-500 text-white" : "bg-slate-200 text-black"}`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      </CardBody>
    </Card>
  );
}
