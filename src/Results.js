import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Results(props) {
  console.log(props);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word} </h2>
        <span className="phonetic">{props.results.phonetic}</span>
        <Phonetics phonetics={props.results.phonetics} />
        <Synonyms synonyms={props.results.meanings[0].synonyms} />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
