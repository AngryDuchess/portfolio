import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { CloseCircle } from "iconsax-react";
import BlockRendererClient from "@/lib/blockrenderclient";
import { Video } from "./core/video-component";

export default function Modal({
  isOpen,
  onClose,
  projectTitle,
  projectDescription,
  projectTags,
  liveProject,
  thumbnailGifUrl,
  caseStudy,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-50 z-50 px-4">
      <div className="relative bg-portfolioWhite dark:bg-portfolioDarkBackground max-w-[90rem] h-3/4 lg:h-auto w-full rounded-3xl  overflow-hidden">
        <CloseCircle
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 icon-hover"
          size="24"
          color="#656560"
        />
        <div className="grid grid-cols-1 xl:grid-cols-3 h-full max-h-full pt-14 pb-4 lg:px-4 ">
        <div className="col-span-2">

          <Video thumbnailGifUrl={thumbnailGifUrl} thumbnailUrl={thumbnailGifUrl} isOpen={isOpen} />
          </div>
          <div className="pb-4 pt-8 px-3 xl:px-8 text-left text-portfolioTextLight dark:text-portfolioDarkTextLight overflow-y-scroll">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-3">
                <p className="font-bold text-left text-portfolioTextDark dark:text-portfolioDarkTextDark">
                  {projectTitle.toUpperCase()}
                </p>
                <BlockRendererClient content={projectDescription} />
              </div>

              <div className="flex flex-wrap gap-2">
                {caseStudy && Object.keys(caseStudy).length > 0 ? (
                  <Link
                    href={`/case-study/${caseStudy.slug}?id=${caseStudy.documentId}&color=${caseStudy.role}`}
                    className="inline-first-btn leading-7 bg-portfolioTextDark text-shadow border-b-2 border-black hover:border-none button-secondary-shadow text-[#EBEBEB] px-3 py-1 rounded-full text-sm italic min-h-10"
                  >
                    Case Study
                  </Link>
                ) : (
                  caseStudy !== undefined && (
                    <span className="w-full p-2 bg-red-100 text-[#FF6335] rounded-lg text-[12px]">
                      <em className="inline-para text-[#FF6335]">
                        Welp! You got me..
                      </em>
                      <em> ..A case study is coming soon. Stay tuned</em>
                    </span>
                  )
                )}
                {liveProject && (
                  <Link
                    href={liveProject}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-second-btn leading-7 bg-portfolioTextDark text-shadow border-b-2 border-black hover:border-none button-secondary-shadow text-[#EBEBEB] px-3 py-1 rounded-full text-sm italic min-h-10"
                  >
                    Launch Project
                  </Link>
                )}
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

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.array.isRequired,
  projectTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  liveProject: PropTypes.string,
  thumbnailGifUrl: PropTypes.string,
  caseStudy: PropTypes.object
};
