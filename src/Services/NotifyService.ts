import { AxiosError } from 'axios';
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
      }
    });
  }

  public error(error: unknown) {
    const message = this.extractMessage(error);
    Store.addNotification({
      title: "Error!",
      message,
      type: "danger",
      insert: "top",
      container: "bottom-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      }
    });
  }


  private extractMessage(error: unknown): string {
    
    if (typeof error === "string") return error;

    if (this.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.message === 'Network Error') return "Network error. Please check your internet connection.";
        if (axiosError.code === 'ECONNABORTED') return "The request took too long to complete. Please try again later.";
        if (!axiosError.response) return "No response from server. Please try again later.";

        const status = axiosError.response?.status;
        const data = axiosError.response?.data;

        const statusMessages: Record<number, string> = {
          401: "Please login again.",
          403: "You do not have permission to access this resource.",
          500: "Server error. Please try again later.",
        };
        if (status && statusMessages[status]) return statusMessages[status];
        if (typeof data === "string") return data;
        if (typeof data === "object" && "message" in data) return String(data.message);
        if (Array.isArray(data)) return String(data[0]);

        return `HTTP Error ${axiosError.response?.status}`;
    }

    if (error instanceof Error) return `Unexpected error: ${error.message}`;

    return "Something went wrong...";
  }


  private isAxiosError(error:unknown): error is AxiosError {
    return typeof error === "object" && 
            error !== null &&
            "isAxiosError" in error;
  } 

}

const notifyService = new NotifyService();
export default notifyService