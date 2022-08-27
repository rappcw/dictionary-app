import React from "react";
import Howlerplay from "./Howlerplay";

export default function Phonetics(props) {
  if (props.phonetics[0].audio !== "") {
    return (
      <div className="Phonetics">
        <Howlerplay howlerprop={props.phonetics[0].audio} />
      </div>
    );
  } else {
    return (
      <div className="Phonetics">
        <Howlerplay howlerprop={props.phonetics[1].audio} />
      </div>
    );
  }
}
