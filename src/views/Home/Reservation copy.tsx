import React, { useState, useEffect } from "react";
import "./Reservation.css";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

const Reservation = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Set the selected date to the first day of the current week initially
    setSelectedDate(getStartOfWeek(new Date()).toISOString().split('T')[0]);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!name || !phoneNumber) {
      // Show toast message if any required field is empty
      toast.error("Name and phone number are required");
      return;
    }

    const emailParams = {
      name,
      phoneNumber,
      selectedOption,
      selectedDate,
      selectedTime,
      message,
    };

    emailjs
      .send(
        "service_2tcsga2",
        "template_amsx9yx",
        emailParams,
        "nvA_CYnDCeCcV7fUg"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast.success("Table booked successfully!");
          setName("");
          setPhoneNumber("");
          setSelectedOption("");
          setSelectedDate("");
          setSelectedTime("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Table booking failed");
        }
      );

    const whatsappMessage = `Hi, my name is ${name}. I would like to book a table for ${selectedOption} on ${new Date(selectedDate).toLocaleDateString()} at ${selectedTime}. My phone number is ${phoneNumber}. Additional message: ${message}`;

    // Open WhatsApp chat with the specified number and prefilled message
    window.open(
      `https://wa.me/6384820056?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  // Function to get the start of the current week
  const getStartOfWeek = (date: Date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    return new Date(date.setDate(diff));
  };

  // Function to generate an array of dates for the current week
  const getCurrentWeekDates = () => {
    const startDate = getStartOfWeek(new Date());
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      dates.push(currentDate.toISOString().split('T')[0]);
    }
    return dates;
  };

  const timeOptions = ["08:00 AM", "09:00 AM", "12:00 PM", "03:00 PM"];

  return (
    <>
      <>
        <section className="reservation-section" id="book-a-table">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="reservation">
                  <form onSubmit={handleSubmit} style={{ marginTop: "45px" }}>
                    <div>
                      <label htmlFor="name">Name:</label>
                      <input
                        className="form-name"
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <label htmlFor="phoneNumber">Mobile No</label>
                    <div>
                      <input
                        className="form-email"
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <input type="hidden" name="selectedDate" value={selectedDate} />
                    {/* <label className="grape-label">
                        <BsFillPersonFill />
                        <select
                          value={selectedOption}
                          name="selectedOption"
                          onChange={(e) => setSelectedOption(e.target.value)}
                        >
                          <option value="grapefruit">Grapefruit</option>
                          <option value="lime">Lime</option>
                          <option value="coconut">Coconut</option>
                          <option value="mango">Mango</option>
                        </select>
                      </label> */}
                    <label className="laebl-date">
                      {getCurrentWeekDates().map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          disabled={new Date(date) < new Date()}
                          style={{
                            margin: "5px",
                            padding: "8px 12px",
                            background: "white",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            cursor: "pointer",
                            outline: "none",
                          }}
                          type="button" // Change the button type to "button"
                        >
                          {new Date(date).toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                        </button>
                      ))}
                    </label>
                    <label className="label-select-time" style={{ marginLeft: "45px" }}>
                      {/* <BsClock /> */}
                      <div>
                        {timeOptions.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            style={{
                              margin: "5px",
                              padding: "8px 12px",
                              background: "white",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              cursor: "pointer",
                              outline: "none",
                            }}
                            type="button"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </label>
                    <textarea
                      style={{ marginTop: "25px" }}
                      value={message}
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                    >
                      Message
                    </textarea>
                    <input type="submit" value="Book a table" />
                  </form>
                </div>
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