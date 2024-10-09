'use client'
import { AllImages } from '@/assests/images/AllImages'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
export default function Category() {
    const categories = [
        {
            name: 'Rimedi e Integratori',
            subcategories: ['Dellorecchio', 'Intimo', 'Mani', 'Orale'],
        },
        {
            name: 'Alimentazione speciale',
            subcategories: ['Dellorecchio', 'Intimo', 'Mani', 'Orale'],
        },
        {
            name: 'Capelli',
            subcategories: ['Dellorecchio', 'Intimo', 'Mani', 'Orale'],
        },
        {
            name: 'Igiene',
            subcategories: ['Dellorecchio', 'Intimo', 'Mani', 'Orale'],
        },
        {
            name: 'Mamme e bimbi',
            subcategories: ['Dellorecchio', 'Intimo', 'Mani', 'Orale'],
        },
        {
            name: 'Sessualità',
            subcategories: ['Dellorecchio', 'Intimo', 'Mani', 'Orale'],
        },
        {
            name: 'Sport',
            subcategories: ['Dellorecchio', 'Intimo', 'Mani', 'Orale'],
        },
        {
            name: 'Veterinaria',
            subcategories: ['Dellorecchio', 'Intimo', 'Mani', 'Orale'],
        },
        {
            name: 'Viso',
            subcategories: ['Dellorecchio', 'Intimo', 'Mani', 'Orale'],
        },
    ];
    const data = [
        {
            id: "1",
            image: AllImages.cardimg,
            title: "Biochetasi granulato effervescente 18 bustine",
            subTitle: "AURORA Srl",
        },
        {
            id: "2",
            image: AllImages.cardimg,
            title: "Biochetasi granulato effervescente 18 bustine",
            subTitle: "AURORA Srl",
        },
        {
            id: "3",
            image: AllImages.cardimg,
            title: "Biochetasi granulato effervescente 18 bustine",
            subTitle: "AURORA Srl",
        },
        {
            id: "4",
            image: AllImages.cardimg,
            title: "Biochetasi granulato effervescente 18 bustine",
            subTitle: "AURORA Srl",
        },
        {
            id: "5",
            image: AllImages.cardimg,
            title: "Biochetasi granulato effervescente 18 bustine",
            subTitle: "AURORA Srl",
        },
        {
            id: "6",
            image: AllImages.cardimg,
            title: "Biochetasi granulato effervescente 18 bustine",
            subTitle: "AURORA Srl",
        },
        {
            id: "7",
            image: AllImages.cardimg,
            title: "Biochetasi granulato effervescente 18 bustine",
            subTitle: "AURORA Srl",
        },
        {
            id: "8",
            image: AllImages.cardimg,
            title: "Biochetasi granulato effervescente 18 bustine",
            subTitle: "AURORA Srl",
        },
    ];

    const [openCategory, setOpenCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);

    const toggleCategory = (index) => {
        if (openCategory === index) {
            setOpenCategory(null);
        } else {
            setOpenCategory(index);
        }
    };

    const handleSubcategoryClick = (subcategory) => {
        setActiveSubcategory(subcategory);
    };
    return (
        <div className='container mx-auto'>
            <div className='w-full flex flex-col md:flex-row px-2'>
                <div className='w-full md:w-[25%] h-auto bg-[#F5F5F5]'>
                    <h1 className='text-md font-bold text-center py-4 '>TUTTE LE CATEGORIE</h1>
                    <hr />

                    {categories.map((category, index) => (
                        <div key={category.name} >
                            <div
                                className={`flex justify-between items-center py-2  px-5 cursor-pointer ${openCategory === index ? 'bg-[#8bc9bc] text-white' : ''}`}
                                onClick={() => toggleCategory(index)}
                            >
                                <span className={openCategory === index ? 'text-whi font-semibold' : ''}>
                                    {category.name}
                                </span>
                                {category.subcategories.length > 0 && (
                                    <span>
                                        {openCategory === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                )}
                            </div>
                            {openCategory === index && (
                                <div className="">
                                    {category.subcategories.map((subcat) => (
                                        <li
                                            key={subcat}
                                            className={`text-sm py-2 cursor-pointer hover:bg-[#d2f3ec] text-neutral-400 hover:text-teal-600 px-5`}
                                            onClick={() => handleSubcategoryClick(subcat)}
                                        >
                                            {subcat}
                                        </li>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                </div >
                <div className='w-full md:w-[75%] '>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                        {data.map((product) => <div
                            key={product.id}
                            className="shadow px-4 md:px-8 h-96 rounded md:mx-8 my-5 hover:border-primaryColor hover:border"
                        >

                            <Image src={AllImages.cardimg} alt='hero' height={0} width={0} className='object-cover cursor-pointer' />


                            <h2 className="text-xl font-semibold mt-4 mb-5 text-gray-800">Biochetasi granulato effervescente 18 bustine</h2>
                            <hr />


                            <div className="flex justify-between items-center gap-2  mt-5 my-6">
                                <p className='text-md font-semibold text-[#8bc9bc]'>Prezzo: 12,40 €</p>
                                <Link href={`/search-pharmacy/${product.id}`}>
                                    <button className='px-4 py-2 text-[#8bc9bc] border border-[#8bc9bc] rounded'>Acquista ora</button>
                                </Link>
                            </div>
                        </div>)}


                    </div>

                </div >

            </div>
        </div >
    )
}
