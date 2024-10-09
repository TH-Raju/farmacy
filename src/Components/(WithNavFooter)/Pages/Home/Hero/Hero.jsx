'use client'

import { AllImages } from '@/assests/images/AllImages'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';

export default function Hero() {
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);

    // Handle input field changes
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    // Handle search button click
    const handleSearch = () => {
        if (searchText.trim() === '') {
            alert('Please enter a search term');
            return;
        }

        // Simulate fetching data from an API based on searchText
        // fetch(`/api/search-pharmacy?query=${searchText}`)
        //     .then((response) => response.json())
        //     .then((data) => setResults(data))
        //     .catch((error) => console.error('Error fetching data:', error));
    };



    return (
        <div className='container px-2 md:px-0 mx-auto my-14'>
            <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-5  px-3 md:px-0'>
                <div className='w-full md:w-[50%] text-textColor'>
                    <h1 className='text-xl md:text-2xl lg:text-6xl  font-bold mb-6'>La farmacia sempre a portata di mano</h1>
                    <p className='md:text-xl font-semibold mb-10'>Scansiona, ordina, ritira o ricevi i tuoi farmaci</p>
                    <p className='md:text-xl  font-semibold mb-11'>Inserisci indirizzo o nome della farmacia</p>
                    <div className='border-b border-b-[#a2a29a] flex justify-between items-center gap-2'>
                        {/* Search Input Field */}
                        <Image src={AllImages.loaction} alt='location' height={0} width={0} className='object-cover' />

                        <input
                            type="text"
                            value={searchText}
                            onChange={handleInputChange}
                            placeholder=""
                            className="w-full px-4 py-2 border-none focus:outline-none"
                        />

                        <Link href="/search-pharmacy">
                            <button onClick={handleSearch} className='w-40 md:w-48 px-5 py-2 md:py-5 bg-primaryColor rounded text-white text-md'>
                                Cerca Farmacia
                            </button>
                        </Link>
                    </div>



                </div>
                <div className='w-full md:w-[50%]'>
                    <Image src={AllImages.hero1} alt='hero' height={0} width={0} className='object-cover' />
                </div>
            </div>
            <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-12 px-3 md:px-0'>
                <div className='w-full md:w-[50%] mt-24 '>
                    <Image src={AllImages.hero2} alt='hero' height={0} width={0} className='h-full w-full object-cover' />
                </div>
                < div className='w-full md:w-[50%] text-textColor mt-11 mb-5'>
                    <h2 className='bg-SeconderyColor text-center py-1 rounded-2xl text-[#F29191] md:w-[25%] mb-5 md:mb-0'>COME FUNZIONA</h2>
                    <h1 className='text-xl md:text-2xl lg:text-4xl  font-bold mb-6'>Cerchi un Farmaco o un articolo in farmacia?</h1>
                    <p className='md:text-xl font-semibold mt-4 mb-9'>Evita attese da oggi con Sanime puoi controllare la disponibilità di un prodotto presso la tua farmacia, puoi prenotarlo e ritirarlo oppure puoi riceverlo a domicilio.
                        Anche Farmaci con Ricetta</p>

                    <button className='md:w-48 px-5 py-2  md:py-5 bg-primaryColor rounded text-white text-md'>Cerca Farmacia</button>
                </div>
            </div>
        </div>

    )
}
