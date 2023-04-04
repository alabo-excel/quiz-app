import React, { useEffect, useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import Head from "next/head";
const singleQuiz = () => {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    setQuiz(JSON.parse(localStorage.getItem("quiz")));
  }, []);
  return (
    <>
      <Head>
        <title>My Quiz App || {quiz.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNav />
      <main className="lg:px-20 p-4 py-10">
        <h1>{quiz?.name}</h1>
      </main>
    </>
  );
};

export default singleQuiz;
