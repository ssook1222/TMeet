import React from 'react';
import './TimeSelect.css';
import NavBar from '../components/navigationBar/NavBar';

function TimeSelect() {
  return (
    <div>
      <div className="App">
        <NavBar></NavBar>
      </div>
      <div className="select">
        <div className="regularly">
          <input type="radio" name="type" value="1" checked /> 정기적 모임
          <div>
            <button onClick={toggleClick}>월</button>
            <button onClick={toggleClick}>화</button>
            <button onClick={toggleClick}>수</button>
            <button onClick={toggleClick}>목</button>
            <button onClick={toggleClick}>금</button>
            <button onClick={toggleClick}>토</button>
            <button onClick={toggleClick}>일</button>
          </div>
        </div>
        <div className="not">
          <input type="radio" name="type" value="2" />
          비정기적 모임
          <br />
          <br />
          <div>
            <input type="date" />
            &nbsp;부터&nbsp; <input type="number" min="1" max="7" />
            &nbsp;일
          </div>
        </div>
      </div>
    </div>
  );
}

function toggleClick(e) {
  if (e.target.style.backgroundColor !== 'rgb(113, 201, 206)')
    e.target.style.backgroundColor = '#71c9ce';

  else if((e.target.style.backgroundColor === 'rgb(113, 201, 206)') )
    e.target.style.backgroundColor = 'white';
}

export default TimeSelect;
