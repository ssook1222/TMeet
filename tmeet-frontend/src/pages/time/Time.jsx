import React from 'react';
import TimeTable from '../components/timeTable/TimeTable.jsx';
import NavBar from '../components/navigationBar/NavBar';
import './Time.css';

function Time() {
  return (
    <div>
      <div className="App">
      </div>

      <div className="timeTable">
        <h3 id="h3">가능한 시간대를 드래그하여 선택하세요.</h3>
        <TimeTable></TimeTable>
      </div>
    </div>
  );
}

export default Time;
