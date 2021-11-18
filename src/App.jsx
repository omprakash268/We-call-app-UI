import React from "react";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Endpage from "./Components/Endpage/Endpage";
import VideoStream from './Components/VideoStream/VideoStream';



const App = () =>
{
    return(
        <>
        <Header/>
        <Container/>
        <Endpage/>
        <VideoStream/>
        </>
    );
}

export default App;