import React, {Component, useEffect, useState} from 'react';
import './TimeTableMerge.css';
import axios from "axios";

function TimeTable() {
    const [theadArray, setTheadArray] = useState([]);
    const rowCnt = 22;
    let columnCnt = 0;
    
    function appendTable() {
        //meeting_id로 thead 가져오기
        useEffect(()=> {
            const loadThead = async () => {
                await axios.get('/api/meeting',
                    {params: {meeting_id: sessionStorage.getItem("meeting_id")}}
                )
                    .then(function (response) {
                        console.log(JSON.parse(response.data));
                        console.log(theadArray);
                        setTheadArray(JSON.parse(response.data));
                    })
                    .catch(() => {
                        console.log('fail');
                    })
            }
            loadThead();
        },[]);
        console.log(theadArray.length);
        columnCnt = theadArray.length;

        //태이블 그리기
        if(columnCnt != 0) {
            let table = document.createElement('table');
            let thead = document.createElement('thead');
            console.log(columnCnt);
            for (let j = 0; j < columnCnt; j++) {
                let tth = document.createElement('th');
                console.log(theadArray[j]);
                tth.className="tth";
                tth.innerHTML = theadArray[j];
                thead.appendChild(tth);
            }
            table.appendChild(thead);

            for (let i = 0; i < rowCnt; i++) {
                let tr = document.createElement('tr');
                for (let j = 0; j < columnCnt; j++) {
                    let ttdm = document.createElement('td');
                    ttdm.className = 'ttdm';
                    tr.appendChild(ttdm);
                }
                table.appendChild(tr);
            }
            document.getElementById("tt2").appendChild(table);
        }
    }
        return (
            <div id="ttwrap">
                <div id="tt1" style={{ display: 'inline-block', float: 'left' }}>
                    <table>
                        <thead className="th"></thead>
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
            </div>
        );
}

export default TimeTable;
