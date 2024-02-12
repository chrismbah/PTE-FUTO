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
  