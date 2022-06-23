import React from 'react';
import './LoginMain.css';
import {TextField} from '@mui/material';
import Button from "@mui/material/Button";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import * as yup from "yup";
import {useFormik} from "formik";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import {Image} from "@mui/icons-material";

const theme = createTheme({
    status: {
        bt_back: '#F4FDFD'
    }
});

const validationSchema = yup.object({
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

function Login() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div style={{backgroundColor:"#F4FDFD",
            width: "100%",
            height: "100vh"}}>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="lg" style={{
                    display:'flex',
                    height:'100%',
                    alignItems: 'center'}}>
                    <Container component="main" maxWidth="sm" style={{
                        backgroundColor:"white"}}>
                        <CssBaseline />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <img sx={{ m: 1 }}
                                 style={{marginBottom:"10px"}}
                                 src="img/time.png"></img>
                            <Typography component="h6" variant="h6"
                                        style={{color:"#555555"}}>
                                Tmeet을 사용하시려면 로그인이 필요합니다.
                            </Typography>
                            <Box component="form"
                                 onSubmit={formik.handleSubmit}
                                 noValidate sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                                <Button type="submit"
                                        style={{
                                            backgroundColor:"#a7d4d4",
                                            boxShadow:"none"
                                        }}
                                        fullWidth variant="contained"
                                        sx={{ mt: 3, mb: 2 }}>
                                    <b>Sign In</b>
                                </Button>
                                <hr/>
                                <h4 style={{color:"#656262", textAlign: "center"}}>혹은 SNS로 로그인하기</h4>

                                <div style={{display:"block", margin:"auto", width:"50%"}}>
                                    <Button
                                        style={{
                                            width:"50%",
                                            display:"inline-block",
                                            margin:"auto"}}
                                    >
                                        <img
                                            style={{width:"3vw"}}
                                            src={"img/google.png"}></img>
                                    </Button>
                                    <Button
                                        style={{
                                            width:"50%",
                                            display:"inline-block",
                                            margin:"auto"}}
                                    >
                                        <img
                                            style={{width:"3vw"}}
                                            src={"img/kakao-talk.png"}></img>
                                </Button>
                                </div>

                                <h5 style={{textAlign:"center",
                                    marginTop:"5px",
                                    marginBottom:"2px"
                                }}>계정이 없으신가요?</h5>
                                <Link href="#"
                                      style={{display:"inline-block",
                                          textAlign:"center",
                                          width:"100%",
                                          marginBottom:"5px"
                                        }}
                                      variant="body2">
                                    {"회원가입"}
                                </Link>
                            </Box>
                        </Box>
                    </Container>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default Login;