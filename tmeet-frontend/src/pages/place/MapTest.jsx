import React from "react";
import {NaverMap, RenderAfterNavermapsLoaded} from "react-naver-maps";
function Home() {
    return (
        <RenderAfterNavermapsLoaded
            ncpClientId={"pnq5016zbg"}
            // 네이버 클라우드에서 받은 client id를 적어야 한다.
            // 필자는 환경변수 이용
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
        >
            <NaverMap
                mapDivId={'please'}
                style={{
                    width:"100%",
                    height:"400px"
                }}
                defaultCenter={{ lat: 37.49988, lng: 127.03856 }}
                defaultZoom={16}
                zoomControl={true} // 지도 zoom 허용
            />
            <p>Navermaps Loaded!</p>
        </RenderAfterNavermapsLoaded>
    );
}

export default Home;