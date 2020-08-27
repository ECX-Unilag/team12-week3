import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Enugu = () => {
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
        <section id="enugu">
            <div className="guide-img">
                    <img src="img/zuma1.jpg" alt="guides" />
            </div>
            <div className="guide-div">
                <h3 className="text-center">Enugu Guides</h3>
                <div className="guide-links row">
                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                        <div className="guide-style">
                            <Link to="/enugu-guide">AC travels and tour</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                        <div className="guide-style">
                            <Link to="/enugu-guide">Kampala tours</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                        <div className="guide-style">
                            <Link to="/enugu-guide">Waka tours and guides</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                        <div className="guide-style">
                            <Link to="/enugu-guide">Aba tour</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
};
export default Enugu;
