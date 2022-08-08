import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import LoginSample from './pages/sample/LoginSample';
import TimeSample from './pages/sample/TimeSample';
import Time from './pages/time/Time';
import TimeSelect from './pages/timeselect/TimeSelect';
import TimeResult from './pages/timeresult/TimeResult';
import KakaoRedirectTest from './pages/login/KakaoLogin/KakaoRedirectTest';
import GoogleLogin from "./pages/login/GoogleLogin/GoogleLogin";
import SignUp from "./pages/sign-up/SignUp"
import PlaceMain from "./pages/place/PlaceMain.tsx";
import SubwayMain from "./pages/place/SubwayMain";
import MapTest from "./pages/sample/MapSample"
import MeetingCheck from "./pages/meetingCheck/MeetingCheck";
import MeetingChoice from "./pages/meetingCheck/meetingChoice/MeetingChoice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/sample/login" element={<LoginSample />}></Route>
          <Route exact path="/sample/time" element={<TimeSample />}></Route>
          <Route exact path="/time" element={<Time />}></Route>
          <Route exact path="/timeselect" element={<TimeSelect />}></Route>
          <Route exact path="/timeresult" element={<TimeResult />}></Route>
          <Route exact path="/kakao-redirect" element={<KakaoRedirectTest />}></Route>
          <Route exact path="/google-login" element={<GoogleLogin />}></Route>
          <Route exact path="/sign-up" element={<SignUp />}></Route>
          <Route exact path="/place-main" element={<PlaceMain />}></Route>
          <Route exact path="/subway-main" element={<SubwayMain />}></Route>
          <Route exact path="/map-test" element={<MapTest />}></Route>
          <Route exact path="/meeting-check" element={<MeetingCheck />}></Route>
          <Route exact path="/meeting-choice" element={<MeetingChoice />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
