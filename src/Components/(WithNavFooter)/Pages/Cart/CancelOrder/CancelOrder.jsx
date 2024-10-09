'use client'
import { AllImages } from '@/assests/images/AllImages'
import GoBackButton from '@/Components/(Shared)/GoBackButton/GoBackButton'
import { Radio } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

import React, { useState } from 'react';
export default function CancelOrder() {
  const data = [
    {
      id: "1",
      image: AllImages.cancelorder,
      title: "Farmacia Amabile srl",
      location: "Farmacia Amabile srl",
      time: "09:30 - 19:00"
    },
    {
      id: "2",
      image: AllImages.cancelorder,
      title: "Farmacia Amabile srl",
      location: "Farmacia Amabile srl",
      time: "09:30 - 19:00"
    },
    {
      id: "3",
      image: AllImages.cancelorder,
      title: "Farmacia Amabile srl",
      location: "Farmacia Amabile srl",
      time: "09:30 - 19:00"
    },
    {
      id: "4",
      image: AllImages.cancelorder,
      title: "Farmacia Amabile srl",
      location: "Farmacia Amabile srl",
      time: "09:30 - 19:00"
    },
    {
      id: "5",
      image: AllImages.cancelorder,
      title: "Farmacia Amabile srl",
      location: "Farmacia Amabile srl",
      time: "09:30 - 19:00"
    },
    {
      id: "6",
      image: AllImages.cancelorder,
      title: "Farmacia Amabile srl",
      location: "Farmacia Amabile srl",
      time: "09:30 - 19:00"
    },
  ]
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="container mx-auto">
      <GoBackButton text={"Seleziona la farmacia"} />
      <div className="w-full flex flex-col md:flex-row justify-start items-start gap-7 px-2 lg:px-0">
        <div className="w-full lg:w-[50%]">
          <div className="p-4 rounded bg-[#e4f3f0]">
            <p>Il tuo ordine è disponibile nelle seguenti farmacie nelle tue vicinanze scegline una per effettuare l’ordine</p>
          </div>
          <div className="bg-[#fafafa] lg:p-12  ">
            <h1 className="text-2xl font-semibold text-textColor mb-6">Scegli la tua farmacia</h1>
            <div className="w-full flex flex-col items-center md:items-start ">

              {data.map((item) => <Radio.Group onChange={onChange} value={value} key={item.id} >
                <Radio value={item.id}>
                  <div className="w-full flex flex-col md:flex-row gap-4 border border-neutral-400 rounded my-4  ">
                    <div >
                      <Image src={item.image} alt="cancel img" className="object-cover w-full h-full" />
                    </div>
                    <div className=" px-2 lg:pr-10 xl:pr-32">
                      <p className="text-xl">{item.title}</p>
                      <p className="flex justify-start items-center gap-2"><Image src={AllImages.location2} alt="location" className="object-cover" />
                        {item.location}
                      </p>
                      <p className="flex justify-start items-center gap-2"><Image src={AllImages.time} alt="location" className="object-cover" />
                        {item.time}
                      </p>
                    </div>


                  </div></Radio>



              </Radio.Group>)}
            </div>
          </div>
        </div>




        <div className="w-full lg:w-[50%]">
          <Image src={AllImages.delivaryLocation} alt="loaction" className="object-cover w-full" />
          <div className='flex justify-center md:justify-start items-center gap-6 my-5  '>
            <div className='flex flex-col md:flex-row justify-start items-center gap-6 my-5   '>
              <button className='w-52 md:w-auto px-4 py-2 rounded-2xl flex justify-center md:justify-start items-end gap-2 border-2 border-neutral-400'>
                <Image src={AllImages.location2} alt='hero' height={0} width={0} className='object-cover' />
                Azoda Place, Rome</button>
              {/* <button className='w-52 md:w-auto justify-center md:justify-start px-4 py-2 rounded-2xl flex  items-end gap-2 border-2 border-neutral-400'>
                <Image src={AllImages.save} alt='hero' height={0} width={0} className='object-cover' />
                Save</button>
              <button className='w-52 md:w-auto justify-center md:justify-start px-4 py-2 rounded-2xl flex  items-end gap-2 border-2 border-neutral-400'>
                <Image src={AllImages.call} alt='hero' height={0} width={0} className='object-cover' />
                Call</button> */}
            </div>

          </div>
          <p className="pt-4 pb-8">0,8 km dalla tua posizione</p>
          <div className="border-b border-b-neutral-500 pb-10 mb-10">
            <h1 className="text-2xl font-bold text-[#1D1D1B] mb-2">Farmacia Amabile srl</h1>
            <p>Shop no: 2565, Street: Conforti, Selton Squire, Via Abate Conforti, SA</p>
          </div>
          <Link href='/cart/chose-delivary' className="flex justify-end items-center my-10">
            <button className="py-4 px-16 p text-white bg-primaryColor rounded">Procedi</button>
          </Link>

        </div>
      </div>
    </div>
  )
}
