import React from "react";

export default function Photos(props) {
  console.log(props);
  if (props.photos) {
    return <section className="Photos">Hello from photos</section>;
  } else {
    return null;
  }
}
