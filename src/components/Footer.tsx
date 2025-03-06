import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
    const navigate = useNavigate();
    const servicePage = () => {
    navigate("/services");
  };
  const bookingPage = () => {
    navigate("/book-an-appointment");
  };
  const homePage = () => {
    navigate("/");
  };
    return (
        <>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-1">
                                {/* <img src={'assets/images/HOP - Logo-01.png'} alt='footer-logo' /> */}
                                <h4>Address</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-2">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a onClick={homePage} style={{ textDecoration: 'none', color: 'white' }}>Home</a></li>
                                    <li><a onClick={servicePage} style={{ textDecoration: 'none', color: 'white' }}>Service</a></li>
                                    <li><a onClick={bookingPage} style={{ textDecoration: 'none', color: 'white' }}>Booking</a></li>
                                    {/* <li><a href="#gallery" style={{ textDecoration: 'none', color: 'white' }}>GALLERY</a></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-3">
                                <h4>CONTACT US</h4>
                                <p><FaPhoneAlt />&nbsp;&nbsp;<a href="tel:+919876543210">Phone</a></p>
                                <p style={{ marginTop: '0px' }}><IoMdMail />&nbsp;&nbsp;<a href="mailto:webmaster@example.com">Mail</a></p>
                            </div>
                        </div>
                        {/* <div className="col-md-2">
                            <div className="footer-4">
                                <div className="footer-social-media-icons">
                                    <h4>REACH US</h4>
                                    <ul>
                                        <li><img src={'assets/images/footer-face.png'} alt="img" style={{ width: '24px' }} /></li>
                                        <li><img src={'assets/images/footer-insta.png'} alt="img" style={{ width: '24px' }} /></li>
                                        <li><img src={'assets/images/Group 25.png'} alt="img" style={{ width: '24px' }} /></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="row">
                    <div className="col-md-12">
                        <div className="footer-social-media-icons">
                            <ul>
                                <li><img src={'assets/images/facebook-24.png'} alt="img" style={{width:'28px'}}/></li>
                                <li><img src={'assets/images/instagram-24.png'} alt="img" style={{width:'28px'}}/></li>
                                <li><img src={'assets/images/youtube-6-24.png'} alt="img" style={{width:'28px'}}/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-copyright">
                            <p>@Copyright 2024 - House of Paneer</p>
                        </div>
                    </div>
                </div> */}
                </div>
            </section>
        </>
    )
}

export default Footer;
