import * as React from 'react';
import NavBar from "../components/navigationBar/NavBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import {Marker, NaverMap, RenderAfterNavermapsLoaded} from "react-naver-maps";
import axios from "axios";
import {useEffect, useState} from "react";

const SubwayMain = () => {

    const [lat, setLat] = useState(0.0)
    const [lng, setLng] = useState(0.0)
    const findResult

    useEffect(() => {
        findSubway()
    }, []);

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
                    <RenderAfterNavermapsLoaded
                        ncpClientId="pnq5016zbg"
                        // 네이버 클라우드에서 받은 client id를 적어야 한다.
                        // 필자는 환경변수 이용
                        error={<p>Maps Load Error</p>}
                        loading={<p>Loading Finish</p>}
                    >
                        <NaverMap
                            style={{
                                width: '100%',
                                height: '50%'}}
                            mapDivId="map"
                            defaultCenter={{lat: lng, lng: lat}} //{lat:lng, lng:lat}
                            defaultZoom={16}
                            zoomControl={true} // 지도 zoom 허용
                        >
                            <Marker
                                position={{lat: 37.509032000000005, lng: 126.94041200000001}}
                                onClick={()=>alert("여기가 중간지점입니다.")}
                            />
                        </NaverMap>
                    </RenderAfterNavermapsLoaded>
            </Container>
        </div>
    );

}

export default SubwayMain;