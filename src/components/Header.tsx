import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button, Offcanvas } from "react-bootstrap";
import { HiMenu } from "react-icons/hi";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };
  const bookAppoint = () => {
    navigate("/book-an-appointment");
  };
  window.addEventListener("scroll", function () {
    const headers = document.querySelectorAll(".navbar");
    const scrollPos = window.scrollY;

    headers.forEach((header) => {
      if (scrollPos > 100) {
        // Change 100 to the desired scroll position to trigger the fixed header
        header.classList.add("header-scrolled-fixed");
      } else {
        header.classList.remove("header-scrolled-fixed");
      }
    });
  });

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
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <a onClick={homePage}>
              <img src={"assets/images/q&q header logo.png"} alt="logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={homePage}>Home</Nav.Link>
              <Nav.Link onClick={servicePage}>Service</Nav.Link>
              <Nav.Link onClick={bookingPage}>Booking</Nav.Link>
              {/* <Nav.Link href="#gallery">Gallery</Nav.Link> */}
              {/* <Nav.Link href="#franchise">Franchise</Nav.Link> */}
            </Nav>
            {/* <button className='offers-button'><img src={'assets/images/Vector.png'} alt='offers' /><span className='button-span'>Offers</span></button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
