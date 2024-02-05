import toast from "react-hot-toast";
export const useToast = (state: string, message: string) => {
  if (state === "error") {
    return toast.error(<p className="notification-message">{message}</p>);
  } else {
    return toast.success(<p className="notification-message">{message}</p>);
  }
};
