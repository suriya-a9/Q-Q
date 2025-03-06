import { useNavigate } from 'react-router-dom';
import "./Cta.css";

const Cta = () => {
    const navigate = useNavigate();
    const bookAppoint = () => {
        navigate("/book-an-appointment");
      }
    return (
        <>
        <section className="cta">
            <div className="container cta-cont">
                <div className="row">
                    <div className="col-md-12">
                        <div className="cta-div">
                            <h4>Ready to elevate your style?<br/>Book your appointment today and experience the Q&Q difference.</h4>
                            <button className="cta-book-now" onClick={bookAppoint}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Cta;