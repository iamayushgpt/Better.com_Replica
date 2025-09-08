import FeatureSection from "./components/Home/FeatureSection";
import HeroSection from "./components/Home/HeroSection";
import MortgageQuestionsArea from "./components/Home/MortgageQuestionsArea";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <>
    <Header/>
      <HeroSection />
      <FeatureSection/>
      <MortgageQuestionsArea/>
      <Footer/>
    </>
  );
}
