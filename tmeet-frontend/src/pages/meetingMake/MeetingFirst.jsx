import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MeetingSecond from "./MeetingSecond.tsx";
import MeetingThird from "./MeetingThird"
import MeetingFourth from "./MeetingFourth"

const steps = ['모임 참가자 선택', '모임 시간 선택', '모임 장소 추천'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <MeetingSecond />;
        case 1:
            return <MeetingThird />;
        case 2:
            return <MeetingFourth />;
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme();

export default function MeetingFirst() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        <b>모임생성</b>
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    모임생성이 완료되었습니다.
                                </Typography>
                                <hr/>
                                <Typography variant="subtitle1">
                                    최종적으로 선택된 모임을 확인하려면 <br/>
                                    우측 상단의 '모임확인'을 눌러주세요.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }} style={{color:"#6ec2c6"}}>
                                            뒤로 이동하기
                                        </Button>
                                    )}

                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                        style={{color:"white", backgroundColor:"#6ec2c6"}}
                                    >
                                        {activeStep === steps.length - 1 ? '모임 생성하기' : '다음 단계로'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>
    );
}