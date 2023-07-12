import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Coursell from "./components/Slider/Coursell";
import Our from "./components/ Our/Our";
import Block from "./components/Block/BLock";
import Slick from "./components/Slick/Slick";
import AboutUs from "./components/AboutUs/AboutUs";
import Accordion from "./components/Accordion/Accordion";
import Footer from './components/Footer/Footer'

function App() {
    return (
        <>
            <Header/>
            <About/>
            <Coursell/>
            <Our/>
            <Block/>
            <Slick/>
            <AboutUs/>
            <Accordion/>
            <Footer/>
        </>
    );
}

export default App;
