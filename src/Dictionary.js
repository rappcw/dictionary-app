import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
//https://api.dictionaryapi.dev/api/v2/entries/en/sunset

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();
    //documentation here: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>Dictionary</h1>
        <form onSubmit={search}>
          <div class="form-row  align-items-center">
            <div class="col-auto">
              <input
                className="form-control mb-2"
                type="search"
                autoFocus={true}
                placeholder="Search for a word"
                onChange={handleKeywordChange}
              />
            </div>
            <div class="col-auto">
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
            </div>
          </div>
        </form>
        <Results results={results} />
      </section>
    </div>
  );
}
