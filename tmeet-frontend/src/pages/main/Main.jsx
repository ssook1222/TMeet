import NavBar from "../components/navigationBar/NavBar";
import React from "react";
import './Main.css';
// import meeting from '../'

function App() {
    return (
        <body>
            <div className="App">
                <NavBar></NavBar>
            </div>
           <div className= "wrap">
                   <div className="title">
                       Team IT ?  T Meet !
                       <h6>모임을 정하는 가장 쉬운 방법</h6>
                   </div>
                   {/*<div className= "meeting">*/}
                   {/*    <img src="img/meeting.png"></img>*/}
                   {/*</div>*/}
               <div className= "meeting">
                   <img sx={{ m: 1 }}
                        style={{marginBottom:"10px"}}
                        src="img/meeting.png"></img>
               </div>
           </div>

        </body>
    );
}

export default App;
