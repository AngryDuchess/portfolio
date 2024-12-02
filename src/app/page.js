import Works from "../components/Works.jsx";
import About from "../components/About.jsx";
import HeroSection from "../components/Hero.jsx";
import TechStack from "../components/TechStack.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <Works />
      <About />
    </>
  );
}
