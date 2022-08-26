import * as React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Weather from "../../../dto/Weather";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
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
        const  res = await axios.get('http://localhost:5000/api/weather');
        setWeatherList(res.data)
    }

    console.log(weatherList)



    return(
        <div>
        {Array.from(Array(weatherList.length)).map((_, index) => (
                <Grid item xs={2} sm={6} md={6} key={index}>
                    <p>
                        <Typography>{weatherList[index].date}</Typography>
                    </p>
                </Grid>
        ))}
        </div>
    )

}

export default WeatherIcon;