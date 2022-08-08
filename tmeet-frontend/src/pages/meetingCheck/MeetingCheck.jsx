import React from "react";
import NavBar from "../components/navigationBar/NavBar";
import './MeetingCheck.css';

let select = "모임 날짜 및 시간",
    startdate1 = "YYYY-MM-DD AM/PM 00:00",
    enddate1 = "YYYY-MM-DD AM/PM 00:00";

function CheckApp() {
    
    function onClick(e){
        window.location.href="/meeting-choice"
    }
    return (
        <body>
        <div className="App">
            <NavBar></NavBar>
        </div>
        <div className= "checkwrap">
            <div className="checkTitle">
                모임 확인 및 선택
            </div>
            <h2 style={{margin : "0"}}>아래 모임 중 원하시는 모임을 선택해주세요</h2>
        </div>
        <div>
            <div style={{display : "flex", flexWrap : "wrap", justifyContent : "center"}}>
                {/*박스1*/}
                <div className= "checkBoxMargin">
                    <div className= "checkBoxSelect">
                        후보군1
                        <button className= "selectButton"
                                onClick={onClick}>
                            <b>선택</b>
                        </button>
                    </div>
                    <div className= "checkBoxStyle">
                        <h4 style={{margin : "auto"}}>{select}<br></br>{startdate1}<br></br>{enddate1}</h4>
                    </div>
                    <div style={{margin : "0.5vh"}}></div>
                    <div className= "weatherBox">
                    </div>
                </div>
                {/*박스2*/}
                <div className= "checkBoxMargin">
                    <div className= "checkBoxSelect">
                        후보군2
                        <button className= "selectButton"
                                onClick={onClick}>
                            <b>선택</b>
                        </button>
                    </div>
                    <div className= "checkBoxStyle">
                        <h4 style={{margin : "auto"}}>{select}<br></br>{startdate1}<br></br>{enddate1}</h4>
                    </div>
                    <div style={{margin : "0.5vh"}}></div>
                    <div className= "weatherBox">
                    </div>
                </div>
                {/*박스3*/}
                <div className= "checkBoxMargin">
                    <div className= "checkBoxSelect">
                        후보군3
                        <button className= "selectButton"
                                onClick={onClick}>
                            <b>선택</b>
                        </button>
                    </div>
                    <div className= "checkBoxStyle">
                        <h4 style={{margin : "auto"}}>{select}<br></br>{startdate1}<br></br>{enddate1}</h4>
                    </div>
                    <div style={{margin : "0.5vh"}}></div>
                    <div className= "weatherBox">

                    </div>
                </div>
            </div>
        </div>
        </body>
    );
}

export default CheckApp;
