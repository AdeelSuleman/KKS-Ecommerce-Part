import React, { useState, useRef } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import Thumbnail from "../assets/Home/VideoThumbnail.png";
import Video from "../assets/Home/Video.mp4";

const InlineVideoPlayer = () => {
  const [play, setPlay] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      // ensure we try to play the already-mounted video element
      videoRef.current.play().catch(() => {});
    }
    setPlay(true);
  };

  const handlePause = (e) => {
    e?.stopPropagation();
    if (videoRef.current) videoRef.current.pause();
    setPlay(false);
  };

  const onLoadedData = () => {
    // video has enough data to play a frame
    setVideoReady(true);
  };

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        // clicking the area when thumbnail is visible should start playback
        if (!play) handlePlay();
      }}
    >
      {/* Video is always mounted to avoid re-mount jank; we fade thumbnail out */}
      <video
        ref={videoRef}
        src={Video}
        poster={Thumbnail}
        onLoadedData={onLoadedData}
        alt="video"
        className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${play && videoReady ? "opacity-100" : "opacity-0"}`}
        muted
        playsInline
        preload="auto"
      />

      {/* Thumbnail overlay (fades out when playing) */}
      <img
        src={Thumbnail}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${play && videoReady ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        alt="thumbnail"
      />

      {/* Dark overlay (subtle) */}
      <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${play ? "bg-opacity-0" : "bg-opacity-20"}`}></div>

      {/* Center controls */}
      <div className="absolute inset-0 flex items-center justify-center">
        {!play ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePlay();
            }}
            className="p-2 bg-transparent border-0 cursor-pointer"
            aria-label="Play video"
          >
            <FaCirclePlay className="text-Heading1 text-textWhite" />
          </button>
        ) : (
          <button
            onClick={(e) => handlePause(e)}
            className={`p-2 bg-transparent border-0 cursor-pointer transition-opacity duration-150 ${hovered ? "opacity-100" : "opacity-0"}`}
            aria-label="Pause video"
          >
            <FaPauseCircle className="text-Heading1 text-textWhite" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InlineVideoPlayer;
