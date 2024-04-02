//@ts-ignore
import init, { WasmSudoku } from 'rust-program';
// Don't worry if vscode told you can't find my-crate
// It's because you're using a local crate
// after yarn dev, wasm-pack plugin will install my-crate for you

init().then(() => {
  console.log('init wasm-pack');
  const wasmSudoku = WasmSudoku.new();
  console.log(wasmSudoku.get_board());
  // You can use wasmSudoku here
});
