import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Chat from '../Components/Chat';

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="guide-img">
                    <img src="img/zuma1.jpg" alt="guides" />
            </div>
            <div id="contact">
                <h3>Contact Us</h3>
                <div className="contact-form">
        <form action="" method="post">
            <div className="user-details">
                <div className="input-field">
                    <input type="text" name="firstname" id="firstname"className="user-1" required />
                    <label htmlFor="firstname" >Firstname</label>
                </div>
                <div className="input-field">
                    <input type="text" name="lastname" id="lastname" className="user-1" required />
                    <label>Lastname</label>
                </div>
                <div className="input-field">
                    <input type="email" name="email" id="email" className="user-1" required />
                    <label htmlFor="e-mail">E-MAIL</label>
                </div>
                <div className="input-field">
                <input type="number" name="phone-number" id="phone-number" className="user-1" required />
                <label for="phone-number">Phone Number</label>
                </div>
            </div>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message here"></textarea>
                <input type="submit" value="Submit" id="Submit" />
            <div className="msg-sent">message sent</div>
            <div className="msg-not-sent">message not sent</div>
        </form>
        </div>
            </div>
            <Chat />
            <Footer />
        </>
    )
}
