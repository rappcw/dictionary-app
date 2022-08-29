import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <strong className="Pink">Similar: </strong>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}, </span>;
        })}
        <span>{props.synonyms[props.synonyms.length - 1]}</span>
      </div>
    );
  } else {
    return null;
  }
}
