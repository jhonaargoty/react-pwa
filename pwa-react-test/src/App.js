import React, { useState } from "react";

import "./App.css";

function App() {
  const [luces, setLuces] = useState("OFF");

  const test = () => {
    if (luces === "OFF") {
      setLuces("ON");
    } else {
      setLuces("OFF");
    }
  };

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <header className="App-header-x">Test PWA</header>
      <br />
      <br />
      <button onClick={() => test()}>Luces</button>
      <br />
      <br />
      {luces}
    </div>
  );
}

export default App;
