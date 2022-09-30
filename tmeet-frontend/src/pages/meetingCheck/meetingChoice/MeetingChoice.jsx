import NavBar from "../../components/navigationBar/NavBar";
import React from "react";
import KakaoShareButton from "../../components/KakaoShare/KakaoShare";
import './Choice.css'
import Box from "@mui/material/Box";
import WeatherIcon from "../../components/weather/WeatherRe.tsx";
import CommentList from "../../components/comment/Comment.tsx";

let select = "모임 날짜 및 시간", startdate1 = "0901", enddate1 = "0901";

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
                    <WeatherIcon></WeatherIcon>
                </Box>
            </div>
        </div>
        <div style={{marginTop : "5vh", display : "block", textAlign : "center"}}>
            <div className= "kakaoShare">
                결정된 모임을 카카오톡으로 공유하기
                <KakaoShareButton></KakaoShareButton>
            </div>
            <div>
                <CommentList></CommentList>
            </div>

        </div>
        </body>
    );
}

export default ChoiceApp;
