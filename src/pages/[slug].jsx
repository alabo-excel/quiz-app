import React, { useEffect, useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const singleQuiz = () => {
  const router = useRouter();
  const [quiz, setQuiz] = useState([]);
  const [test, setTest] = useState(false);
  const [length, setLength] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const single = JSON.parse(localStorage.getItem("quiz"));
    setQuiz(single);
    console.log(single);
  }, []);
  const select = (option) => {
    if (option.correct === true) {
      setScore(score + parseInt(quiz.grading));
    }
  };

  const timing = () => {
    setTimeout(() => {
      setTimeUp(true);
    }, quiz.timeLimit * 6000);
  };

  const submit = () => {
    setTimeUp(true);
  };
  return (
    <>
      <Head>
        <title>My Quiz App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNav />
      <main className="lg:px-20 p-4">
        {test === true ? (
          <div className="mx-auto lg:w-1/2 my-20">
            <div className="text-center capitalize text-2xl my-1 font-bold">
              Question {length + 1}
            </div>
            <div>
              <p className="text-xl font-bold capitalize">
                {quiz.questions[length]?.title}
              </p>
              {quiz.questions[length]?.answers.map((option, index) => (
                <button
                  key={index}
                  disabled={selected === null ? false : true}
                  onClick={() => {
                    select(option);
                    setSelected(index);
                  }}
                  className={
                    selected === index
                      ? `bg-[#023e8a] text-white capitalize text-left p-3 w-full rounded-md my-3`
                      : "bg-gray-100 capitalize text-left p-3 w-full rounded-md my-3"
                  }
                >
                  {option.title}
                </button>
              ))}
            </div>
            <div className="flex justify-between">
              {/* {length >= 1 && (
                <button
                  onClick={() => setLength(length - 1)}
                  className="bg-gray-600 p-3 w-44 text-white rounded-md my-3"
                >
                  Prev
                </button>
              )} */}
              {length === quiz.questions.length - 1 && (
                <button
                  onClick={() => submit()}
                  className="bg-[#023047] text-white hover:bg-[#023e8a] p-3 my-3 w-44 rounded-md"
                >
                  Submit
                </button>
              )}
              {length < quiz.questions.length - 1 && (
                <button
                  onClick={() => {
                    setLength(length + 1);
                    setSelected(null);
                  }}
                  className="bg-[#023047] text-white hover:bg-[#023e8a] p-3 my-3 w-44 rounded-md"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="mx-auto lg:w-1/2 text-center capitalize my-20">
            <h1 className="text-2xl my-1 font-bold">
              Hello and welcome to {quiz?.name} test.
            </h1>
            <p className="my-2">{quiz.description}</p>
            <p className="my-2">
              Note: You have {quiz?.questions?.length} questions to answer in{" "}
              {quiz.timeLimit}seconds. You have only 1 chance to answer each
              question.
            </p>
            <button
              onClick={() => {
                setTest(true), timing();
              }}
              className="bg-[#023047] text-white p-3 w-44 rounded-md my-3"
            >
              Start
            </button>
          </div>
        )}
        {timeUp ? (
          <div className="">
            <div className="fixed bg-black top-0 left-0 opacity-50 w-screen h-screen z-1"></div>
            <div className="fixed top-[25%] lg:w-1/2 lg:py-32 py-20 rounded-xl px-4 lg:px-32 text-center lg:left-[25%] left-[5%] right-[5%] lg:right-[25%] bg-white">
              <h1 className="text-3xl capitalize">
                🎉 Congratulations you have completed the test, your score is{" "}
                {score}. 🎉
              </h1>
              <div className="flex justify-between my-4">
                <button
                  onClick={() => router.reload()}
                  className="bg-[#023047] text-white hover:bg-[#023e8a] lg:w-44 p-3 rounded-md"
                >
                  Retake
                </button>
                <Link href="/">
                  <button className="bg-[#023047] text-white lg:w-44 hover:bg-[#023e8a] p-3 rounded-md">
                    Go Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </>
  );
};

export default singleQuiz;
