'use client'
import { AllImages } from '@/assests/images/AllImages';
import GoBackButton from '@/Components/(Shared)/GoBackButton/GoBackButton'
import { ConfigProvider, Popover, Steps } from 'antd'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function DoneOrder() {
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
    return (
        <div className="container mx-auto">
            <GoBackButton
                text={"Fatto!"} />
            <div className="ant-steps flex flex-wrap justify-center items-center w-full text-left sm:flex-col sm:items-start sm:justify-start mx-2 md:mx-0 my-5">
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
                                title: 'Scegli la Consegna',

                            },
                            {
                                title: 'I tuoi dati ',

                            },
                            {
                                title: 'Metodo di pagamento',

                            },
                            {
                                title: 'Conferma ',

                            },
                            {
                                title: 'Fatto!',

                            },

                        ]}
                    />
                </ConfigProvider>
                <hr />
            </div>
            <div className="flex flex-col justify-center items-center mx-2 md:mx-0  py-16 bg-[#f5f5f5]">
                <Image src={AllImages.orderDelivary} alt="done" className="object-cover"></Image>
                <div className="px-40 text-center">
                    <h1 className="text-2xl font-bold text-textColor my-4">Richiesta effettuata con successo!</h1>
                    <p className="text-xs text-textColor my-2">N. preodine 2024533</p>
                    <p>Grazie per aver scelto Sanime.Riceverai una mail di conferma con i dettagli della tua richiesta.
                        Se non ti è arrivata, controlla la cartella spam</p>

                    <Link href='/'>
                        <button className="my-10 py-4 px-16 border border-neutral-500 text-textColor rounded">Home</button>
                    </Link>
                </div>


            </div>


        </div>
    )
}
