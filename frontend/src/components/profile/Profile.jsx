import React, { useContext } from 'react';
import SideNavbar from '../Navbar/SideNavbar';
import { ThemeContext } from '../context/Context';
import { assets } from '../../assets/assets';
import { useEffect } from 'react';

const Profile = () => {
    const { dark, toggleTheme } = useContext(ThemeContext);

    // const Id = "6871fb95b374d17fe174df64"
    function ProfileData() {
        fetch("http://localhost:3000/profile/6871fb95b374d17fe174df64", {
            method: "get",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res => res.json()))
            .then((data) => console.log(data))
    }
    useEffect(() => {
        ProfileData()
    }, [])

    return (
        <div className='h-auto' id={dark == true ? "dark" : ""}>
            <div className='flex justify-center  '>
                <div className='w-30 m-20 h-30 rounded-full border-2'>
                    <img src={assets.Profile_pic} alt="" />
                </div>
                <div className='m-20'>
                    <div className='flex gap-9'>
                        <h1>life_error_011</h1>
                        <button>Edit Profile</button>
                    </div>
                    <div className='flex gap-9 font-bold'>
                        <h1> 4 dsds</h1>
                        <h1>76 sds</h1>
                        <h1> 80 dsa</h1>
                    </div>
                    <div>
                        <h1>code</h1>
                        <p>me </p>
                    </div>
                </div>
            </div>
            <hr className='w' />
            <div className='flex justify-center-safe mt-5 gap-3 ml-60'>
                <img className='w-60' src={assets.post_img} alt="" />
                <img className='w-60' src={assets.post_img} alt="" />
                <img className='w-60' src={assets.post_img} alt="" />
            </div>
        </div>
    );
}

export default Profile;
