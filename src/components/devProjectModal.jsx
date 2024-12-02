import React, { useEffect, useState } from "react";
import { CloseCircle } from "iconsax-react";
import BlockRendererClient from "../lib/blockrenderclient";
import PropTypes from "prop-types";
import Image from "next/image";

export default function DevProjectModal({
  isOpen,
  onClose,
  projectTitle,
  projectSubtitle,
  liveProject,
  projectDescription,
  projectTags,
  thumbnailGifUrl,
}) {
  const [isImage, setIsImage] = useState(true);
  useEffect(() => {
    setIsImage(checkIsImage(thumbnailGifUrl));
  }, [thumbnailGifUrl]);

  const checkIsImage = (url) => {
    return /\.(jpeg|jpg|gif|png|svg)$/i.test(url);
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50 px-4">
      <div className="relative bg-portfolioWhite dark:bg-portfolioDarkBackground max-w-7xl h-3/4 lg:h-4/5 w-full rounded-3xl  overflow-hidden">
        <CloseCircle
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 icon-hover"
          size="24"
          color="#656560"
        />
        <div className="grid grid-cols-1 xl:grid-cols-2 h-full max-h-full pt-14 pb-4 lg:px-4 ">
          <div className="h-full">
            {isImage ? (
              <Image
                src={thumbnailGifUrl}
                width={2000}
                height={2000}
                className="  w-full h-full object-cover lg:rounded-2xl"
                alt=""
              />
            ) : (
              <video
                className="object-cover w-full h-full lg:rounded-2xl"
                playsInline
                autoPlay
                muted
                loop
              >
                <source src={thumbnailGifUrl} type="video/mp4"></source>
              </video>
            )}
          </div>
          <div className="pb-4 pt-8  px-3 xl:px-8 text-left text-portfolioTextLight dark:text-portfolioDarkTextLight overflow-y-scroll">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-3">
                <p className="font-bold text-left text-portfolioTextDark dark:text-portfolioDarkTextDark">
                  {projectTitle.toUpperCase()}
                </p>
                <BlockRendererClient content={projectDescription} />
              </div>

              <div className="flex items-start">
                <a
                  href={`${liveProject}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-second-btn leading-7 bg-portfolioTextDark text-shadow border-b-2 border-black hover:border-none button-secondary-shadow text-[#EBEBEB] px-3 py-1 rounded-full text-sm italic min-h-10"
                >
                  Launch Project
                </a>
              </div>

              <div className="flex gap-3 flex-wrap">
                {projectTags.map((tag, index) => (
                  <p
                    key={index}
                    className="py-1 px-2 border border-gray-300 dark:border-portfolioDarkStroke text-portfolioTextDark dark:text-portfolioDarkTextDark rounded-md text-center text-[12px]"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DevProjectModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  projectTags: PropTypes.arrayOf(PropTypes.string),
  thumbnailGifUrl: PropTypes.string,
};
