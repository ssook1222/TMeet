import NavBar from "../../components/navigationBar/NavBar";
import React from "react";
import KakaoShareButton from "../../components/KakaoShare/KakaoShare";
import './Choice.css'

let select = "모임 날짜 및 시간",
    startdate1 = "YYYY-MM-DD AM/PM 00:00",
    enddate1 = "YYYY-MM-DD AM/PM 00:00";


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
            <h2 style={{margin : "0", textAlign : "center"}}>최종으로 선택된 모임입니다.<br></br>변경하시려면 ㅇㅇ을 눌러주세요</h2>
        </div>
        <div>
            <div className= "checkBoxStyle">
                <h4 style={{margin : "auto"}}>{select}<br></br>{startdate1}<br></br>~{enddate1}</h4>
            </div>
            <div style={{margin : "1vh"}}></div>
            <div className= "weatherBox">
            </div>
        </div>
        <div style={{marginTop : "5vh", display : "block", textAlign : "center"}}>
            <div className= "kakaoShare">
                결정된 모임을 카카오톡으로 공유하기
                <KakaoShareButton></KakaoShareButton>
            </div>
        </div>
        </body>
    );
}

export default ChoiceApp;
