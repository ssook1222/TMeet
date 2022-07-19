import * as React from 'react';
import NavBar from "../components/navigationBar/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const PlaceMain = () => {
    return (

        <div style={{
            backgroundColor:"#F8FFFF",
            width: "100%",
            height: "100vh"
        }}>
            <NavBar></NavBar>
            <Container
                component="main" maxWidth="sm">
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
                        marginBottom: '30px'
                    }}
                >
                    <Typography style={{ margin:"10px", fontSize:"1.5rem"}}>
                        모임 참가자를 선택해주세요.
                    </Typography>

                </Box>
            </Container>
        </div>
    );
};

export default PlaceMain;