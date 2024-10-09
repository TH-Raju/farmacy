'use client'

import { AllImages } from '@/assests/images/AllImages';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa'
import { PiWarningCircleDuotone } from 'react-icons/pi';
import { useState } from "react";
import { useRouter } from 'next/navigation';
export default function ProductList() {
    // counter
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };
    const products = [
        {
            id: "1",
            image: AllImages.singleProduct,
            title: "Amuchina gel mani flacone 250 ml",
            subTitle: "AURORA Srl",
            prise: "12,00",
            description: "Amuchina Gel Mani Flacone 250 ml è un detergente in formulazione gel, indicato per pulire le mani in assenza di acqua"
        },
    ];


    const router = useRouter();

    const handleBack = () => {
        router.back();
    }

    return (
        <div className="container mx-auto">
            <div onClick={handleBack} className="mt-8 mx-2 md:mx-0 border-b border-[#A2A29A] pb-6">
                <button className="flex justify-start items-center gap-2 ">
                    <FaArrowLeft />
                    Lista prodotti
                </button>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-8 my-20">
                <div className="w-full md:w-[50%] bg-[#f5f5f5] p-5">
                    {products.map((item) => (
                        <div key={item.id} >
                            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                                <Image src={item.image} alt="Product" width={625} height={488} className="object-cover" />
                                <div className=" px-9 py-7">
                                    <h1 className="text-xl text-textColor font-bold">Amuchina gel mani flacone 250 ml</h1>
                                    <p className="text-neutral-500 my-6 border-b border-[#A2A29A] pb-6">AURORA Srl</p>

                                    <p className="text-primaryColor my-3 border-b border-[#A2A29A] pb-6">Prezzo:{item.prise} €</p>

                                    <p className="my-4 ">Amuchina Gel Mani Flacone 250 ml è un detergente in formulazione gel, indicato per pulire le mani in assenza di acqua</p>
                                    <p className="flex justify-start items-center gap-2 my-4 pb-6">
                                        Quantità:
                                        <span className="flex justify-start items-center gap-4">
                                            <FaMinus
                                                className="cursor-pointer"
                                                onClick={decreaseQuantity}
                                            />
                                            <span>{quantity}</span>
                                            <FaPlus
                                                className="text-primaryColor cursor-pointer"
                                                onClick={increaseQuantity}
                                            />
                                        </span>
                                    </p>

                                    <Link href={`/search-pharmacy`}>
                                        <div className="flex justify-center items-center">
                                            <button className="flex justify-center items-center gap-2 py-4 w-56 border border-[#A2A29A] rounded"> <FaArrowRight /> Aggiungi altri prodotti</button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-[50%] bg-[#f5f5f5] p-5">
                    <p className="border-b border-[#A2A29A] pb-5 font-semibold">Totale</p>
                    <div className="my-6 font-semibold">
                        <div className="flex justify-between items-center ">
                            <p>Consegna</p>
                            <p>Da 2,99 €</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Subtotale</p>
                            <p>12,40 €</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>TOTALE</p>
                            <p>15,39 €</p>
                        </div>
                    </div>
                    <p className="flex justify-start items-center gap-2 bg-[#fff9d8]  border-l-8 border-[#e6c414] px-3 p-2"><PiWarningCircleDuotone className="text-[#e6c414] h-5 w-5" /> I prezzi visualizzati sono quelli di listino e non tengono conto di eventuali esenzioni o ticket.</p>
                    <p className="text-neutral-500">Hai un codice sconto consegna? Aggiungilo nella fase di conferma.</p>
                    <Link href='/cart/order'>
                        <button className="py-4 mt-12 w-full text-white bg-primaryColor rounded">Procedi</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}
