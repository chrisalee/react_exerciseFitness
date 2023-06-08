import React from "react";
import { Stack } from "@mui/material";
import BannerImage from "../assets/banner-image.png";

const HeroBanner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-left">
          <h2 className="banner-title">Fitness Club</h2>
          <h1 className="banner-slogan">
            Sweat, Smile <br /> And Repeat
          </h1>
          <h3 className="banner-header">
            Check out the most effective exercises personalized to you
          </h3>
          <Stack>
            <a href="#exercises" className="banner-link">
              Explore Exercises
            </a>
          </Stack>
          <p className="banner-huge">Exercise</p>
        </div>
        <div className="banner-right">
          <img src={BannerImage} alt="hero-banner" className="banner-image" />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
