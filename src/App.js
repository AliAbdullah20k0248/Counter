import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
