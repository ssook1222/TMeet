import * as React from 'react';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import axios from "axios";
import NavBar from "../components/navigationBar/NavBar";
import SubwayRecommend from "./place/SubwayRecommend.tsx";
import SearchList from "../place/SearchList.tsx";

export default function Review() {

    return (
        <React.Fragment>
            <div>
                <div style={{width:"80%", display:"block", margin:"auto"}}>
                    <SubwayRecommend></SubwayRecommend>
                    <h3 style={{textAlign:"center", marginBottom:"30px"}}>
                        <b>추천 모임 장소</b> 결과 리스트입니다.</h3>
                    <SearchList></SearchList>
                </div>
            </div>

        </React.Fragment>
    );
}