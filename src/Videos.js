import React from "react";

export default function Videos(props) {
  if (props.videos) {
    return (
      <div className="Videos">
        {props.videos.map(function (video, index) {
          return (
            <div key={index}>
              <video
                controls
                width="580"
                height="300"
                poster={video.image}
                muted
              >
                <source src={video.video_files[0].link} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
