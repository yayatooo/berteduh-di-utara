import React from "react";

export const Footer = () => {
  return (
    <section className="bg-[#252524] text-white">
      <div className="container py-12 flex justify-between">
        <div>
          <h1 className="font-semibold text-2xl pb-6">Berteduh di Utara</h1>
          <p className="font-extralight text-sm opacity-80 w-7/12">
            we make your own beans and coffee with the original beans from
            central celebes
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-5/12">
          <div>
            <h1 className="font-semibold text-2xl pb-6">Open Hour</h1>
            <p className="font-extralight text-sm opacity-80">Monday - Saturday</p>
            <p className="font-extralight text-sm opacity-80">bar: 09.00 : 23.00</p>
            <p className="font-extralight text-sm opacity-80">kitchen: 10.00 : 22.00</p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl pb-6">Follow us</h1>
            <p className="font-extralight text-sm opacity-80">Insagram</p>
            <p className="font-extralight text-sm opacity-80">Facebook</p>
            <p className="font-extralight text-sm opacity-80">Twitter/X</p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl pb-6">Reach out</h1>
            <p className="font-extralight text-sm opacity-80"> Jl Jendral Sudirman Depan SMP 5 Negri Poso Kota Utara</p>
          </div>
          <div>
            <h1 className="font-semibold text-2xl pb-6">Contact</h1>
            <p className="font-extralight text-sm opacity-80">Aidil - +62853698745</p>
            <p className="font-extralight text-sm opacity-80">Hamid - +62852639741</p>
          </div>
        </div>
      </div>
    </section>
  );
};
