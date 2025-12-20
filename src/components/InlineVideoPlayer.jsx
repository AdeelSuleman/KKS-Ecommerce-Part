import { memo, useState, useRef, useEffect } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import Thumbnail from "../assets/Home/VideoThumbnail.png";
import Video from "../assets/Home/KKSVideo.mp4";

const InlineVideoPlayer = () => {
  const [play, setPlay] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.preload = "metadata";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePlay = async () => {
    if (!videoRef.current) return;
    try {
      await videoRef.current.play();
      setPlay(true);
    } catch (err) {
      console.error("Video play failed:", err);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden cursor-pointer aspect-video bg-gray-200"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => !play && handlePlay()}
    >
      <video
        ref={videoRef}
        src={Video}
        poster={Thumbnail}
        onLoadedData={() => setVideoReady(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          play && videoReady ? "opacity-100" : "opacity-0"
        }`}
        playsInline
        muted
        preload="none"
      />

      <img
        src={Thumbnail}
        fetchpriority="high" // Hero area mein hai isliye priority high
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          play && videoReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        alt="Video Thumbnail"
      />

      {/* Play/Pause Buttons - Simplified for performance */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/10">
        {!play ? (
          <button onClick={handlePlay} aria-label="Play video" className="focus:outline-none cursor-pointer">
            <FaCirclePlay className="text-Heading1 text-textWhite drop-shadow-lg" />
          </button>
        ) : (
          <button 
            onClick={(e) => { e.stopPropagation(); videoRef.current.pause(); setPlay(false); }} 
            className={`focus:outline-none transition-opacity cursor-pointer ${hovered ? "opacity-100" : "opacity-0"}`}
            aria-label="Pause video"
          >
            <FaPauseCircle className="text-Heading1 text-textWhite drop-shadow-lg" />
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(InlineVideoPlayer);