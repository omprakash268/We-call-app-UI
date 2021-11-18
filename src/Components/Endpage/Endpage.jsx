import React, { useState } from 'react';
import './endpage.css';
import logo from './logo.png';
import Rating from '@mui/material/Rating';


const Endpage = () => {

    const [value,setValue]=useState(3);
    return (
        <>
            <div className="end-main-div my-flex">
                <img src={logo} alt="" className="logo-end-page" />
                <h1>You have ended the meeting for everyone</h1>
                <a href="index.html" className="return-home-btn my-flex">Return to Home Screen</a>
                <br />
                <div className="feedback">Submit Feedback</div>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </div>
        </>
    );
}


export default Endpage;