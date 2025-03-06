import { useNavigate } from "react-router-dom";
import "./MainServices.css";
import LazyLoad from "react-lazyload";

const MainServices = () => {
  const navigate = useNavigate();
  const bookingLink = () => {
    navigate("/book-an-appointment");
  };
  return (
    <>
      <h2 className="main-services-heading">Main Services</h2>
      <section className="main-services">
        <div className="container">
          <div className="row main-service-first-row">
            <div className="col-md-4 left-animation">
              <div className="main-service-div" onClick={bookingLink}>
                <div className="main-service-image">
                  <LazyLoad>
                    <img
                      src={
                        "assets/images/adult-barber-washing-old-man-hair-backwash.jpg"
                      }
                      alt="img"
                    />
                  </LazyLoad>
                  <div className="image-overlay"></div>
                </div>
                <div className="main-service-text">Mens Facial</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="main-service-div" onClick={bookingLink}>
                <div className="main-service-image">
                  <LazyLoad>
                    <img src={"assets/images/hair-service.webp"} alt="img" />
                  </LazyLoad>
                  <div className="image-overlay"></div>
                </div>
                <div className="main-service-text">Mens Hair Cut</div>
              </div>
            </div>
            <div className="col-md-4 right-animation">
              <div className="main-service-div" onClick={bookingLink}>
                <div className="main-service-image">
                  <LazyLoad>
                    <img src={"assets/images/beard-service.webp"} alt="img" />
                  </LazyLoad>
                  <div className="image-overlay"></div>
                </div>
                <div className="main-service-text">Mens Beard Set</div>
              </div>
            </div>
          </div>
          <div className="row main-service-second-row">
            <div className="col-md-4 left-animation">
              <div className="main-service-div" onClick={bookingLink}>
                <div className="main-service-image">
                  <LazyLoad>
                    <img
                      src={"assets/images/kid-getting-haircut-front-view.jpg"}
                      alt="img"
                    />
                  </LazyLoad>
                  <div className="image-overlay"></div>
                </div>
                <div className="main-service-text">Children Haircut</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="main-service-div" onClick={bookingLink}>
                <div className="main-service-image">
                  <LazyLoad>
                    <img src={"assets/images/head-massage.webp"} alt="img" />
                  </LazyLoad>
                  <div className="image-overlay"></div>
                </div>
                <div className="main-service-text">Head Massage</div>
              </div>
            </div>
            <div className="col-md-4 right-animation">
              <div className="main-service-div" onClick={bookingLink}>
                <div className="main-service-image">
                  <LazyLoad>
                    <img src={"assets/images/hair-highlisght.webp"} alt="img" />
                  </LazyLoad>
                  <div className="image-overlay"></div>
                </div>
                <div className="main-service-text">Hair Highlights</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainServices;
