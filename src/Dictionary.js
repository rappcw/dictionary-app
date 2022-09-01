import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Videos from "./Videos";

import "./Dictionary.css";
//https://api.dictionaryapi.dev/api/v2/entries/en/sunset

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [video, setVideo] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function handlePexelsVideoResponse(response) {
    setVideo(response.data.videos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = `563492ad6f91700001000001c139007f82324b22919c35292a67d971`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    let pexelsApiVideoUrl = `https://api.pexels.com/videos/search?query=${keyword}&per_page=1`;

    axios
      .get(pexelsApiVideoUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsVideoResponse);
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>Dictionary</h1>
        <form onSubmit={search}>
          <div className="form-row  align-items-center">
            <div className="col-auto">
              <input
                className="form-control mb-2"
                type="search"
                autoFocus={true}
                placeholder="Search for a word"
                onChange={handleKeywordChange}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>

      <Results results={results} />
      <Photos photos={photos} />
      <Videos videos={video} />
    </div>
  );
}
