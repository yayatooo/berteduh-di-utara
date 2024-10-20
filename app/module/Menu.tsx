import { FlipWords } from "@/components/ui/flip-words";
import React from "react";
import { CardProduct } from "@/components/CardProduct";
import Button from "@/components/Button";
import { products } from "../utility/data";

export default function Menu() {
  const words = ["Menu", "Coffee", "Dish", "Drink"];
  return (
    <main className="container py-20">
      <div className="flex justify-center py-6 px-4">
        <div className="text-6xl font-semibold text-neutral-600 dark:text-neutral-400">
          Most Popular
          <FlipWords words={words} />
          For you
        </div>
      </div>
      <div className="flex gap-4 justify-center">
        {products.map((item) => (
            <div key={item.id}>

                <CardProduct title={item.title} desc={item.desc} price={item.price} image={item.image} />
            </div>
        ))}
      </div>
      <div className="py-7 mr-16">
      <Button variant="primary" className="float-right">See Others</Button>
      </div>
    </main>
  );
}
