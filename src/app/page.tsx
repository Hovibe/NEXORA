import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { About } from "@/components/sections/About";
import { Values } from "@/components/sections/Values";
import { WhyNexora } from "@/components/sections/WhyNexora";
import { ClientTypes } from "@/components/sections/ClientTypes";
import { TechEcosystem } from "@/components/sections/TechEcosystem";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <Process />
      <FeaturedWork />
      <About />
      <Values />
      <WhyNexora />
      <ClientTypes />
      <TechEcosystem />
      <CallToAction />
    </>
  );
}
