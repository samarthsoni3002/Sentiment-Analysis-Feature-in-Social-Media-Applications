import toast from "react-hot-toast";
import { setLoading } from "../../Slices/AuthSlice";
import { setUserId } from "../../Slices/AuthSlice";
import { apiConnector } from "../ApiConnector";
import { endPoints } from "../apis";

const {

    SIGNUP_API,
    LOGIN_API, 
    CREATE_POST,
    DELETE_POST,
    SHOW_POSTS,
    LIKE_POST,
    UNLIKE_POST,
    COMMENT_ON_POST,
    DELETE_COMMENT,
    SHOW_COMMENTS,

} =  endPoints;

export function login(email, password, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          throw new Error(response.data.message)
        }
  
        toast.success("Login Successful")
        dispatch()
        
        navigate("/")
      } catch (error) {
        console.log("LOGIN API ERROR............", error)
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }