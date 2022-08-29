import React, {Component, useEffect, useState} from 'react';
import './TimeTable.css';
import axios from "axios";

const TimeTable = () => {
  const [theadArray, setTheadArray] = useState([]);
  let dragging = false;
  let startTd = 0,
      curTd = 0;
  let rowCnt = 22;
  let columnCnt = 0;

  //meeting_id에 따라 thead 가져와서 테이블 생성
  const appendTable = () => {
    useEffect(()=> {
      const loadThead = async () => {
        await axios.get('/api/meeting',
            {params: {meeting_id: 5}}
        )
            .then(function (response) {
              console.log(JSON.parse(response.data));
              console.log(theadArray);
              setTheadArray(JSON.parse(response.data));
              console.log(theadArray);
            })
            .catch(() => {
              console.log('fail');
            })
      }
      loadThead();
    },[]);
    columnCnt = theadArray.length;

    //테이블 생성
    if(columnCnt != 0) {
      let table = document.createElement('table');
      let thead = document.createElement('thead');
      console.log(columnCnt);
      for (let j = 0; j < columnCnt; j++) {
        let tth = document.createElement('th');
        console.log(theadArray[j]);
        tth.className='tth';
        tth.innerHTML = theadArray[j];
        thead.appendChild(tth);
      }
      table.appendChild(thead);

      for (let i = 0; i < rowCnt; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columnCnt; j++) {
          let ttd = document.createElement('td');
          ttd.className = 'ttd';
          ttd.addEventListener(
              'mousedown',
              function (e) {
                down(e);
              },
              false
          );
          ttd.addEventListener(
              'mouseover',
              function (e) {
                over(e);
              },
              false
          );
          ttd.addEventListener(
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

          ttd.addEventListener(
              'dragstart',
              function (e) {
                dragstart(e);
              },
              false
          );

          tr.appendChild(ttd);
        }
        table.appendChild(tr);
      }
      document.getElementById("tt2").appendChild(table);
    }
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
    if(columnCnt != 0) {
      console.log("button");
      let btn = document.createElement('button');
      btn.id = "submitButton"
      btn.innerHTML = "확인";
      btn.addEventListener("click", function (e) {
        let body = {
          email: ".",
          timetable: {}
        };

        const submit = async () => {
          try {
            body.timetable = JSON.stringify(body.timetable);
            console.log(body.timetable);
            const submitResult = await axios.post('/api/time', body);
            console.log(submitResult);
            //window.location.href = "/timeresult";
          } catch (e) {
            console.log(e);
          }
        }

        let tdArray = document.getElementsByClassName('ttd');

        for (let j = 0; j < columnCnt; j++) {
          let keyname = theadArray[j];
          body.timetable[keyname] = "";
          console.log(keyname);
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
      document.getElementById("ttwrap").appendChild(btn);
    }

  }
    return (
      <div id="ttwrap">
        <div id="tt1" style={{ display: 'inline-block', float: 'left' }}>
          <table>
            <thead className="th">
            </thead>
            <tbody>
              <tr>
                <td className="td">10:00</td>
              </tr>
              <tr>
                <td className="td"></td>
              </tr>
              <tr>
                <td className="td">11:00</td>
              </tr>
              <tr>
                <td className="td"></td>
              </tr>
              <tr>
                <td className="td">12:00</td>
              </tr>
              <tr>
                <td className="td"></td>
              </tr>
              <tr>
                <td className="td">13:00</td>
              </tr>
              <tr>
                <td className="td"></td>
              </tr>
              <tr>
                <td className="td">14:00</td>
              </tr>
              <tr>
                <td className="td"></td>
              </tr>
              <tr>
                <td className="td">15:00</td>
              </tr>
              <tr>
                <td className="td"></td>
              </tr>
              <tr>
                <td className="td">16:00</td>
              </tr>
              <tr>
                <td className="td"></td>
              </tr>
              <tr>
                <td className="td">17:00</td>
              </tr>
              <tr>
                <td className="td"></td>
              </tr>
              <tr>
                <td className="td">18:00</td>
              </tr>
              <tr>
                <td className="td"></td>
              </tr>
              <tr>
                <td className="td">19:00</td>
              </tr>
              <tr>
                <td className="td"></td>
              </tr>
              <tr>
                <td className="td">20:00</td>
              </tr>
              <tr>
                <td className="td"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="tt2" style={{ display: 'inline-block', float: 'left' }}>
          {appendTable()}
        </div>
        <div>{appendButton()}</div>
      </div>
    );
}

export default TimeTable;
