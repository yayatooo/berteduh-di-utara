import React from 'react'
import Image from 'next/image'
import { Bookmark } from 'lucide-react'
import { FormatRupiah } from '@arismun/format-rupiah'



interface MenuProducts {
    title: string,
    desc: string,
    price: number,
    image: string,
}

export const CardProduct: React.FC<MenuProducts> = ({title, desc, price, image}) => {
  return (
    <div className="w-[270px] h-[390px] bg-white rounded-2xl py-3 px-4 shadow-2xl m-4">
        <Bookmark color="#ce8f28" className="float-right" />
        <div className="w-full flex justify-center">
          <Image src={image} width={218} height={184} alt="menu" />
        </div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-[10px] font-light py-1">
          {desc}
        </p>
        <div className="flex justify-between py-1">
          <h1 className="text-xl font-semibold"><FormatRupiah value={price}/></h1>
          <button className="bg-cream text-white rounded-full text-xs font-semibold px-4 py-0">
            Make an Order
          </button>
        </div>
      </div>
  )
}
