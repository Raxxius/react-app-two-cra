import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //UseState
  const [colourIndex, setColourIndex] = useState(0);
  const [colours, setColours] = useState(null);

  useEffect(() => {
    console.log(sessionStorage);
    setColours(sessionStorage.coloursTable);

    // handleStorageChange function
    const handleStorageChange = () => {
      setColours(sessionStorage.coloursTable);
    };

    // Event listener
    window.addEventListener("storage", handleStorageChange);
    console.log("event listener engaged");

    // Cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="App">
      <button>cycle colours</button>
    </div>
  );
}

export default App;
