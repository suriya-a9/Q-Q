import React, { useState, useEffect } from "react";
import "./Reservation.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reservation = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setSelectedDate(getStartOfWeek(new Date()).toISOString().split('T')[0]);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !phoneNumber || !email) {
      toast.error("Some fields are required");
      return;
    }

    const emailParams = {
      name,
      phoneNumber,
      email,
      selectedDate,
      message,
    };

    emailjs
      .send(
        "service_ror71hd",
        "template_6ccnvy8",
        emailParams,
        "PlDYeat8nnTxmjHTY"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast.success("Table booked successfully!");
          setName("");
          setPhoneNumber("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Table booking failed");
        }
      );

    const whatsappMessage = `Hi, my name is ${name}. I would like to book an appointment. My phone number is ${phoneNumber}. Additionally, here is my message: ${message}`;

    window.open(
      `https://wa.me/6384820056?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  const getStartOfWeek = (date: Date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    return new Date(date.setDate(diff));
  };

  return (
    <>
      <>
        <section className="reservation-section" id="book-a-table">
          <div className="container">
            <h2 className="contact-form-heading">Contact US</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="reservation">
                  <form onSubmit={handleSubmit} style={{ marginTop: "45px" }}>
                    <div>
                      <label className='label-name' htmlFor="name" style={{ color: 'white', paddingBottom: '15px', paddingTop: '15px' }}>Name*</label>
                      <input
                        className="form-name"
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <label className='label-mobile' htmlFor="phoneNumber" style={{ color: 'white', paddingBottom: '15px', paddingTop: '15px' }}>Mobile No *</label>
                    <div>
                      <input
                        className="form-mobile"
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <input type="hidden" name="selectedDate" value={selectedDate} />
                    <div>
                      <label className='label-email' htmlFor="email" style={{ color: 'white', paddingBottom: '15px', paddingTop: '15px' }}>Email ID*</label>
                      <input
                        className="form-email"
                        type="email"
                        id="email"
                        placeholder="Email Id"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className='label-message' htmlFor="message" style={{ color: 'white', paddingBottom: '15px', paddingTop: '15px' }}>Write Your Message:</label>
                      <textarea
                        style={{ marginTop: "25px" }}
                        value={message}
                        className="form-message"
                        name="message"
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                      >
                        Message
                      </textarea>
                    </div>
                    <input type="submit" value="submit" />
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="spining-image"><img src={"assets/images/inner.png"} alt="img" /></div>
                <div className="spining-image-1"><img src={"assets/images/outer.png"} alt="img" /></div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </>
    </>
  );
};

export default Reservation;