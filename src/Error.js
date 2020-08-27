import React from 'react';
import Navbar from "./Components/Navbar";

export default class Error extends React.Component {
   render() {
    return (
        <>
        <Navbar />
        <section id="error" style={{marginTop: "30vh"}}>
            <h2 className="text-center">404 Error: Page Not Found</h2>
        </section>
        </>
    )
}
}