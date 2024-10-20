import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { categoryMenu } from "../utility/data";

export default function Feature() {
  return (
    <main className="bg-primary">
      <div className="container py-20 flex items-center justify-center space-x-56">
        <div>
          <Image src="/slider/feature1.jpg" width={400} height={500} alt="image" className="rounded-lg" />
        </div>
        <div className="w-4/12">
          <h1 className="text-6xl text-cream font-semibold">
            What We Serve for you
          </h1>
          <p className="text-white font-light opacity-65 py-8">
            In addition to providing brewed coffee and roasted coffee beans, we
            also have several menu options that you can choose from.
          </p>
          <div>
            <Marquee speed={30}>
            {categoryMenu.map((data) => {
            return (
              <div key={data.id} className="flex items-center pb-6">
                <h1 className="text-cream font-medium mx-6">{data.name}</h1>
                <Image src={data.image} width={25} height={25} alt="icon" />
              </div>
            );
          })}
            </Marquee>
          </div>
          <Button variant="inline" className="mt-6">Check Our Menu</Button>
        </div>
      </div>
    </main>
  );
}
