import toast from "react-hot-toast";
// import Axios from "axios"; // Import Axios here
import { endPoints } from "../apis";
import { apiConnector } from "../ApiConnector";

const {
    
    COMMENT_ON_POST,
    DELETE_COMMENT,
    SHOW_COMMENTS,

} = endPoints;

export function commentpost(postId,userId,content) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...");
  
      try {
        const response = await apiConnector("POST", COMMENT_ON_POST, {
          postId,
          userId,
          content
        });
  
        console.log("LOGIN API RESPONSE............", response);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("comment on Tweet");
      } catch (error) {
        console.log("LOGIN API ERROR............", error);
        toast.error("failed");
      }
      toast.dismiss(toastId);
    };
  }

  export function deletecomment(commentId,postId,userId) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...");
  
      try {
        const response = await apiConnector("DELETE", DELETE_COMMENT, {
          postId,
          userId,
          commentId,
        });
  
        console.log("LOGIN API RESPONSE............", response);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("deleted comment on Tweet");
      } catch (error) {
        console.log("LOGIN API ERROR............", error);
        toast.error("failed");
      }
      toast.dismiss(toastId);
    };
  }

  export function showComments() {
    return async (dispatch) => {
    //   const toastId = toast.loading("Loading...");
  
      try {
        const response = await apiConnector("DELETE", SHOW_COMMENTS);
  
        console.log("LOGIN API RESPONSE............", response);
  
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        // toast.success("");
      } catch (error) {
        console.log("LOGIN API ERROR............", error);
        toast.error("failed");
      }
    //   toast.dismiss(toastId);
    };
  }


