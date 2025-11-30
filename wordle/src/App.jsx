import { useState } from "react";
import Keyboard from "./components/Keyboard.jsx";
import Board from "./components/Board.jsx";
import { getStatuses } from "./utils/getStatuses";
import { updateKeyboardStatuses } from "./utils/updateKeyboardStatuses";

export default function App() {
  const [attempts, setAttempts] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [keyStatuses, setKeyStatuses] = useState({});
  const wordLength = 5;
  const maxRows = 6;

  const SOLUTION = "APPLE";

  const handleKeyPress = (key) => {
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

    // 1. Generar colores
    const statuses = getStatuses(
      currentGuess,
      SOLUTION.toLowerCase(),
      wordLength
    );

    // 2. Guardar intento → BLOQUEA LA FILA
    setAttempts((prev) => [...prev, { word: currentGuess, statuses }]);

    // 3. Actualizar colores del teclado
    setKeyStatuses((prev) =>
      updateKeyboardStatuses(prev, currentGuess, statuses)
    );

    // 4. Pasar a la siguiente fila limpiando currentGuess
    setCurrentGuess("");
  };

  return (
    <div className="container">
      <h1>Wordle papaaaa</h1>
      <Board
        maxRows={maxRows}
        attempts={[...attempts, { word: currentGuess, statuses: [] }]}
        wordLength={wordLength}
      />

      <Keyboard onKeyPress={handleKeyPress} keyStatuses={{}} />
    </div>
  );
}
