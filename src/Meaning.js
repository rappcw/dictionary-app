import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">
              <strong>Definition:</strong> {definition.definition}
            </div>
            <Example example={definition.example} />

            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
