
export function getCurrentDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'short' });
    const year = today.getFullYear();
  
    // Add ordinal indicator to day
    const ordinalIndicator = day % 10 === 1 && day !== 11
      ? 'st' : day % 10 === 2 && day !== 12
      ? 'nd' : day % 10 === 3 && day !== 13
      ? 'rd' : 'th';
  
    return `${day}${ordinalIndicator} ${month}, ${year}`;
  }
export function getCurrentDateInShortFormat(): string {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0"); // Ensure two digits (0-padded)
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(today);
  const year = today.getFullYear();
  return `${day} ${month}, ${year}`;
}

