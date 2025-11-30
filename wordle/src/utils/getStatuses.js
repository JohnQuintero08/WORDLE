export function getStatuses(guess, solution, wordLength) {
  const result = Array(wordLength).fill("absent");
  const solutionLetters = solution.split("");

  // Primero correct
  guess.split("").forEach((ch, i) => {
    if (ch === solutionLetters[i]) {
      result[i] = "correct";
      solutionLetters[i] = null;
    }
  });

  // Luego present
  guess.split("").forEach((ch, i) => {
    if (result[i] === "correct") return;

    const index = solutionLetters.indexOf(ch);
    if (index !== -1) {
      result[i] = "present";
      solutionLetters[index] = null;
    }
  });

  return result;
}
