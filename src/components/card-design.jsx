import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useModal } from "./hooks/useModal";
import Modal from "./modal-project";

export default function DesignCard({ project, index }) {
  const { title, description, id, tags, thumbnailUrl, thumbnailGifUrl, subTitle, liveProject, case_study } = project;
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="flex flex-col gap-3 hover:text-portfolioPrimary">
        <div
          role="button"
          tabIndex={0}
          aria-label={`View details for ${title}`}
          onClick={openModal}
          onKeyDown={(e) => e.key === "Enter" && openModal()}
          className="bg-gray-600 max-w-sm min-h-[300px] lg:min-h-0 w-full h-64 rounded-2xl overflow-hidden"
        >
          {thumbnailUrl ? (
            <Image
              className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
              src={thumbnailUrl}
              width={2000}
              height={2000}
              alt={title}
              priority={index < 3}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              No Thumbnail Available
            </div>
          )}
        </div>
        <p className="text-sm text-nowrap overflow-hidden overflow-ellipsis">
          {title}
        </p>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectTitle={title}
        projectDescription={description}
        projectTags={tags?.projectTags}
        liveProject={liveProject}
        thumbnailGifUrl={thumbnailGifUrl}
        caseStudy={case_study}
      />
    </>
  );
}

DesignCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.array.isRequired,
    tags: PropTypes.shape({
      projectTags: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    thumbnailUrl: PropTypes.string,
    thumbnailGifUrl: PropTypes.string,
    subTitle: PropTypes.string,
    liveProject: PropTypes.string,
    case_study: PropTypes.object,
  }).isRequired,
  index: PropTypes.number.isRequired, 

};