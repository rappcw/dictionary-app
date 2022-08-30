import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer>
          This project by{" "}
          <a
            href="https://moonlit-halva-46f128.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Charmaine Rapp
          </a>{" "}
          is{" "}
          <a
            href="https://github.com/rappcw/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
          <br />
          <a href="https://www.pexels.com" target="_blank" rel="noreferrer">
            Photos provided by Pexels
          </a>
        </footer>
      </div>
    </div>
  );
}
export default App;
