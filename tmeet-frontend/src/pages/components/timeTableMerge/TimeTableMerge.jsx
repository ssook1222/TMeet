import React, {Component, useEffect, useState} from 'react';
import './TimeTableMerge.css';
import axios from "axios";

function TimeTable() {
    const [theadArray, setTheadArray] = useState([]);
    const rowCnt = 11;
    let columnCnt = 0;

    function appendTable() {
        useEffect(()=> {
            const loadThead = async () => {
                await axios.get('/api/meeting',
                    {params: {meeting_id: 5}}
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

        if(columnCnt != 0) {
            let table = document.createElement('table');
            let thead = document.createElement('thead');
            console.log(columnCnt);
            for (let j = 0; j < columnCnt; j++) {
                let th = document.createElement('th');
                console.log(theadArray[j]);
                th.innerHTML = theadArray[j];
                thead.appendChild(th);
            }
            table.appendChild(thead);

            for (let i = 0; i < rowCnt; i++) {
                let tr = document.createElement('tr');
                for (let j = 0; j < columnCnt; j++) {
                    let td = document.createElement('td');
                    td.className = 'ttdm';
                    tr.appendChild(td);
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
                <div id="tt2" style={{ display: 'inline-block', float: 'left' }}>
                    {appendTable()}
                </div>
            </div>
        );
}

export default TimeTable;
