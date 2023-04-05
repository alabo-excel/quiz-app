import { useEffect, useState } from "react";
import Head from "next/head";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import HeaderNav from "@/components/HeaderNav";
import Card from "@/components/Card";
import randomColor from "randomcolor";

export default function Home() {
  const [quizes, setQuizes] = useState([]);
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "quizes"));
    const arr = [];
    querySnapshot.forEach((doc) => {
      arr.push({ ...doc.data(), id: doc.id });
    });
    setQuizes(arr);
    // console.log(arr);
  };
  useEffect(() => {
    localStorage.clear();
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>My Quiz App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNav />
      <main className="lg:px-20 p-4 py-10">
        <div className="flex flex-wrap justify-between">
          {quizes.map((quiz, index) => (
            <div key={index} className="lg:w-[23%] w-full">
              <Card quiz={quiz} color={randomColor()} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
