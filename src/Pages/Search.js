import React, { useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Chat from "../Components/Chat";
import Footer from "../Components/Footer";

const Search = () => {
    const data = JSON.parse(window.sessionStorage.getItem("data"));
    const link = window.sessionStorage.getItem("link");

    useEffect(() => {
      const title = document.getElementById("search-title");
      const snippet = document.getElementById("search-snippet");
      const readMore = document.getElementById("readMore");
      const viewMap = document.getElementById("viewMap");
    console.log(data);
    console.log(link)
    data.query.search.forEach(item => {
        if (link === item.title) {
            title.innerHTML = item.title;
            snippet.innerHTML = item.snippet + "...";
            readMore.setAttribute("href", `https://en.wikipedia.org/wiki/${item.title}`);
            viewMap.setAttribute("href", `http://maps.google.com/maps?q=${item.title}`);
        }
    })
})
    return (
        <>
            <Navbar />
            <section id="searchDiv">
            <div className="header-img">
                <img src="img/Olumo-Rock-new.jpg" alt="olumo rock" />
            </div>
                <h3 id="search-title">
                </h3>
                <h6 id="search-snippet">
                </h6>
            <div className="buttons">
                <a href="#header" id="readMore"> Read More</a>
                <a href="#header" id="viewMap">Show on Map</a>
            </div>
            </section>
            <Chat />
            <Footer />
            </>
    )
};
export default Search;
