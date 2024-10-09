import { AllImages } from "@/assests/images/AllImages"
import Image from "next/image"

export default function Feature() {

    const data = [
        {
            id: "1",
            title: "Ricevi la consegna",
            image: AllImages.icon3,
            description: "Entro 1 ora o quando ti è più comodo"
        },
        {
            id: "2",
            title: "Terapia",
            image: AllImages.feature2,
            description: "Monitora e gestisci la tua terapia"
        },
        {
            id: "3",
            title: "Servizi",
            image: AllImages.feature3,
            description: "Prenota gratis i servizi delle Farmacie"
        },
        {
            id: "4 ",
            title: "Armadietto dei farmaci",
            image: AllImages.feature4,
            description: "Ti avvisa quando i farmaci che hai In casa stanno per scadere o terminare"
        },
    ]

    return (
        <div className="container mx-auto my-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start items-center gap-10 md:gap-0 px-3 md:px-0">
                {
                    data.map((item) => <div key={item.id} className=" md:h-72">
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
