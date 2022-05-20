import React from 'react';
import TimeTable from '../components/timeTable/TimeTable.jsx';
import NavBar from "../components/navigationBar/NavBar";
import './Time.css';

function Time() {
    return (
        <div>
            <div className="App">
                <NavBar></NavBar>
            </div>
            <div id="content">
                <div className="timeTable">
                    <h3>가능한 시간대를 드래그하여 선택하세요.</h3>
                    <div id="input">
                    <div className="timeInterval">
                        <div className="time">&nbsp;9:00</div>
                        <div className="time">10:00</div>
                        <div className="time">11:00</div>
                        <div className="time">12:00</div>
                        <div className="time">13:00</div>
                        <div className="time">14:00</div>
                        <div className="time">15:00</div>
                        <div className="time">16:00</div>
                        <div className="time">17:00</div>
                        <div className="time">18:00</div>
                        <div className="time">19:00</div>
                        <div className="time">20:00</div>
                        <div className="time">21:00</div>
                        <div className="time">22:00</div>
                    </div>
                    <TimeTable></TimeTable>
                    </div>
                </div>
                 <div className="timeTable">
                     <h3>각 사용자의 가능한 시간대를 확인해보세요.</h3>
                     <div id="result">
                         <div className="timeInterval">
                             <div className="time">&nbsp;9:00</div>
                             <div className="time">10:00</div>
                             <div className="time">11:00</div>
                             <div className="time">12:00</div>
                             <div className="time">13:00</div>
                             <div className="time">14:00</div>
                             <div className="time">15:00</div>
                             <div className="time">16:00</div>
                             <div className="time">17:00</div>
                             <div className="time">18:00</div>
                             <div className="time">19:00</div>
                             <div className="time">20:00</div>
                             <div className="time">21:00</div>
                             <div className="time">22:00</div>
                         </div>
                        <TimeTable></TimeTable>
                         <div className="buttons">
                             <button id="resultButton" onClick={showResult}>결과보기</button>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    );
}

function showResult(){
    let userArray = ["사용자1", "사용자2", "사용자3", "사용자4"];
    let n = userArray.length;
    let result = document.getElementById("resultButton");
    let parent = result.parentElement;
    for(let i = 0; parent.childElementCount <= n; i++){
        let child = document.createElement("button");
        child.innerHTML = userArray[i];
        parent.appendChild(child);
    }
}

export default Time;
