import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import "./Banner.css";

function Banner() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <Carousel style={{ marginTop: '-82px' }}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={'assets/images/Frame 14369.jpg'} alt='banner-img' className='banner-image' style={{ width: '100%', height: '650px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h4 className={`fadeInBottom fadeInBottomH4 ${animate ? 'fadeInBottomActive' : ''}`}>DELIGHTFUL EXPERIENCE</h4>
          {/* <span><img src={'assets/images/separator.svg'} alt='separator-img' className={`fadeInBottomImg ${animate ? 'fadeInBottomActive' : ''}`}  style={{width:'10%'}}/></span> */}
          <h1 className={`fadeInBottom fadeInBottomH1 ${animate ? 'fadeInBottomActive' : ''}`}>Welcome to House of Paneer</h1><br />
          {/* <h2 className={`fadeInBottom fadeInBottomH1 ${animate ? 'fadeInBottomActive' : ''}`} style={{marginTop:'-33px'}}> where flavor takes center stage!</h2> */}
          <p className={`fadeInBottom fadeInBottomP ${animate ? 'fadeInBottomActive' : ''}`}>Where Taste Meets Tradition! Step into a world of culinary excellence.</p>
          <a href="#menu">
            <button className={`fadeInBottom fadeInBottomBtn ${animate ? 'fadeInBottomActive' : ''}`} style={{ borderRadius: '30px' }}>View our Menu</button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={'assets/images/Frame 14368.jpg'} alt='banner-img' className='banner-image' style={{ width: '100%', height: '650px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h4 className={`fadeInBottom fadeInBottomH4 ${animate ? 'fadeInBottomActive' : ''}`}>DELIGHTFUL EXPERIENCE</h4>
          {/* <img src={'assets/images/separator.svg'} alt='separator-img' className={`fadeInBottomImg ${animate ? 'fadeInBottomActive' : ''}`} style={{width:'10%'}}/> */}
          <h1 className={`fadeInBottom fadeInBottomH1 ${animate ? 'fadeInBottomActive' : ''}`}>Explore 100+ Delectable Paneer Dishes!</h1><br />
          {/* <h2 className={`fadeInBottom fadeInBottomH1 ${animate ? 'fadeInBottomActive' : ''}`} style={{marginTop:'-33px'}}> where flavor takes center stage!</h2> */}
          <p className={`fadeInBottom fadeInBottomP ${animate ? 'fadeInBottomActive' : ''}`}>From classic favourites to innovative creations, we have something for every palate.</p>
          <a href="#menu">
            <button className={`fadeInBottom fadeInBottomBtn ${animate ? 'fadeInBottomActive' : ''}`} style={{ borderRadius: '30px' }}>View our Menu</button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={'assets/images/Frame 14367.jpg'} alt='banner-img' className='banner-image' style={{ width: '100%', height: '650px', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h4 className={`fadeInBottom fadeInBottomH4 ${animate ? 'fadeInBottomActive' : ''}`}>DELIGHTFUL EXPERIENCE</h4>
          {/* <img src={'assets/images/separator.svg'} alt='separator-img' className={`fadeInBottomImg ${animate ? 'fadeInBottomActive' : ''}`} style={{width:'10%'}}/> */}
          <h1 className={`fadeInBottom fadeInBottomH1 ${animate ? 'fadeInBottomActive' : ''}`}>Introducing Flavoured Paneer – A First in Tamil Nadu!</h1><br />
          {/* <h2 className={`fadeInBottom fadeInBottomH1 ${animate ? 'fadeInBottomActive' : ''}`} style={{marginTop:'-33px'}}> where flavor takes center stage!</h2> */}
          <p className={`fadeInBottom fadeInBottomP ${animate ? 'fadeInBottomActive' : ''}`}>Experience a burst of unique flavours like never before.</p>
          <a href="#menu">
            <button className={`fadeInBottom fadeInBottomBtn ${animate ? 'fadeInBottomActive' : ''}`} style={{ borderRadius: '30px' }}>View our Menu</button>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;