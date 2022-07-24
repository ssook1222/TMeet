import React from 'react';
import NavBar from '../components/navigationBar/NavBar';
import TimeTableMerge from '../components/timeTableMerge/TimeTableMerge';
import './TimeResult.css';
import axios from "axios";

const rowCnt = 11;
const columnCnt = 7;

const userCnt = 4;
let user0 = [[0,1,1,1,1,1,0,0,0,0,0], [1,1,1,1,1,1,0,0,0,0,0], [1,1,1,1,1,1,0,0,0,0,0], [1,1,1,1,1,1,0,0,0,0,0],
    [1,1,1,1,1,1,0,0,0,0,0], [1,1,1,1,1,1,0,0,0,0,0], [1,1,1,1,1,1,0,0,0,0,0]];
let user1 = [[0,1,1,1,1,1,0,0,1,1,0], [1,1,1,1,1,1,0,0,1,1,0], [1,1,1,1,1,1,0,0,1,1,0], [1,1,1,1,1,1,0,0,1,1,0],
    [1,1,1,1,1,1,0,0,1,1,0], [1,1,1,1,1,1,0,0,1,1,0], [1,1,1,1,1,1,0,0,1,1,0]];
let user2 = [[0,1,1,1,1,1,1,1,1,1,0], [1,1,1,1,1,1,1,1,1,1,0], [1,1,1,1,1,1,1,1,1,1,0], [1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,0], [1,1,1,1,1,1,1,1,1,1,0], [1,1,1,1,1,1,1,1,1,1,0]];
let user3 = [[1,1,1,1,1,1,1,1,1,1,0], [1,1,1,1,1,1,1,1,1,1,0], [1,1,1,1,1,1,1,1,1,1,0], [1,1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,0], [1,1,1,1,1,1,1,1,1,1,0], [1,1,1,1,1,1,1,1,1,1,0]];
let userArray = new Array(user0, user1, user2, user3);


let cellArray = new Array(columnCnt);   //2차원 배열 생성
   for(let j = 0; j < columnCnt; j++)
        cellArray[j] = new Array(rowCnt);

for(let k = 0; k < rowCnt; k++)    //2차원 배열 초기화
    for(let j = 0; j < columnCnt; j++) {
      cellArray[j][k] = 0;
   }

function TimeResult() {
        const loadTable = async() => {
            await axios.get('http://localhost:5000/api/time')
                .then((response)=>{
                    console.log('success');
                })
                .catch((error)=>{
                    console.log('fail');
                })

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
          {onloadTable()}
      </div>

      <div className="area" style={{float: "right"}}>
        <button id="resultButton" onClick={showResult}>사용자별 결과보기</button>
      </div>
    </div>
  );
}

function onloadTable(){
    document.addEventListener("DOMContentLoaded", function(e) {
        let tdArray = document.getElementsByClassName('ttdm');
        console.log(tdArray);
        for (let i = 0; i < userCnt; i++) {
            let user = userArray[i];
            for (let j = 0; j < columnCnt; j++)
                for (let k = 0; k < rowCnt; k++) {
                    if (user[j][k] == 1)
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
    });
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

export default TimeResult;
