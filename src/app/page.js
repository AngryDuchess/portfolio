import AllProjects from "../components/section-all-projects.jsx";
import About from "../components/section-about-me.jsx";
import HeroSection from "../components/section-hero.jsx";
import TechStack from "../components/section-tech-stack.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <AllProjects />
      <About />
    </>
  );
}
