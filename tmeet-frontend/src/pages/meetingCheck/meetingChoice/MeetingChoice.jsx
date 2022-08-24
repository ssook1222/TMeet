import NavBar from "../../components/navigationBar/NavBar";
import React from "react";
import KakaoShareButton from "../../components/KakaoShare/KakaoShare";
import './Choice.css'
import Box from "@mui/material/Box";
import WeatherApp from "../../components/weather/Weather";
import CommentApp from "../../components/comment/Comment";
import weatherIcon from "../../components/weather/Weather";

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

function ChoiceApp() {
    return (
        <body>
        <div className="App">
            <NavBar></NavBar>
        </div>
        <div style={{margin : "5vh"}}>
            <div className="checkTitle">
                모임 결과 확인
            </div>
            <h2 style={{margin : "0", textAlign : "center"}}>최종으로 선택된 모임입니다.<br></br>변경하시려면 비동의 이모티콘을 입력해주세요</h2>
        </div>
        {/*박스1*/}
        <div className= "checkBoxMargin" style={{display : "flex", flexWrap : "wrap", justifyContent : "center"}}>
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
        <div style={{marginTop : "5vh", display : "block", textAlign : "center"}}>
            <div className= "kakaoShare">
                결정된 모임을 카카오톡으로 공유하기
                <KakaoShareButton></KakaoShareButton>
            </div>
            <div style={{backgroundColor : '#E3FDFD'}}>
                {/*CommentApp 에러 수정 후 주석 해제*/}
                {/*<CommentApp></CommentApp>*/}
            </div>
        </div>
        </body>
    );
}

export default ChoiceApp;
