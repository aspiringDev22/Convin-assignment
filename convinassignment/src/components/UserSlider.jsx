import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const UserSlider = () => {
    const users = useSelector((state) => state.allUsers.users)
    // console.log(users);
    return (
        <div className='user-slider'>
            {users.map((user) => {
                const { id,  avatar } = user;
                return (
                    <div className='user-s' key={id}>
                          <Link to={`/${id}`}>
                        <div className="image">
                            <img src={avatar} alt="user-img" />
                        </div>
                        {/* <div className="name-email">
                            <h3 className="name">{first_name} {last_name}</h3>
                            <h3 className="email">{email}</h3>
                        </div> */}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default UserSlider;