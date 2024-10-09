'use client'


import React, { useState } from 'react';
import { Radio } from 'antd';
import { ConfigProvider, Popover, Steps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa';
import { PiWarningCircleDuotone } from 'react-icons/pi';
import { AllImages } from '../../../../assests/images/AllImages';
import GoBackButton from '../../../../Components/(Shared)/GoBackButton/GoBackButton';
export default function ChoseDelivary() {
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
    const products = [
        {
            id: "1",
            image: AllImages.order,
            title: "Amuchina gel mani flacone 250 ml",
            subTitle: "AURORA Srl",
            prise: "12,00",
            description: "Amuchina Gel Mani Flacone 250 ml è un detergente in formulazione gel, indicato per pulire le mani in assenza di acqua"
        },
    ];
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className="container mx-auto">
            <GoBackButton
                text={"Scegli la consegna "} />
            {/* steps */}
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
                <div className="w-full md:w-[50%] bg-[#f5f5f5] p-8">
                    <p className="text-xl md:text-3xl font-bold border-b border-neutral-400 pb-6 mb-6">Scegli la consegna</p>

                    <Radio >
                        <p className="text-xl font-semibold">Consegna a domicilio</p>
                    </Radio>
                    <p className="text-neutral-400 my-2">Aggiungedo la consegna a domicilio si applicheranno i costi di consegna o</p>
                    <p className="flex justify-start items-center gap-2 bg-[#fff9d8]  border-l-8 border-[#e6c414] px-3 py-2 my-2 "><PiWarningCircleDuotone className="text-[#e6c414] h-5 w-5" /> I prezzi visualizzati sono quelli di listino e non tengono conto di eventuali esenzioni o ticket.</p>

                    <div className="border-b border-neutral-400 my-6">
                    </div>

                    <div>
                        <Radio >
                            <p className="text-xl font-semibold">Ritira in Farmacia</p>
                        </Radio>

                        <p className="flex gap-2 justify-start items-start my-4"><Image src={AllImages.loaction} alt="check" /> Corso Italia, 23, 20122 Milano MI, Italia</p>
                    </div>


                    <Link href='' >
                        <button className="flex items-center gap-2 py-4 px-6  border mt-20 border-neutral-500 text-textColor rounded"> <PiWarningCircleDuotone className="text-neutral-500" />Ulteriori informazioni</button>
                    </Link>

                </div>
                <div className="w-full md:w-[50%] bg-[#f5f5f5] p-4">
                    {products.map((item) => (
                        <div key={item.id} >
                            <div className=" flex flex-col gap-5 ">
                                <p className="py-4 text-2xl font-semibold">Prodotti richiesti</p>
                                <Image src={item.image} alt="Product" width={625} height={488} className="object-cover my-4" />
                                <div className=" px-9 py-7">
                                    <h1 className="text-xl text-textColor font-bold">RECORDATI SpA</h1>
                                    <h1 className="text-xl text-textColor font-bold">Amuchina gel mani flacone 250 ml</h1>
                                    <p className="flex justify-start items-center gap-2 my-4 border-b border-b-red-300 pb-6">
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
                                    <p className=" my-3 font-semibold pb-6">Prezzo:{item.prise} €</p>
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
                                    <p className="flex justify-start items-center gap-2 bg-[#fff9d8]  border-l-8 border-[#e6c414] px-3 my-2"><PiWarningCircleDuotone className="text-[#e6c414] h-5 w-5" /> I prezzi visualizzati sono quelli di listino e non tengono conto di eventuali esenzioni o ticket.</p>
                                    <p className="text-neutral-500">Hai un codice sconto consegna? Aggiungilo nella fase di conferma.</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 px-2 md:mx-0 mt-10 mb-32">
                <Link href=''>
                    <button className="py-4 px-16 border border-neutral-500 text-textColor rounded">Indietro</button>
                </Link>
                <div className="flex flex-col md:flex-row  justify-end items-center gap-5">
                    <Link href='/cart/cancel-order'>
                        <button className="py-4 px-16 border border-red-500 text-red-500 rounded">Annulla</button>
                    </Link>
                    {/* <Link href='/cart/pay-at-pharmacy'>
                        <button className="py-4 px-16 p text-white bg-primaryColor rounded">Procedi</button>
                    </Link> */}
                    {/* <Link href='/cart/pay-app-rcv-order'>
                        <button className="py-4 px-16 p text-white bg-primaryColor rounded">Procedi</button>
                    </Link> */}
                    <Link href='/cart/pay-app-shipping'>
                        <button className="py-4 px-16 p text-white bg-primaryColor rounded">Procedi</button>
                    </Link>
                </div>
            </div>

        </div >
    )
}
