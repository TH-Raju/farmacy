'use client'
import { AllImages } from '@/assests/images/AllImages';
import GoBackButton from '@/Components/(Shared)/GoBackButton/GoBackButton'
import { ConfigProvider, Form, Input, Popover, Radio, Steps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { PiWarningCircleDuotone } from 'react-icons/pi';
import { useState } from 'react';
export default function ShippingPayment() {
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

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className="container mx-auto">
            <GoBackButton
                text={"Metodi di pagemento"}
            />
            {/* steps */}
            <div className="px-2 md:mx-0">
                <ConfigProvider
                    theme={{
                        components: {
                            "Steps": {
                                "colorPrimary": "rgb(132,201,187)",
                                "lineType": "dashed"
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
                                title: 'Scegli la Consegna ',

                            },
                            {
                                title: 'I tuoi dati',

                            },
                            {
                                title: 'Metodo di pagamento ',

                            },
                            {
                                title: 'Conferma ',

                            },
                            {
                                title: 'Fatto',

                            },

                        ]}
                    />
                </ConfigProvider>
                <hr />
            </div>
            {/* main component */}

            <div className="w-full flex flex-col md:flex-row px-2 md:mx-0 gap-8 mt-1 mb-20">
                <div className="w-full md:w-[50%] bg-[#f5f5f5] p-8">
                    <p className="flex justify-start items-center gap-2 my-2 font-semibold">Scegli modalità di pagamento<PiWarningCircleDuotone className="text-neutral-500 h-5 w-5" /></p>
                    <div className='my-5 flex flex-col gap-6 mb-6'>
                        <Radio.Group onChange={onChange} value={value}>
                            <div className="flex justify-between items-center gap-2 px-2 py-1 border rounded  mb-6">
                                <div className="flex justify-between items-center gap-2">
                                    <Image src={AllImages.visa} alt="Visa" width={50} height={50} className="object-cover my-4" />
                                    <p className="font-bold text-xl">Paga con carta</p>
                                </div>
                                <Radio value={1} />
                            </div>
                            <div className="flex justify-between items-center gap-2 px-2 py-1 border rounded  mb-6">
                                <div className="flex justify-between items-center gap-2">
                                    <Image src={AllImages.paypal} alt="Visa" width={50} height={50} className="object-cover my-4" />
                                    <p className="font-bold text-xl">PayPal</p>
                                </div>
                                <Radio value={2} />
                            </div>
                            <div className="flex justify-between items-center gap-2 px-2 py-1 border rounded  mb-6">
                                <div className="flex justify-between items-center gap-2">
                                    <Image src={AllImages.Mastercard} alt="Visa" width={50} height={50} className="object-cover my-4" />
                                    <p className="font-bold text-xl">Mastercard</p>
                                </div>
                                <Radio value={3} />
                            </div>
                            <div className="flex justify-between items-center gap-2 px-2 py-1 border rounded  mb-6">
                                <div className="flex justify-between items-center gap-2">
                                    <Image src={AllImages.Farmacia} alt="Visa" width={50} height={50} className="object-cover my-4" />
                                    <p className="font-bold text-xl">Paga in Farmacia</p>
                                </div>
                                <Radio value={4} />
                            </div>
                        </Radio.Group>
                    </div>
                    <Link href='' >
                        <button className="flex items-center gap-2 py-4 px-6  border mt-20 border-neutral-500 text-textColor rounded"> <Image alt="plus" src={AllImages.plus} className="text-neutral-500" />Aggiungi nuova carta</button>
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
            <div className="flex flex-col md:flex-row  justify-end items-center gap-5 my-10">
                <Link href='/'>
                    <button className="py-4 px-16 border border-red-500 text-red-500 rounded">Annulla Ordine</button>
                </Link>
                <Link href='/cart/confirm'>
                    <button className="py-4 px-16 p text-white bg-primaryColor rounded">Procedi</button>
                </Link>
            </div>
        </div>
    )
}
