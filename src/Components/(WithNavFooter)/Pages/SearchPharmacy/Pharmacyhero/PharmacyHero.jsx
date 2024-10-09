import { AllImages } from '@/assests/images/AllImages'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PharmacyHero() {
  return (
    <div className='container mx-auto'>
      <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-9 px-3 mt-6'>
        <div className='w-full lg:w-[50%]'>
          <div className='flex flex-col md:flex-row justify-start md:justify-between md:items-center mb-4 md:mb-0'>
            <div >
              <h1 className='text-xl font-bold text-textColor'>Fermacia D’Amone di Pastone dr. Luigi</h1>
              <p className='flex gap-2 justify-start items-center mt-1 mb-4'> <Image src={AllImages.time} alt='hero' height={0} width={0} className='object-cover' />
                08:00am : 10:00pm</p>
            </div>
            <div>
              <p className='text-xl font-semibold text-textColor'>Ornote Pharmacy</p>
            </div>
          </div>
          <Image src={AllImages.pharmacyHero} alt='hero' height={0} width={0} className='object-cover' />

          <div className='flex justify-center md:justify-start items-center gap-6 my-5  border-b-2 border-neutral-400'>
            <div className='flex flex-col md:flex-row justify-start items-center gap-6 my-5   '>
              <button className='w-52 md:w-auto px-4 py-2 rounded-2xl flex justify-center md:justify-start items-center gap-2 border-2 border-neutral-400'>
                <Image src={AllImages.location2} alt='hero' height={0} width={0} className='object-cover' />
                Azoda Place, Rome</button>
              {/* <button className='w-52 md:w-auto justify-center md:justify-start px-4 py-2 rounded-2xl flex  items-center gap-2 border-2 border-neutral-400'>
                <Image src={AllImages.save} alt='hero' height={0} width={0} className='object-cover' />
                Save</button>
              <button className='w-52 md:w-auto justify-center md:justify-start px-4 py-2 rounded-2xl flex  items-center gap-2 border-2 border-neutral-400'>
                <Image src={AllImages.call} alt='hero' height={0} width={0} className='object-cover' />
                Call</button> */}
            </div>

          </div>

        </div>

        <div className='w-full lg:w-[50%] text-textColor my-24 px-2'>
          <Link href='/search-pharmacy/payment-method'>
            <div className='flex flex-col justify-center items-center px-9 py-4 border border-dashed border-[#EAC400] mb-3 rounded-md cursor-pointer'>
              <Image src={AllImages.book} alt='hero' height={0} width={0} className='object-cover' />
              <h2 className='text-md font-bold text-textColor '>Prenotazioni</h2>
              <p className='text-md font-bold text-neutral-400 '>Prenota tutti i servizi disponibili nella farmacia</p>
            </div>
          </Link>
          <div className='flex flex-col md:flex-row justify-between items-center gap-3 '>
            <Link href='/search-pharmacy/load-pharmacy'>
              <div className='flex flex-col justify-center items-center px-9 lg:px-3 xl:px-9 py-5 border border-dashed border-[#84C9BB] rounded-md'>
                <Image src={AllImages.prescription} alt='hero' height={0} width={0} className='object-cover' />
                <h2 className='text-md font-bold text-textColor '>Carica ricetta elettronica</h2>
                <p className='text-md font-bold text-neutral-400 '>Supportato solo JPEG, PNG, solo PDF</p>
              </div>
            </Link>
            <Link href='/search-pharmacy/blank-recipe'>
              <div className='flex flex-col justify-center items-center  px-9 lg:px-3 xl:px-9 py-5 border border-dashed border-[#EF7979] rounded-md'>
                <Image src={AllImages.upload} alt='hero' height={0} width={0} className='object-cover' />
                <h2 className='text-md font-bold text-textColor '>Carica ricetta bianca</h2>
                <p className='text-md font-bold text-neutral-400 '>Supportato solo JPEG, PNG, solo PDF</p>
              </div> </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
