
import Image from "next/image";
import { AllImages } from "../../../../../assests/images/AllImages";

export default function Pharmasyit() {
    return (
        <div className="container mx-auto my-32">
            <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-5 px-3 md:px-0'>
                <div className='w-full md:w-[50%] text-textColor my-24 pr-6'>
                    <h2 className='bg-[#cae8e2] py-1 rounded-2xl text-[#00af4f] 
                    md:w-[25%] uppercase mb-2 text-md text-center'>Sei un Farmacista?</h2>

                    <p className="text-textColor text-3xl font-bold">Sei un Farmacista?</p>
                    <p className="text-textColor mt-4 mb-10">Diventa partner Sanime e offri i nostri servizi ai tuoi clienti</p>
                    <button className='md:w-48 px-5 py-2 md:py-5 bg-primaryColor rounded text-white text-md'>Cerca Farmacia</button>
                </div>
                <div className='w-full md:w-[50%]'>
                    <Image src={AllImages.pharmacy} alt='hero' height={0} width={0} className='object-cover' />
                </div>
            </div>
        </div>
    )
}
