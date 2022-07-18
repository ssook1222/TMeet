import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from "../components/navigationBar/NavBar";
import axios from "axios";

const theme = createTheme(
    {
        status: {
            bt_back: '#F4FDFD'
        }
    }
);

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        if(data.get('email')===''){
            alert('이메일을 입력하지 않으셨습니다.')
        }

        else if(data.get('password')===''){
            alert('비밀번호를 입력하지 않으셨습니다.')
        }

        else if(data.get('nickname')===''){
            alert('닉네임을 입력하지 않으셨습니다.')
        }

        else if(data.get('subway')===''){
            alert('근처 지하철역을 입력하지 않으셨습니다.')
        }

        if(data.get('password')!==data.get('password_confirmation')){
            return alert('비밀번호와 비밀번호 재확인에 입력된 값이 다릅니다.');
        }

        let body = {
            email: data.get('email'),
            password: data.get('password'),
            nickname: data.get('nickname'),
            subway: data.get('subway')
        }

        const submit = async () => {
            try{
                const submitResult = await axios.post('/api/sign-up',body);
                alert("회원가입에 성공하였습니다.");
                window.location.href="/"

            } catch (e){
                console.log(e);
            }
        }

        if(data.get('email')!=='' && data.get('password')!=='' && data.get('nickname')!=='' && data.get('subway')!=='' && data.get('password')===data.get('password_confirmation')){
            submit();
        }
    };

    return (
        <div
            style={{backgroundColor:"white"}}
        >
            <NavBar></NavBar>
            <ThemeProvider theme={theme}>
            <Container
                component="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        backgroundColor:"#F9FFFF",
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: 'solid 1px #46B3B9',
                        borderRadius: '10px',
                        marginBottom: '30px'
                    }}
                >
                    <img sx={{ m: 1 }}
                         style={{
                             marginTop:"30px"
                         }}
                         src="img/time.png"></img>
                    <Box component="form" noValidate onSubmit={handleSubmit}
                         sx={{
                             mt: 3 ,
                             marginLeft: 5,
                             marginRight: 5,
                             marginTop: 5
                         }}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    style={{backgroundColor:"white"}}
                                    required
                                    fullWidth
                                    id="nickname"
                                    label="닉네임"
                                    name="nickname"
                                    autoComplete="nickname"
                                    inputProps={{maxLength:15}}
                                    helperText="닉네임은 15글자까지 가능합니다."
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    style={{backgroundColor:"white"}}
                                    required
                                    fullWidth
                                    id="email"
                                    label="이메일 주소"
                                    name="email"
                                    autoComplete="email"
                                    inputProps={{maxLength:30}}
                                    helperText="이메일은 30글자까지 입력 가능합니다."
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    style={{backgroundColor:"white"}}
                                    required
                                    fullWidth
                                    name="password"
                                    label="비밀번호"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    inputProps={{maxLength:8}}
                                    helperText="비밀번호는 8글자까지 입력 가능합니다."
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    style={{backgroundColor:"white"}}
                                    required
                                    fullWidth
                                    name="password_confirmation"
                                    label="비밀번호 재확인"
                                    type="password"
                                    id="password_confirmation"
                                    autoComplete="pass confirmation"
                                    inputProps={{maxLength:8}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    style={{backgroundColor:"white"}}
                                    required
                                    fullWidth
                                    name="subway"
                                    label="거주지에서 가까운 지하철역"
                                    type="name"
                                    id="subway"
                                    autoComplete="subway"
                                    inputProps={{maxLength:15}}
                                    helperText="지하철역은 15글자까지 입력 가능합니다."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{
                                backgroundColor:"#a7d4d4",
                                boxShadow:"none",
                                borderRadius:"5px",
                                marginBottom:"30px"
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
        </div>
    );
}