import React from 'react';
import { Link } from "react-router-dom";

const States = () => {
    return (
        <section id="states">
            <h5 className="text-center" data-aos="fade-down"  data-aos-delay="100">States</h5>
            <div className="states row">
                <div className="state-item col-lg-4 col-md-6 col-sm-6" data-aos="fade-up-right"  data-aos-delay="300">
                    <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1598629465/Tour%20App/kajuru1_jrb8xb.jpg" alt="Kajuru Estate, Kaduna state" />
                    <h6><strong>Kajuru Estate, Kaduna State</strong></h6>
                    <p>Kajuru Castle is a luxury Medieval-style villa, built over 3 decades ago located in Kaduna State, Nigeria. The villa is designed with bedrooms modelled after dungeons and several towers with crenellated walls.</p>
                </div>

                <div className="state-item col-lg-4 col-md-6 col-sm-6" data-aos="fade-up-left"  data-aos-delay="300">
                    <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1598629471/Tour%20App/Obudu_ronpzt.jpg" alt="Obudu Cattle Ranch, Cross River State" />
                    <h6><strong>Obudu Cattle Ranch, Cross River State</strong></h6>
                    <p>Obudu Mountain Resort, formally known as Obudu Cattle Ranch is one of the most beautiful and pleasant tourist centre destinations in Nigeria located on the Obudu Plateau, close to the Cameroon border, in the Northeastern part of Cross River State.</p>
                </div>

                <div className="state-item col-lg-4 col-md-6 col-sm-6" data-aos="fade-up-right"  data-aos-delay="300">
                    <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1598629471/Tour%20App/Osun-sacred_hlhpgo.jpg" alt="Osun Sacred Groove, Osun State" />
                    <h6><strong>Osun Sacred Groove, Osun State</strong></h6>
                    <p>Classified as one of the UNESCO world heritage sites, this sacred forest attracts a large number of tourists as it is definately worth visiting and is reputed to rank high in the list of tourist attractions in Nigeria.</p>
                </div>

                <div className="state-item col-lg-4 col-md-6 col-sm-6" data-aos="fade-up-left"  data-aos-delay="300">
                    <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1598629468/Tour%20App/nike_devs4k.jpg" alt="Nike Art Gallery, Lagos State" />
                    <h6><strong>Nike Art Gallery, Lagos State</strong></h6>
                    <p>A magnificent five-story building coated in spotless white, standing high and proud in its environs, Nike's Art Gallery tells its story from the outside. The fence of the compound is adorned with rare marbles. Its walls are covered in diffrent artistic inscriptions and drawings.</p>
                </div>

                <div className="state-item col-lg-4 col-md-6 col-sm-6" data-aos="fade-up-right"  data-aos-delay="400">
                    <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1598629474/Tour%20App/zuma-rock_mj0pwd.jpg" alt="Zuma Rock, Abuja" />
                    <h6><strong>Zuma Rock, Abuja</strong></h6>
                    <p>The Rock ranks as one of the choice tourist attractions in the country. Zuma Rock, the monolithic inselberg with a human face, is located in Madella, Niger state, to the north of Abuja.</p>
                </div>

                <div className="state-item col-lg-4 col-md-6 col-sm-6" data-aos="fade-up-left"  data-aos-delay="400">
                    <img src="https://res.cloudinary.com/lawfirm1000/image/upload/v1598629465/Tour%20App/agodi_bsoloj.jpg" alt="Agodi Gardens, Oyo State" />
                    <h6><strong>Agodi Gardens, Oyo State</strong></h6>
                    <p>Agodi Gardens is a beautiful park in the city of Ibadan which has brisen to become one of the top tourist attractions in the country. Also called Agodi Botanical Gardens, Agodi Gardens, Ibadan, the site is a serene environment on 150 acres of land.</p>
                </div>

            </div>

            <div className="state-btn">
                <Link to="/guides" className="see-more" data-aos="fade"  data-aos-delay="400">See More</Link>
            </div>
        </section>
    )
};
export default States;
