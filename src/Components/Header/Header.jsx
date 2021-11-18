import React from 'react';
import './header.css';
import Avatar from '@mui/material/Avatar';
import logo from './logo.png';

const Header = () => {
    return (
        <>
            <div className="header my-h-flex">
                <img src={logo} alt="" className="logo" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className="user-avatar" />
            </div>

        </>
    );
}


export default Header;