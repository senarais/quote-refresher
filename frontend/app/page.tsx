

export default function Home() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex flex-col items-center gap-10 w-[40%]">
        <h1 className="text-primary text-5xl font-bold">Quote of The Day</h1>
        <div className="relative bg-white border-2 w-full h-60 flex p-10">
          <p className="text-primary text-5xl leading-14">“this is the quote of the day. enjoy yourself dude.”</p>
          <div className="absolute -z-2 p-10 border-2 left-2 top-2 bg-white border w-full h-60"></div>
        </div>
        <a href="" className="bg-[#5170ff] p-3 rounded-full text-white">Generate new quote</a>
      </div>
    </div>
  );
}
