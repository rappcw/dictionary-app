import React from "react";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div className="Phonetics">
      <i class="fa-solid fa-circle-play" />
      {props.phonetics.map(function (phonetic, index) {
        return <span key={index}>{phonetic.audio}</span>;
      })}
    </div>
  );
}
