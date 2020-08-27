import React, { useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Flight = () => {
    useEffect(() => {
      const navList = document.querySelectorAll("li");
      navList.forEach(list => {
          if (list.classList.contains("active")) {
              list.classList.remove("active");
          }
      })
      navList[3].classList.add("active");
    });
    return (
        <>
        <Navbar />
        <section id="flight">
            <div className="flight-img" data-aos="fade" data-aos-delay="100">
                <img src="img/kajuru.jpg" alt="kajuru castle" />
            </div>
            <div className="booking" data-aos="fade-up" data-aos-delay="100">
                <h4 className="text-center">Flight Booking</h4>
                <form id="booking-form">
                    <div className="input">
                        <label>From</label>
                        <input type="name" name="location" required placeholder="location" minLength="3" maxLength="20" />
                    </div>
                    <div className="input">
                        <label>To</label>
                        <input type="name" name="destination" required placeholder="destination" minLength="3" maxLength="20" />
                    </div>
                    <div className="input radio">
                        <input type="radio" name="return" value="return" required checked />
                        <label>Return</label>
                        <input type="radio" name="return" value="oneWay" required />
                        <label>One Way</label>
                    </div>
                    <div className="input dates">
                        <div className="depart">
                            <label>Depart</label>
                            <input type="date" name="depart" required placeholder="departure date"/>
                        </div>
                        <div className="return">
                            <label>Return</label>
                            <input type="date" name="return" required placeholder="return date"/>
                        </div>
                    </div>
                    <div className="submit-btn">
                        <button id="submit" type="submit">Search Flight</button>
                    </div>
                </form>
            </div>
        </section>
        <Footer />
        </>
    )
};
export default Flight;
