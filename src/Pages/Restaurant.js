import React, { useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Restaurant = () => {
    useEffect(() => {
      const navList = document.querySelectorAll("li");
      navList.forEach(list => {
          if (list.classList.contains("active")) {
              list.classList.remove("active");
          }
      })
      navList[2].classList.add("active");
    });
    return (
        <>
        <Navbar />
        <section id="restaurant">
            <div className="header-img">
                <img src="img/Olumo-Rock-new.jpg" alt="olumo rock" />
            </div>
            <div className="book-restaurant">
                <h3 className="text-center" data-aos="fade-right">Book Restaurant</h3>
                <div className="dish row">
                <div className="dish-item col-lg-4 col-md-6 col-sm-6" data-aos="fade-up-right" data-aos-delay="100">
                    <img src="img/jollof.jpg" alt="jollof rice" />
                    <h6><strong>Jollof Rice</strong></h6>
                    <p><strong>Lagos state</strong></p>
                    <div className="star-div">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>

                    </div>
                    <button>Book</button>
                </div>

                <div className="dish-item col-lg-4 col-md-6 col-sm-6" data-aos="fade-up-left"  data-aos-delay="100">
                    <img src="img/pounded.jpg" alt="pounded yam" />
                    <h6><strong>JK Restaurant</strong></h6>
                    <p><strong>Oyo state</strong></p>
                    <div className="star-div">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <button>Book</button>
                </div>

                <div className="dish-item col-lg-4 col-md-6 col-sm-6" data-aos="fade-up-left" data-aos-delay="100">
                    <img src="img/suya.jpeg" alt="suya" />
                    <h6><strong>HS Restaurant</strong></h6>
                    <p><strong>Kano state</strong></p>
                    <div className="star-div">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <button>Book</button>
                </div>

                <div className="dish-item col-lg-4 col-md-6 col-sm-6" data-aos="fade-up-right" data-aos-delay="100">
                    <img src="img/afang.jpg" alt="afang soup" />
                    <h6><strong>CK Restaurant</strong></h6>
                    <p><strong>Ebonyi state</strong></p>
                    <div className="star-div">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <button>Book</button>
                </div>

                <div className="dish-item col-lg-4 col-md-6 col-sm-6" data-aos="fade-up-left" data-aos-delay="100">
                    <img src="img/tuwo.jpg" alt="Tuwo shinkafa" />
                    <h6><strong>KK Restaurant</strong></h6>
                    <p><strong>Kaduna state</strong></p>
                    <div className="star-div">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <button>Book</button>
                </div>

                <div className="dish-item col-lg-4 col-md-6 col-sm-6" data-aos="fade-up-right" data-aos-delay="100">
                    <img src="img/garri.jpg" alt="garri" />
                    <h6><strong>HR Restaurant</strong></h6>
                    <p><strong>Ogun state</strong></p>
                    <div className="star-div">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <button>Book</button>
                </div>
            </div>
            </div>
        </section>
        <Footer />
        </>
    )
};
export default Restaurant;