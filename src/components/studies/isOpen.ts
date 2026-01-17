export function isOpen(): boolean {
  // Open from 9 AM - 5 PM M-F ET (UTC-5)
  const now = new Date();
  const utcHour = now.getUTCHours();
  const etHour = (utcHour - 5 + 24) % 24;
  const dayOfWeek = now.getUTCDay();

  // Weekend
  if (dayOfWeek === 0 || dayOfWeek === 6) return false;

  // Before 9 AM or after 5 PM ET
  if (etHour < 9 || etHour >= 17) return false;

  return true;
}

export function invert(): boolean {
  return !isOpen();
}

export default isOpen;
