import React from "react";
import NavBar from "../../components/navigationBar/NavBar";
import MeetingFirst from "./MeetingFirst";

const MeetingMaker = () => {
    return(
        <div style={{backgroundColor:"#F8FFFF", paddingBottom:"5px"}}>
            <NavBar></NavBar>
            <MeetingFirst></MeetingFirst>
        </div>
    );
}

export default MeetingMaker;