import React from "react";
import "./styles/TestimonialsBottom.css";

const TestimonialsBottom = (props) => {
  return (
    <div className="TestimonialsBottom">
      {window.innerWidth < 481 ? (
        <div className="TestimonialsBottom__box TestimonialsBottom__box-mobile">
          {props.testimonials.map((item, index) => (
            <div key={index} className="TestimonialsBottom__box_container">
              {Math.floor(props.testimonials.length / 2 - 1) === index ? (
                <img
                  style={{ height: "56px", width: "56px" }}
                  src={item.img_src}
                  alt="customer"
                />
              ) : (
                <span
                  className={`TestimonialsBottom__box_${index} TestimonialsBottom__box-mobile-hide`}
                  style={{ height: "48px", width: "48px" }}
                ></span>
              )}
              <>
                {Math.floor(props.testimonials.length / 2) === index ? (
                  <img
                    className={`TestimonialsBottom__box_${index}`}
                    src={item.img_src}
                    style={{
                      marginTop: "50px",
                      opacity: "1",
                      height: "104px",
                      width: "104px",
                    }}
                    alt="customer"
                  />
                ) : (
                  <span
                    className={`TestimonialsBottom__box_${index} TestimonialsBottom__box-mobile-hide`}
                  ></span>
                )}

                {Math.floor(props.testimonials.length / 2) === index ? (
                  <p
                    style={{
                      marginTop: "5px",
                      color: "#3E4041",
                      fontWeight: "500",
                    }}
                  >
                    {item.name}
                  </p>
                ) : null}
                {Math.floor(props.testimonials.length / 2) === index ? (
                  <p style={{ marginTop: "5px", color: "#858585" }}>
                    {item.company}
                  </p>
                ) : null}
              </>
              {Math.floor(props.testimonials.length / 2 + 1) === index ? (
                <img
                  className={`TestimonialsBottom__box_${index}`}
                  style={{ height: "56px", width: "56px" }}
                  src={item.img_src}
                  alt="customer"
                />
              ) : (
                <span
                  style={{ height: "48px", width: "48px" }}
                  className={`TestimonialsBottom__box_${index} TestimonialsBottom__box-mobile-hide`}
                ></span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="TestimonialsBottom__box">
          {props.testimonials.map((item, index) => (
            <div key={index} className="TestimonialsBottom__box_container">
              {Math.floor(props.testimonials.length / 2) === index ? (
                <img
                  className={`TestimonialsBottom__box_${index}`}
                  src={item.img_src}
                  style={{
                    marginTop: "40px",
                    opacity: "1",
                  }}
                  alt="customer"
                />
              ) : (
                <img
                  className={`TestimonialsBottom__box_${index}`}
                  src={item.img_src}
                  alt="customer"
                />
              )}

              {Math.floor(props.testimonials.length / 2) === index ? (
                <p
                  style={{
                    marginTop: "5px",
                    color: "#3E4041",
                    fontWeight: "500",
                  }}
                >
                  {item.name}
                </p>
              ) : null}
              {Math.floor(props.testimonials.length / 2) === index ? (
                <p style={{ marginTop: "5px", color: "#858585" }}>
                  {item.company}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialsBottom;
