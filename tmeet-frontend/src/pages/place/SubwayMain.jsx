import * as React from 'react';
import NavBar from "../components/navigationBar/NavBar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import {Box} from "@mui/material";
import {Marker, NaverMap, RenderAfterNavermapsLoaded} from "react-naver-maps";

const SubwayMain = () => {

    return(
        <div style={{
            backgroundColor:"#F8FFFF",
            width: "100%",
            height: "100vh"}}>
            <NavBar></NavBar>
            <h2 style={{marginTop:"30px",marginBottom:"-150px",textAlign:"center"}}>모임 장소 결과입니다.</h2>
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
                        loading={<p>Maps Loading...</p>}
                    >
                        <NaverMap
                            style={{
                                width: '100%',
                                height: '50%'}}
                            mapDivId="map"
                            defaultCenter={{ lat: 37.49988, lng: 127.03856 }}
                            defaultZoom={16}
                            zoomControl={true} // 지도 zoom 허용
                        >
                            <Marker
                                position={{lat: 37.49988, lng: 127.03856}}
                                onClick={()=>alert("여기가 중간지점입니다.")}
                                icon={{
                                    url: "https://static.thenounproject.com/png/17626-200.png",
                                    scaledSize:{width:32,height:32},
                                    size:{width:32,height:32}
                                }}
                            />
                        </NaverMap>
                    </RenderAfterNavermapsLoaded>
            </Container>
        </div>
    );

}

export default SubwayMain;