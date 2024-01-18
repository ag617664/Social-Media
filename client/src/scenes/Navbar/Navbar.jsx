import React from 'react'
import {useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import { setMode, setLogout } from "state";
import {useNavigate} from "react-router-dom"
// import FlexBetween from "components/FlexBetween";
import { CiSearch } from "react-icons/ci";
import { LuMessageSquare } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
function Navbar() {
  const [isMobileMenuToggled,setIssetIsMobileMenuToggled]=useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user=useSelector((state)=>state.user);
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div>Navbar</div>
  )
}

export default Navbar