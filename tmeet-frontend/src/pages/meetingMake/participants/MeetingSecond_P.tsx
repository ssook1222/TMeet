import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useState} from "react";
import User from "../../../dto/User";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Chip} from "@mui/material";
import Container from "@mui/material/Container";

export default function MeetingSecond_P() {

    const [nickname, setNickname] = useState<Array<User>>([]);
    const [user, setUser] = useState<Array<User>>([]);

    let body;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        body = {
            nickname: data.get("nickname")
        }
        const onSubmit = async () => {
            const res  = await axios.post('/api/nickname', body);
            //1. user배열을 spread(...)연산자로 새로운 new_user 배열 생성
            const new_user = [...user]
            const new_user_nickname = [...nickname]

            //2. new_user에다가 서버에서 넘어온 객체를 추가한다. 바로 set ㄴㄴ
            //중복된 값이 없게끔 검사하고 넣어야 됨
            // -> 문제는 닉네임만 저장됨 다른 방법 찾아보기!!!
            if(nickname.includes(res.data.nickname)==false){
                new_user_nickname.push(res.data.nickname)
                new_user.push(res.data)
                console.log(res.data)
                //세션 스토리지에 저장해 놓고, 미팅 id가 새로 부여될 때 DB에 저장하기
            }

            else if(nickname.includes(res.data.nickname)==true){
                alert("이미 있는 닉네임입니다.")
            }
            //3. new_user를 setUser에 집어넣기
            setNickname(new_user_nickname)
            setUser(new_user)
        }
        onSubmit();
    }


    const onClick = () => {
        alert("모임 참가자 정보 등록이 완료되었습니다.")
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                모임 참가자 선택하기
                    <CssBaseline />
                    <Box
                        sx={{
                            backgroundColor:"#ffffff",
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginBottom: '10px'
                        }}
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            style={{
                                backgroundColor:"white",
                                width:"75%",
                                marginBottom:"15px"
                            }}
                            required
                            fullWidth
                            id="nickname"
                            label="닉네임"
                            name="nickname"
                            autoComplete="nickname"
                            variant="standard"
                            inputProps={{maxLength:15}}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="outlined"
                            sx={{ mt: 1, mb: 2 }}
                            style={{
                                marginLeft:"auto",
                                marginRight:"30px",
                                fontSize:"0.5rem",
                                color:"#555555",
                                width:"10%",
                                boxShadow:"none",
                                borderRadius:"10px",
                                marginBottom:"10px"
                            }}
                        >
                            Search
                        </Button>
                        <Grid
                            style={{marginLeft:"30px", marginRight:"10px", padding:"10px"}}
                            container spacing={{ xs: 1, md: 2 }} columns={{ xs: 6, sm:16, md: 16 }}>
                            {Array.from(Array(user.length)).map((_, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Chip
                                        label={nickname[index]} //4. 루프 돌릴 때 user로 돌리기
                                        variant="filled"
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Button
                            onClick={onClick}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{
                                width:"50%",
                                backgroundColor:"#6ec2c6",
                                boxShadow:"none",
                                borderRadius:"5px",
                                marginBottom:"30px"
                            }}
                        >
                            참가자 정보 저장하기
                        </Button>
                    </Box>
            </Typography>

        </React.Fragment>
    );
}