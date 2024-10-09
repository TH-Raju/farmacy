
import Image from "next/image";
import { AllImages } from "../../../../../assests/images/AllImages";

export default function SecondHero() {

    const data = [
        {
            id: "1",
            title: "Scegli la Farmacia",
            image: AllImages.icon,
            description: "Scegli la farmacia presso cui effettuare il tuo ordine"
        },
        {
            id: "2",
            title: "Cerca I prodotti ",
            image: AllImages.icon2,
            description: "scansiona la ricetta o cerca i prodotti per verificare la disponibilità"
        },
        {
            id: "3",
            title: "Ricevi la consegna",
            image: AllImages.icon3,
            description: "prenota ritira o scegli la consengna"
        },
    ]

    return (
        <div className="container mx-auto my-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-start px-3 md:px-0">
                {
                    data.map((item) => <div key={item.id} className="bg-[#f8f8f8] px-5 md:px-20 py-14 gap-24 h-72">
                        <div>
                            <Image src={item.image} alt="icon" height={0} width={0} className=" object-cover mb-2" />
                            <h1 className="text-2xl font-semibold text-textColor mb-1">{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>)
                }
            </div>




        </div>
    )
}
