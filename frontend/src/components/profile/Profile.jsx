import React, { useContext } from 'react';
import SideNavbar from '../Navbar/SideNavbar';
import { ThemeContext } from '../context/Context';
import { assets } from '../../assets/assets';

const Profile = () => {
    const { dark, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='h-dvh bg-amber-600 ' id={dark == true ? "dark" : ""}>
            <div className='flex justify-center  '>
                <div className='w-30 m-20 h-30 rounded-full border-2'>
                    <img src={assets.Profile_pic} alt="" />
                </div>
                <div className='m-20 '>
                    <div className='flex gap-9'>
                        <h1>life_error_011</h1>
                        <button>Edit Profile</button>
                    </div>
                    <div className='flex gap-9'>
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
        </div>
    );
}

export default Profile;
