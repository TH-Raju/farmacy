'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export default function GoBackButton({ text }) {
    const router = useRouter();
    const habdleBack = () => {
        router.back();
    }



    return (
        <div>
            <button onClick={habdleBack} className="text-xl md:text-2xl font-bold flex justify-start items-center gap-2 mx-2 md:mx-0 my-7">
                <FaArrowLeft />
                {text}
            </button>
        </div>
    )
}
