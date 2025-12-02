import { useState } from "react";
import Keyboard from "./components/Keyboard.jsx";
import Board from "./components/Board.jsx";
import { getStatuses } from "./utils/getStatuses";
import { updateKeyboardStatuses } from "./utils/updateKeyboardStatuses";

export default function App() {
  const [attempts, setAttempts] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [keyStatuses, setKeyStatuses] = useState({});
  const [isWin, setIsWin] = useState(false);
  const [isLose, setIsLose] = useState(false);

  const wordLength = 5;
  const maxRows = 6;

  const SOLUTION = "APPLE";

  const handleKeyPress = (key) => {
    if (isWin || isLose) return;

    if (key === "ENTER") {
      console.log("Enviar palabra:", currentGuess);
      handleSubmit();
      return;
    }

    if (key === "DELETE") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    // Letras normales
    if (currentGuess.length < wordLength) {
      setCurrentGuess((prev) => prev + key.toLowerCase());
    }
  };

  const handleSubmit = () => {
    // No enviar si no hay 5 letras
    if (currentGuess.length !== wordLength) return;

    // Generar colores
    const statuses = getStatuses(
      currentGuess,
      SOLUTION.toLowerCase(),
      wordLength
    );

    if (currentGuess.toLowerCase() === SOLUTION.toLowerCase()) {
      setIsWin(true);
    }

    // Guardar intento → BLOQUEA LA FILA
    setAttempts((prev) => {
      const newAttempts = [...prev, { word: currentGuess, statuses }];

      // VERIFICAR DERROTA SOLO SI NO GANÓ
      if (!isWin && newAttempts.length === 6) {
        setIsLose(true);
      }

      return newAttempts;
    });
    // Actualizar colores del teclado
    setKeyStatuses((prev) =>
      updateKeyboardStatuses(prev, currentGuess, statuses)
    );

    // Pasar a la siguiente fila limpiando currentGuess
    setCurrentGuess("");
  };

  return (
    <div className="container">
      {isWin && <h1>"Ganaste"</h1>}
      {isLose && <h2>😢 Perdiste. La palabra era: {SOLUTION}</h2>}
      <Board
        maxRows={maxRows}
        attempts={[...attempts, { word: currentGuess, statuses: [] }]}
        wordLength={wordLength}
      />

      <Keyboard onKeyPress={handleKeyPress} keyStatuses={keyStatuses} />
    </div>
  );
}
