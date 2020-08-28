import React, { useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Foods from "../Components/Foods";
import States from "../Components/States";
import Footer from "../Components/Footer";
import Chat from '../Components/Chat';

const Home = () => {
  useEffect(() => {
    const navList = document.querySelectorAll("li");
    navList.forEach(list => {
        if (list.classList.contains("active")) {
            list.classList.remove("active");
        }
    })
    navList[0].classList.add("active");

    const formInput = document.getElementById("searchInput");
    formInput.oninput = showData;
    const searchForm = document.getElementById("search-form");
    searchForm.onsubmit = showData;

    function showData(e) {
        e.preventDefault();
        window.sessionStorage.clear("data");
        const showResult = document.getElementById("searchResult");
        showResult.innerHTML = "";
        const formData = new FormData(searchForm);
        const name = formData.get("search-name") || formInput.value;
        const getSearchData = async function(){
        const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${name}`);
        const data = await res.json();
        if (data){
        window.sessionStorage.setItem("data", JSON.stringify(data));
        showResult.innerHTML = `<div id="results"></div>`;
        data.query.search.map(item => {
          const dataDiv = `
          <div>
          <p><a class="searchLink" href="/search">${item.title}</a></p>
          </div>
          `;
          const results = document.getElementById("results");
          return results.insertAdjacentHTML("beforeend", dataDiv);
        });
        }
        const searchLinks = document.querySelectorAll(".searchLink");
        searchLinks.forEach(link => {
          link.onclick = saveData;
        })
        function saveData(e){
          window.sessionStorage.setItem("link", e.target.innerText);
        }
      }
      getSearchData().catch(err => {
        console.log(err);
      });
    }

  });
return (
    <div>
        <Navbar />
        <section id="home">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"  data-aos="zoom-in">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="img/ikogosi.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="img/kajuru2.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="img/Olumo-Rock.jpg" alt="Third slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>


        <div className="search" data-aos="zoom-out"  data-aos-delay="300">
            <form id="search-form" autoComplete="off">
                <input type="name" name="search-name" id="searchInput" required placeholder="places, street names, banks" minLength="3" maxLength="50" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          <div id="searchResult">
          </div>
        </div>

        </section>
        <Foods />
        <States />
        <Chat />
        <Footer />
    </div>
    )
}

export default Home;