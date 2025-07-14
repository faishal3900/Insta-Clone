import React, { useContext, useState } from 'react';
import "../../App.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/ExploreOutlined';
import Shop2Icon from '@mui/icons-material/Shop2Outlined';
import SendIcon from '@mui/icons-material/SendOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import DehazeIcon from '@mui/icons-material/DehazeOutlined';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/Context';



const SideNavbar = () => {
    const [navActive, setNavActive] = useState("home")
    const navigate = useNavigate()

    function createHendlar() {
        setNavActive("create")
        navigate("/create")
    }
    function homeHendler() {
        setNavActive("home")
        navigate("/home")
    }
    console.log(navActive);

    const { dark, toggleTheme } = useContext(ThemeContext);

    return (
        <div className='grid grid-cols-1 w-60 border-r border-gray-600 fixed top-0 bottom-0 left-0 scroll-smooth'>
            <ul className=''>
                <img className='w-45 mb-3 mt-3 pb-4 pt-4 pr-3  pl-3' src={dark ? assets.Instagram_logo_w : assets.Instagram_logo} alt="" />
                <li onClick={homeHendler} className={`p-2 mb-3 ml-2 mr-2 rounded-lg hSideNav, ${navActive === "home" ? "active" : ""}`} style={{ cursor: "pointer", }}><HomeIcon className='mr-3' />Home</li>

                <li onClick={() => setNavActive("search")} className={`p-2 mb-3 mt-3 ml-2 mr-2 rounded-lg hSideNav, ${navActive === "search" ? "active" : ""}`} style={{ cursor: "pointer", }}><SearchIcon className='mr-3' />Search</li>

                <li onClick={() => setNavActive("Explore")} className={`p-2 mb-3 mt-3 ml-2 mr-2 rounded-lg hSideNav, ${navActive === "Explore" ? "active" : ""}`} style={{ cursor: "pointer", }}><ExploreIcon className='mr-3' />Explore</li>

                <li onClick={() => setNavActive("Reels")} className={`p-2 mb-3 mt-3 ml-2 mr-2 rounded-lg hSideNav, ${navActive === "Reels" ? "active" : ""}`} style={{ cursor: "pointer", }}><Shop2Icon className='mr-3' />Reels</li>

                <li onClick={() => setNavActive("Messages")} className={`p-2 mb-3 mt-3 ml-2 mr-2 rounded-lg hSideNav, ${navActive === "Messages" ? "active" : ""}`} style={{ cursor: "pointer", }}><SendIcon className='mr-3' />Messages</li>

                <li onClick={() => setNavActive("Notifications")} className={`p-2 mb-3 mt-3 ml-2 mr-2 rounded-lg hSideNav, ${navActive === "Notifications" ? "active" : ""}`} style={{ cursor: "pointer", }}><FavoriteBorderIcon className='mr-3' />Notifications</li>

                <li onClick={createHendlar} className={`p-2 mb-3 mt-3 ml-2 mr-2 rounded-lg hSideNav, ${navActive === "create" ? "active" : ""}`} style={{ cursor: "pointer", }}><AddBoxIcon className='mr-3' />Create</li>

                <li onClick={() => { setNavActive("Profile"), navigate("/profile") }} className={`p-2 mb-3 mt-3 ml-2 mr-2 rounded-lg hSideNav, ${navActive === "Profile" ? "active" : ""}`} style={{ cursor: "pointer", }}><AccountCircleIcon className='mr-3' />Profile</li>

                <li onClick={() => setNavActive("More")} className={`p-2 mb-3 mt-3 ml-2 mr-2 rounded-lg hSideNav, ${navActive === "More" ? "active" : ""}`} style={{ cursor: "pointer", }}><DehazeIcon className='mr-3' />More</li>
            </ul>
        </div>
    );
}

export default SideNavbar;
