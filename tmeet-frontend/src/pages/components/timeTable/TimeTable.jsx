import React, { Component } from 'react';
import './TimeTable.css';
import axios from "axios";

let dragging = false;
let startTd = 0,
  curTd = 0;
const rowCnt = 11;
const columnCnt = 7;
const dayArray = ['월', '화', '수', '목', '금', '토', '일'];

function TimeTable() {
    return (
      <div>
        <div className="tt" style={{ display: 'inline-block', float: 'left' }}>
          <table>
            <tbody>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>10:00</td>
              </tr>
              <tr>
                <td>11:00</td>
              </tr>
              <tr>
                <td>12:00</td>
              </tr>
              <tr>
                <td>13:00</td>
              </tr>
              <tr>
                <td>14:00</td>
              </tr>
              <tr>
                <td>15:00</td>
              </tr>
              <tr>
                <td>16:00</td>
              </tr>
              <tr>
                <td>17:00</td>
              </tr>
              <tr>
                <td>18:00</td>
              </tr>
              <tr>
                <td>19:00</td>
              </tr>
              <tr>
                <td>20:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tt" style={{ display: 'inline-block', float: 'left' }}>
          {appendTable()}
        </div>
        <div>{appendButton()}</div>
      </div>
    );
}

function appendTable() {
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  for (let j = 0; j < columnCnt; j++) {
    let th = document.createElement('th');
    th.innerHTML = dayArray[j];
    thead.appendChild(th);
  }
  table.appendChild(thead);

  for (let i = 0; i < rowCnt; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < columnCnt; j++) {
      let td = document.createElement('td');
      td.className = 'ttd';
      td.addEventListener(
        'mousedown',
        function (e) {
          down(e);
        },
        false
      );
      td.addEventListener(
        'mouseover',
        function (e) {
          over(e);
        },
        false
      );
      td.addEventListener(
        'mouseup',
        function (e) {
          up(e);
        },
        false
      );

      document.body.addEventListener(
        'mouseup',
        function (e) {
          up(e);
        },
        false
      );

      td.addEventListener(
        'dragstart',
        function (e) {
          dragstart(e);
        },
        false
      );

      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  document.body.appendChild(table);
}

function down(e) {
  startTd = e.target;
  if (startTd.style.backgroundColor != 'aqua') startTd.style.backgroundColor = 'aqua';
  else startTd.style.backgroundColor = '#dff7f1';
  dragging = true;
}

function over(e) {
  if (dragging == true) {
    curTd = e.target;
    if (curTd.style.backgroundColor != 'aqua') curTd.style.backgroundColor = 'aqua';
    else curTd.style.backgroundColor = '#dff7f1';
  }
}

function up(e) {
  dragging = false;
}

function dragstart(e) {
  e.preventDefault();
}

function appendButton(){
  let btn = document.createElement('button');
  btn.innerHTML = "확인";
  btn.addEventListener("click", function(e){
    let body = {
      email: ".",
      timetable: {월:'', 화:'', 수:'', 목:'', 금:'', 토:'', 일:''}
    };

    const submit = async() =>{
      try{
        body.timetable = JSON.stringify(body.timetable);
        console.log(body.timetable);
        const submitResult = await axios.post('/api/time',body);
        console.log(submitResult);
        //window.location.href="/timeresult";
      } catch (e){
        console.log(e);
      }
    }

    let tdArray = document.getElementsByClassName('ttd');

    for(let j = 0; j < columnCnt; j++) {
      let keyname = dayArray[j];
      for (let k = 0; k < rowCnt; k++) {
        let tdIndex = k * columnCnt + j;
        if (tdArray[tdIndex].style.backgroundColor == 'aqua')
          body.timetable[keyname] += "1.";
        else
          body.timetable[keyname] += "0.";
      }
    }
    submit();
  });
  document.body.appendChild(btn);

}


export default TimeTable;
