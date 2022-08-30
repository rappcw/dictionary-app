import React from "react";
import Howlerplay from "./Howlerplay";

export default function Phonetics(props) {
  if (props.phonetics.length > 0) {
    if (props.phonetics[0].audio !== "") {
      return (
        <div className="Phonetics">
          <Howlerplay howlerprop={props.phonetics[0].audio} />
        </div>
      );
    }
    if (props.phonetics[1]) {
      return (
        <div className="Phonetics">
          <Howlerplay howlerprop={props.phonetics[1].audio} />
        </div>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
}
