import Row from "./Row";
import "./styles/board.css";

export default function Board({ maxRows, attempts, wordLength }) {
  return (
    <div className="board">
      {Array.from({ length: maxRows }).map((_, i) => (
        <Row
          key={i}
          letters={attempts[i]?.word || ""}
          statuses={attempts[i]?.statuses || []}
          wordLength={wordLength}
        />
      ))}
    </div>
  );
}
