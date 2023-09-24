import React, { useState } from "react";
import { BiSolidMessageDetail } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import image  from "../Image/ProfilePicture.webp"

const NavBar = () => {
  const userData = useSelector((state) => (state.User));
  const {userId} = useSelector((state) => (state.Auth));
  console.log(userData);
    return (
    <div className="flex justify-between p-1 items-center bg-gray-400 text-white rounded-full m-3 p-2 mx-2">
        <div className="flex-1 text-3xl font-semibold">
          SOCIAL_NETWORK
        </div>
         
        <div className="flex items-center gap-2 flex-1 mr-5"> {/* Fraction 2 */}
            <AiOutlineSearch className="hover:cursor-pointer text-2xl"/>
            <input
                className="border-2 text-black rounded-2xl p-2 w-full focus:outline-none focus:border-transparent"
                placeholder="Search ...."
            />
        </div>

        <div className="flex items-center justify-between flex-1"> {/* Fraction 3 */}
        <div className="flex gap-3">
          <Link to={"/"}>HomePage</Link>
          <div>Timeline</div>
        </div>
        {
          userId === null ? (
          <div className="flex gap-5 mr-5">
            <Link to="/Login" className="">Login</Link>
            <Link to="/SignUp">Sign Up</Link>
          </div>
          ) : (
          <div className="flex gap-4 items-center">
            <LogOut/>
            <img src={image} alt="user pic" className="rounded-full w-20 h-20 object-cover border-2 border-white" />
          </div>
            ) 
        }
      </div> 
    </div>
    )
}

export default NavBar;