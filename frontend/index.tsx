import { h, render } from "preact";

function App() {
  return <h1>Cordian</h1>;
}

render(<App />, document.querySelector("#root") as Element);
