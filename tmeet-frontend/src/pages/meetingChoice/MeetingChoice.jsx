import NavBar from "../components/navigationBar/NavBar";
import {FormControl} from "@mui/material";
import React from "react";

let select = "모임 날짜 및 시간",
    startdate1 = "YYYY-MM-DD AM/PM 00:00",
    enddate1 = "YYYY-MM-DD AM/PM 00:00";



function ChoiceApp() {
    return (
        <body>
        <div className="App">
            <NavBar></NavBar>
        </div>
        <div className= "checkwrap">
            <div className="checkTitle">
                최종 모임 확인
            </div>
            <h2 style={{margin : "0", textAlign : "center"}}>최종 선택된 모임입니다.<br></br>변경하시려면 ㅇㅇ을 눌러주세요</h2>
        </div>
        <div>
            <div style={{display : "flex",margin:"auto",backgroundColor : '#E3FDFD', width : "40vh", height : "10vh", color : "#46B3B9", textAlign : "center"}}>
                <h4 style={{margin : "auto"}}>{select} <br></br> {startdate1} <br></br> {enddate1}</h4>
            </div>
            <div style={{margin : "1vh"}}></div>
            <div style={{display : "flex",margin : "auto",backgroundColor : '#E3FDFD', width : "40vh", height : "5vh"}}>
            </div>
        </div>
        <div>
        </div>
        </body>
    );
}



export default ChoiceApp;
