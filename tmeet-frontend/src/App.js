import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Time from "./pages/time/Time";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route exact path="/" element={<Main/>}></Route>
                    <Route exact path="/login" element={<Login/>}></Route>
                    <Route exact path="/time" element={<Time/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;