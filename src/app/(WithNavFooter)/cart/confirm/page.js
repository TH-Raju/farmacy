'use client'

import { AllImages } from "@/assests/images/AllImages";
import GoBackButton from "@/Components/(Shared)/GoBackButton/GoBackButton";
import { ConfigProvider, Form, Input, Popover, Space, Steps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from 'react';
import { PiWarningCircleDuotone } from "react-icons/pi";
export default function Confirm() {
    // steps
    const customDot = (dot, { status, index }) => (
        <Popover
            content={
                <span>
                    step {index} status: {status}
                </span>
            }
        >
            {dot}
        </Popover>
    );
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


    return (
        <div className="container mx-auto">
            <GoBackButton
                text={"I tuoi dati"}
            />
            <div className="ant-steps flex flex-wrap justify-center items-center w-full text-left sm:flex-col sm:items-start sm:justify-start mx-2 md:mx-0 my-5">
                <ConfigProvider
                    theme={{
                        components: {
                            Steps: {
                                "colorPrimary": "rgb(132,201,187)",
                                "lineType": "dashed",
                                "iconSize": 30,
                                "lineWidth": 2
                            }
                        },
                    }}
                >

                    <Steps
                        current={1}
                        progressDot={customDot}
                        items={[
                            {
                                title: 'Scegli prodotti',

                            },
                            {
                                title: 'Il tuo ordine',

                            },
                            {
                                title: 'Scegli la Consegna',

                            },
                            {
                                title: 'I tuoi dati ',

                            },
                            {
                                title: 'Metodo di pagamento',

                            },
                            {
                                title: 'Conferma',

                            },
                            {
                                title: 'Fatto',

                            },

                        ]}
                    />
                </ConfigProvider>

            </div>
            <hr />


            <div className="w-full flex flex-col md:flex-row px-2 md:mx-0 gap-8 mt-1 mb-20">
                <div className="w-full md:w-[50%] bg-[#f5f5f5] p-2">

                    <Image src={AllImages.delivaryLocation} alt="loaction" className="object-cover w-full" />
                    <div className='flex justify-center md:justify-start items-center gap-6 my-5  '>
                        <div className='flex flex-col md:flex-row justify-start items-center gap-6 my-5   '>
                            <button className='w-52 md:w-auto px-4 py-2 rounded-2xl flex justify-center md:justify-start items-end gap-2 border-2 border-neutral-400'>
                                <Image src={AllImages.location2} alt='hero' height={0} width={0} className='object-cover' />
                                Azoda Place, Rome</button>
                            <button className='w-52 md:w-auto justify-center md:justify-start px-4 py-2 rounded-2xl flex  items-end gap-2 border-2 border-neutral-400'>
                                <Image src={AllImages.save} alt='hero' height={0} width={0} className='object-cover' />
                                Save</button>
                            <button className='w-52 md:w-auto justify-center md:justify-start px-4 py-2 rounded-2xl flex  items-end gap-2 border-2 border-neutral-400'>
                                <Image src={AllImages.call} alt='hero' height={0} width={0} className='object-cover' />
                                Call</button>
                        </div>

                    </div>
                    <p className="pt-4 pb-8 mb-6 border-b border-b-neutral-500">0,8 km dalla tua posizione</p>
                    <div className=" pb-10 mb-10">
                        <h1 className="text-2xl font-bold text-[#1D1D1B] mb-2">Farmacia Amabile srl</h1>
                        <p>Shop no: 2565, Street: Conforti, Selton Squire, Via Abate Conforti, SA</p>
                    </div>
                    {/* <Link href='/cart/chose-delivary' className="flex justify-end items-center my-10">
                        <button className="py-4 px-16 p text-white bg-primaryColor rounded">Procedi</button>
                    </Link> */}

                </div>
                <div className="w-full md:w-[50%] bg-[#f5f5f5] p-4">
                    <p className="font-semibold border-b border-gray-400 pb-6">Prodotti richiesti</p>
                    <div className="my-6">
                        <h1 className=" text-textColor font-semibold">RECORDATI SpA</h1>
                        <h1 className="text-xl text-textColor font-semibold">Amuchina gel mani flacone 250 ml</h1>
                    </div>
                    <p className="flex justify-start items-center gap-2 my-4 border-b border-b-neutral-500 pb-6">
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
                    <div className="my-6 font-semibold">
                        <div className="flex justify-between items-center ">
                            <p>Consegna</p>
                            <p>Da 2,99 €</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Subtotale</p>
                            <p>12,40 €</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5 justify-between items-center my-6">
                            <Space.Compact>
                                <Input />
                            </Space.Compact>

                            <button className="py-2 px-8 p text-white bg-[#14b15b] rounded">Applica</button>

                        </div>
                        <div className="flex justify-between items-center mb-6">
                            <p>Totale</p>
                            <p>12,40 €</p>
                        </div>
                        <p className="flex justify-start items-center gap-2 bg-[#fff9d8]  border-l-8 border-[#e6c414] px-3 my-2"><PiWarningCircleDuotone className="text-[#e6c414] h-5 w-5" /> I prezzi visualizzati sono quelli di listino e non tengono conto di eventuali esenzioni o ticket.</p>

                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row  justify-end items-center gap-5 my-10">
                <Link href='/cart/chose-delivary'>
                    <button className="py-4 px-16 border border-neutral-500 text-textColor rounded">Indietro</button>
                </Link>
                <Link href='/cart/done-order'>
                    <button className="py-4 px-16 p text-white bg-primaryColor rounded">Conferma</button>
                </Link>
            </div>


        </div>


    )
}
