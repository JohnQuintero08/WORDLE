import Tile from "./Tile";
import "./styles/row.css";

export default function Row({ letters = "", statuses = [], wordLength }) {
  const cells = letters.padEnd(wordLength).split("");

  return (
    <div className="row">
      {cells.map((char, i) => (
        <Tile key={i} letter={char} status={statuses[i]} />
      ))}
    </div>
  );
}
