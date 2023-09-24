import toast from "react-hot-toast";
import Axios from "axios"; // Import Axios here
import { endPoints } from "../apis";
import { apiConnector } from "../ApiConnector";

const {
  CREATE_POST,
  DELETE_POST,
  SHOW_POSTS,
} = endPoints;


export function createPost(caption,userId) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");

    try {
      const response = await apiConnector("POST", CREATE_POST, {
        userId,
        caption
      });

      console.log("LOGIN API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Tweet");
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Tweet Post Failed");
    }
    toast.dismiss(toastId);
  };
}

export function showPost() {
  return async (dispatch) => {

    try {
      const response = await apiConnector("GET", SHOW_POSTS);

      console.log("SHOW POSTS API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      // toast.success("All Posts");
    } catch (error) {
      console.log("SHOW POSTS API ERROR............", error);
      toast.error("Failed to load posts");
    } 
  };
}


export function DeletePost(post_Id){
  return async (dispatch) => {

    try {
      const response = await apiConnector("GET", DELETE_POST,{
        post_Id,
      });

      console.log("SHOW POSTS API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      // toast.success("All Posts");
    } catch (error) {
      console.log("SHOW POSTS API ERROR............", error);
      toast.error("Failed to load posts");
    } 
  };
}
