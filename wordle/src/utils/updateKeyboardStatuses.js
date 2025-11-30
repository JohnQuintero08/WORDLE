// src/utils/updateKeyboardStatuses.js
export function updateKeyboardStatuses(prevStatuses, guess, statuses) {
  const priority = { correct: 3, present: 2, absent: 1 };
  const updated = { ...prevStatuses };

  guess.split("").forEach((letter, i) => {
    const newStatus = statuses[i];
    if (!newStatus) return;

    const key = letter.toUpperCase();
    const oldStatus = updated[key];

    if (!oldStatus || priority[newStatus] > priority[oldStatus]) {
      updated[key] = newStatus;
    }
  });

  return updated;
}
