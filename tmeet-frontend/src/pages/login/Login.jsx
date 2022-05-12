import React from 'react';
import './LoginMain.css';
import {Card} from '@mui/material';


function Login() {
    return (
        <div>
            <body className="back">
                <div className="test"></div>
                <Card className="loginCard" variant="outlined">
                    <h1>로고</h1>
                    <h3 style={{color:"#656262"}}>티밋을 사용하시려면 로그인이 필요합니다.</h3>
                </Card>
            </body>
        </div>

    );
}

export default Login;