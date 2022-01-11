import logo from "./logo.svg";
import "./App.css";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 id="title">Wordle 2</h2>
        <p id="authors">by Sean and Adam</p>
      </header>
      <Game />
    </div>
  );
}

export default App;
