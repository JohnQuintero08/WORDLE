import { useState } from "react";
import Keyboard from "./components/Keyboard.jsx";
import Board from "./components/Board.jsx";

export default function App() {
  const [attempts, setAttempts] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const maxLength = 5;
  const wordLength = 6;

  const handleKeyPress = (key) => {
    if (key === "ENTER") {
      console.log("Enviar palabra:", currentGuess);
      return;
    }

    if (key === "DELETE") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    // Letras normales
    if (currentGuess.length < maxLength) {
      setCurrentGuess((prev) => prev + key.toLowerCase());
    }
  };

  return (
    <div className="container">
      <h1>Wordle papaaaa</h1>
      <Board
        attempts={[...attempts, { word: currentGuess, statuses: [] }]}
        wordLength={wordLength}
      />

      <Keyboard onKeyPress={handleKeyPress} keyStatuses={{}} />
    </div>
  );
}
