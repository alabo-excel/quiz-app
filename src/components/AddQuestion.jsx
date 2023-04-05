import React, { useState } from "react";

const AddQuestion = ({ sendData }) => {
  const [correctOption, setCorrectOption] = useState("");
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");

  const done = () => {
    if (
      optionA === "" ||
      optionB === "" ||
      optionC === "" ||
      optionD === "" ||
      question === "" ||
      correctOption === ""
    ) {
      return;
    }
    sendData({
      title: question,
      answers: [
        {
          title: optionA,
          correct: correctOption === "A" ? true : false,
        },
        {
          title: optionB,
          correct: correctOption === "B" ? true : false,
        },
        {
          title: optionC,
          correct: correctOption === "C" ? true : false,
        },
        {
          title: optionD,
          correct: correctOption === "D" ? true : false,
        },
      ],
    });
    setQuestion("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
    setCorrectOption("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          className="p-2 border border-gray-400 rounded-sm w-full my-2"
          placeholder="Enter Question"
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
        />
      </div>
      <input
        type="text"
        className="p-2 border border-gray-400 rounded-sm w-full my-2"
        placeholder="Enter Option A"
        onChange={(e) => setOptionA(e.target.value)}
        value={optionA}
      />
      <input
        type="text"
        className="p-2 border border-gray-400 rounded-sm w-full my-2"
        placeholder="Enter Option B"
        onChange={(e) => setOptionB(e.target.value)}
        value={optionB}
      />
      <input
        type="text"
        className="p-2 border border-gray-400 rounded-sm w-full my-2"
        placeholder="Enter Option C"
        onChange={(e) => setOptionC(e.target.value)}
        value={optionC}
      />
      <input
        type="text"
        className="p-2 border border-gray-400 rounded-sm w-full my-2"
        placeholder="Enter Option D"
        onChange={(e) => setOptionD(e.target.value)}
        value={optionD}
      />
      <select
        onChange={(e) => setCorrectOption(e.target.value)}
        className="p-2 border border-gray-400 rounded-sm lg:w-auto w-full"
        value={correctOption}
      >
        <option value="">Which option is the correct Answer?</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
      <button
        onClick={() => done()}
        className="bg-gray-300 hover:bg-gray-200 p-3 rounded-md float-right lg:mt-16 mt-6"
      >
        Add Question
      </button>
    </div>
  );
};

export default AddQuestion;
