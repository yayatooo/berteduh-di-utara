import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <main className=" bg-[#252524] pt-20">
    <div className="container">
      <h1 className="text-6xl text-white text-center">About us</h1>
      <div className="flex items-center">
        <Image
          src="/people.png"
          width={400}
          height={500}
          alt="owner"
          className="grayscale hover:grayscale-0"
        />
        <div className="text-white ">
          <i className="text-5xl leading-snug">
            <span className="text-cream">&quot;</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda, saepe. Sapiente ullam quam consequatur
            amet ad delectus laudantium necessitatibus beatae <span className="text-cream">&quot;</span>
          </i>
          <div className="my-12 text-right">
            <h1 className="text-2xl">Ihsan Husain</h1>
            <h1 className="text-cream">Owner of Berteduh Di Utara</h1>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  );
}
