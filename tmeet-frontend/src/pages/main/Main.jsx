import NavBar from "../components/navigationBar/NavBar";
import React from "react";
import './Main.css';

function App() {
    return (
        <body>
        <div className="App">
            <NavBar></NavBar>
        </div>
        <div style={{margin: "10vh"}}></div>
        <div className= "wrap">
            <div className="mainTitle">
                Team IT ?  T Meet !
            </div>
            <a className="mainContent">모임을 정하는 가장 쉬운 방법</a>
        </div>
        <div style={{margin: "5vh"}}></div>
        <div className="meeting-img">
            <img src="img/meeting-img.png"></img>
        </div>
        </body>
    );
}

export default App;
