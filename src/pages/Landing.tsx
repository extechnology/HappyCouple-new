import HeroSection from "@/components/home/Hero";
import About from "@/components/home/About";
import HowWorks from "@/components/home/HowWorks";
import Approch from "@/components/home/Approch";
import Coresolutions from "@/components/treatmentplan/Coresolutions";
import FirstStep from "@/components/home/FirstStep";
import WhyUs from "@/components/home/WhyUs";
import Patients from "@/components/home/Patients";
import FrequentlyAsked from "@/components/home/FrequentlyAsked";
import Connection from "@/components/home/Connection ";
import { BlurFade } from "@/components/magicui/blur-fade";
import WhatssAppIcon from "@/components/common/WhatssAppIcon";


export default function Landing() {

  return (


    <main className="scroll-smooth w-full h-auto">


      <section id="hero">
        <HeroSection />
      </section>


      <section id="about">
        <BlurFade delay={0.25} blur="12px" inView>
          <About />
        </BlurFade>
      </section>


      <section id="how-it-works">
        <BlurFade delay={0.25 * 2} blur="12px" inView>
          <HowWorks />
        </BlurFade>
      </section>


      <section id="approach">
        <BlurFade delay={0.25 * 2} blur="12px" inView>
          <Approch />
        </BlurFade>
      </section>


      <section id="core-solutions">
        <BlurFade delay={0.25 * 2} blur="12px" inView>
          <Coresolutions />
        </BlurFade>
      </section>


      <section id="first-step">
        <BlurFade delay={0.25 * 2} blur="12px" inView>
          <FirstStep />
        </BlurFade>
      </section>


      <section id="why-us">
        <BlurFade delay={0.25 * 2} blur="12px" inView>
          <WhyUs />
        </BlurFade>
      </section>


      <section id="patients">
        <BlurFade delay={0.25 * 2} blur="12px" inView>
          <Patients />
        </BlurFade>
      </section>


      <section id="frequently-asked">
        <BlurFade delay={0.25 * 2} blur="12px" inView>
          <FrequentlyAsked />
        </BlurFade>
      </section>


      <section id="connection">
        <BlurFade delay={0.25 * 2} blur="12px" inView>
          <Connection />
        </BlurFade>
      </section>



      <section id="whatsapp-icon">
        <WhatssAppIcon />
      </section>


    </main>
  );
}
