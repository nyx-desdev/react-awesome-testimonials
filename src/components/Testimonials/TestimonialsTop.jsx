import React from "react";
import "./styles/TestimonialsTop.css";

const TestimonialsTop = (props) => {
  return (
    <div className="TestimonialsTop">
      {props.testimonials.map((item, index) => {
        return (
          <div
            key={index}
            className="TestimonialsTop__slide"
            style={{
              transform: `translateX(${props.x}%`,
            }}
          >
            <div className="TestimonialsTop__slide__item">{item.review}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialsTop;
