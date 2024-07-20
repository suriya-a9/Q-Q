import React, { useState, useEffect } from "react";
import "./Appointment.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { BsFillPersonFill } from "react-icons/bs";
// import { BsClock } from "react-icons/bs";

const Appointment = () => {
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
                "PlDYeat8nnTxmjHTY"
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
    const getStartOfWeek = (date: Date): Date => {
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
        return new Date(date.setDate(diff));
    };

    // Function to generate an array of dates for the current week
    const getCurrentWeekDates = () => {
        const today = new Date();
        const dates = [];
        for (let i = 0; i < 7; i++) {
            const currentDate = new Date();
            currentDate.setDate(today.getDate() + i);
            dates.push(currentDate.toISOString().split('T')[0]);
        }
        return dates;
    };

    const timeOptions = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "13:00 PM", "13:30 PM", "14:00 PM", "14:30 PM", "15:00 PM", "15:30 PM", "16:00 PM", "16:30 PM", "17:00 PM", "17:30 PM", "18:00 PM"];

    return (
        <>
            <Header />
            <section className="appointment-section" id="book-a-table">
                <h2 className="book-appointment-heading">Book Appointment</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="appointment">
                                <form onSubmit={handleSubmit} style={{ marginTop: "45px" }}>
                                    <div>
                                        <label htmlFor="name" style={{ width: '100%', color: 'white', paddingBottom: '15px', paddingTop: '15px' }}>Name:</label>
                                        <input
                                            className="form-name"
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <label htmlFor="phoneNumber" style={{ width: '100%', color: 'white', paddingBottom: '15px', paddingTop: '15px' }}>Mobile No</label>
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
                                    <label htmlFor="date" className="laebl-date" style={{ width: '100%', color: 'white', paddingBottom: '15px', paddingTop: '15px' }}>Date
                                    </label>
                                    <div className="date-button-div" style={{width:'100%'}}>
                                        {getCurrentWeekDates().map((date) => (
                                            <button
                                                key={date}
                                                onClick={() => setSelectedDate(date)}
                                                className={`date-button ${selectedDate === date ? 'selected-date' : ''}`}
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
                                                {new Date(date).toLocaleDateString("en-US", {
                                                    weekday: "short",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </button>
                                        ))}
                                    </div>
                                    <label htmlFor="time" className="label-select-time" style={{ width: '100%', color: 'white', paddingBottom: '15px', paddingTop: '15px' }}>Available Slot</label>
                                    <div className='time-options' style={{width:'100%'}}>
                                        {timeOptions.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`time-button ${selectedTime === time ? 'selected-time' : ''}`}
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
                                    <label htmlFor="message" className="label-select-time" style={{ width: '100%', color: 'white', paddingBottom: '15px', paddingTop: '15px' }}>Message</label>
                                    <div>
                                        <textarea
                                            style={{ marginTop: "25px" }}
                                            value={message}
                                            name="message"
                                            placeholder="Message"
                                            onChange={(e) => setMessage(e.target.value)}
                                        >
                                            Message
                                        </textarea>
                                    </div>
                                    <input type="submit" value="Book Appointment" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
            <Footer />
        </>
    );
};

export default Appointment;
