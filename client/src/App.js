import { useState } from "react";
import { BrowserRouter,Navigate,Routes,Route } from "react-router-dom";
import HomePage from "./scenes/homepage";
import LoginPage from "./scenes/loginpage";
import ProfilePage from "./scenes/profilePage";

function App() {
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