import "./styles/key.css";

export default function Key({ letter, onClick, status, wide }) {
  return (
    <button
      className={`key ${status} ${wide ? "wide" : ""}`}
      onClick={() => onClick(letter)}
    >
      {letter}
    </button>
  );
}
