// import React, { useState, useEffect } from "react";
import bannerPic from "./assets/homebanner.png";
import bannerPic2 from "./assets/homebanner2.png";

function Home() {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-banner">
          <img className="home-banner-img" src={bannerPic} alt="" />
          <section className="home-main">
            <h2>Clothing to wear so youre not naked</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </div>
        <div className="home-banner">
          <section className="home-main">
            <h2>
              Jewelry to show how much more money you have than everyone else
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
          <img className="home-banner-img" src={bannerPic2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
