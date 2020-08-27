/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div id="footer">
            <div className="text-center welcome" data-aos="zoom-in" data-aos-delay="200">
                <h5>Welcome To Nigeria</h5>
                <p>Discover a fascinating country: take a trip to one of the most beautiful places on earth. Nigeria is filled with vast unspoiled natue. It is a land filled with beautiful contrasts. From the Sahel region of the north to the wetlands of southern Nigeria, there is something for everyone.</p>
                <p>Nigeria is a country of over 300 tibes and a population of over 180 million people. If you are lookin for the best afro music festival, the adrenaline of an outdoor adventure, lovely beaches, tasty delicacies or the experience of a breath-taking road trip, then Nigeria is for you.</p>
            </div>
            <footer data-aos="fade-up" data-aos-delay="200">
                <div className="footer-logo">
                    <h4>NTG</h4>
                    <p>NIGERIA TOURIST GUIDE</p>
                </div>
                <div className="social-links">
                    <div className="socials">
                        <a href="https://facebook.com" target="_blank" title="facebook" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="https://twitter.com" target="_blank" title="twitter" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="https://instagram.com" target="_blank" title="instagram" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                    <div className="copyright">
                       <p> &copy; 2020 All rights reserved</p>
                    </div>
                </div>
                <div className="footer-nav">
                    <ul>
                        <li><Link to="/guides">Cities</Link></li>
                        <li><Link to="/flight">Book a flight</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
