import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Statistics from "@/components/sections/Statistics";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Statistics />
      <CTA />
      <Footer />
    </>
  );
}