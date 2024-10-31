import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Contact = () => {
    const [contactMessage, setContactMessage] = useState({
        email: "",
        name: "",
        message:"",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!contactMessage.email || !contactMessage.name || !contactMessage.message) {
            alert("All fields must be filled.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/contact", contactMessage);
            console.log(response.data);
            alert("Message sent successfully");
            setContactMessage({ email: "", name: "", message: "" }); 
        } catch (error) {
            console.error(error);
            alert("Failed to send the message.");
        }
    };

    const handleChange = (e) => {
        const {id,value} = e.target;
        setContactMessage(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    return(
        <>
        <Navbar/>
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={contactMessage.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={contactMessage.email}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="contactMessage">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Enter your message"
                        value={contactMessage.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default Contact;