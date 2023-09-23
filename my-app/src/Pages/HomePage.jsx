import React from "react";
import NavBar from "../Components/NavBar";
import LeftBar from "../Components/LeftBar";
import Feed from "../Components/Feed";

const HomePage = () => {
    return (
        <div>
            <NavBar/> 
            <div className="flex">
                <LeftBar/>
                <Feed/>
            </div>   
        </div>
    )
}

export default HomePage;