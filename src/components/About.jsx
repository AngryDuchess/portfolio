"use client";
import { useState, useEffect } from "react";
import { fetchProjects } from "../lib/api";
import ImageLoader from "./loader";
import { ArrowLeft2, ArrowRight2, Refresh } from "iconsax-react";
import Image from "next/image";

export default function About() {
  const [currentStory, setCurrentStory] = useState(0);
  const [fetchedAbout, setFetchedAbout] = useState([]);
  const [isImage, setIsImage] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAbout = async () => {
      setLoading(true);
      const fetchedAboutData = await fetchProjects("/api/about");
      const stories = fetchedAboutData.story.content;
      setFetchedAbout(stories);
      setLoading(false);
    };

    getAbout();
  }, []);

  useEffect(() => {
    if (fetchedAbout.length > 0 && fetchedAbout[currentStory]) {
      setIsImage(checkIsImage(fetchedAbout[currentStory].image));
    }
  }, [fetchedAbout, currentStory]);

  const handleNextStory = () => {
    setCurrentStory((prevStory) => (prevStory + 1) % fetchedAbout.length);
  };

  const handlePrevStory = () => {
    setCurrentStory((prevStory) => (prevStory > 0 ? prevStory - 1 : prevStory));
  };

  const checkIsImage = (url) => {
    return /\.(jpeg|jpg|png|gif)$/i.test(url);
  };

  if (fetchedAbout.length === 0 || !fetchedAbout[currentStory]) {
    return <p>no stories</p>;
  }

  const handleStartOver = () => {
    setCurrentStory(0);
  };

  return (
    <section
      id="about"
      className="text-portfolioTextDark dark:text-portfolioDarkTextDark w-screen pt-16 pb-32 xl:py-20 px-4 dark:portfolioDarkTextDark"
    >
      <div className="flex gap-8 flex-col max-w-3xl mx-auto justify-center items-center">
        <p className="text-3xl xl:text-[40px] font-bold">About Me 😉</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="border border-gray-400 dark:border-portfolioDarkStroke sticker-shadow rounded-3xl bg-white w-full h-72  overflow-hidden flex justify-center items-center -rotate-3">
            {loading ? (
              <div className="w-full h-72">
                <ImageLoader />
              </div>
            ) : (
              <>
                {isImage ? (
                  <Image
                    src={fetchedAbout[currentStory].image}
                    className="object-cover w-full h-full"
                    alt="About me"
                    width={2000}
                    height={2000}
                  />
                ) : (
                  <video
                    key={fetchedAbout[currentStory].image}
                    className="object-cover w-full h-auto"
                    playsInline
                    autoPlay
                    muted
                    loop
                  >
                    <source
                      src={fetchedAbout[currentStory].image}
                      type="video/mp4"
                    ></source>
                  </video>
                )}
              </>
            )}
          </div>
          <div className=" text-left w-full mb-4 leading-8 flex flex-col justify-between ">
            <p
              className={`${
                currentStory === 0
                  ? "inline-paragraph dark:text-portfolioDarkTextDark"
                  : ""
              }`}
            >
              {fetchedAbout[currentStory].text}
            </p>
            <div className="flex gap-4 flex-row-reverse items-end">
              {currentStory === fetchedAbout.length - 1 ? (
                <button
                  className="flex items-center gap-2 leading-7 bg-portfolioTextDark text-shadow border-b-2 border-black hover:border-none button-secondary-shadow text-[#EBEBEB] px-3 py-1 rounded-full text-sm italic min-h-10"
                  onClick={handleStartOver}
                >
                  <Refresh size={14} />
                  Start over
                </button>
              ) : (
                <button
                  className="px-2 py-2 bg-portfolioTextDark rounded-full text-shadow border-black hover:border-none button-secondary-shadow  hover:bg-[#313131]"
                  onClick={handleNextStory}
                >
                  <ArrowRight2 size={24} color="#ffffff" />
                </button>
              )}
              {currentStory > 0 && (
                <button
                  className="px-2 py-2 bg-portfolioTextLight hover:bg-portfolioTextDark rounded-full"
                  onClick={handlePrevStory}
                >
                  <ArrowLeft2 size={24} color="#ffffff" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
