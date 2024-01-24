import React from 'react'
import {useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import { setMode, setLogout } from "../../state/index.js";
import {useNavigate} from "react-router-dom"
// import FlexBetween from "components/FlexBetween";
import { IoMdSearch } from "react-icons/io";
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
  const mode=useSelector((state)=>state.mode);
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div className='bg-5  opacity-90'>
    <div className='flex justify-between'>
      <div className='flex p-3 px-10 gap-2'>
        <h1 className='text-1 font-bold text-2xl px-6 self-center text-1'>Sociopedia</h1>
        <input type="text" 
        placeholder='Search...'
        className='border-2 p-2 rounded-lg px-4 placeholder:px-4 w-72 bg-6  text-2 border-5' />
        <IoMdSearch className='self-center text-2xl'/>
      </div>
      <div className='flex p-3 px-16 justify-between w-4/12 text-2 opacity-95'>
        <MdDarkMode className='self-center text-xl'/>
        <LuMessageSquare className='self-center text-xl'/>
        <IoIosNotificationsOutline className='self-center text-xl'/>
        <IoIosHelpCircleOutline className='self-center text-xl'/>
        <h1 className='font-semibold self-center uppercase opacity-95'>{fullName}</h1>
        
        

      </div>
    </div>
    </div>
  )
}

export default Navbar