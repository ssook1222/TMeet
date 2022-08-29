import {useEffect, useState} from 'react';
import * as React from 'react';
import axios from 'axios';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';


function WeatherIcon() {

    var dayList = [];
    var weatherList = [];

    useEffect(() => {
        getWeather()
    }, []);

    async function getWeather() {
        try{
            await axios.get('/api/weather')
                .then(function (response){
                    dayList.push(response.data);
                });
        } catch (e){
            console.log(e);
        }
        // findWeather()
        console.log(dayList)

        for (let i=0; dayList[0].length; i++){

        }
    }

    // function findWeather() {
    //     weatherLst2 = weatherLst1.flat();
    //     let resultId = document.getElementById('weather');
    //     let parent = resultId.parentElement;
    //     for (let i = 0; parent.childElementCount <=weatherLst2.length; i++) {
    //
    //         let weatherDate = document.createElement('div');
    //         console.log(weatherLst2[i].date)
    //         weatherDate.innerHTML = weatherLst2[i].date;
    //         parent.appendChild(weatherDate);
    //
    //         //Object 에러
    //         let weatherIcon = document.createElement('span');
    //         weatherIcon.innerHTML = <span className="material-icons"> wb_sunny </span>;
    //         // weatherIcon.innerHTML = <span className="material-icons"> wb_sunny </span>;
    //         parent.appendChild(weatherIcon);
    //     }
    // }

    return (
        <div style={{display: "flex"}}>
            {/*<div id="weather" onLoad={findWeather}></div>*/}
        </div>
    );
}


export default WeatherIcon;



// var i = 0;
// const selectIcon = () => {
//     if (weatherList[i].weather == "맑음" || (weatherList[i].rain ="강수없음" && weatherList[i].snow == "적설없음")) {
//         return(
//             <body>
//             <div>
//                 {weatherList[i].date}
//                 <WbSunnyIcon color="#46B3B9" style={{fontSize : "3.5rem"}}/>
//             </div>
//             </body>
//         )
//     } if (weatherList[i].weather == "구름많고 비" || weatherList[i].weather == "구름많고 소나기" || weatherList[i].weather == "흐리고 비" ||weatherList[i].weather == "흐리고 소나기" ||
//         (weatherList[i].weather == '' && weatherList[i].rain != "강수없음" &&  weatherList[i].snow == "강수없음") || (weatherList[i].weather == '' && weatherList[i].rain != "강수없음" &&  weatherList[i].snow != "적설없음")) {
//         return(
//             <body>
//             <div>
//                 {weatherList[i].date}
//                 <UmbrellaIcon color="#46B3B9" style={{fontSize : "3.5rem"}}/>
//             </div>
//             </body>
//         )
//     } if (weatherList[i].weather == "구름많고 눈" || weatherList[i].weather == "흐리고 눈" ||
//         (weatherList[i].weather == '' && weatherList[i].rain == "강수없음" &&  weatherList[i].snow != "적설없음")) {
//         return(
//             <body>
//             <div>
//                 {weatherList[i].date}
//                 <AcUnitIcon color="#46B3B9" style={{fontSize : "3.5rem"}}/>
//             </div>
//             </body>
//         )
//     } if (weatherList[i].weather == "구름많음" || weatherList[i].weather == "흐림") {
//         return(
//             <body>
//             <div>
//                 {weatherList[i].date}
//                 <WbCloudyIcon color="#46B3B9" style={{fontSize : "3.5rem"}}/>
//             </div>
//             </body>
//         )
//     } if (weatherList[i].weather == '' && weatherList[i].rain != "강수없음" && weatherList[i].snow != "적설없음"){
//         return null;
//     } else {
//         return null;
//     }
// }