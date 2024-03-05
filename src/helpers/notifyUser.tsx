import toast from "react-hot-toast";
import { BlueInfoIcon } from "../components/icons/BlueInfoIcon";
import { Spinner } from "../components/loaders/Spinner";

export const notifyUser = (
  state: "success" | "error" | "info" | "loading",
  message?: string | null
) => {
  if (state === "error") {
    return toast.error(<p className="notification-message">{message}</p>);
  } else if (state === "success") {
    return toast.success(<p className="notification-message">{message}</p>);
  } else if (state === "info") {
    return toast(<p className="notification-message">{message}</p>, {
      icon: <BlueInfoIcon className="w-5 h-5" />,
    });
  } else if (state === "loading") {
    return toast(<p className="notification-message">{message}</p>, {
      icon: <Spinner className="w-4 h-4 fill-gray-400" />,
    });
  }
};
