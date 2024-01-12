import { Toaster } from "react-hot-toast";

export const CustomToaster = () => {
  return (
    <Toaster
      containerStyle={{
        // Nav bar blocks toast default display
        top: 100,
        right: 10,
      }}
      toastOptions={{
        duration: 5000,
      }}
    />
  );
};
