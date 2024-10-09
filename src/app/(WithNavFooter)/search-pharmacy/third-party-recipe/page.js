import { AllImages } from '@/assests/images/AllImages'
import GoBackButton from '@/Components/(Shared)/GoBackButton/GoBackButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OrderByThirdParty() {
    return (
        <div className="container mx-auto">
            <GoBackButton text={"Fatto!"} />
            <div className="mt-20 mb-16 bg-[#fafafa] mx-2 md:mx-0 px-2 flex flex-col justify-center items-center md:p-40">
                <Image src={AllImages.thirdparty} alt="ok" className="object-cover"></Image>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold  text-textColor mt-36">Stai Effettuando un ordine per conto terzi?</p>
                <p>Procedendo accetti termini e condizioni</p>
                <Link href='/cart/product-list'>
                    <button className="mt-16 mb-5 py-4 px-16 border border-neutral-500  rounded text-primaryColor">Procedi</button>
                </Link>
            </div>
        </div>
    )
}
