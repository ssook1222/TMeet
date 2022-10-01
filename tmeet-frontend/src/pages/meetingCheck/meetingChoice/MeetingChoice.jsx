import NavBar from "../../components/navigationBar/NavBar";
import React from "react";
import KakaoShareButton from "../../components/KakaoShare/KakaoShare";
import './Choice.css'
import Box from "@mui/material/Box";
import WeatherIcon from "../../components/weather/WeatherRe.tsx";
import CommentList from "../../components/comment/Comment.tsx";

let meeting_select = [
    ["모임 날짜", "22.10.05 (수)", "22.10.07 (금)", "22.10.10 (월)", 31],
    ["모임 날짜", "22.10.12 (수)", "22.10.14 (금)", "22.10.17 (월)", 32],
    ["모임 날짜", "22.10.19 (수)", "22.10.21 (금)", "22.10.24 (월)", 33],
]

function ChoiceApp() {
    return (
        <body>
        <div className="App">
            <NavBar></NavBar>
        </div>
        <div style={{margin : "4rem"}}>
            <div className="checkTitle">
                모임 결과 확인
            </div>
            <h2 style={{margin : "0", textAlign : "center"}}>최종으로 선택된 모임입니다.</h2>
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
