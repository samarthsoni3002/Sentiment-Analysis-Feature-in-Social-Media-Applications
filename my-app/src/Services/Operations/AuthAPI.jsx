import toast from "react-hot-toast";
import { setLoading } from "../../Slices/AuthSlice";
import { setUserId } from "../../Slices/AuthSlice";
import { apiConnector } from "../ApiConnector";
import { endPoints } from "../apis";
import { setUserData } from "../../Slices/UserSlice";

const {

    SIGNUP_API,
    LOGIN_API, 

} =  endPoints;

export function login(email, password, navigate) {
    return async (dispatch) => {
    //   const toastId = toast.loading("Loading...");
      dispatch(setLoading(true));

      try {
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        });

        console.log("LOGIN API RESPONSE............", response);
        if (!response.data.success) {
          throw new Error(response.data.message);
        }
        toast.success("Login Successful");

        localStorage.setItem("userId", JSON.stringify(response.data.user._id));
        dispatch(setUserData(response.data));
        dispatch(setUserId(response.data.user._id));

        navigate("/");
      } catch (error) {
        console.log("LOGIN API ERROR............", error);
        toast.error("Login Failed");
      }
      dispatch(setLoading(false));
    //   toast.dismiss(toastId);
    };
}

export function logout(navigate) {
  return (dispatch) => {
    localStorage.removeItem("userId")
    dispatch(setUserData(null));
    dispatch(setUserId(null));
    toast.success("Logged Out")
    navigate("/")
  }
}



export function signUp(
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword,
    navigate
) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...");
      dispatch(setLoading(true));
      try {
        const response = await apiConnector("POST", SIGNUP_API, {
          firstName,
          lastName,
          userName,
          email,
          password,
          confirmPassword,
        });

        console.log("SIGNUP API RESPONSE............", response);

        if (!response.data.success) {
          throw new Error(response.data.message);
        }

        toast.success("Signup Successful");
        navigate("/login");
      } catch (error) {
        console.log("SIGNUP API ERROR............", error);
        toast.error("Signup Failed");
        navigate("/signup");
      }
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    };
}