import React from "react";
import NavBar from "../components/navigationBar/NavBar";
import MeetingFirst from "./MeetingFirst";

const MeetingMake = () => {
    return(
        <div style={{backgroundColor:"#F8FFFF", paddingBottom:"5px"}}>
            <NavBar></NavBar>
            <MeetingFirst></MeetingFirst>
        </div>
    );
}

export default MeetingMake;