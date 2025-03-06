import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import Service from "./Service";
import Cta from "./Cta";
import Testimonial from "./Testimonial";
import AboutUs from "./AboutUs";
import Reservation from "./Reservation";
import "./Home.css";

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Service />
            <Testimonial />
            <AboutUs />
            <Reservation />
            <Cta />
            <Footer />
        </>
    )
}

export default Home;