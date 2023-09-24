import toast from "react-hot-toast";
import Axios from "axios"; // Import Axios here
import { endPoints } from "../apis";
import { apiConnector } from "../ApiConnector";

const {

    LIKE_POST,
    UNLIKE_POST,

} = endPoints;


export function LikePost(postId,userId) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...");
  
      try {
        const response = await apiConnector("POST", LIKE_POST, {
          postId,
          userId
        });
  
        console.log("LOGIN API RESPONSE............", response);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("Like Tweet");
      } catch (error) {
        console.log("LOGIN API ERROR............", error);
        toast.error("failed");
      }
      toast.dismiss(toastId);
    };
  }

  export function unLikePost(postId,userId) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...");
  
      try {
        const response = await apiConnector("POST", UNLIKE_POST, {
          postId,
          userId
        });
  
        console.log("LOGIN API RESPONSE............", response);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("UnLike Tweet");
      } catch (error) {
        console.log("LOGIN API ERROR............", error);
        toast.error("failed");
      }
      toast.dismiss(toastId);
    };
  }