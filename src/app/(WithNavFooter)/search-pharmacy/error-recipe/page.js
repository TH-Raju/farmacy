
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GoBackButton from '../../../../Components/(Shared)/GoBackButton/GoBackButton'
import { AllImages } from '../../../../assests/images/AllImages'

export default function ErrorRecipe() {
  return (
    <div className="container mx-auto">
      <GoBackButton text={"Fatto!"} />
      <div className="mt-20 mb-16 bg-[#fafafa] flex flex-col justify-center items-center md:p-40">
        <Image src={AllImages.error} alt="ok" className="object-cover"></Image>
        <p className="text-xl md:text-2xl lg:text-3xl font-bold  text-textColor mt-36 mb-2">Errore nel caricamento della ricetta</p>
        <p>Controlla e reinserisci i dati</p>
        <Link href='/'>
          <button className="mt-16 mb-5 py-4 px-16 border border-neutral-500 text-textColor rounded">Home</button>
        </Link>
      </div>


    </div>
  )
}
