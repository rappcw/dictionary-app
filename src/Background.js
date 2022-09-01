import React from "react";

export default function Background(props) {
  console.log(props);
  if (props.background) {
    <div className="Background">
      <img src={props.background} alt="images" className="img-fluid" />
    </div>;
  } else {
    return null;
  }
}
