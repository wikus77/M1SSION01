const countdownTarget = new Date("2025-07-19T00:00:00Z");

export function getCountdownValues() {
  const now = new Date();
  const distance = countdownTarget.getTime() - now.getTime();

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export function getTargetDate(): Date {
  return countdownTarget;
}
