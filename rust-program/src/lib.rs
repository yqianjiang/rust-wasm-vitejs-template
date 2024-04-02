mod utils;
use wasm_bindgen::prelude::*;
use sudoku::Sudoku;

#[wasm_bindgen]
pub struct WasmSudoku {
    inner: Sudoku,
}

#[wasm_bindgen]
impl WasmSudoku {
    pub fn new() -> Self {
        let sudoku = Sudoku::generate();
        WasmSudoku {
            inner: sudoku,
        }
    }

    pub fn get_board(&self) -> String {
        self.inner.to_string()
    }

    pub fn set_board(&mut self, board: &str) {
        self.inner = Sudoku::from_str_line(board).unwrap();
    }

    // 获取数独解决方案
    pub fn solve(&self) -> Option<String> {
        match self.inner.solution() {
            Some(solution) => Some(solution.to_string()),
            None => None,
        }
    }

    // 这里是一个示例方法，用于生成数独谜题
    pub fn generate_puzzle(&mut self, difficulty: u8) {
        // 这里应该是生成数独谜题的逻辑
        // 根据难度参数difficulty生成谜题
        // 具体实现取决于您的数独生成算法
    }

    // 这里是一个示例方法，用于检查数独是否完成
    pub fn is_solved(&self) -> bool {
        // 这里应该是检查数独完成的逻辑
        // 遍历grid数组，检查每一格是否符合数独规则
        // 如果所有格子都符合规则，则返回true，否则返回false
        false
    }
}
