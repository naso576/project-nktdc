import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Home.scss'; // Assuming you have a CSS file for styling
import MenuBarItems from './constants';
import SettingsIcon from '@mui/icons-material/Settings'; 
import ProfileIcon from '@mui/icons-material/AccountCircle'; // 
import LoginIcon from '@mui/icons-material/Login'; // Import your icons here
import useLoginStore from '../../store/mainStore';
import LogoutIcon from '@mui/icons-material/Logout'; 
import Header from '../../global/header/header';



const Home: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const loginStore = useLoginStore((state) => state.login);
    const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
    const username = useLoginStore((state) => state.username);
    const logout = useLoginStore((state) => state.logout);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const menuItems = MenuBarItems.map(item => ({
        ...item,
        icon: React.createElement(item.icon)
    }));

    return (
        <div className='home-container'>
            <div className='home-header'>   
            <div className='menu-bar'>
                <IconButton onClick={toggleSidebar}>
                    <MenuIcon />
                </IconButton>
                <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
                    <List>
            {menuItems
                .filter(item => !(isLoggedIn && item.name === "Login"))
                .map((item, index) => (
                    <ListItem 
                        component="button" 
                        key={index} 
                        onClick={() => navigate(item.path)} 
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            {isLoggedIn && (
                <ListItem component="button" onClick={logout}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            )}
           
                    </List>
                </Drawer>
            </div>  
                <div className='sub-heading'>     
                  <Header/>
                             
                     {/* <div className='heading-right' >   
                                    
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
                      </div>   */}
            </div>                       
            </div>
            </div>
        
    );
};

export default Home;