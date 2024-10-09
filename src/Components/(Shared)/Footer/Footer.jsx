import Image from "next/image";
import { AllImages } from "../../../assests/images/AllImages";



const Footer = () => {
    return (
        <div className=" bg-[#1D1D1B] py-16">
            
            <div className=" container mx-auto flex flex-col md:flex-row justify-between px-4 ">
                <div className=" mb-10">
                    <h2 className=" text-primaryColor text-2xl font-semibold mb-4 md:mb-8">Su Sanime</h2>
                    <div className=" text-white space-y-4 text-md">
                        <p className=" ">Recensioni</p>
                        <p>Chi siamo</p>
                        <p>Dicono di noi</p>
                        <p>Sanime per i farmacisti</p>
                    </div>

                </div>

                <div className=" mb-10">
                    <h2 className=" text-primaryColor text-2xl font-semibold mb-4 md:mb-8">Disponibilità servizio</h2>
                    <div className=" text-white space-y-4 text-md">
                        <p className=" ">Elenco citta</p>
                    </div>
                </div>

                <div className=" mb-10">
                    <h2 className=" text-primaryColor text-2xl font-semibold mb-4 md:mb-8">Supporto</h2>
                    <div className=" text-white space-y-4 text-md">
                        <p className=" ">FAQ</p>
                    </div>
                </div>

                <div className=" mb-10">
                    <h2 className=" text-primaryColor text-2xl font-semibold mb-4 md:mb-8">Le nostre App</h2>
                    <div className=" text-white space-y-4 text-md">
                        <p className=" ">Scarica le nostre applicazioni</p>
                    </div>
                </div>

                <div className=" ">
                    <h2 className=" text-primaryColor text-2xl font-semibold mb-4 md:mb-8">Recensioni</h2>
                    <div className=" text-white space-y-4 text-md">
                        <div className=" flex gap-1 items-center">
                            <Image className=" w-7 object-cover" src={AllImages.mainStar} height={0} width={0} alt="farmacy"  />
                            <p className=" mt-1">Trustpilot</p>
                        </div>
                        <div className=" flex gap-[2px]">
                            <Image className=" w-6 object-cover" src={AllImages.star} height={0} width={0} alt="farmacy"  />
                            <Image className=" w-6 object-cover" src={AllImages.star} height={0} width={0} alt="farmacy"  />
                            <Image className=" w-6 object-cover" src={AllImages.star} height={0} width={0} alt="farmacy"  />
                            <Image className=" w-6 object-cover" src={AllImages.star} height={0} width={0} alt="farmacy"  />
                            <Image className=" w-6 object-cover" src={AllImages.halfStar} height={0} width={0} alt="farmacy"  />
                        </div>

                    </div>

                </div>


            </div>
     
        </div>
    );
};

export default Footer;