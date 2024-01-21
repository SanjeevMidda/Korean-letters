import "./index.css";
import Vowels from "./Components/Vowels";
import Consonants from "./Components/Consonants";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(null);

  return (
    <div className="App">
      <header>
        <h4
          onClick={() => {
            setClicked("vowels");
          }}
        >
          V
        </h4>
        <h4
          onClick={() => {
            setClicked("consonants");
          }}
        >
          C
        </h4>
      </header>

      <h1 className="title">
        {clicked === "vowels" ? "VOWELS" : "CONSONANTS"}
      </h1>

      <div className="content">
        {clicked === "vowels" && <Vowels />}
        {clicked === "consonants" && <Consonants />}
      </div>
    </div>
  );
}

export default App;
