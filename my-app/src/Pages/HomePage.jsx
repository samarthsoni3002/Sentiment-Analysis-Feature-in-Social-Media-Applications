import React from "react";
import NavBar from "../Components/NavBar";
import LeftBar from "../Components/LeftBar";
import Feed from "../Components/Feed";
import RightBar from "../Components/RightBar";

const HomePage = () => {
    return (
        <div>
            <NavBar/> 
            <div className="flex">
                <LeftBar/>
                <Feed/>
                <RightBar/>
            </div>   
        </div>
    )
}

export default HomePage;