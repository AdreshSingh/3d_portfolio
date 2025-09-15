import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      {/* Not worked in more than 2 companies */}
      {/* <LogoSection /> */}
      <FeatureCards />
      <ExperienceSection />
      <TechStack/>
      {/* currently don't have so */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}
