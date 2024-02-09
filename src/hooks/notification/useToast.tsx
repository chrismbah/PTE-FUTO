import toast from "react-hot-toast";

interface Messages {
  loadingMsg: string;
  successMsg: string;
  errorMsg: string;
}
export const useToast = (
  state: string | null,
  message?: string | null,
  promiseFn?: Promise<void> | null,
  promiseMessages?: Messages | null
) => {
  if (state === "error") {
    return toast.error(<p className="notification-message">{message}</p>);
  } else if (state === "success") {
    return toast.success(<p className="notification-message">{message}</p>);
  } else if(state === "promise") {
    return promiseFn && toast.promise(promiseFn, {
      loading: <p className="notification-message">{promiseMessages?.loadingMsg}</p>,
      success: <p className="notification-message">{promiseMessages?.successMsg}</p>,
      error: <p className="notification-message">{promiseMessages?.errorMsg}</p>,
    });
  }
};
