import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Chat from '../Components/Chat';

const Guides = () => {
    useEffect(() => {
      const navList = document.querySelectorAll("li");
      navList.forEach(list => {
          if (list.classList.contains("active")) {
              list.classList.remove("active");
          }
      })
      navList[1].classList.add("active");
    });
    return (
        <>
        <Navbar />
        <section id="guides">
            <div className="guide-img">
                <img src="img/obudu-new.jpg" alt="guides" />
            </div>
            <div className="guide-div">
                <h3 className="text-center" data-aos="fade-down"  data-aos-delay="100">Tour Guides</h3>
                <div className="guide-links row">
                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6" data-aos="fade-up-right"  data-aos-delay="100">
                        <div className="guide-style">
                            <Link to="/abuja-guide">Abuja Guides</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6" data-aos="fade-up-left"  data-aos-delay="150">
                        <div className="guide-style">
                            <Link to="/lagos-guide">Lagos Guides</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6" data-aos="fade-up-right"  data-aos-delay="200">
                        <div className="guide-style">
                            <Link to="/enugu-guide">Enugu Guides</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6" data-aos="fade-up-left"  data-aos-delay="200">
                        <div className="guide-style">
                            <Link to="/kaduna-guide">Kaduna Guides</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6" data-aos="fade-up-right"  data-aos-delay="250">
                        <div className="guide-style">
                            <Link to="/oyo-guide">Oyo Guides</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6" data-aos="fade-up-right"  data-aos-delay="300">
                        <div className="guide-style">
                            <Link to="/kano-guide">Kano Guides</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6" data-aos="fade-up-left"  data-aos-delay="350">
                        <div className="guide-style">
                            <Link to="/ebonyi-guide">Ebonyi Guides</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6" data-aos="fade-up-right"  data-aos-delay="100">
                        <div className="guide-style">
                            <Link to="/ogun-guide">Ogun Guides</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Chat />
        <Footer />
        </>
    )
};
export default Guides;
