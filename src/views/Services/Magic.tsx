import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Magic.css";

const Magic = () => {
    const settings = {
        dots: false,
        nav: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
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
        <>
            <section className="Magic">
                <Container>
                    <h2 className='our-magic-heading'>Our Magic</h2>
                    <Slider {...settings}>
                        <div>
                            <Row>
                                <Col>
                                    <div className="div-testimonial-image">
                                        <img src={'assets/images/portrait-brutal-bearded-man-sunglasses-dark-photo-studio.jpg'} alt='img' />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col>
                                    <div className="div-testimonial-image">
                                        <img src={'assets/images/portrait-brutal-bearded-man-sunglasses-dark-photo-studio.jpg'} alt='img' />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col>
                                    <div className="div-testimonial-image">
                                        <img src={'assets/images/portrait-brutal-bearded-man-sunglasses-dark-photo-studio.jpg'} alt='img' />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default Magic;