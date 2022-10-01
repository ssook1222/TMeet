import React from "react";
import NavBar from "../components/navigationBar/NavBar";
import './MeetingCheck.css';
import Box from "@mui/material/Box";
import WeatherIcon from "../components/weather/WeatherRe.tsx";

let meeting_select = [
    ["모임 날짜", "22.10.05 (수)", "22.10.07 (금)", "22.10.10 (월)", 31],
    ["모임 날짜", "22.10.12 (수)", "22.10.14 (금)", "22.10.17 (월)", 32],
    ["모임 날짜", "22.10.19 (수)", "22.10.21 (금)", "22.10.24 (월)", 33],
]

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
                    <div>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor : '#E3FDFD',
                                color : '#46B3B9',
                                width : '38vh',
                                height : '15vh',
                                border: "10px solid #E3FDFD"
                            }}>
                            <div style={{margin: "auto", display: "block", textAlign: "center"}}>
                                <h4 style={{margin: "auto"}}>{meeting_select[0][0]}</h4>
                                <h4 style={{margin: "auto"}}>{meeting_select[0][1]}</h4>
                                <h4 style={{margin: "auto"}}>{meeting_select[0][2]}</h4>
                                <h4 style={{margin: "auto"}}>{meeting_select[0][3]}</h4>
                            </div>
                        </Box>
                        <div style={{margin : "0.5vh"}}></div>
                        <Box className="weatherBox"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor : '#E3FDFD',
                                width : '38vh',
                                height : 'auto',
                                overflow : "scroll",
                                border: "10px solid #E3FDFD"
                            }}>
                            <p style={{color: "#46B3B9", margin: "0"}}>모임 기간 날씨</p>
                            <p style={{color: "#46B3B9", margin: "0", fontSize: "0.8rem", borderBottom: "3px solid #ffffff", width: "40vh", textAlign: "center"}}>오늘로부터 10일 이후 날씨는 조회할 수 없습니다.</p>
                            <WeatherIcon meeting_id={meeting_select[0][4]}></WeatherIcon>
                        </Box>
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
                    <div>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor : '#E3FDFD',
                                color : '#46B3B9',
                                width : '38vh',
                                height : '15vh',
                                border: "10px solid #E3FDFD"
                            }}>
                            <div style={{margin: "auto", display: "block", textAlign: "center"}}>
                                <h4 style={{margin: "auto"}}>{meeting_select[1][0]}</h4>
                                <h4 style={{margin: "auto"}}>{meeting_select[1][1]}</h4>
                                <h4 style={{margin: "auto"}}>{meeting_select[1][2]}</h4>
                                <h4 style={{margin: "auto"}}>{meeting_select[1][3]}</h4>
                            </div>
                        </Box>
                        <div style={{margin : "0.5vh"}}></div>
                        <Box className="weatherBox"
                             sx={{
                                 display: 'flex',
                                 flexDirection: 'column',
                                 alignItems: 'center',
                                 backgroundColor : '#E3FDFD',
                                 width : '38vh',
                                 height : 'auto',
                                 overflow : "scroll",
                                 border: "10px solid #E3FDFD"
                             }}>
                            <p style={{color: "#46B3B9", margin: "0"}}>모임 기간 날씨</p>
                            <p style={{color: "#46B3B9", margin: "0", fontSize: "0.8rem", borderBottom: "3px solid #ffffff", width: "40vh", textAlign: "center"}}>오늘로부터 10일 이후 날씨는 조회할 수 없습니다.</p>
                            <WeatherIcon meeting_id={meeting_select[1][4]}></WeatherIcon>
                        </Box>
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
                    <div>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor : '#E3FDFD',
                                color : '#46B3B9',
                                width : '38vh',
                                height : '15vh',
                                border: "10px solid #E3FDFD"
                            }}>
                            <div style={{margin: "auto", display: "block", textAlign: "center"}}>
                                <h4 style={{margin: "auto"}}>{meeting_select[2][0]}</h4>
                                <h4 style={{margin: "auto"}}>{meeting_select[2][1]}</h4>
                                <h4 style={{margin: "auto"}}>{meeting_select[2][2]}</h4>
                                <h4 style={{margin: "auto"}}>{meeting_select[2][3]}</h4>
                            </div>
                        </Box>
                        <div style={{margin : "0.5vh"}}></div>
                        <Box className="weatherBox"
                             sx={{
                                 display: 'flex',
                                 flexDirection: 'column',
                                 alignItems: 'center',
                                 backgroundColor : '#E3FDFD',
                                 width : '38vh',
                                 height : 'auto',
                                 overflow : "scroll",
                                 border: "10px solid #E3FDFD"
                             }}>
                            <p style={{color: "#46B3B9", margin: "0"}}>모임 기간 날씨</p>
                            <p style={{color: "#46B3B9", margin: "0", fontSize: "0.8rem", borderBottom: "3px solid #ffffff", width: "40vh", textAlign: "center"}}>오늘로부터 10일 이후 날씨는 조회할 수 없습니다.</p>
                            <WeatherIcon meeting_id={meeting_select[2][4]}></WeatherIcon>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
}

export default CheckApp;
