import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import useLoginStore  from '../../store/mainStore'; // Adjust the path as needed
import IconButton from '@mui/material/IconButton'; // Adjust the import path if necessary
import LoginIcon from '@mui/icons-material/Login';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';


const Header: React.FC =()=>{
    const navigate = useNavigate();
    const loginStore = useLoginStore((state) => state.login);
    const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
    const username = useLoginStore((state) => state.username);

    return (
        <header className="header">
            <div className="logo">
                <img src='../../../assets/logo_blue.jpg' alt="Logo" className="logo" />
            </div>
             <div className='heading-right' >   
                                                
                    { isLoggedIn &&<p>Welcome, {username}</p>     
                    }           
                    {!isLoggedIn && (
                        <IconButton onClick={() => navigate('/login')} title='Login'>
                            <LoginIcon/>
                        </IconButton>
                        )}
                    
                { isLoggedIn && (
                    <>
                        <IconButton onClick={() => navigate('/profile')} title='Profile'>
                            <ProfileIcon/>
                        </IconButton>
                        <IconButton onClick={() => navigate('/settings')} title='Settings'>
                            <SettingsIcon/>
                        </IconButton>
                    </>
                )} 
            </div>  
                                           
            <div className="title">KTD Clinic</div>
            </header>  
            )



}

export default Header;