import * as React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Weather from "../../../dto/Weather";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

function WeatherIcon() {

    const [weatherList, setWeatherList] = useState<Array<Weather>>([]);



    useEffect(() => {
        findData()
    }, []);

    const findData = async () => {

        const res1 = await axios.get('http://localhost:5000/api/weather-short/3');
        const res2 = await axios.get('http://localhost:5000/api/weather-medium/3');
        const resWeather = [];
        resWeather.push(...res1.data, ...res2.data);
        console.log(resWeather)

        setWeatherList(resWeather)
    }

    return (
        <div style={{
            color: "#46B3B9",
            textAlign: "center",
            display: "flex",
        }}>
            <div id="weather" onLoad={findData}></div>
            {Array.from(Array(weatherList.length)).map((_, index) => (
                <Grid item xs={2} sm={6} md={6} key={index}>
                    <p>
                        <Typography>{weatherList[index].date}</Typography>
                        {
                            (weatherList[index].weather == "맑음" || (weatherList[index].rain == "강수없음" && weatherList[index].snow == "적설없음")) &&
                            <WbSunnyIcon style={{fontSize: "3.5rem", color: "#46B3B9"}}>
                            </WbSunnyIcon>
                        }

                        {
                            (weatherList[index].weather == "구름많고 비" || weatherList[index].weather == "구름많고 소나기"
                                || weatherList[index].weather == "흐리고 비" || weatherList[index].weather == "흐리고 소나기"
                                || (weatherList[index].weather == '' && weatherList[index].rain != "강수없음" && weatherList[index].snow == "강수없음")
                                || (weatherList[index].weather == '' && weatherList[index].rain != "강수없음" && weatherList[index].snow != "적설없음"))
                            &&
                            <UmbrellaIcon style={{fontSize: "3.5rem", color: "#46B3B9"}}>
                            </UmbrellaIcon>
                        }

                        {
                            (weatherList[index].weather == "구름많고 눈" || weatherList[index].weather == "흐리고 눈"
                                || (weatherList[index].weather == '' && weatherList[index].rain == "강수없음" && weatherList[index].snow != "적설없음"))
                            &&
                            <AcUnitIcon style={{fontSize: "3.5rem", color: "#46B3B9"}}>
                            </AcUnitIcon>
                        }

                        {
                            ((weatherList[index].weather == "구름많음") || weatherList[index].weather == "흐림")
                            &&
                            <WbCloudyIcon style={{fontSize: "3.5rem", color: "#46B3B9"}}>
                            </WbCloudyIcon>
                        }
                        {
                            (weatherList[index].weather == "조회 불가")
                            &&
                            <Typography>{weatherList[index].weather}</Typography>
                        }
                        <div style={{marginLeft: "6vh"}}></div>
                    </p>
                </Grid>
            ))}
        </div>
    )
}

export default WeatherIcon;