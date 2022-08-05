import React from 'react';
import NavBar from '../components/navigationBar/NavBar';
import TimeTableMerge from '../components/timeTableMerge/TimeTableMerge';
import './TimeResult.css';
import axios from "axios";

function TimeResult() {
    const rowCnt = 11;
    const columnCnt = 7;
    const dayArray = ['월', '화', '수', '목', '금', '토', '일'];

    const userCnt = 4;

    let user0 = new Array();
    let user1 = new Array();
    let user2 = new Array();
    let user3 = new Array();

    let userArray = new Array(user0, user1, user2, user3);

    let cellArray = new Array(columnCnt);   //2차원 배열 생성
    for(let j = 0; j < columnCnt; j++)
        cellArray[j] = new Array(rowCnt);

    for(let k = 0; k < rowCnt; k++)    //2차원 배열 초기화
        for(let j = 0; j < columnCnt; j++) {
            cellArray[j][k] = 0;
        }

    async function loadTable () {
        for(let i=0; i < userCnt; i++) {
            await axios.get('/api/time', {
                params: {
                    time_id: i+1
                }
            })
                .then(function (response) {
                    let timetable = JSON.parse(response.data);
                    for(let j=0; j < dayArray.length; j++)
                        userArray[i].push(timetable[dayArray[j]].split('.'));
                })
                .catch(() => {
                    console.log('fail');
                })
        }
        markTable();
    }

    function markTable() {

        let tdArray = document.getElementsByClassName('ttdm');

        for (let i = 0; i < userCnt; i++) {
            let user = userArray[i];
            for (let j = 0; j < columnCnt; j++)
                for (let k = 0; k < rowCnt; k++) {
                    if (user[j][k] == '1')
                        cellArray[j][k]++;
                }
        }

        for (let k = 0; k < rowCnt; k++)
            for (let j = 0; j < columnCnt; j++) {
                let tdIndex = k * columnCnt + j;
                for (let i = 0; i <= userCnt; i++)
                    if (cellArray[j][k] == i) {
                        if(i == 1)
                            tdArray[tdIndex].style.backgroundColor = '#DAFDFB';
                        else if(i == 2)
                            tdArray[tdIndex].style.backgroundColor = '#90EEF7';
                        else if(i == 3)
                            tdArray[tdIndex].style.backgroundColor = '#72DCF0';
                        else if(i == 4)
                            tdArray[tdIndex].style.backgroundColor = '#46c2e7';
                        else if(i == 5)
                            tdArray[tdIndex].style.backgroundColor = '#339AC6';
                        else if(i == 6)
                            tdArray[tdIndex].style.backgroundColor = '#2375A6';
                        else if(i == 7)
                            tdArray[tdIndex].style.backgroundColor = '#165485';
                        else if(i == 8)
                            tdArray[tdIndex].style.backgroundColor = '#0D3C6E';

                        tdArray[tdIndex].innerText = " " + i;
                    }
            }
    }

    function showResult() {
        let userArray = ['사용자1', '사용자2', '사용자3', '사용자4'];
        let n = userArray.length;
        let result = document.getElementById('resultButton');
        let parent = result.parentElement;
        for (let i = 0; parent.childElementCount <= n; i++) {
            let child = document.createElement('button');
            child.innerHTML = userArray[i];
            parent.appendChild(child);
        }
    }


    loadTable();

        return (
    <div>
      <div className="App">
        <NavBar></NavBar>
          <h3>사용자들의 가능한 시간대를 취합한 결과를 확인해보세요.</h3>
      </div>

      <div className="area">
        <TimeTableMerge></TimeTableMerge>
      </div>

      <div className="area" style={{float: "right"}}>
        <button id="resultButton" onClick={showResult}>사용자별 결과보기</button>
      </div>
    </div>
  );
}

export default TimeResult;
