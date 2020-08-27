import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const Lagos = () => {
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
        <section id="lagos">
            <div className="guide-img">
                    <img src="img/zuma1.jpg" alt="guides" />
            </div>
            <div className="guide-div">
                <h3 className="text-center" data-aos="fade-down"  data-aos-delay="100">Lagos Guides</h3>
                <div className="guide-links row">
                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                        <div className="guide-style">
                            <Link to="/lagos-guide">AC travels and tour</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                        <div className="guide-style">
                            <Link to="/lagos-guide">Kampala tours</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                        <div className="guide-style">
                            <Link to="/lagos-guide">Waka tours and guides</Link>
                        </div>
                    </div>

                    <div className="guide-item col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6">
                        <div className="guide-style">
                            <Link to="/lagos-guide">Eko tour</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
};
export default Lagos;
