import "./App.css";

function App() {
  let arr = [];
  let first = 0;
  let start = -1,
    end = -1;
  function changeColor(event) {
    if (first === 0) {
      event.target.style.backgroundColor = "blue";
      start = event.target.id;
    } else if (first === 1) {
      event.target.style.backgroundColor = "red";
      end = event.target.id;
    }
    console.log(start, " and end ", end);
    first++;
  }
  function startGame() {
    let j = 0;
    for (let i = start; i <= end; i++) {
      setTimeout(() => {
        document.getElementById(i).style.backgroundColor = "purple";
      }, 1500 + j);
      j++;
    }
  }
  for (let i = 0; i < 2074; i++) {
    arr.push(
      <div
        className="small"
        id={i}
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
          <li>Djikstra's</li>
          <li
            id="reset"
            onClick={() => {
              window.location.reload();
            }}
          >
            RESET
          </li>
          <li id="run" onClick={startGame}>
            RUN
          </li>
        </ul>
      </nav>
      <div className="outer">
        <div className="inner">{arr}</div>
      </div>
    </>
  );
}

export default App;
