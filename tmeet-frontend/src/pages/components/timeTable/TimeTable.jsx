import React, { Component } from 'react';
import './TimeTable.css';

let dragging = false;
let startTd = 0,
  curTd = 0;

class TimeTable extends Component {
  render() {
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
      </div>
    );
  }
}

function appendTable() {
  const rowCnt = 11;
  const columnCnt = 5;
  const array = ['월', '화', '수', '목', '금'];
  let table = document.createElement('table');
  let thead = document.createElement('thead');
  for (let j = 0; j < columnCnt; j++) {
    let th = document.createElement('th');
    th.innerHTML = array[j];
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

export default TimeTable;
