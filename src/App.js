import logo from "./logo.svg";
import "./App.css";

function App() {
  let arr = [];
  function changeColor(event) {
    event.target.style.backgroundColor = "blue";
  }
  for (let i = 0; i < 2074; i++) {
    arr.push(
      <div
        className="small"
        onClick={(event) => {
          changeColor(event);
        }}
      ></div>
    );
  }
  return (
    <>
      <nav className="header">
        <ul>
          <li>BFS</li>
          <li>DFS</li>
          <li>Djikstra's Algorithm</li>
        </ul>
      </nav>
      <div className="outer">
        <div className="inner">{arr}</div>
      </div>
    </>
  );
}

export default App;
