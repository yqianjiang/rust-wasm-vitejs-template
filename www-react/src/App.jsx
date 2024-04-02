import { useEffect, useRef, useState } from "react";
import "./App.css";
import init, { WasmSudoku } from "rust-program";

function App() {
  const [sudokuBoard, setSudokuBoard] = useState(
    "5....91679..6..2....7.....3.....89...8..3..5...92.....6.....7....4..1..91324....5"
  );
  const sudoku = useRef(null);
  useEffect(() => {
    init().then(() => {
      if (sudoku.current) {
        return;
      }
      const wasmSudoku = WasmSudoku.new();
      setSudokuBoard(wasmSudoku.get_board());
      sudoku.current = wasmSudoku;
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku Solver</h1>
        <div>
          <input
            type="text"
            value={sudokuBoard}
            onChange={(e) => setSudokuBoard(e.target.value)}
          />
          <button
            onClick={() => {
              if (sudoku.current) {
                sudoku.current.set_board(sudokuBoard);
                const solution = sudoku.current.solve();
                setSudokuBoard(solution);
              }
            }}
          >
            Solve
          </button>
        </div>
        <div>
          <p>{sudokuBoard}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
