"use client";
import { useEffect, useState } from "react";


export default function Home() {
  const [quote, setQuote] = useState("this is the quote of the day. enjoy yourself dude.");

  async function fetchQuote() {
    const res = await fetch("http://localhost:4000/getquote")
    const result = await res.json()
    console.log(result);
    setQuote(result.quote);
  }

  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex flex-col items-center gap-10 w-[40%]">
        <h1 className="text-primary text-5xl font-bold">Quote of The Day</h1>
        <div className="relative bg-white border-2 w-full h-60 flex p-10">
          <p className="text-primary text-5xl leading-14">"{quote}"</p>
          <div className="absolute -z-2 p-10 border-2 left-2 top-2 bg-white w-full h-60"></div>
        </div>
        <a onClick={fetchQuote} className="bg-[#5170ff] cursor-pointer p-3 rounded-full text-white">Generate new quote</a>
      </div>
    </div>
  );
}
