import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Magic from "./Magic";
import MainServices from "./MainServices";
import { FiPhone } from "react-icons/fi";

const Services = () => {
    return (
        <>
            <Header />
            <MainServices />
            <a href="tel:+916384820056">
                <div className="fixed-div">
                    {/* <span className="fixed-class-span">FIND A TABLE</span> */}
                    <FiPhone style={{ color: 'red', fontSize: '45px' }} />
                </div>
            </a>
            <Magic />
            <Footer />
        </>
    )
}

export default Services;