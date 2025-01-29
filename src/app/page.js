import AllProjects from "../components/section-all-projects.jsx";
import About from "../components/section-about-me.jsx";
import HeroSection from "../components/section-hero.jsx";
import TechStack from "../components/section-tech-stack.jsx";
import { getHomeData } from "@/lib/api.js";

export const revalidate = 30;

export default async function Home() {
  const pageData = await getHomeData('/api/home-page');

  const designProjects = pageData?.data.allProjects.design_projects || [];
  const developmentProjects = pageData?.data.allProjects.development_projects || [];
  console.log(designProjects)

  return (
    <>
      <HeroSection />
      <TechStack TechStackSection={pageData?.data.techStack} />
      <AllProjects
        designProjects={designProjects}
        developmentProjects={developmentProjects}
      />
      <About AboutSection={pageData?.data.aboutSection.aboutMe.content} />
    </>
  );
}