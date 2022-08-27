import React from "react";
import { Howl } from "howler";

export default function Howlerplay(props) {
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
}
