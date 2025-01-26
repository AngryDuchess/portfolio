"use client";
import { useState } from "react";
import DesignCard from "./card-design";
import DevelopmentCard from "./card-development";

export const revalidate = 30;

export default function AllProjects({ designProjects, developmentProjects }) {
  const [isActive, setActive] = useState("Design");
  
  const handleActive = (button) => {
    setActive(button);
  };

  return (
    <section
      id="work"
      className="text-portfolioTextLight dark:text-portfolioDarkTextLight w-screen py-16 xl:py-20 lg:px-0 px-4"
    >
      <div className="flex gap-8 flex-col max-w-4xl mx-auto justify-center items-center">
        <p className="text-3xl xl:text-[40px] font-bold text-portfolioTextDark dark:text-portfolioDarkTextDark">
          Work
        </p>
        <p>A showcase of my proudest creations</p>
        <div className="text-portfolioTextLight flex w-full max-w-[270px] bg-gray-300 dark:bg-zinc-800 justify-between p-[1px] rounded-full">
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
          {isActive === "Design" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-8 w-full">
              {designProjects.map((project, index) => (
                <DesignCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
          {isActive === "Development" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-8 w-full">
              {developmentProjects.map((project,index) => (
                <DevelopmentCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </>
      </div>
    </section>
  );
}