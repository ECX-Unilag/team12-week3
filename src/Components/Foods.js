import React from 'react';
import { Link } from "react-router-dom";

const Foods = () => {
    return (
        <section id="foods">
            <h5 className="text-center" data-aos="fade-down"  data-aos-delay="100">Foods and Drinks</h5>
            <div className="foods row">
                <div className="food-item col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in"  data-aos-delay="100">
                    <img src="img/jollof.jpg" alt="jollof rice" />
                    <h6><strong>Jollof Rice</strong></h6>
                    <p>The colourful delicacy is food to many West African countries,not just Nigeria.</p>
                </div>

                <div className="food-item col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in"  data-aos-delay="150">
                    <img src="img/pounded.jpg" alt="Pounded Yam" />
                    <h6><strong>Pounded Yam</strong></h6>
                    <p>Pounded yam is one of Nigeria's most popular dishes that can be served with a variety of soups like Egusi, Ogbono, Vegetable and Okra soups.</p>
                </div>

                <div className="food-item col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in"  data-aos-delay="200">
                    <img src="img/garri.jpg" alt="Garri" />
                    <h6><strong>Garri</strong></h6>
                    <p>Garri would pass as the king int he land of Nigerian dishes, as it is a household food in almost all Nigerian homes. There is a popular joke in Nigeria that though garri has no advert placement, yet it sells more than other food products that advertise.</p>
                </div>

                <div className="food-item col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in"  data-aos-delay="250">
                    <img src="img/tuwo.jpg" alt="Tuwo Shinkafa" />
                    <h6><strong>Tuwo Shinkafa</strong></h6>
                    <p>Tuwo Shinkafa is from the Hausa language, meaning 'Mashed Rice'. It is the go-to-side-dish for many Nothern soups such as Myan Kuka, Myan Karkashi and even Okra soup in many Hausa-speaking communities.</p>
                </div>

                <div className="food-item col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in"  data-aos-delay="300">
                    <img src="img/suya.jpeg" alt="Suya" />
                    <h6><strong>Suya</strong></h6>
                    <p>Suya is a very popular delicacy in Nigeria. Conventionally eaten in the evenings, this snack is made with with fish or meat doused with spices and then barbequed on a skewer</p>
                </div>

                <div className="food-item col-lg-4 col-md-6 col-sm-6" data-aos="zoom-in"  data-aos-delay="350">
                    <img src="img/afang.jpg" alt="Afang Soup" />
                    <h6><strong>Afang Soup</strong></h6>
                    <p>The soup is made with local Afang leaves and water leaves together with dried fish, meat and snails, as well as seasoings. Although it originated from South-southern Nigeria, Afang soup is now enjoyed across state borders in Nigeria and also in the diaspora.</p>
                </div>
            </div>

            <div className="food-btn">
                <Link to="/restaurant" className="see-more" data-aos="fade"  data-aos-delay="400">See More</Link>
            </div>
        </section>
    )
};
export default Foods;
