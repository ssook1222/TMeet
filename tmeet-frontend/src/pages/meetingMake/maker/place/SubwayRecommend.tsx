import * as React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";

const SubwayMain = () => {

    const [lat, setLat] = useState(0.0)
    const [lng, setLng] = useState(0.0)
    var start = '126.852912,37.574028'
    var goal
    const [time, setTime] = useState(0)
    const [subway_name,setSubway_name] = useState("불러오는 중입니다...")

    useEffect(() => {
        findSubway()
    }, []);


    const mapStyle = {
        width: '100%',
        height: '30vw',
        marginBottom: '30px'
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
                setSubway_name(findResult.data.subway_name)

                goal = findResult.data.res_lng+','+findResult.data.res_lat

                console.log(findResult.data.res_lat)
                console.log(findResult.data.res_lng)

                let map = null
                const initMap = () => {
                    map = new naver.maps.Map('map', {
                        center: new naver.maps.LatLng(findResult.data.res_lat, findResult.data.res_lng),
                        zoom: 18,
                        mapTypes: new naver.maps.MapTypeRegistry({
                            'normal': naver.maps.NaverStyleMapTypeOptions.getNormalMap(
                                {
                                    overlayType: 'bg.sw.lko'
                                }
                            )
                        })
                    });
                }
                initMap()
                findTime()
            } catch (e){
                console.log(e);
            }
        }
        find()
    };
    const findTime = () => {

        const duration = async () => {
            try{
                const findResult = await axios.get('/api/subway-time/'+start+'/'+goal);
                console.log(findResult)
                setTime(Math.round(findResult.data.time))
            }
            catch (e) {
                console.log(e)
            }
        }
        duration()
    }

    return(
        <div>
            <h2 style={{marginTop:"50px",textAlign:"center"}}><b>모임 중간 지하철역</b> 추천 결과입니다.</h2>
            <h3 style={{marginTop:"50px",textAlign:"center", marginBottom:"10px"}}> 추천 결과 : <b>{subway_name}</b></h3>
            <h3 style={{marginTop:"10px",textAlign:"center", marginBottom:"50px"}}>예상 소요 시간 : <b>{time}</b>분</h3>
            <div style={{width:"80%", display:"block", margin:"auto"}}>
                <div id="map" style={mapStyle}/>
            </div>
        </div>
    );
}

export default SubwayMain;