import React, { Component } from 'react';
import './TimeTableMerge.css';

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
    const columnCnt = 7;
    const array = ['월', '화', '수', '목', '금', '토', '일'];
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
            td.className = 'ttdm';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}


export default TimeTable;
