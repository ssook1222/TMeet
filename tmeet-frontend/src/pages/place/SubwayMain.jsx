import * as React from 'react';
import NavBar from "../components/navigationBar/NavBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import {useEffect, useState} from "react";

const SubwayMain = () => {

    const [lat, setLat] = useState(0.0)
    const [lng, setLng] = useState(0.0)

    useEffect(() => {
        findSubway()
    }, []);


    const mapStyle = {
        width: '100%',
        height: '22vw'
    }

    const findSubway = () => {
        const find = async () => {
            try{
                let body = [{"subway_name": "대림역", "name": "Tom"},
                        {"subway_name": "신정네거리", "name": "Alice"},
                        {"subway_name": "고속터미널역", "name": "Alice"}
                ] //실제로는 사용자 입력 값 -> 세션 스토리지에 저장된 데이터 이용해서 할 것
                const findResult = await axios.post('/api/subway', body);
                setLat(findResult.data.res_lat)
                setLng(findResult.data.res_lng)

                let map = null
                let marker = null
                const initMap = () => {
                    map = new naver.maps.Map('map', {
                        center: new naver.maps.LatLng(findResult.data.res_lng, findResult.data.res_lng),
                        zoom: 18,
                        mapTypes: new naver.maps.MapTypeRegistry({
                            'normal': naver.maps.NaverStyleMapTypeOptions.getNormalMap(
                                {
                                    overlayType: 'bg.sw.lko'
                                }
                            )
                        })
                    });
                    marker = new naver.maps.Marker({
                        position: new naver.maps.LatLng(findResult.data.res_lng, findResult.data.res_lng), //Marker 추가, 좌표에 마커가 찍힌다.
                        map: map,
                        icon: {
                            content: `
              <img alt="marker" />
            `
                        }
                    });
                }
                initMap()

            } catch (e){
                console.log(e);
            }
        }
        find()
    };

    return(
        <div style={{
            backgroundColor:"#F8FFFF",
            width: "100%",
            height: "100vh"}}>
            <NavBar></NavBar>
            <h2 style={{marginTop:"50px",marginBottom:"-180px",textAlign:"center"}}><b>모임 중간 장소</b> 추천 결과입니다.</h2>
            <Container
                component="main"
                maxWidth="lg"
                style={{
                    display:'flex',
                    height:'100%',
                    alignItems: 'center'
                }}
            >
                <CssBaseline />
                    <div id="map" style={mapStyle} />
            </Container>
        </div>
    );

}

export default SubwayMain;