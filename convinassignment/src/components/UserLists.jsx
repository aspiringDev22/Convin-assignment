import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DotLoader } from 'react-spinners';
import {setUsers} from '../redux/actions/userAction'
import UserComponent from './UserComponent';

const UserLists = () => {
  const [loading,setLoading] = useState(true)
  const users = useSelector((state)=>state)
  // console.log(users);
  const dispatch = useDispatch();

const fetchUsers = async() =>{
const response = await axios.get("https://reqres.in/api/users").catch((err)=>{console.log("Error: ",err);})
dispatch(setUsers(response.data.data))
setTimeout(() => {
  setLoading(false)  
}, 1300);

}

  useEffect(()=>{
    fetchUsers();
  },[])

  return (
    <div className="list-container">
   {loading ? <DotLoader color="#000" />  :
     <UserComponent/>
  }
      </div>
  )
}

export default UserLists