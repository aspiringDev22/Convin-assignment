import axios from 'axios'
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedUser } from '../redux/actions/userAction'
// import UserLists from './UserLists'
import UserSlider from './UserSlider'

const UserDetails = () => {
  const user = useSelector((state)=>state.user)
  const {userId} = useParams();
  const dispatch = useDispatch();
  // console.log(user);

  const fetchSingleUser = async()=>{
    const response = await axios.get(`https://reqres.in/api/users/${userId}`).catch((err)=>{console.log("error: ",err);})
    dispatch(selectedUser(response.data.data))
    // console.log(response.data.data);
  }

useEffect(()=>{
  if(userId && userId!==""){
  fetchSingleUser()
  }
},[userId])

  return (
    <div className='single-user-container'>
      {Object.keys(user).length===0?(
        <div>...loading</div>
      ):
    <div className='single-user-card'>
      <div className="img-single">
        <img src={user.avatar} alt="" />
      </div>
      <div className="name-email-single">
        <h3 className="name-single">{user.first_name} {user.last_name}</h3>
        <h3 className="name-single">{user.email}</h3>
      </div>
    </div>
    }
    <UserSlider/>
    </div>
  )
}

export default UserDetails