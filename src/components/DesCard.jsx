import React, { useState } from "react";
import DesProjectModal from "./desProjectModal";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Image from "next/image";

export default function DesCard({ project }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isModalOpen]);

  const {
    title,
    description,
    id,
    tags,
    thumbnailUrl,
    thumbnailGifUrl,
    case_study,
    subTitle,
    liveProject,
  } = project;
  return (
    <>
      <div className="flex flex-col gap-1 hover:text-portfolioPrimary">
        <div
          key={id}
          className="bg-gray-600 max-w-sm w-full h-64 rounded-2xl overflow-hidden "
          onClick={openModal}
        >
          {thumbnailUrl ? (
            <Image
              className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
              src={project.thumbnailUrl}
              width={2000}
              height={2000}
              alt=""
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              No Thumbnail Available
            </div>
          )}
        </div>
        <p className="text-sm text-nowrap overflow-hidden overflow-ellipsis">
          {project?.title}
        </p>
      </div>

      <DesProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectTitle={project.title}
        projectDescription={project.description}
        projectTags={project.tags?.projectTags}
        liveProject={liveProject}
        thumbnailGifUrl={project.thumbnailGifUrl}
        case_study={case_study}
      />
    </>
  );
}

DesCard.propTypes = {
  project: PropTypes.object.isRequired,
};
