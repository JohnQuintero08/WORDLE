export function updateKeyboardStatuses(prevStatuses, guess, statuses) {
  const priority = { correct: 3, present: 2, absent: 1 };
  const updated = { ...prevStatuses };

  guess.split("").forEach((letter, i) => {
    const newStatus = statuses[i];
    const oldStatus = updated[letter];

    if (!oldStatus || priority[newStatus] > priority[oldStatus]) {
      updated[letter] = newStatus;
    }
  });

  return updated;
}
