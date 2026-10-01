import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Team from "@/components/sections/Team";
import Network from "@/components/sections/Network";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <Team />
      <Network />
      <FAQ />
      <Contact />
    </main>
  );
}