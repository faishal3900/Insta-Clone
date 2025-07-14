import React from 'react';
import { assets } from '../../assets/assets';
import { useEffect } from 'react';
import { useState } from 'react';







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
    console.log(userData);



    return (
        <div className='md:ml-[600px]  w-70 hidden md:block'>
            <div className='flex justify-center items-center gap-3 mt-7'>
                <img src={assets.dp_img} alt="" className='h-12 w-12 rounded-full' />
                <h2 className='font-medium'>seenu_011_</h2>
                <button className='ml-2.5 font-bold text-blue-400' style={{ cursor: "pointer" }}>logout</button>
            </div>
            <div className='font-medium text-gray-500 mt-4'>
                <h3>Suggested for you</h3>
            </div>
            {randomUsers.map((User, idx) => {
                console.log(User);
                return (
                    <div key={idx}>
                        <div className=' w-70 '>
                            <div className='flex justify-center items-center gap-3 mt-5'>
                                <img src={User.pic} alt="" className='h-12 w-12 rounded-full' />
                                <div>
                                    <h2 className='font-medium'>{User.name}</h2>
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
