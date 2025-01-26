"use client";
import { useState, useMemo } from "react";
import { MediaDisplay, NavigationButtons } from "./core/about-components";

export const revalidate = 30;

export default function About({ AboutSection }) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const currentStory = AboutSection?.[currentStoryIndex] || null;
  const isImage = useMemo(() => {
    return currentStory?.image?.match(/\.(jpeg|jpg|png|gif)$/i);
  }, [currentStory]);
  const handleNextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % AboutSection.length);
  };

  const handlePrevStory = () => {
    setCurrentStoryIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleStartOver = () => {
    setCurrentStoryIndex(0);
  };

  if (!AboutSection || AboutSection.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-portfolioTextDark dark:text-portfolioDarkTextDark">
          No stories available at the moment. Please check back later!
        </p>
      </div>
    );
  }

  return (
    <section
      id="about"
      className="text-portfolioTextLight dark:text-portfolioDarkTextLight w-screen pt-16 pb-32 xl:py-20 lg:px-0 px-4 dark:portfolioDarkTextDark"
    >
      <div className="flex gap-8 flex-col max-w-3xl mx-auto justify-center items-center">
        <p className="text-3xl xl:text-[40px] font-bold text-portfolioTextDark dark:text-portfolioDarkTextDark">
          About Me 😉
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="border border-gray-400 dark:border-portfolioDarkStroke sticker-shadow rounded-3xl bg-white w-full h-72 overflow-hidden flex justify-center items-center -rotate-3">
            <MediaDisplay
              src={currentStory.image}
              isImage={isImage}
              loading={loading}
              priority={currentStoryIndex === 0}
            />
          </div>
          <div className="text-left w-full mb-4 leading-8 flex flex-col justify-between">
            <p className="inline-paragraph dark:text-portfolioDarkTextLight">
              {currentStory.text}
            </p>
            <NavigationButtons
              onNext={handleNextStory}
              onPrev={handlePrevStory}
              onStartOver={handleStartOver}
              currentIndex={currentStoryIndex}
              totalStories={AboutSection.length}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
