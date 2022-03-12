import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo
            img-fluid"
            alt="logo"
          />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Naim Abbasi</footer>
      </div>
    </div>
  );
}
