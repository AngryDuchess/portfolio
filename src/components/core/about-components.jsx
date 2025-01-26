import Image from "next/image";
import { ArrowLeft2, ArrowRight2, Refresh } from "iconsax-react";
import SkeletalLoader from "../skeletal-loader";


const MediaDisplay = ({ src, isImage, loading, priority }) => {
    if (loading) {
      return (
        <div className="w-full h-72">
          <SkeletalLoader />
        </div>
      );
    }

    return isImage ? (
      <Image
        src={src}
        className="object-cover w-full h-full"
        alt="About me"
        width={2000}
        height={2000}
        priority={priority}
      />
    ) : (
      <video
        key={src}
        className="object-cover w-full h-auto"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  };
  
  const NavigationButtons = ({ onNext, onPrev, onStartOver, currentIndex, totalStories }) => {
    return (
      <div className="flex gap-4 flex-row-reverse items-end">
        {currentIndex === totalStories - 1 ? (
          <button
          aria-label="Replay story"
            className="flex items-center gap-2 leading-7 bg-portfolioTextDark text-shadow border-b-2 border-black hover:border-none button-secondary-shadow text-[#EBEBEB] px-3 py-1 rounded-full text-sm italic min-h-10"
            onClick={onStartOver}
          >
            <Refresh size={14} color="#ffffff" />
            Start over
          </button>
        ) : (
          <button
          aria-label="Next story"
            className="px-2 py-2 bg-portfolioTextDark rounded-full text-shadow border-black hover:border-none button-secondary-shadow hover:bg-[#313131]"
            onClick={onNext}
          >
            <ArrowRight2 size={24} color="#ffffff" />
          </button>
        )}
        {currentIndex > 0 && (
          <button
          aria-label="Prvevious story"
            className="px-2 py-2 bg-portfolioTextLight hover:bg-portfolioTextDark rounded-full"
            onClick={onPrev}
          >
            <ArrowLeft2 size={24} color="#ffffff" />
          </button>
        )}
      </div>
    );
  };

  export { MediaDisplay, NavigationButtons };