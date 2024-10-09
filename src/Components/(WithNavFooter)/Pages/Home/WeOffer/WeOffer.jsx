/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */

import Image from "next/image";
import { AllImages } from "../../../../../assests/images/AllImages";

export default function WeOffer() {
    const data = [
        {
            id: "1",
            image: AllImages.WeOffer1,
            description: "Scansiona le tue ricette o inserisci i codici per prenotare i tuoi farmaci o quelli di un tuo familiare"
        },
        {
            id: "2",
            image: AllImages.WeOffer2,
            description: "Verifica la disponibiltà immediata dell'ordine presso la farmacia scelta.Scegli se prenotare e ritirare o ricevere i farmaci a domicilio"
        },
        {
            id: "3",
            image: AllImages.WeOffer3,
            description: "Non pagherai mai alcun supplemento sui tuoi farmaci, l'unico costo accessorio è il servizio di consegna"
        },

    ]


    return (
        <div className="container mx-auto">
            <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-5 px-3 md:px-0'>
                <div className='w-full md:w-[50%] text-textColor'>
                    <h2 className='bg-[#cae8e2] py-1 rounded-2xl text-[#00af4f] 
                    md:w-[25%] uppercase mb-2 text-md text-center'>Offriamo</h2>
                    <p className="text-textColor text-3xl font-bold">I nostri servizi</p>
                    {data.map((item) => <div key={item.id} className="flex flex-col justify-start items-start my-5">
                        <div className="flex justify-between items-center gap-6">
                            <Image src={AllImages.WeOffer1} />
                            <p className="text-xl font-semibold text-textColor">Non pagherai mai alcun supplemento sui tuoi farmaci, l'unico costo accessorio è il servizio di consegna</p>
                        </div>
                    </div>)}
                </div>
                <div className='w-full md:w-[50%]'>
                    <Image src={AllImages.WeOffer} alt='hero' height={0} width={0} className='object-cover' />
                </div>
            </div>
        </div>
    )
}
