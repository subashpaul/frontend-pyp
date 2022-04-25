import React from "react";
import LeftSection from "../components/LeftSection";
import Navbar from "../components/Navbar";
import '../App.css'

const Home = () => {
    return (
        <>
            <Navbar />
            <div id='circle'></div>
            <div className='leftSection'>
                <LeftSection />
            </div>
            <div id='sally'></div>
        </>
    );
};

export default Home;
