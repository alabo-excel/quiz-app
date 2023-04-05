import React from "react";
import { useRouter } from "next/router";
const Card = ({ quiz, color }) => {
  const router = useRouter();

  const takeTest = (id) => {
    localStorage.setItem("quiz", JSON.stringify(quiz));
    router.push(`/${id}`);
  };
  return (
    <div
      className="w-full rounded-xl lg:my-4 my-2"
      style={{
        borderBottom: "4px solid" + color,
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 0px 8px'
      }}
    >
      <div
        className="w-full rounded-t-xl p-12 text-center"
        style={{ backgroundColor: color }}
      >
        <div className="text-4xl my-auto capitalize">{quiz.name[0]}</div>
      </div>
      <div className="p-2 flex justify-between">
        <div>
          <div className="font-bold text-lg capitalize">{quiz.name}</div>
          <p className="text-sm capitalize">{quiz.description}</p>
          <p className="capitalize text-sm">Created by: {quiz.author}</p>
        </div>
        <button
          onClick={() => takeTest(quiz.id)}
          className=" text-white bg-[#023e8a] h-8 w-24 my-auto px-2 rounded-md text-sm"
        >
          Take Quiz
        </button>
        {/* <div className="my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
