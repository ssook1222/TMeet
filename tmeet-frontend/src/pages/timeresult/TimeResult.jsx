import React, {useEffect, useState} from 'react';
import NavBar from '../components/navigationBar/NavBar';
import TimeTableMerge from '../components/timeTableMerge/TimeTableMerge';
import './TimeResult.css';
import axios from "axios";

function TimeResult() {
    const rowCnt = 11;
    let columnCnt = 0;
    const userCnt = 4;
    let theadArray = new Array();

    let user0 = new Array();
    let user1 = new Array();
    let user2 = new Array();
    let user3 = new Array();

    let userArray = new Array(user0, user1, user2, user3);
    let resultButton2Clicked = false;

    const loadThead = async () => {
        await axios.get('/api/meeting',
            {params: {meeting_id: 5}}
        )
            .then(function (response) {
                console.log(JSON.parse(response.data));
                theadArray = JSON.parse(response.data);
                console.log(theadArray);
            })
            .catch(() => {
                console.log('fail');
            })
        columnCnt = theadArray.length;
    }

    async function loadTable() {
        for (let i = 0; i < userCnt; i++) {
            await axios.get('/api/time', {
                params: {
                    time_id: i + 1
                }
            })
                .then(function (response) {
                    let timetable = JSON.parse(response.data);
                    console.log(timetable);
                    for (let j = 0; j < columnCnt; j++)
                        userArray[i].push(timetable[theadArray[j]].split('.'));
                    console.log(userArray);
                })
                .catch(() => {
                    console.log('fail');
                })

        }

        markTable();

    }

    function markTable() {
        let cellArray = new Array(columnCnt);   //2차원 배열 생성
        for(let j = 0; j < columnCnt; j++)
            cellArray[j] = new Array(rowCnt);

        for(let k = 0; k < rowCnt; k++)    //2차원 배열 초기화
            for(let j = 0; j < columnCnt; j++) {
                cellArray[j][k] = 0;
            }

        let tdArray = document.getElementsByClassName('ttdm');
        console.log(tdArray);
        for (let i = 0; i < userCnt; i++) {
            let user = userArray[i];
            for (let j = 0; j < columnCnt; j++)
                for (let k = 0; k < rowCnt; k++) {
                    console.log(j,k);
                    console.log(user);
                    if (user[j][k] === '1')
                        cellArray[j][k]++;
                }
        }
        console.log(cellArray);

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

    function showUserResult() {
        let tdArray = document.getElementsByClassName('ttdm');
        let userNicknameArray = ['사용자1', '사용자2', '사용자3', '사용자4'];
        let resultButton1 = document.getElementById('resultButton1');
        let parent = resultButton1.parentElement;
        function showUser(i){
            console.log(i);
            for(let j = 0; j < tdArray.length; j++)
                tdArray[j].style.backgroundColor = 'lightgrey';

            let user = userArray[i];
            console.log(userArray[i]);
            for (let k = 0; k < rowCnt; k++)
                for (let j = 0; j < columnCnt; j++) {
                    let tdIndex = k * columnCnt + j;
                    console.log(j,k);
                    if (user[j][k] == '1')
                        tdArray[tdIndex].style.backgroundColor = '#90EEF7';
                }
        }

        if(resultButton2Clicked === false) {
            for (let i = 0; i < userCnt; i++) {
                let child = document.createElement('button');
                child.innerHTML = userNicknameArray[i];
                child.className = "userbutton";
                child.addEventListener("click", function (e) {
                    showUser(i)
                });

                parent.appendChild(child);
            }
        }
        resultButton2Clicked = true;
    }

    function showAllResult(){
        let tdArray = document.getElementsByClassName('ttdm');
        for(let j = 0; j < tdArray.length; j++)
            tdArray[j].style.backgroundColor = 'lightgrey';

        loadThead();
        loadTable();
    }

    useEffect(() => {
        loadThead();
        loadTable();
    },[]);


        return (
    <div>
      <div className="App">
        <NavBar></NavBar>
      </div>
        <h3>사용자들의 가능한 시간대를 취합한 결과를 확인해보세요.</h3>
        <div id="content">
      <div className="wrap">
        <TimeTableMerge />
      </div>
      <div className="wrap" >
          <button id="resultButton1" onClick={showAllResult}>전체 결과보기</button>
          <div id="buttonwrap2">
              <button id="resultButton2" onClick={showUserResult}>사용자별 결과</button>
          </div>
      </div>
      </div>
    </div>
  );
}

export default TimeResult;
