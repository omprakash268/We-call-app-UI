import React, { useState } from 'react';
import './videostream.css';
import MicIcon from '@mui/icons-material/Mic';
import VideocamIcon from '@mui/icons-material/Videocam';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CallEndIcon from '@mui/icons-material/CallEnd';
import InfoIcon from '@mui/icons-material/Info';
import GroupIcon from '@mui/icons-material/Group';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Mcard = () => {

    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >   •
        </Box>
    );
    return (
        <>
            <Card id="card-gen" className="c-size">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    );
}



const VideoStream = () => {

    const [{ items }, setItems] = useState({ items: [] });
    const addItem = () => {
        items.push(<Mcard />);
        setItems({ items: [...items] });
    };

    return (
        <>

            <div className="main-video-page my-flex">
            <button onClick={addItem} className="add-item">Add Items</button>
                <div className="video-screen my-flex">
                    {items}   
                </div>
                <div className="controls my-flex">
                    <div className="time-code my-flex">
                        10:52 PM | abc-def-ghi
                    </div>
                    <div className="central-control-iocns my-flex">
                        <div className="circle my-flex">
                            <Tooltip title="Mute" placement="top">
                                <MicIcon />
                            </Tooltip>

                        </div>
                        <div className="circle my-flex">
                            <Tooltip title="Hide video" placement="top">
                                <VideocamIcon />
                            </Tooltip>

                        </div>
                        <div className="circle my-flex">
                            <Tooltip title="Turn on caption(c)" placement="top">
                                <ClosedCaptionIcon />
                            </Tooltip>

                        </div>
                        <div className="circle my-flex">
                            <Tooltip title="Screen share" placement="top">
                                <ScreenShareIcon />
                            </Tooltip>

                        </div>
                        <div className="circle my-flex">
                            <Tooltip title="More options" placement="top">
                                <MoreVertIcon />
                            </Tooltip>

                        </div>
                        <div className="meet-end-btn my-flex">
                            <Tooltip title="Leave call" placement="top">
                                <CallEndIcon />
                            </Tooltip>

                        </div>
                    </div>
                    <div className="user-chat my-flex">
                        <Tooltip title="Meeting details" placement="top">
                            <InfoIcon className="user-chat-icon" />
                        </Tooltip>
                        <Tooltip title="Show everyone" placement="top">
                            <GroupIcon className="user-chat-icon" />
                        </Tooltip>
                        <Tooltip title="Chat with everyone" placement="top">
                            <ChatBubbleIcon className="user-chat-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight" />
                        </Tooltip>



                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <h5 id="offcanvasRightLabel">Group Chat</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="chat-body">
                                    <textarea name="" id="" cols="35" rows="2" className="msg-body"></textarea>
                                    <i className="fas fa-paper-plane send-msg"></i>
                                </div>
                            </div>
                        </div>
                        <Tooltip title="Secured" placement="top">
                            <VerifiedUserIcon className="user-chat-icon" />
                        </Tooltip>

                    </div>
                </div>

            </div>
        </>
    );
}


export default VideoStream;