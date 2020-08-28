import React, { useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Chat from '../Components/Chat';

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
                    <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1598629465/Tour%20App/jollof_f6uadr.jpg" alt="jollof rice" />
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
                    <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1598629471/Tour%20App/pounded_f11zxi.jpg" alt="pounded yam" />
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
                    <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1598629472/Tour%20App/suya_y8tlz5.jpg" alt="suya" />
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
                    <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1598629475/Tour%20App/afang_ocdyzx.jpg" alt="afang soup" />
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
                    <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1598629473/Tour%20App/tuwo_gxigau.jpg" alt="Tuwo shinkafa" />
                    <h6><strong>KK Restaurant</strong></h6>
                    <p><strong>Kaduna state</strong></p>
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
                    <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1598629464/Tour%20App/garri_newqtb.jpg" alt="garri" />
                    <h6><strong>HR Restaurant</strong></h6>
                    <p><strong>Ogun state</strong></p>
                    <div className="star-div">
                        <span className="fa fa-star checked"></span>
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
        <Chat />
        <Footer />
        </>
    )
};
export default Restaurant;