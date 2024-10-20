import React from "react";
import { FlipWords } from "./ui/flip-words";
import Button from "./Button";

export function FlipWordsHome() {
  const words = ["Berteduh", "Bercerita", "Berbagi", "Bercanda"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-6xl font-semibold text-neutral-600 dark:text-neutral-400">
        Mari
        <FlipWords words={words} /> <br />
        Di Utara
        <p className="text-lg font-light w-8/12 pt-4">
          Coffee comes in various types, each with distinct flavor and
          characteristic
        </p>
        <div className="space-x-6">
          <Button variant="primary">Looking for Coffee</Button>
          <Button variant="secondary">Reservation</Button>
        </div>
      </div>
    </div>
  );
}
