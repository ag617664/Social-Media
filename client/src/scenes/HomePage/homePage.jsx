import React from 'react'
import {useState} from "react"
import Navbar from '../Navbar/Navbar.jsx'
import { useSelector} from 'react-redux'
import { IoLocation } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
// import {PostsWidget} from "../widgets/UserPosts.jsx"

function HomePage() {
  const user=useSelector((state)=>state.user);
  const fullName=`${user.firstName}`+" "+`${user.lastName}`
  const friends = useSelector((state) => state.user.friends);
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  
  let count=0;
  for (let f of friends){
    if(friends[f]){
      count++;

    }
  }


  console.log(count);
  return (
    <div className=''>
      <Navbar/>
      <div className='flex bg-5 px-10 py-5'>
        <div className='bg-6 text-2 opacity-90 p-6 mt-5 w-3/12'>
          <div className='py-5 flex justify-between'>

            <div className='self-center'>
            <h1 className='font-bold text-xl'>  {fullName}     </h1>
            <h1 className='opacity-70'>{count} friends</h1>


            </div>
            
            
            <div className='self-center '>
              <RiUserSettingsFill className='self-center text-xl '/>
            </div>
            

          </div>
          <div className="flex-grow border-t border-gray-400"></div>
          <div className='py-5 '>
            <span className='flex gap-2 py-2'>
            <MdBusinessCenter className='self-center text-2xl '/>

            <h1 className='uppercase mx-3 opacity-70 tracking-wider'>{user.occupation}</h1>
            </span>
            <span className='flex gap-2'>
              <IoLocation className='self-center text-2xl font-semibold '/>
            <h1 className='uppercase mx-3 opacity-70 tracking-wider'>{user.location}</h1>
            </span>

          </div>
          <div className="flex-grow border-t border-gray-400"></div>
          <div className='py-5'>
          <div className='flex justify-between'>
            <span className='opacity-70'>who's viewed your profile</span>
            <h1>{user.viewedProfile}</h1>
          </div>
          <div className='flex justify-between py-5'>
          <span className='opacity-70'>impressions on your post</span>
          <h1>{user.impressions}</h1>
          </div>
          </div>
          <div className="flex-grow border-t border-gray-400"></div>
          <div className='py-5'>
            <h1 className='text-l font-bold py-1'>Social Profiles</h1>
          <div className='flex justify-between'>
          <div className='flex py-2'>
            <FaTwitter className='self-center text-2xl opactiy-70'/>
          <div className='flex flex-col mx-5'>
            <span>X</span>
            <span className='opacity-70'>Social Network</span>

          </div>
          
          </div>
          <MdEdit className='self-center text-xl'/>
          </div>
          <div className='flex justify-between'>
          <div className='flex py-2'>
          
          <FaLinkedin className='self-center text-2xl opactiy-70'/>
          <div className='flex flex-col mx-5'>
            <span className='tracking-wider'>LinkedIn</span>
            <span className='opacity-70'>Network Platform</span>

          </div>
          
          </div>
          <MdEdit className='self-center text-xl'/>
          </div>

          </div>
          
          </div>
        <div>
        
        </div>
        <div></div>
      </div>
    </div>
    


      
  
  )
}

export default HomePage