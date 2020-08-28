import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Chat from '../Components/Chat';

export default function About() {
    return (
        <>
            <Navbar />
            <div className="guide-img">
                <img src="img/obudu-new.jpg" alt="guides" />
            </div>
            <div id="about">
                <h3>ABOUT US</h3>
                <p>We are a team of designers and developers working synchronously to bring ideas to life, solving real life problems.</p>
                <p>Diligence, attention to detail and team collaboration channel our pool of skills into stellar projects with flawless performance.</p>
                <p>We are the ECX Team-12.</p>
            </div>
            <Chat />
            <Footer />
        </>
    )
}
