import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function Contact() {
  return (
    <main className="">
      <div className="flex">
        <div className="bg-contactImage h-screen py-20 w-6/12 flex justify-center items-center">
          <h1 className="text-6xl font-semibold text-white text-center">
            Get in Touch
          </h1>
        </div>
        <div className="w-6/12 flex flex-col justify-center">
          <div className="px-20 py-20">
            <h1 className="text-4xl text-center pb-12 font-semibold">Contact Us</h1>
            <form action="" className="flex flex-col gap-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Textarea placeholder="Type your message here." />
              <Button variant="secondary">Send</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
