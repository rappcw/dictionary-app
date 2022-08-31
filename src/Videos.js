import React from "react";

export default function Videos(props) {
  console.log(props.videos);
  if (props.videos) {
    return (
      <div className="Videos">
        {props.videos.map(function (video, index) {
          return (
            <div key={index}>
              <a href={video.url} target="_blank" rel="noreferrer">
                <img
                  src={video.image}
                  alt="images"
                  className="img-fluid mt-2 mb-2"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
