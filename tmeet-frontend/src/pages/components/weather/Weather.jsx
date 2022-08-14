import React, { useEffect } from 'react';
import axios from 'axios';
import {TiWeatherSunny,TiWeatherDownpour,TiWeatherSnow,TiWeatherCloudy} from "react-icons/ti";

//weathercontroller에서 날씨 가져오기

var weatherList =
    [
        {date: "8월 13일", weather: "", rain : "30.0~50.0mm", snow : "강수없음"},
        {date: "8월 14일", weather: "", rain : "5.0mm", snow : "10.0mm"},
        {date: "8월 15일", weather: "맑음", rain : "강수없음", snow : "적설없음"},
        {date: "8월 16일", weather: "", rain : "강수없음", snow : "10.0mm"},
        {date: "8월 17일", weather: "", rain : "50.0mm", snow : "강수없음"},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ]

window.onload = function () {
    for(let j = 0 ; j<weatherList.length+1 ; j++){
        if(weatherList[j] == null){
            document.getElementById("w"+j).style.display = "none"
        }
    }
}

const weatherIcon = () =>{
    var i = 0;
    var iconSize = "4rem"
    var rainlength = weatherList[i].rain.length
    var snowlength = weatherList[i].snow.length
    var ssss = weatherList[2].rain.length
    var ssss1 = weatherList[2].rain

    const selectIcon1 = () => {
        if (weatherList[i].weather == "맑음") {
            return <TiWeatherSunny size={iconSize} color="#46B3B9"/>;
        } if (weatherList[i].weather == "구름많고 비" || weatherList[i].weather == "구름많고 소나기" || weatherList[i].weather == "흐리고 비" ||weatherList[i].weather == "흐리고 소나기" ||
            (weatherList[i].weather == "" && weatherList[i].rain != "강수없음" &&  weatherList[i].snow == "강수없음") || (weatherList[i].weather == "" && weatherList[i].rain != "강수없음" &&  weatherList[i].snow != "적설없음")) {
            return <TiWeatherDownpour size={iconSize} color="#46B3B9"/>;
        } if (weatherList[i].weather == "구름많고 눈" || weatherList[i].weather == "흐리고 눈" ||
            (weatherList[i].weather == "" && weatherList[i].rain == "강수없음" &&  weatherList[i].snow != "적설없음")) {
            return <TiWeatherSnow size={iconSize}color="#46B3B9"/>;
        } if (weatherList[i].weather == "구름많음" || weatherList[i].weather == "흐림") {
            return <TiWeatherCloudy size={iconSize} color="#46B3B9"/>;
        } if (weatherList[i].rain != "강수없음" && weatherList[i].snow != "적설없음"){
            return null;
        } else {
            return null;
        }
    }
    const selectIcon2 = () => {
        i++;
        if (weatherList[i].weather == "맑음") {
            return <TiWeatherSunny size={iconSize} color="#46B3B9"/>;
        } if (weatherList[i].weather == "구름많고 비" || weatherList[i].weather == "구름많고 소나기" || weatherList[i].weather == "흐리고 비" ||weatherList[i].weather == "흐리고 소나기" ||
                (weatherList[i].weather == "" && weatherList[i].rain != "강수없음" &&  weatherList[i].snow == "강수없음") || (weatherList[i].weather == "" && weatherList[i].rain != "강수없음" &&  weatherList[i].snow != "적설없음")) {
            return <TiWeatherDownpour size={iconSize} color="#46B3B9"/>;
        } if (weatherList[i].weather == "구름많고 눈" || weatherList[i].weather == "흐리고 눈" ||
            (weatherList[i].weather == "" && weatherList[i].rain == "강수없음" &&  weatherList[i].snow != "적설없음")) {
            return <TiWeatherSnow size={iconSize}color="#46B3B9"/>;
        } if (weatherList[i].weather == "구름많음" || weatherList[i].weather == "흐림") {
            return <TiWeatherCloudy size={iconSize} color="#46B3B9"/>;
        } if (weatherList[i].rain != "강수없음" && weatherList[i].snow != "적설없음"){
            return null;
        } else {
            return null;
        }
    }
    return(
        <body>
        <div style={{display : "flex", justifyContent : "space-between"}}>
            <div id = "w0">
                {weatherList[0].date}
                {selectIcon1()}
            </div>
            <div id = "w1">
                {weatherList[1].date}
                {selectIcon2()}
            </div>
            <div id = "w2">
                {weatherList[2].date}
                {selectIcon2()}
            </div>
            <div id = "w3">
                {weatherList[3].date}
                {selectIcon2()}
            </div>
            <div id = "w4">
                {weatherList[4].date}
                {selectIcon2()}
            </div>
            <div id = "w5">
                {weatherList[5].date}
                {selectIcon2()}
            </div>
            <div id = "w6">
                {weatherList[6].date}
                {selectIcon2()}
            </div>
            <div id = "w7">
                {weatherList[7].date}
                {selectIcon2()}
            </div>
            <div id = "w8">
                {weatherList[8].date}
                {selectIcon2()}
            </div>
            <div id = "w9">
                {weatherList[9].date}
                {selectIcon2()}
            </div>
        </div>
        </body>
    )
}

const WeatherApp = () => {
    // 전체 store에서 playerReducer 에서 사용중인 players 데이터를 가져온다.
    // const players = useSelector(state => state.playerReducer.players);
    // const dispatch = useDispatch();

    //Weathercontroller에서 데이터를 가져와야함
    // const submit = async () => {
    //         try{
    //             body.timetable = JSON.stringify(body.timetable);
    //             console.log(body.timetable);
    //             const submitResult = await axios.post('/api/weather',body);
    //             console.log(submitResult);
    //             //window.location.href="/timeresult";
    //         } catch (e){
    //             console.log(e);
    //         }
    //     }

    return (
        <body>
        <div style={{color : "#46B3B9"}}>
            {weatherIcon()}
        </div>
        </body>
    )
}

export default WeatherApp;