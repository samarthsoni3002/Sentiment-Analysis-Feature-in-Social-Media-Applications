import React from "react";
import {CiLogout} from "react-icons/ci"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Services/Operations/AuthAPI";
import { Link } from "react-router-dom";

const LogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCall = () => {
        dispatch(logout(navigate))
    }
    return (
        <div className="flex gap-1 items-center">
            <CiLogout/>
            <Link className="text-xl" onClick={handleCall}>
                LogOut
            </Link>
        </div>
    )
}

export default LogOut;