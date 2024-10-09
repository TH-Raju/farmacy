'use client';


import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { PiWarningCircleDuotone } from "react-icons/pi";
import { AllImages } from "../../../../assests/images/AllImages";
export default function ProductDetailsPage() {
  const { id } = useParams();
  console.log(id);

  const data = [
    {
      id: "1",
      image: AllImages.singleProduct,
      title: "Descrizione",
      prise: "12,00",
      descrip1:
        "- Iperacidità - Difficoltà digestive - Insufficienza epatica - Stati chetonemici - Nausea gravidica. Granulato effervescente acido malico; sorbitolo; acido tartarico; sodio bicarbonato; polivinilpirrolidone; aroma arancio; saccarina; sodio edetato; propile gallato; saccarosio; fruttosio; glucosio. Compresse effervescenti acido tartarico; aspartame; aroma arancio; saccarosio; polivinilpirrolidone insolubile; polivinilpirrolidone; talco; silice precipitata; sodio bicarbonato.",
      descrip2:
        "La fonte dei dati utilizzati e pubblicati è: Banche Dati Farmadati Italia®. Farmadati Italia garantisce il massimo impegno affinché i dati siano precisi e costantemente aggiornati. I dati sono forniti a scopo didattico, non per consulenza medica; non possono in nessun caso sostituirsi alla visita medica. Farmadati Italia non si assume la responsabilità dell’utilizzo dei dati. È doveroso contattare il proprio medico e/o uno specialista per la prescrizione e assunzione di farmaci, parafarmaci e dispositivi medici.",
      disclaimer:
        "Il presente disclaimer si applica ai contenuti del sito Sanime.com (da ora in poi “sito”) ed è valido per tutti gli utenti utilizzatori e visitatori del Sito. Il Sito è proprietà di 4K S.R.L. Le informazioni contenute in questo sito hanno esclusivamente scopo informativo, possono essere modificate o rimosse in qualsiasi momento, e comunque in nessun caso possono costituire la formulazione di una diagnosi o la prescrizione di un trattamento. Le informazioni contenute nel sito non intendono e non devono in alcun modo sostituire il rapporto diretto medico-paziente o la visita specialistica. Si raccomanda di chiedere sempre il parere del proprio medico curante e/o di specialisti riguardo qualsiasi indicazione riportata. Se si hanno dubbi o quesiti sull’uso di un medicinale è necessario consultare il proprio medico.",
      importantLeaflet: {
        title: "Foglietto Illustrativo",
        description: "Con questo prodotto accumuli cashback",
      },
    },
  ];
  const products = [
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

  return (
    <div className="container mx-auto my-8 px-4">
      {data.map((item) => (
        <div key={item.id} className="w-full">

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 ">
            <Image src={item.image} alt="Product" width={625} height={488} className="object-cover" />
            <div className="bg-[#f5f5f5] px-9 py-7">
              <h1 className="text-xl text-textColor font-bold">Amuchina gel mani flacone 250 ml</h1>
              <p className="text-neutral-500 my-6">AURORA Srl</p>
              <hr />
              <p className="text-primaryColor my-3">Prezzo:{item.prise} €</p>
              <hr />
              <p className="mt-4 mb-40">Amuchina Gel Mani Flacone 250 ml è un detergente in formulazione gel, indicato per pulire le mani in assenza di acqua</p>
              <Link href={`/cart/product-list`}>
                <div className="flex justify-center items-center">
                  <button className="py-4 w-56  bg-primaryColor text-white rounded">Aggiungi al carrello</button>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[85%] mt-12">
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.descrip1}</p>
            <div className="bg-[#f5f5f5]  p-4 rounded-lg my-7 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{item.importantLeaflet.title}</h3>
                <p className="flex justify-start items-center gap-2">€ |  {item.importantLeaflet.description} <PiWarningCircleDuotone className="text-red-300" /></p>
              </div>

              <div>
                <button className="flex justify-center items-center gap-2 text-primaryColor">
                  Mostra di più <FaArrowRight className="w-5 h-5 text-primaryColor" />
                </button>
              </div>

            </div>
            <p className="text-gray-700 mb-4">{item.descrip2}</p>
            <p className="text-sm text-gray-500 px-4 mt-4 border-l-8 border-red-400"><span className="text-red-400">Desclimer :</span>{item.disclaimer}</p>
          </div>

        </div>

      ))}
      <div className="my-8">
        <h1 className="text-2xl font-bold text-textColor pb-5 border-b border-neutral-400">In genere sono scelti insieme</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {products.map((product) => <div
            key={product.id}
            className="shadow px-4 md:px-8 h-96 rounded md:mx-8 my-5 hover:border-primaryColor hover:border"
          >

            <Image src={AllImages.cardimg} alt='hero' height={0} width={0} className='object-cover cursor-pointer' />

            <h2 className="text-xl font-semibold mt-4 mb-5 text-gray-800">Biochetasi granulato effervescente 18 bustine</h2>
            <hr />


            <div className="flex justify-between items-center  mt-5 my-6">
              <p className='text-md font-semibold text-[#8bc9bc]'>Prezzo: 12,40 €</p>
              <Link href={`/search-pharmacy/${product.id}`}>
                <button className='px-4 py-2 text-[#8bc9bc] border border-[#8bc9bc]'>Acquista ora</button>
              </Link>
            </div>
          </div>)}


        </div>
      </div>
    </div>
  );
}
