import * as React from 'react';
import NavBar from "../../components/navigationBar/NavBar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {Chip} from "@mui/material";
import axios from "axios";

function MeetingCheck() {

    let body;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        body = {
            id: 1, //실제로는 로그인 이후 세션 스토리지에서 id랑 함께 가져오기
            meeting_id:data.get("meeting_id")
        }
        const onSubmit = async () => {
            const res  = await axios.post('/api/meeting-people-lookup', body);
            if(res.data[0]!==undefined){
                alert("참가자 인증이 완료되었습니다.");
            }
        }
        onSubmit();
    }

    return (
        <div>
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    모임 참가자 인증하기
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
                                width:"50%",
                                marginBottom:"15px"
                            }}
                            required
                            fullWidth
                            id="meeting_id"
                            label="고유 미팅번호"
                            name="meeting_id"
                            autoComplete="meeting_id"
                            variant="standard"
                            inputProps={{maxLength:15}}
                        />
                        <Button
                            type="submit"
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
                            미팅 참가자 인증하기
                        </Button>
                    </Box>
                </Typography>

            </React.Fragment>
        </div>
    );
}

export default MeetingCheck;