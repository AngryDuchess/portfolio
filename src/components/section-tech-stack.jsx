"use client";
import { useEffect, useState } from "react";
import { fetchProjects } from "../lib/api";
import Image from "next/image";

export const revalidate = 30;

export default function TechStack() {
  const [logos, setLogo] = useState([]);
  useEffect(() => {
    const getStack = async () => {
      try{

        const data = await fetchProjects("/api/tech-stack?populate=*");
        setLogo(data.logos);
      } catch (error) {
        console.error("Failed to fetch tech stack")
      }
    };

    getStack();
  }, []);

  return (
    <section
      id="hero"
      className="text-portfolioTextLight dark:text-portfolioDarkTextLight w-screen py-16 xl:py-20 lg:px-0 px-4"
    >
      <div className="flex gap-8 flex-col max-w-4xl mx-auto justify-center items-center">
        <p className="text-3xl xl:text-[40px] font-bold text-portfolioTextDark dark:text-portfolioDarkTextDark">
          Tech Stack
        </p>
        <p>
          The tools and technologies i build with, streamline my workflow, and
          bring my designs to life
        </p>
        <div className="flex gap-2 flex-wrap w-full items-center lg:items-start justify-center">
          {logos && logos.length > 0 ?(

            logos.map((logo) => (
              <div
              key={logo.id}
              className="flex items-center rounded-3xl w-24 h-24 hover:bg-portfolioHover hover:bg-opacity-5 justify-center"
              >
              <Image
                src={`${logo?.url}`}
                className="w-16 h-16 rounded-xl"
                alt={`${logo?.alternativeText}`}
                width={150}
                height={150}
                />
            </div>
              ))
            ):(
              <p>Loading...</p>
            )}
        </div>
      </div>
    </section>
  );
}
