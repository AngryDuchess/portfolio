"use client"
import { useState, useEffect } from "react";
import SkeletonVideo from "../skeletal-loader-video";

const Video = ({ thumbnailGifUrl, thumbnailUrl, isOpen }) => {
  const [isVideoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVideoLoaded(true);
    }
  }, [isOpen]);

  return (
    <div className="h-full">
      {!isVideoLoaded && (
        <div className="w-full h-full flex items-center justify-center">
          <SkeletonVideo />
        </div>
      )}
      {thumbnailGifUrl && isVideoLoaded && (
        <video
          src={thumbnailGifUrl}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover lg:rounded-2xl"
          poster={thumbnailUrl} 
          
        />
      )}
    </div>
  );
};

export {Video}
