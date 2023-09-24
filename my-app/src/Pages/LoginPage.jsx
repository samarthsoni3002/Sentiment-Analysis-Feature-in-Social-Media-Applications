import React from "react";
import LoginForm from "../Components/LoginForm";
import NavBar from "../Components/NavBar";


const LoginPage = () => {
    return (
        <div>
            <NavBar/>
            <div className="">
                <LoginForm/>
            </div>
        </div>
    )
}

export default LoginPage;