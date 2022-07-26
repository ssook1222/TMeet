import * as React from 'react';
import NavBar from "../components/navigationBar/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Chip, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import User from "../../dto/User"
import axios from "axios";
import {useState} from "react";

const handleDelete = () => {
    console.info('You clicked the delete icon.');
};


const PlaceMain = () => {
    const [user, setUser] = useState<Array<User>>([]);

    let body;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        body = {
            nickname: data.get("nickname")
        }

        console.log(body)

        const onSubmit = async () => {
            const res  = await axios.post('/api/nickname', "lucy");
            console.log(res.data)
            setUser(res.data)
        }
        onSubmit();
    }

    return (
        <div style={{
            backgroundColor:"#F8FFFF",
            width: "100%",
            height: "100vh"
        }}>
            <NavBar></NavBar>
            <Container
                component="main"
                maxWidth="sm"
                style={{
                    display:'flex',
                    height:'100%',
                    alignItems: 'center'
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        backgroundColor:"#ffffff",
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: 'solid 1px #46B3B9',
                        borderRadius: '10px',
                        marginBottom: '10px'
                    }}
                >
                    <Typography style={{
                        marginTop:"30px",
                        marginBottom:"10px",
                        fontSize:"1.5rem"}}>
                        모임 참가자를 선택해주세요.
                    </Typography>
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
                                    label={user.nickname}
                                    variant="filled"
                                    onDelete={handleDelete}  />
                            </Grid>
                        ))}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{
                            width:"75%",
                            backgroundColor:"#a7d4d4",
                            boxShadow:"none",
                            borderRadius:"5px",
                            marginBottom:"30px"
                        }}
                    >
                        참가자들 간 거리 계산하기
                    </Button>
                </Box>
            </Container>
        </div>
    );
};

export default PlaceMain;