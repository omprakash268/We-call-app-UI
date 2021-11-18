import React from 'react';
import './container.css';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import img1 from './img1.svg';
import img2 from './img2.jpg';
import img3 from './img3.jpeg';
import img4 from './img4.jpg';
import img5 from './img5.jpeg';





const Container = () => {
    return (
        <>
            <div className="container1">
                <div className="sections my-flex">

                    <div className="left-div">
                        <div className="we-text">Keep in touch with friends or colleagues</div>
                        <img src={img1} alt="" className="vc-1" />
                        <div className="wrap-meet">
                            <a href="#" className="new-meet-btn my-flex">New Meeting </a>
                            <VideoCallIcon className="video-icon" />
                            <div className="code-join">
                                <input type="text" className="code-input" placeholder="Enter-code" />
                                <a href="#" className="join-btn my-flex">Join</a>
                            </div>
                            <KeyboardIcon className="keyboard-icon" />
                        </div>
                        

                    </div>


                    <div className="right-div">
                        <div className="control-slider">
                            <div
                                id="carouselExampleIndicators"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="0"
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="1"
                                        aria-label="Slide 2"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="2"
                                        aria-label="Slide 3"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="3"
                                        aria-label="Slide 4"
                                    ></button>
                                    <button
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="4"
                                        aria-label="Slide 5"
                                    ></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={img2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img3} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img4} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img5} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img3} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Container;