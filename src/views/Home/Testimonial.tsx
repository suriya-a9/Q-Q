import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import "./Testimonial.css";

const TestimonialCarousel = () => {
  // const testimonials = [
  //     { id: 1, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  //     { id: 2, name: 'Jane Doe', comment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  //     // Add more testimonials as needed
  // ];

  const settings = {
    dots: true,
    nav: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-section">
      <Container>
        <h2 className="testimonial-heading">Our Customers</h2>
        <Slider {...settings}>
          <div>
            <Row>
              <Col>
                <div className="div-testimonial-image">
                  <img src={"assets/images/testi-1.webp"} alt="img" />
                </div>
              </Col>
              <Col>
                <div className="div-testimonial-caption">
                  <h4>Rahul</h4>
                  <p>
                    "The best grooming experience I've ever had! The barbers at
                    Q&Q are true professionals who really understand men's hair.
                    I always leave feeling refreshed and confident. Highly
                    recommend this place to anyone looking for top-notch
                    service."
                  </p>
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col>
                <div className="div-testimonial-image">
                  <img src={"assets/images/testi-3.webp"} alt="img" />
                </div>
              </Col>
              <Col>
                <div className="div-testimonial-caption">
                  <h4>Arjun</h4>
                  <p>
                    "Exceptional service and a perfect cut every time. I've been
                    a regular at Q&Q for months, and they never disappoint. The
                    attention to detail and the friendly atmosphere make each
                    visit a pleasure. Truly the best in town!"
                  </p>
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col>
                <div className="div-testimonial-image">
                  <img src={"assets/images/testi-3.jpg"} alt="img" />
                </div>
              </Col>
              <Col>
                <div className="div-testimonial-caption">
                  <h4>Vikram</h4>
                  <p>
                    "Finally found a place that understands men's grooming. From
                    haircuts to beard trims, the services are consistently
                    excellent. The team at Q&Q is skilled, courteous, and always
                    makes sure I leave looking my best. Top-notch experience!"
                  </p>
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#f1c644",
                      fontSize: "30px",
                      marginRight: "15px",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          {/* Add more testimonials as needed */}
        </Slider>
      </Container>
    </section>
  );
};

export default TestimonialCarousel;
