'use client'


import { Button } from "antd";
import Image from "next/image";
import { AllImages } from "../../../../../assests/images/AllImages";

export default function Delivary() {
    return (
        <div className="container mx-auto">
            <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-5 px-3 md:px-0'>

                <div className='w-full md:w-[50%]'>
                    <Image src={AllImages.delivary} alt='hero' height={0} width={0} className='object-cover' />
                </div>
                <div className='w-full md:w-[50%] text-textColor my-24 md:pr-6'>
                    <h2 className='bg-SeconderyColor py-1 rounded-2xl text-[#db8888] 
                    md:w-[50%] uppercase mb-2 text-md text-center'>NON SOLO CONSEGNA A DOMICILIO</h2>
                    <div className="md:w-[70%]">
                        <p className="text-textColor text-3xl font-bold">Scarica l’app e scopri tante funzionalità in più!</p>
                        <p className="text-textColor mt-4 mb-10">Avrai la tua farmacia sempre a portata di mano. Inoltre potrai impostare la tua terapia, prenotare un servizio e tanto altro.</p>
                        <div className=" flex flex-col md:flex-row justify-start items-center gap-4 mt-4 mb-10">
                            <div>
                                <button
                                    // onClick={() => {
                                    //     showModal();
                                    // }}
                                    className="text-start px-8 py-1 w-60 md:w-56 bg-black border-none rounded-xl flex justify-center items-center gap-2 text-white"
                                >
                                    <Image
                                        src={AllImages.appleStore}
                                        alt="play_store"
                                        width={0}
                                        height={0}
                                        className="h-10 w-10 object-cover"
                                    />
                                    <div className="">
                                        <p className="text-xs">
                                            Scarica Su
                                        </p>
                                        <h1 className=" text-sm sm:text-lg md:text-xl">
                                            App Store
                                        </h1>
                                    </div>
                                </button>
                            </div>
                            <div className="">
                                <button
                                    // onClick={() => {
                                    //     showModal();
                                    // }}
                                    className="text-start px-8 py-1 w-60 md:w-56 bg-black border-none rounded-xl flex justify-center items-center gap-2 text-white"
                                >
                                    <Image
                                        src={AllImages.playStore}
                                        alt="play_store"
                                        width={0}
                                        height={0}
                                        className="h-10 w-10"
                                    />
                                    <div>
                                        <p className="text-xs">
                                            Disponibile su
                                        </p>
                                        <h1 className=" text-sm sm:text-lg md:text-xl">
                                            Google Play
                                        </h1>
                                    </div>
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
