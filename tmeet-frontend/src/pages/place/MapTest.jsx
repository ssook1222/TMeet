import React, {useEffect} from "react";

const TestMap = () => {
    useEffect(() => {
        let map = null
        let marker = null
        const initMap = () => {
            map = new naver.maps.Map('map', {
                center: new naver.maps.LatLng(37.527666408103, 	126.86157157014),
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
                position: new naver.maps.LatLng(37, 127.039573), //Marker 추가, 좌표에 마커가 찍힌다.
                map: map,
                icon: {
                    content: `
              <img alt="marker" /> //마커에 사용할 이미지, 후에 src 추가 
            `
                }
            });
        }
        initMap()
    }, [])

    const mapStyle = {
        width: '100%',
        height: '22vw'
    }

    return (
         <div id="map" style={mapStyle} />
    )
}

export default TestMap
