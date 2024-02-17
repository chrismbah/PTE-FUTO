export const getCurrentTime =()=> {
    const date = new Date();
    const hours = date.getHours() % 12 || 12; 
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    return `${hours}:${minutes} ${ampm}`;
  }