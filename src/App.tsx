import Header from "./layout/Header";
import "./styles/app.scss";
import { useState } from "react";

function App() {
  const letra: number[] = [1, 2, 3];

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
