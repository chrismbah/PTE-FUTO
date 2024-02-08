import { Toaster } from "react-hot-toast";

export const CustomToaster = () => {
  return (
    <Toaster
      containerStyle={{
        // Nav bar blocks toast default display
        top: 100,
        // left: 70
      }}
      toastOptions={{
        duration: 3000,
      }}
      position="top-right"
    />
  );
};
