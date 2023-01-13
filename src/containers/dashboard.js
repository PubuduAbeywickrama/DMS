import React from "react";
import HomeRightBar from "../component/dashboardcomponents/HomeRightBar/HomeRightBar";
import SideBar from "../component/dashboardcomponents/sidebar";
import './dashboard.css';

export default function DashBoard(){
    return (
        <div className="mainDashBoardContainer">
            <SideBar/>
            <HomeRightBar/>

        </div>
    );
}