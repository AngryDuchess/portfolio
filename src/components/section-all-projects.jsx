"use client";
import { useState, useEffect } from "react";
import DesignCard from "./card-design";
import DevelopmentCard from "./card-development";
import { fetchProjects } from "../lib/api";
import SkeletalLoader from "./skeletal-loader";

export const revalidate = 30
export const dynamicParams = true

export default function AllProjects() {
  const [designprojects, setDesignProjects] = useState([]);
  const [devprojects, setDevProjects] = useState([]);
  const [isActive, setActive] = useState("Design");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      const fetchedDesignProjects = await fetchProjects(
        "/api/design-projects?populate=*	"
      );
      const fetchedDevProjects = await fetchProjects(
        "/api/development-projects?populate=*"
      );
      if (fetchedDesignProjects) {
        setDesignProjects(fetchedDesignProjects.data);
      }
      if (fetchedDevProjects) {
        setDevProjects(fetchedDevProjects.data);
      }
      setLoading(false);
    };
    getProjects();
  }, []);

  const handleActive = (button) => {
    setActive(button);
  };

  return (
    <section
      id="work"
      className="text-portfolioTextLight dark:text-portfolioDarkTextLight w-screen py-16 xl:py-20 lg:px-0 px-4"
    >
      <div className="flex gap-8 flex-col max-w-4xl mx-auto justify-center items-center">
        <p className="text-3xl xl:text-[40px] font-bold text-portfolioTextDark dark:text-portfolioDarkTextDark">Work</p>
        <p>A showcase of my proudest creations</p>
        <div className="text-portfolioTextLight  flex w-full max-w-[270px] bg-gray-300 dark:bg-zinc-800 justify-between p-[1px] rounded-full">
          <button
            type="button"
            className={`py-2 px-6 transition duration-300 ease-in-out rounded-full ${
              isActive === "Design"
                ? "bg-portfolioWhite dark:bg-portfolioDarkBackground buttonGroup-shadow text-portfolioTextDark dark:text-portfolioDarkTextDark font-semibold"
                : ""
            }`}
            onClick={() => handleActive("Design")}
          >
            Design
          </button>

          <button
            type="button"
            className={`py-2 px-6 transition duration-300 ease-in-out rounded-full ${
              isActive === "Development"
                ? "bg-portfolioWhite dark:bg-portfolioDarkBackground buttonGroup-shadow text-portfolioTextDark dark:text-portfolioDarkTextDark font-semibold"
                : ""
            }`}
            onClick={() => handleActive("Development")}
          >
            Development
          </button>
        </div>
        <>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {Array.from({ length: 4 }).map((_, index) => (
                <SkeletalLoader key={index} />
              ))}
            </div>
          ) : (
            <>
              {isActive === "Design" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-8 w-full">
                  {designprojects.map((project) => (
                    <DesignCard key={project.id} project={project} />
                  ))}
                </div>
              )}
              {isActive === "Development" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-8 w-full">
                  {devprojects.map((project) => (
                    <DevelopmentCard key={project.id} project={project} />
                  ))}
                </div>
              )}
            </>
          )}
        </>
      </div>
    </section>
  );
}
