import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route exact path="/" element={<Main />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;