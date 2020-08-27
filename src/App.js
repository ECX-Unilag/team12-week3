import React, { useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import AOS from "aos";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Guides from "./Pages/Guides";
import Contact from "./Pages/Contact";
import Flight from "./Pages/Flight";
import Restaurant from "./Pages/Restaurant";
import Abuja from "./Pages/Guides/Abuja";
import Enugu from "./Pages/Guides/Enugu";
import Lagos from "./Pages/Guides/Lagos";
import Error from "./Error";
import "./app.css";


  const App = () => {

    useEffect(() => {

      AOS.init({
        offset: 20, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease-in', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

      });
    })
    return (
      <main>
          <Switch>
              <Route path="/" render={renderprops =><Home {...renderprops} />} exact />
              <Route path="/about" render={renderprops => <About {...renderprops} />} />
              <Route path="/guides" render={renderprops => <Guides {...renderprops} />} />
              <Route path="/flight" render={renderprops => <Flight {...renderprops} />} />
              <Route path="/restaurant" render={renderprops => <Restaurant {...renderprops} />} />
              <Route path="/abuja-guide" render={renderprops => <Abuja {...renderprops} />} />
              <Route path="/lagos-guide" render={renderprops => <Lagos {...renderprops} />} />
              <Route path="/enugu-guide" render={renderprops => <Enugu {...renderprops} />} />
              <Route path="/contact" render={renderprops => <Contact {...renderprops} />} />
              <Route render={renderprops => <Error {...renderprops} />} />
          </Switch>
      </main>
    )
  }
  export default App;