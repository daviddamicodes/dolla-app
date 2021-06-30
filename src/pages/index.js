import React, { useState } from 'react';
import Navbar from '../componenets/Navbar';
import Sidebar from '../componenets/Sidebar';
import HeroSection from '../componenets/HeroSection';
import InfoSection from '../componenets/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../componenets/InfoSection/Data';
import Services from '../componenets/Services';
import Footer from '../componenets/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Services />
            <Footer />
        </>
    )
}

export default Home;
