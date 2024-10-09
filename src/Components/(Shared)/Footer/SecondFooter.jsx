import { AllImages } from "@/assests/images/AllImages";
import Image from "next/image";

export default function SecondFooter() {
    return (
        <div className=" bg-[#3d3d3c]">
            <hr />
            <div className="container mx-auto py-5 text-white">
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
                    <div className="flex flex-row just items-center gap-2">
                        <p>Seguici</p>
                        <div className="flex gap-2">
                            <Image src={AllImages.insta} alt="fb" className="object-cover" />
                            <Image src={AllImages.whatsApp} alt="fb" className="object-cover" />
                            <Image src={AllImages.fb} alt="fb" className="object-cover" />

                        </div>

                    </div>
                    <div>
                        <p>Copyright Sanime © 2024 </p>
                    </div>
                    <div>
                        <p>Politica sulla riservatezza</p>
                    </div>
                    <div>
                        <p>Termini & Condizioni</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

