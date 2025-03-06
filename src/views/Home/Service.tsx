import { FiPhone } from "react-icons/fi";
import "./Service.css";
// import "./Menus.css";
const Service = () => {
  return (
    <>
      <section className="service">
        <div className="container">
          <a href="tel:+916384820056">
            <div className="fixed-div">
              {/* <span className="fixed-class-span">FIND A TABLE</span> */}
              <FiPhone style={{ color: "red", fontSize: "45px" }} />
            </div>
          </a>
          <h2 className="service-heading">Our Services</h2>
          <h3 className="service-sub-heading">
            Our Providing Our Customer
            <br />
            Service
          </h3>
          <div className="row" style={{ marginTop: "45px" }}>
            <div className="col-md-4">
              <div className="service-div">
                <img
                  src={"assets/images/beard-service.webp"}
                  alt="service-img-1"
                />
                <div className="service-caption">
                  <div className="service-div-image">
                    <img src={"assets/images/OIP (11).jpeg"} alt="img" />
                  </div>
                  <p>
                    Get ready for any occasion with our professional hair
                    styling services. Whether you need a sleek look for a
                    special event, a stylish blowout, or a casual everyday
                    style, our stylists are equipped to create the perfect look
                    for you. We use top-of-the-line products to ensure your
                    style lasts all day.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-div">
                <img
                  src={"assets/images/hair-service.webp"}
                  alt="service-img-1"
                />
                <div className="service-caption">
                  <div className="service-div-image">
                    <img
                      src={
                        "assets/images/beard-clipart-transparent-background-9.png"
                      }
                      alt="img"
                    />
                  </div>
                  <p>
                    Indulge in a luxurious shaving experience at Q&Q. Our
                    professional barbers provide traditional hot towel shaves,
                    straight razor shaves, and meticulous beard grooming
                    services. From shaping and trimming to complete shaves, we
                    use premium products to give you the perfect finish, leaving
                    your skin smooth and refreshed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-div">
                <img
                  src={
                    "assets/images/musicians-performing-aram-khachatryan-concert-hall.jpg"
                  }
                  alt="service-img-1"
                />
                <div className="service-caption">
                  <div className="service-div-image">
                    <img src={"assets/images/OIP (12).jpeg"} alt="img" />
                  </div>
                  <p>
                    Bring your little ones in for a stylish and comfortable
                    haircut experience. Our friendly barbers are skilled in
                    working with children, ensuring they have a fun and
                    enjoyable time while getting a great haircut. We offer a
                    range of kid-friendly styles, making sure your child leaves
                    with a smile and a cool new look.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
