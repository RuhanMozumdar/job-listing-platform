// src/components/VideoPlayer.js
import React from "react";

const VideoPlayer = () => {
  return (
    <div>
      <div className="items-center  section-center sm:w-full">
        
        <video width="800" height="400" controls autoPlay loop>
          <source src="/video_web.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
