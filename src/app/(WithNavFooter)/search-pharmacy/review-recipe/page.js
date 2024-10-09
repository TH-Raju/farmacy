
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GoBackButton from '../../../../Components/(Shared)/GoBackButton/GoBackButton'
import { AllImages } from '../../../../assests/images/AllImages'

export default function ReviewRecipe() {
    return (
        <div className="container mx-auto">
            <GoBackButton text={"Fatto!"} />
            <div className="mt-20 mb-16 mx-2 md:mx-0 bg-[#fafafa] flex flex-col justify-center items-center md:p-40">
                <Image src={AllImages.review} alt="ok" className="object-cover"></Image>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold  text-textColor mt-36 mb-2">Il tuo ordine è in stato di revisione</p>
                <p>Riceverai una notifica da parte di un farmacista appena elaborerà la tua richiesta</p>

            </div>


        </div>
    )
}
