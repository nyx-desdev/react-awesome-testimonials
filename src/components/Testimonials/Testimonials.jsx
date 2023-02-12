import React, { useState, useEffect } from "react";
import LeftArrowIcon from "./icons/red_arrow_left.svg";
import RightArrowIcon from "./icons/red_arrow_right.svg";
import TestimonialsTop from "./TestimonialsTop.jsx";
import TestimonialsBottom from "./TestimonialsBottom.jsx";
import "./styles/Testimonials.css";

const Testimonials = (props) => {
  const [x, setX] = useState(0); //x denotes translate transition value
  const [testimonials, setTestimonials] = useState(props.testimonials);
  const [testimonialsReview] = useState(props.testimonials);

  useEffect(() => {
    size(); // To calulate different size of images
    setX((-100 * (testimonialsReview.length - 1)) / 2);
  }, []);

  const size = () => {
    let len = testimonials.length;
    let mid = Math.floor(len / 2);
    let maxWidth = 104;
    let imgDivmid = document.querySelector(".TestimonialsBottom__box_" + mid);
    imgDivmid.style.width = maxWidth + "px";
    let i = 1;
    while (i <= mid) {
      let itemSelectBefore = document.querySelector(
        ".TestimonialsBottom__box_" + (mid + i)
      );

      let itemSelectAfter = document.querySelector(
        ".TestimonialsBottom__box_" + (mid - i)
      );

      itemSelectBefore.style.width =
        maxWidth - (i * maxWidth) / (2 * mid) + "px";

      itemSelectAfter.style.width =
        maxWidth - (i * maxWidth) / (2 * mid) + "px";

      i++;
    }
  };

  const prev = () => {
    const updatedTestimonials = testimonials;
    updatedTestimonials.unshift(updatedTestimonials.pop());
    setTestimonials(updatedTestimonials);
  };

  const next = () => {
    let updatedTestimonials = [];
    let firstItem = testimonials.shift();
    updatedTestimonials = [...testimonials, firstItem];
    setTestimonials(updatedTestimonials);
  };

  const goLeft = () => {
    x === 0 ? setX(-100 * (testimonialsReview.length - 1)) : setX(x + 100);
    prev();
  };

  const goRight = () => {
    x === -100 * (testimonialsReview.length - 1) ? setX(0) : setX(x - 100);
    next();
  };

  return (
    <div className="Testimonials__main">
      <div className="Testimonials__main-container">
        <TestimonialsTop testimonials={testimonialsReview} x={x} />
        <TestimonialsBottom testimonials={testimonials} />
        <img
          className="Testimonials__left"
          onClick={goLeft}
          src={LeftArrowIcon}
          alt="left"
        />
        <img
          className="Testimonials__right"
          onClick={goRight}
          src={RightArrowIcon}
          alt="right"
        />
      </div>
    </div>
  );
};

export default Testimonials;
