import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter,Navigate,Routes,Route } from "react-router-dom";
import HomePage from "./scenes/homePage/homePage.jsx";
import LoginPage from "./scenes/loginPage/loginPage.jsx";
import ProfilePage from "./scenes/profilePage/profilePage.jsx";
import SignUp from "./scenes/SignOut/signUp.jsx";
import {useMemo} from "react"
import { CssBaseline,ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import {themeSettings} from "./theme"



function App() {
  const mode=useSelector((state)=>state.mode)
  const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  return (
    <div className="App"> 
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/profile/:userId" element={<ProfilePage/>}/>

    </Routes>
    </ThemeProvider>
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;