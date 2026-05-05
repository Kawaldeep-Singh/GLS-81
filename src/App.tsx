import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KeyFeatures from "@/components/KeyFeatures";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import PriceList from "@/components/PriceList";
import PaymentPlan from "@/components/PaymentPlan";
import LocationBenefits from "@/components/LocationBenefits";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <KeyFeatures />
        <Amenities />
        <Gallery />
        <PriceList />
        <PaymentPlan />
        <LocationBenefits />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
