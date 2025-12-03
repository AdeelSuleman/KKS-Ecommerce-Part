import React, { useState } from "react";
import Thumbnail from "../assets/Home/VideoThumbnail.png";
import Video from "../assets/Home/Video.mp4";

const InlineVideoPlayer = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden cursor-pointer">
      {/* If NOT playing → show thumbnail */}
      {!play && (
        <div onClick={() => setPlay(true)}>
          <img
            src={Thumbnail}
            className="w-full h-full object-cover"
            alt="thumbnail"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                className="w-10 h-10"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* If playing → show video */}
      {play && (
        <video
          src={Video}
          alt="video"
          className="w-full h-full"
          autoPlay
          //   controls
          muted
          playsInline
        />
      )}
    </div>
  );
};

export default InlineVideoPlayer;
