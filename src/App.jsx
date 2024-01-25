import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //UseState
  const [colourIndex, setColourIndex] = useState(0);
  const [colours, setColours] = useState(null);

  useEffect(() => {
    console.log(sessionStorage);
    setColours(JSON.parse(sessionStorage.coloursTable));

    // handleStorageChange function
    const handleStorageChange = () => {
      console.log("sessionStorage has changed")
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

  const handleCycleColours = () => {
    // Increment colourIndex
    const newColourIndex = (colourIndex + 1) % colours.length;
    console.log(colours[newColourIndex])
    setColourIndex(newColourIndex);

    // Update currentColour in sessionStorage
    sessionStorage.setItem("currentColour", colours[newColourIndex]);
  };

  return (
    <div className="App">
      <div cursor="pointer" onClick={handleCycleColours}><p>cycle colours</p></div>
    </div>
  );
}

export default App;
