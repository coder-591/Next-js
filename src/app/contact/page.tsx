"use client";
import { Meteors } from "@/Components/ui/meteors";

const page = () => {
  return <div className="w-screen h-screen   ">
       <Meteors number={150} className={"border border-white"} />
  </div>;
};

export default page;
