import React from "react";

export default function SkeletonVideo() {
  return (
    <div className="w-full h-[300px] lg:h-full animate-pulse">
  <div className="w-full h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 lg:rounded-2xl"></div>
</div>
  );
}