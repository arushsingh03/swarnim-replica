"use client";

import { useState, useEffect } from "react";

const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!videoError ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
        >
          <source src="/videos/deskvideo.mp4" type="video/mp4" />
          <source src="videos/deskvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4"></div>

      <div className="absolute bottom-6 right-0 z-20 bg-black bg-opacity-70 text-white px-4 py-1">
        <p className="text-sm md:text-base font-abt-roman">
          Swarnim - A project by Tathastu
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
