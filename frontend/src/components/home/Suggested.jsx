import React from 'react';
import { assets } from '../../assets/assets';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';







const Suggested = () => {

    const [userData, setUserData] = useState([])
    const [randomUsers, setRandomUsers] = useState([]);
    function allUserData() {
        fetch("http://localhost:3000/alluser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data.user)
                const shuffled = [...data.user].sort(() => 0.5 - Math.random());
                setRandomUsers(shuffled.slice(0, 5));
            }
            )
    }
    useEffect(() => {
        allUserData()
    }, []);



    const navigate = useNavigate()

    return (
        <div className=' ml-40 hidden sm:block'>

            <div className='flex justify-center items-center max-w-[300px] min-w-[100px] gap-3 mt-7'>
                <img src={assets.dp_img} alt="" className='h-12 w-12 rounded-full' />
                <h2 className='font-medium'>seenu_011_</h2>
                <button className='ml-2.5 font-bold text-blue-400' style={{ cursor: "pointer" }}>logout</button>
            </div>
            <div className='font-medium text-gray-500 mt-4'>
                <h3>Suggested for you</h3>
            </div>
            {randomUsers.map((User, idx) => {
                // console.log(User);
                function profileHandlar() {
                    navigate("/profile/" + User._id)
                }
                return (
                    <div key={idx}>
                        <div className='max-w-[300px] min-w-[100px] '>
                            <div className='flex justify-center items-center gap-3 mt-5'>
                                <img src={User.pic} alt="" className='h-12 w-12 rounded-full' />
                                <div>
                                    <h2 className='font-medium cursor-pointer' onClick={profileHandlar} >{User.name}</h2>
                                    <p className='text-[12px] font-medium text-gray-500'>Followed by shaily97541</p>
                                </div>
                                <button className='ml-2.5 font-bold text-blue-400' style={{ cursor: "pointer" }}>Follow</button>
                            </div>
                        </div>
                    </div>
                )

            })}

        </div>
    );
}

export default Suggested;
