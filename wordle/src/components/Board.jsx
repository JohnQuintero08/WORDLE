import Row from "./Row";
import "./styles/board.css";

export default function Board({ attempts }) {
  const maxRows = 6;

  return (
    <div className="board">
      {Array.from({ length: maxRows }).map((_, i) => (
        <Row
          key={i}
          letters={attempts[i]?.word || ""}
          statuses={attempts[i]?.statuses || []}
        />
      ))}
    </div>
  );
}
