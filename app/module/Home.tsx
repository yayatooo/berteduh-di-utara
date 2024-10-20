
import React from "react";
import { FlipWordsHome } from "@/components/FlipWords";
import { HeroGrid } from "@/components/HeroGrid";

export default function Home() {
  return (
    <div className="container flex">
      <FlipWordsHome />
      <HeroGrid />
    </div>
  );
}
