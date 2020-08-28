import React,{ useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Chat from '../Components/Chat';

export default function Contact() {
    useEffect(() => {
        const navList = document.querySelectorAll("li");
        navList.forEach(list => {
            if (list.classList.contains("active")) {
                list.classList.remove("active");
            }
        })
        navList[4].classList.add("active");

            const form = document.querySelector("form");
            const loading = document.querySelector(".loading");
            const submitBtn = document.querySelector(".submit-btn");
            const success = document.querySelector(".success");
            const failed = document.querySelector(".failed");
            form.onsubmit = handleSubmit;

            function handleSubmit(e) {
                e.preventDefault();
                submitBtn.style.display = "none"
                loading.style.display = "flex";

                let formData = new FormData(form);
                let name = formData.get("name");
                let email = formData.get("email");
                let subject = formData.get("phone-number")
                let message = formData.get("message")

                let Params = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: `name=${name}&email=${email}&subject=${subject}&message=${message}`,
                    method: "POST",
                };
                const sendData = async function(){
                 const res = await fetch("https://cms-team20.herokuapp.com/api/user/message", Params);
                 const data = await res.json();
                    loading.style.display = "none";
                    success.style.display = "flex";
                    failed.style.display = "none";
                    form.reset();
                    console.log(data);
            }

                sendData().catch(err => {
                    loading.style.display = "none";
                    success.style.display = "none";
                    submitBtn.style.display = "flex";
                    failed.style.display = "flex";
                    console.log(err);
                });
            }
    })
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
                                <label htmlFor="e-mail">Email</label>
                            </div>
                            <div className="input-field">
                            <input type="number" name="phone-number" id="phone-number" className="user-1" required />
                            <label htmlFor="phone-number">Phone Number</label>
                            </div>
                        </div>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message here"></textarea>
                        <div data-aos="fade-right" className="submit-btn">
                            <button type="submit">Submit</button>
                        </div>
                        <div className="loading"><h4>Loading...</h4></div>
                               <div className="failed">
                                   <h4>Send failed, Please try again</h4>
                               </div>
                               <div className="success">
                                   <h4>Your message has been successfully sent</h4>
                               </div>
                        </form>
                    </div>
            </div>
            <Chat />
            <Footer />
        </>
    )
}
