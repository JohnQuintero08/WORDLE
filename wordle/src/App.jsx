import { useState } from "react";
import Keyboard from "./components/Keyboard.jsx";
import Board from "./components/Board.jsx";

export default function App() {
  const [pressed, setPressed] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const maxLength = 5;

  const handleKeyPress = (letter) => {
    if (currentGuess.length >= maxLength) return;

    setCurrentGuess((prev) => prev + letter.toLowerCase());
    setPressed(letter);
  };

  return (
    <div className="container">
      <h1>Wordle papaaaa</h1>
      <p>Última tecla: {pressed}</p>
      <Board attempts={[...attempts, { word: currentGuess, statuses: [] }]} />

      <Keyboard onKeyPress={handleKeyPress} keyStatuses={{}} />
    </div>
  );
}
