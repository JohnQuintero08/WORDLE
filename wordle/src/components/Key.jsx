import "./styles/key.css";

export default function Key({ letter, onClick, status }) {
  return (
    <button className={`key ${status}`} onClick={() => onClick(letter)}>
      {letter}
    </button>
  );
}
