// export const getCurrentTime =()=> {
//     const date = new Date();
//     const hours = date.getHours() % 12 || 12;
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     const ampm = hours >= 12 ? 'PM' : 'AM';

//     return `${hours}:${minutes} ${ampm}`;
//   }

export const getCurrentTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, "0"); // Add leading zero for single digits

  // Convert hour to 12-hour format if necessary
  let formattedHour = hour;
  if (hour > 12) {
    formattedHour = hour - 12;
  } else if (hour === 0) {
    formattedHour = 12; // Handle midnight as 12:00 AM
  }

  // Format the time string
  const meridian = hour >= 12 ? "PM" : "AM";
  const formattedTime = `${formattedHour}:${minute} ${meridian}`;

  return formattedTime;
};
