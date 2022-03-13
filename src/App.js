import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="react" />
        </main>
        <footer className="App-footer">
          <small>
            <a href="https://github.com/abbasi-naim/react-dictionary-app">
              Coded by Naim Abbasi
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
