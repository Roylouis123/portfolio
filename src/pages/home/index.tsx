"use client";

import { TextAnimation } from "../../components/textAnimation";
import { SparklesCore } from "../../components/ui/sparkelse";
import "./home.css";
import ClickMeBoard from "../../components/ClickMeBoard";

export function Home() {
  return (
    <div className="h-[100vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <TextAnimation />
      <div className="w-[50rem] h-40 relative w-2/4">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges experience */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>


      </div>
      
      <ClickMeBoard/>

      <p className="text-white font-semibold mt-[4rem] mb-[2rem]">
        Want to hire Me, Download My Resume
      </p>

      <button className=" download-button border-white text-blue-200 hover:bg-transparent px-10 py-3">
        Download
      </button>
    </div>
  );
}
