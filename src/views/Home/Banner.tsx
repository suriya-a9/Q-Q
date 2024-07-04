import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import "./Banner.css";
import "../../index.css";

function Banner() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  const bookingPage = () => {
    navigate("/book-an-appointment");
  };
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <Carousel fade style={{ marginTop: "-167px" }}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img
          src={"assets/images/scissors-hair-trimmer-copy-space.jpg"}
          alt="banner-img"
          className="banner-image"
          style={{ width: "100%", height: "650px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          {/* <h4 className={`fadeInBottom fadeInBottomH4 ${animate ? 'fadeInBottomActive' : ''}`}>DELIGHTFUL EXPERIENCE</h4> */}
          {/* <span><img src={'assets/images/separator.svg'} alt='separator-img' className={`fadeInBottomImg ${animate ? 'fadeInBottomActive' : ''}`}  style={{width:'10%'}}/></span> */}
          <h1
            className={`fadeInBottom fadeInBottomH1 ${
              animate ? "fadeInBottomActive" : ""
            }`}
          >
            Experience the
            <br />
            Ultimate in Men's
            <br />
            Grooming
          </h1>
          {/* <h2 className={`fadeInBottom fadeInBottomH1 ${animate ? 'fadeInBottomActive' : ''}`} style={{marginTop:'-33px'}}> where flavor takes center stage!</h2> */}
          {/* <p className={`fadeInBottom fadeInBottomP ${animate ? 'fadeInBottomActive' : ''}`}>Where Taste Meets Tradition! Step into a world of culinary excellence.</p> */}
          <a onClick={bookingPage}>
            <button
              className={`fadeInBottom fadeInBottomBtn ${
                animate ? "fadeInBottomActive" : ""
              }`}
              style={{ borderRadius: "30px" }}
            >
              <CiCalendarDate style={{ fontSize: "25px" }} /> Make Appointment
            </button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img
          src={"assets/images/banner-2.webp"}
          alt="banner-img"
          className="banner-image"
          style={{ width: "100%", height: "650px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          {/* <h4 className={`fadeInBottom fadeInBottomH4 ${animate ? 'fadeInBottomActive' : ''}`}>DELIGHTFUL EXPERIENCE</h4> */}
          {/* <img src={'assets/images/separator.svg'} alt='separator-img' className={`fadeInBottomImg ${animate ? 'fadeInBottomActive' : ''}`} style={{width:'10%'}}/> */}
          <h1
            className={`fadeInBottom fadeInBottomH1 ${
              animate ? "fadeInBottomActive" : ""
            }`}
          >
            Elevate Your Style,
            <br />
            Embrace Your
            <br />
            Confidence
          </h1>
          {/* <h2 className={`fadeInBottom fadeInBottomH1 ${animate ? 'fadeInBottomActive' : ''}`} style={{marginTop:'-33px'}}> where flavor takes center stage!</h2> */}
          {/* <p className={`fadeInBottom fadeInBottomP ${animate ? 'fadeInBottomActive' : ''}`}>From classic favourites to innovative creations, we have something for every palate.</p> */}
          <a onClick={bookingPage}>
            <button
              className={`fadeInBottom fadeInBottomBtn ${
                animate ? "fadeInBottomActive" : ""
              }`}
              style={{ borderRadius: "30px" }}
            >
              <CiCalendarDate style={{ fontSize: "25px" }} /> Make Appointment
            </button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img
          src={"assets/images/banner-2.webp"}
          alt="banner-img"
          className="banner-image"
          style={{ width: "100%", height: "650px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          {/* <h4 className={`fadeInBottom fadeInBottomH4 ${animate ? 'fadeInBottomActive' : ''}`}>DELIGHTFUL EXPERIENCE</h4> */}
          {/* <img src={'assets/images/separator.svg'} alt='separator-img' className={`fadeInBottomImg ${animate ? 'fadeInBottomActive' : ''}`} style={{width:'10%'}}/> */}
          <h1
            className={`fadeInBottom fadeInBottomH1 ${
              animate ? "fadeInBottomActive" : ""
            }`}
          >
            Transform Your
            <br />
            Look, Transform
            <br />
            Your Life
          </h1>
          {/* <h2 className={`fadeInBottom fadeInBottomH1 ${animate ? 'fadeInBottomActive' : ''}`} style={{marginTop:'-33px'}}> where flavor takes center stage!</h2> */}
          {/* <p className={`fadeInBottom fadeInBottomP ${animate ? 'fadeInBottomActive' : ''}`}>Experience a burst of unique flavours like never before.</p> */}
          <a onClick={bookingPage}>
            <button
              className={`fadeInBottom fadeInBottomBtn ${
                animate ? "fadeInBottomActive" : ""
              }`}
              style={{ borderRadius: "30px" }}
            >
              <CiCalendarDate style={{ fontSize: "25px" }} /> Make Appointment
            </button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
