import React from "react";
import NavBar from "../components/navigationBar/NavBar";
import './MeetingCheck.css';
import WeatherApp from "../components/weather/Weather";
import Box from "@mui/material/Box";
import weatherIcon from "../components/weather/Weather";

let count = 0;
var weatherList =
    [
        { date: '20220815', weather: '', rain: '강수없음', snow: '적설없음' },
        { date: '20220816', weather: '', rain: '강수없음', snow: '적설없음' },
        { date: '20220817', weather: '', rain: '강수없음', snow: '적설없음' },
        { date: '20220818', weather: '구름많음', rain: '', snow: '' },
        { date: '20220819', weather: '흐리고 비', rain: '', snow: '' },
        {},
        {},
        {},
        {},
        {},
        {}
    ];

for(let i = 0;i<weatherList.length ; i++){
    if(weatherList[i].date == null){
        count++;
    }
}

let select = "모임 날짜 및 시간", startdate1 = weatherList[0].date, enddate1 = weatherList[count-2].date;

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
                                width : '40vh',
                                height : '15vh'
                            }}>
                            <h4 style={{margin : "auto"}}>{select}<br></br>{startdate1}<br></br> ~ {enddate1}</h4>
                        </Box>
                        <div style={{margin : "0.5vh"}}></div>
                        <Box className="weatherBox"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor : '#E3FDFD',
                                width : '40vh',
                                height : 'auto',
                                overflow : "scroll"
                            }}>
                            <weatherIcon></weatherIcon>
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
                                width : '40vh',
                                height : '15vh'
                            }}>
                            <h4 style={{margin : "auto"}}>{select}<br></br>{startdate1}<br></br> ~ {enddate1}</h4>
                        </Box>
                        <div style={{margin : "0.5vh"}}></div>
                        <Box className="weatherBox"
                             sx={{
                                 display: 'flex',
                                 flexDirection: 'column',
                                 alignItems: 'center',
                                 backgroundColor : '#E3FDFD',
                                 width : '40vh',
                                 height : 'auto',
                                 overflow : "scroll"
                             }}>
                            <weatherIcon></weatherIcon>
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
                                width : '40vh',
                                height : '15vh'
                            }}>
                            <h4 style={{margin : "auto"}}>{select}<br></br>{startdate1}<br></br> ~ {enddate1}</h4>
                        </Box>
                        <div style={{margin : "0.5vh"}}></div>
                        <Box className="weatherBox"
                             sx={{
                                 display: 'flex',
                                 flexDirection: 'column',
                                 alignItems: 'center',
                                 backgroundColor : '#E3FDFD',
                                 width : '40vh',
                                 height : 'auto',
                                 overflow : "scroll"
                             }}>
                            <weatherIcon></weatherIcon>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
        </body>
    );
}

export default CheckApp;
