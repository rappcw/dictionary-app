import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Videos from "./Videos";
import "./Dictionary.css";
//https://api.dictionaryapi.dev/api/v2/entries/en/sunset

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [video, setVideo] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function handlePexelsVideoResponse(response) {
    setVideo(response.data.videos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = `563492ad6f917000010000010e74931d277d4b78ae5d7e3863ead17f`;
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Dictionary</h1>
          <form onSubmit={handleSubmit}>
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
        <div className="Background">
          <img
            src={photos[0].src.portrait}
            alt="images"
            className="img-fluid"
          />
        </div>
        <Results results={results} />
        <Photos photos={photos} />
        <Videos videos={video} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
