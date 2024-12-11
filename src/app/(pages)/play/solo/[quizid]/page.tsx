"use client";
//format of url is - /play/solo/[quizid]?question=index

import { useSearchParams } from "next/navigation";
import { use } from "react";

interface SinglePlayer {
  params: { quizid: string };
}

export default function SinglePlayer({ params }: SinglePlayer) {
  //@ts-ignore
  const param = use(params) as unknown as SinglePlayer.params;
  const quizid = param.quizid;

  const searchParams = useSearchParams();
  const question = searchParams.get("n");

  return (
    <div>
      {" "}
      This is single player quiz page, the id of the quiz is {quizid}, and the
      question index is {question}
    </div>
  );
}
