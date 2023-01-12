import React from "react";
import { useState, useEffect } from "react";
import Image2 from "../../../images/HeroSlider3.jpg";
import "./Carousel.css";
const Carousel = () => {
  useEffect(() => {
    //DOM elements
    const coverflowContainer = document.querySelector(".coverflow");
    const coverflowImages = [...document.querySelectorAll(".coverflow__image")];
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");

    //set indicies and initial position
    coverflowImages.forEach(function (coverflowImage, i) {
      coverflowImage.dataset.coverflowIndex = i + 1;
    });
    let coverflowPosition = Math.floor(coverflowImages.length / 2) + 1;
    coverflowContainer.dataset.coverflowPosition = coverflowPosition;

    //navigation functions
    function viewPrevImage() {
      coverflowPosition = Math.max(1, coverflowPosition - 1);
      coverflowContainer.dataset.coverflowPosition = coverflowPosition;
    }
    function viewNextImage() {
      coverflowPosition = Math.min(
        coverflowImages.length,
        coverflowPosition + 1
      );
      coverflowContainer.dataset.coverflowPosition = coverflowPosition;
    }
    function jumpToImage(targetImage) {
      coverflowPosition = Math.min(
        coverflowImages.length,
        Math.max(1, targetImage.dataset.coverflowIndex)
      );
      coverflowContainer.dataset.coverflowPosition = coverflowPosition;
    }

    //add event handlers
    prevArrow.addEventListener("click", viewPrevImage);
    nextArrow.addEventListener("click", viewNextImage);
    coverflowImages.forEach(function (image) {
      image.addEventListener("click", (evt) => jumpToImage(evt.target));
    });
    window.addEventListener("keyup", (evt) => {
      if (evt.target === 37) {
        //left arrow
        viewPrevImage();
      } else if (evt.target === 39) {
        //right arrow
        viewNextImage();
      }
    });
  }, []);
  return (
    <>
      <div className="coverflow">
        <a className="prev-arrow" href="#/"></a>
        <img
          className="coverflow__image"
          src="https://colorlib.com/wp/wp-content/uploads/sites/2/gatcomart-mega-ecommerce-website-template.jpg"
          alt="image1"
        />
        <img
          className="coverflow__image"
          src="https://www.templateshub.net/uploads/1537207366electrothumb.jpg"
          alt="image2"
        />
        <img className="coverflow__image" src={Image2} alt="image3" />

        <img
          className="coverflow__image"
          src="https://tse4.mm.bing.net/th?id=OIP.ymiy0ErSX9ZKl3TpBn_pKwHaGC&pid=Api&P=0&w=200&h=163"
          alt="image5"
        />
        <img
          className="coverflow__image"
          src="https://uicookies.com/wp-content/uploads/2019/11/Divisima.jpg"
          alt="image6"
        />
        <img
          className="coverflow__image"
          src="https://colorlib.com/wp/wp-content/uploads/sites/2/gatcomart-mega-ecommerce-website-template.jpg"
          alt="image7"
        />
        <a className="next-arrow" href="#/"></a>
      </div>
    </>
  );
};

export default Carousel;
