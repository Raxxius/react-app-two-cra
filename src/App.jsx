import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //UseState
  const [colourIndex, setColourIndex] = useState(0);
  const [colours, setColours] = useState(null)

  useEffect(() => {
    console.log(sessionStorage)

  }, [])

  return (
    <div className="App">
      <button></button>
    </div>
  );
}

export default App;
