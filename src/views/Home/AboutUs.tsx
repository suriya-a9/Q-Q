// import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import '@fortawesome/fontawesome-free/css/all.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./AboutUs.css";

const AboutUs = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        // nav: true,
        autoplay: false,
        dots: false,
        // navText: ["<", ">"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        },
    };
    return (
        <>
            <section className='about-us'>
                <div className='container'>
                    <div className="row title" style={{ marginBottom: "20px" }} >
                        {/* <div class="col-sm-12 btn btn-info">
                            Owl Carousel In React Application
                        </div> */}
                    </div>
                </div>
                <div className='container restaurant_container'>
                    <div className="owl_title">
                        <h2 className='about-us-heading'>About Us</h2>
                        {/* <a href="/category-list">See all</a> */}
                    </div>
                    <OwlCarousel className="owl-theme" nav {...options}>
                        <div className="owl-card">
                            <div className="owl_image img_fluid" ><img className="img" alt="img" src={'assets/images/Group 29.png'} /></div>
                        </div>
                        <div className="owl-card">
                            <div className="owl_image img_fluid" ><img className="img" alt="img" src={'assets/images/Group 30.png'} /></div>
                        </div>
                        <div className="owl-card">
                            <div className="owl_image img_fluid" ><img className="img" alt="img" src={'assets/images/Group 31.png'} /></div>
                        </div>
                        <div className="owl-card">
                            <div className="owl_image img_fluid" ><img className="img" alt="img" src={'assets/images/Group 32.png'} /></div>
                        </div>
                        <div className="owl-card">
                            <div className="owl_image img_fluid" ><img className="img" alt="img" src={'assets/images/Group 33.png'} /></div>
                        </div>
                        <div className="owl-card">
                            <div className="owl_image img_fluid" ><img className="img" alt="img" src={'assets/images/Group 28.png'} /></div>
                        </div>
                        <div className="owl-card">
                            <div className="owl_image img_fluid" ><img className="img" alt="img" src={'assets/images/Group 34.png'} /></div>
                        </div>
                        <div className="owl-card">
                            <div className="owl_image img_fluid" ><img className="img" alt="img" src={'assets/images/Group 42.png'} /></div>
                        </div>
                        <div className="owl-card">
                            <div className="owl_image img_fluid" ><img className="img" alt="img" src={'assets/images/Group 36.png'} /></div>
                        </div>
                        <div className="owl-card">
                            <div className="owl_image img_fluid" ><img className="img" alt="img" src={'assets/images/Group 38.png'} /></div>
                        </div>
                        <div className="owl-card">
                            <div className="owl_image img_fluid" ><img className="img" alt="img" src={'assets/images/Group 39.png'} /></div>
                        </div>
                        <div className="owl-card">
                            <div className="owl_image img_fluid" ><img className="img last-about-image" alt="img" src={'assets/images/Group 41.png'} /></div>
                        </div>
                    </OwlCarousel>
                    <div className='owl-botoom-div'><hr className='bottom-div-hr' /></div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;