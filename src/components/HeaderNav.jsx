import Link from "next/link";
import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";

const HeaderNav = () => {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");

  const handleShow = () => {
    if (name === "") {
      return;
    }
    setCookie("name", name);
    setShow(!show);
  };
  useEffect(() => {
    if (hasCookie("name") === false) {
      setShow(false);
    }
  }, []);
  return (
    <>
      <div className="flex w-full lg:px-20 px-4 p-2 shadow justify-between">
        <Link href="/" className="my-auto">
          <h1 className="font-bold text-xl">Quiz App</h1>
        </Link>
        <Link href="/add">
          <div className="p-2 bg-gray-300 hover:bg-gray-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </div>
        </Link>
      </div>
      {show ? null : (
        <div className="">
          <div className="fixed bg-black top-0 left-0 opacity-50 w-screen h-screen z-1"></div>
          <div className="fixed top-[25%] lg:w-1/2 lg:py-20 py-10 rounded-xl px-4 lg:px-32 text-center lg:left-[25%] left-[5%] right-[5%] lg:right-[25%] bg-white h-1/2">
            <h1 className="text-xl capitalize">
              Hello and Welcome to My Quiz App Please enter a name to continue
            </h1>
            <input
              type="text"
              className="p-2 border border-gray-400 rounded-sm w-full my-8"
              placeholder="Enter name eg.alabo"
              onChange={(e) => setName(e.target.value)}
            />
            <button
              onClick={handleShow}
              className="bg-gray-300 hover:bg-gray-200 p-3 rounded-md"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderNav;
