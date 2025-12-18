import { memo, useState, useRef, useEffect } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import Thumbnail from "../assets/Home/VideoThumbnail.png";
import Video from "../assets/Home/Video.mp4";

const InlineVideoPlayer = () => {
  const [play, setPlay] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // ✅ IntersectionObserver — video tab load hoga jab viewport me aaye
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.preload = "metadata";
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
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

  const handlePause = (e) => {
    e?.stopPropagation();
    videoRef.current?.pause();
    setPlay(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => !play && handlePlay()}
    >
      {/* Video (mounted but not network-heavy) */}
      <video
        ref={videoRef}
        src={Video}
        poster={Thumbnail}
        onLoadedData={() => setVideoReady(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
          play && videoReady ? "opacity-100" : "opacity-0"
        }`}
        playsInline
        preload="none"   // 🔥 BIG WIN
      />

      {/* Thumbnail */}
      <img
        src={Thumbnail}
        loading="lazy"        // 🔥 SAFE
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
          play && videoReady
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
        alt="thumbnail"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
          play ? "bg-opacity-0" : "bg-opacity-20"
        }`}
      />

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-center">
        {!play ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePlay();
            }}
            className="p-2 bg-transparent border-0 cursor-pointer focus:ring-0 focus:outline-none"
            aria-label="Play video"
          >
            <FaCirclePlay className="text-Heading1 text-textWhite" />
          </button>
        ) : (
          <button
            onClick={(e) => handlePause(e)}
            className={`p-2 bg-transparent border-0 cursor-pointer transition-opacity duration-150 focus:ring-0 focus:outline-none ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Pause video"
          >
            <FaPauseCircle className="text-Heading1 text-textWhite" />
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(InlineVideoPlayer);
