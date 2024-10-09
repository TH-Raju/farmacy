import Image from "next/image";
import { Button } from 'antd';
import Hero from "@/Components/(WithNavFooter)/Pages/Home/Hero/Hero";
import SecondHero from "@/Components/(WithNavFooter)/Pages/Home/SecondHero/SecondHero";
import WeOffer from "@/Components/(WithNavFooter)/Pages/Home/WeOffer/WeOffer";
import Delivary from "@/Components/(WithNavFooter)/Pages/Home/Delivary/Delivary";
import Feature from "@/Components/(WithNavFooter)/Pages/Home/Feature/Feature";
import Pharmasyit from "@/Components/(WithNavFooter)/Pages/Home/Pharmasyit/Pharmasyit";
export default function Home() {
  return (
  <main>
   <Hero/>
   <SecondHero/>
   <WeOffer/>
   <Delivary/>
   <Feature/>
   <Pharmasyit/>
  </main>
  );
}
