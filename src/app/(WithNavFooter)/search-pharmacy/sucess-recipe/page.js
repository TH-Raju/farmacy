import { AllImages } from '@/assests/images/AllImages'
import GoBackButton from '@/Components/(Shared)/GoBackButton/GoBackButton'
import Image from 'next/image'
import React from 'react'

export default function SuccessRecipe() {
    return (
        <div className="container mx-auto">
            <GoBackButton text={"Fatto!"} />
            <div className="mt-20 mb-16 bg-[#fafafa] flex flex-col justify-center items-center md:p-40">
                <Image src={AllImages.ok} alt="ok" className="object-cover"></Image>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold  text-textColor my-36">Ricetta caricata con successo!</p>
            </div>
        </div>
    )
}
