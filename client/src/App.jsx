import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter,Navigate,Routes,Route } from "react-router-dom";
import HomePage from "./scenes/homePage/homePage.jsx";
import LoginPage from "./scenes/loginPage/loginPage.jsx";
import ProfilePage from "./scenes/profilePage/profilePage.jsx";



function App() {
  const mode=useSelector((state)=>state.mode)
  return (
    <div className="App"> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/profile/:userId" element={<ProfilePage/>}/>

    </Routes>
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;