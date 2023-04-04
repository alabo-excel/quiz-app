import { useEffect, useState } from "react";
import Head from "next/head";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import HeaderNav from "@/components/HeaderNav";

export default function Home() {
  const [quizes, setQuizes] = useState([]);
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "quizes"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      setQuizes([...quizes, doc.data()]);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNav />
      <main className="px-32 py-10">
        <div className="flex flex-wrap justify-between">
          {quizes.map((quiz, index) => (
            <div key={index} className="lg:w-[32%] rounded-xl shadow my-4">
              <div className="w-full rounded-t-xl p-20 bg-purple-500 text-center">
                <div className="text-4xl my-auto capitalize">
                  {quiz.name[0]}
                </div>
              </div>
              <div className="p-3 flex justify-between">
                <div>
                  <div className="font-bold text-xl capitalize">
                    {quiz.name}
                  </div>
                  <p className="text-sm capitalize">{quiz.description}</p>
                  <p className="capitalize text-sm">Created by: {quiz.author}</p>
                </div>
                <button className="bg-gray-400 h-8 my-auto px-2 rounded-md text-sm">
                  Take Quiz
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
