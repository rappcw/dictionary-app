import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <strong className="Pink">Click a photo to see a larger version</strong>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-6" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt="images"
                    className="img-fluid mt-2 mb-2"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
