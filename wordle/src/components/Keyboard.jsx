import Key from "./Key";
import "./styles/Keyboard.css";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export default function Keyboard({ onKeyPress, keyStatuses = {} }) {
  return (
    <div className="keyboard">
      {ROWS.map((row, i) => (
        <div key={i} className="keyboard-row">
          {row.map((letter) => (
            <Key
              key={letter}
              letter={letter}
              status={keyStatuses[letter] || ""}
              onClick={onKeyPress}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
