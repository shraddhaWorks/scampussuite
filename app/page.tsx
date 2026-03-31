import Hero from "@/comphonents/home/hero";
import Image from "next/image";
import CampusNeeds from "@/comphonents/home/campusNeeds";

import Clients from "@/comphonents/home/clients";
import FAQ from "@/comphonents/home/faq";
import FinalCTA from "@/comphonents/home/finalCTA";

export default function Home() {
  return (
   <>
   <Hero/>
   <CampusNeeds/>
   <Clients />
   <FAQ />
   <FinalCTA />
   </>
  );
}
