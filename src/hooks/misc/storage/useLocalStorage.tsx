export const useLocalStorage = () => {
  const getDataFromStorage = (key:string) => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      return JSON.parse(storedData);
    }
  };
  const setDataToStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  return {
    setDataToStorage,
    getDataFromStorage,
  };
};
