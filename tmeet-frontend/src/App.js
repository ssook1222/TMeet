import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import LoginSample from './pages/sample/LoginSample';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/sample/login" element={<LoginSample />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
