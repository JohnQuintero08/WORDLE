import "./styles/tile.css";

export default function Tile({ letter = "", status = "" }) {
  return <div className={`tile ${status}`}>{letter.toUpperCase()}</div>;
}
