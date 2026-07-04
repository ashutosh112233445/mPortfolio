import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Groot from "./Groot";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lhui5ro",
        "template_j5e0m3o",
        form.current,
        "-U6-MqRxD1SNyj6bb"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="groot-container mx-auto">
      <div className="groot-header">
        <Groot />
        <h1 style={{ marginTop: "10px" }} className="groot-title">
          Contact Me
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Feel free to send me a message!
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="groot-form"
      >
        <input
          className="groot-input"
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          className="groot-input"
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          className="groot-textarea"
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button className="groot-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;