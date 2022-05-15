import React from 'react';
import './LoginMain.css';
import {Card, TextField} from '@mui/material';
import Button from "@mui/material/Button";


function Login() {
    return (
        <div>
            <body className="back">
                <div className="top"></div>
                <Card className="loginCard" variant="outlined">
                    <img className="logo" src="img/time.png"></img>
                    <h3 style={{color:"#656262"}}>티밋을 사용하시려면 로그인이 필요합니다.</h3>
                    <div className="form">
                        <TextField
                            margin="normal"
                            variant="filled"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            variant="filled"
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}}
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </div>
                    <hr style={{color:"#656262",width:"80%", marginLeft:"auto", marginRight:"auto", marginBottom:"10px"}}/>
                    <Button
                        type="submit"
                        style={{backgroundColor:"#acdede", boxShadow: "none",
                            fontFamily: 'Noto Sans KR', fontWeight:"100",
                            width:"70%"}}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    ><b>로그인</b></Button>
                    <h4 style={{marginLeft:"auto", marginRight:"auto", color:"#656262", fontFamily: 'Noto Sans KR'}}>혹은 SNS로 로그인하기</h4>
                </Card>
            </body>
        </div>

    );
}

export default Login;