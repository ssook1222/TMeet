import React from 'react';
import './TimeSelect.css';
import NavBar from '../components/navigationBar/NavBar';
import axios from "axios";

function TimeSelect() {
  return (
    <div>
      <div className="App">
        <NavBar></NavBar>
      </div>
      <h3>정기적 모임/비정기적 모임 여부와 원하는 요일/날짜를 선택해주세요</h3>
      <div className="select">
        <div className="regularly">
          <input type="radio" name="type" value="1" defaultChecked /> 정기적 모임
          <br/>
          <br/>
          <div>
            <button className="day" onClick={toggleClick}>월</button>
            <button className="day" onClick={toggleClick}>화</button>
            <button className="day" onClick={toggleClick}>수</button>
            <button className="day" onClick={toggleClick}>목</button>
            <button className="day" onClick={toggleClick}>금</button>
            <button className="day" onClick={toggleClick}>토</button>
            <button className="day" onClick={toggleClick}>일</button>
          </div>
        </div>
        <div className="notRegularly">
          <input type="radio" name="type" value="2" />
          비정기적 모임
          <br />
          <br />
          <div>
            <input type="date" id="date"/>
            &nbsp;부터&nbsp; <input type="number" id="number" min="1" max="7" />
            &nbsp;일
          </div>
        </div>
      </div>
      <button id="submit" onClick={save}>확인</button>
    </div>
  );
}

function toggleClick(e) {
  if (e.target.style.backgroundColor !== 'rgb(113, 201, 206)')
    e.target.style.backgroundColor = '#71c9ce';

  else if((e.target.style.backgroundColor === 'rgb(113, 201, 206)') )
    e.target.style.backgroundColor = 'white';
}

 function save() {
   let body = {
     user_array: new Array(),
     thead: new Array(),
     is_regular: true
   };
   let radio = document.getElementsByName('type');
   const submit = async () => {
     try {
       body.thead = JSON.stringify(body.thead);
       console.log(body.thead);
       const submitResult = await axios.post('/api/meeting', body);
       console.log(submitResult);
     }
     catch (e) {
       console.log(e);
     }
   }

   if (radio[0].checked) {
     body.is_regular = true;
     let days = document.getElementsByClassName("day");
     for (let i = 0; i < days.length; i++)
       if (days[i].style.backgroundColor === 'rgb(113, 201, 206)')
         body.thead.push(days[i].innerHTML);
   }

   else if (radio[1].checked) {
     body.is_regular = false;
     let date = document.getElementById("date").value;
     let dateStart = new Date(date);
     let dateStartString = dateStart.getMonth()+1 + "/" + dateStart.getDate();
     body.thead.push(dateStartString);
     let number = document.getElementById("number").value;

     for(let i=2; i <= number; i++) {
       let dateObject = dateStart;
       dateObject.setDate(dateObject.getDate() + 1);
       let dateString = dateObject.getMonth()+1 + "/" + dateObject.getDate();
       body.thead.push(dateString);
     }
   }
   console.log(body.thead);
   submit();

}


export default TimeSelect;
