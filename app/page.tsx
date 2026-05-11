import AboutVideoSection from "@/components/AboutVideoSection";
import CommercialSection from "@/components/CommercialSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ResultsSection from "@/components/ResultsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ScrollProgressLeaf from "@/components/ScrollProgressLeaf";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgressLeaf />
      <main>
        <Hero />
        <ServicesSection />
        <CommercialSection />
        <ResultsSection />
        <AboutVideoSection />
        <ReviewsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
