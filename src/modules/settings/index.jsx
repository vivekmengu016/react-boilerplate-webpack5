import React from "react";
import { Outlet } from "react-router-dom";

const Settings = () => {
    return(
        <div>
            <h1>Settings</h1>
            <Outlet />
        </div>
    )
}

export default Settings; 