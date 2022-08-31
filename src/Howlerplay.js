import React from "react";
import { Howl } from "howler";

export default function Howlerplay(props) {
  if (props.howlerprop !== "") {
    function play(event) {
      let sound = new Howl({
        src: [props.howlerprop],
      });
      sound.play();
    }
    return (
      <div>
        <i className="fa-solid fa-circle-play" onClick={play} />
      </div>
    );
  } else {
    return null;
  }
}
