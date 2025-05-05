import { AxiosError } from "axios";
import { Store } from "react-notifications-component";

class NotifyService {
  public success(message: string) {
    Store.addNotification({
      message,
      type: "success",
      insert: "top",
      container: "bottom-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  }

  public error(error: unknown) {
    const message = this.extractMessage(error);
    Store.addNotification({
      title: "שגיאה!",
      message,
      type: "danger",
      insert: "top",
      container: "center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
  }

  private extractMessage(error: unknown): string {
    if (typeof error === "string") return error;

    if (this.isAxiosError(error)) {
      const axiosError = error as AxiosError;

      if (axiosError.message === "Network Error")
        return "שגיאת רשת - נא לבדוק את חיבור האינטרנט.";
      if (axiosError.code === "ECONNABORTED")
        return "הבקשה ארכה זמן רב מדי - נא לנסות שוב מאוחר יותר.";
      if (!axiosError.response)
        return "לא התקבלה תגובה מהשרת - נא לנסות שוב מאוחר יותר.";

      const status = axiosError.response?.status;
      const data = axiosError.response?.data;

      const statusMessages: Record<number, string> = {
        401: "נא להתחבר מחדש",
        403: "אין לך הרשאה לגשת למשאב זה.",
        404: "לא נמצאה כתובת כזו.",
        500: "שגיאת שרת, אנא נסה מאוחר יותר",
      };
      if (status && statusMessages[status]) return statusMessages[status];
      if (typeof data === "string") return data;
      if (typeof data === "object" && "message" in data)
        return String(data.message);
      if (Array.isArray(data)) return String(data[0]);

      return `HTTP Error ${axiosError.response?.status}`;
    }

    if (error instanceof Error) return `Unexpected error: ${error.message}`;

    return "אירעה שגיאה לא צפויה...";
  }

  private isAxiosError(error: unknown): error is AxiosError {
    return (
      typeof error === "object" && error !== null && "isAxiosError" in error
    );
  }
}

const notifyService = new NotifyService();
export default notifyService;
