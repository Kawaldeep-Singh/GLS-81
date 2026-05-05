import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KeyFeatures from "@/components/KeyFeatures";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import SiteMapSection from "@/components/SiteMapSection";
import MasterPlanSection from "@/components/MasterPlanSection";
import PriceList from "@/components/PriceList";
import PaymentPlan from "@/components/PaymentPlan";
import LocationBenefits from "@/components/LocationBenefits";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <KeyFeatures />
        <Amenities />
        <Gallery />
        <SiteMapSection />
        <MasterPlanSection />
        <PriceList />
        <PaymentPlan />
        <LocationBenefits />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
