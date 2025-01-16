import React, { useEffect, useRef } from "react";

const VideoEarth = ({ Videocss, VideoPath }) => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Programmatically play the video
    }
  }, []);

  return (
    <div className={Videocss}>
      <video
        loop={true}
        autoPlay={true}
        muted={true}
        className="w-[800px]"
        ref={videoRef}
      >
        <source
          src={VideoPath}
          type="video/mp4" />
        {/* Error  */}
        <h3 className="text-red-600">Your browser doesn't support the video.</h3>
      </video>
    </div>
  )
}

export default VideoEarth
