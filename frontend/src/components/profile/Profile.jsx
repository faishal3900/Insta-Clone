import React, { useContext } from 'react';
import SideNavbar from '../home/SideNavbar';
import { ThemeContext } from '../context/Context';

const Profile = () => {
    const { dark, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='h-dvh' id={dark == true ? "dark" : ""}>

            <SideNavbar />
            <div>
                <div>
                    profile photo
                </div>
                <div>
                    <div>
                        <h1>title</h1>
                        <button>Edit Profile</button>
                    </div>
                    <div>
                        <h1></h1>
                        <h1></h1>
                        <h1></h1>
                    </div>
                    <div>
                        <h1></h1>
                        <p></p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;
