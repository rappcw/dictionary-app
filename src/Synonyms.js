import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 3) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym} </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
