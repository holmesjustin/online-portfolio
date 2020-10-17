import React from "react";

import "../App.js";
import "./ContactPage.css";

export default function Contact() {
  return (
    <div>
      <div>
        <h1 className="header">Contact Me!</h1>
      </div>
      <div>
        <form name="contact" data-netlify="true" data-netlify-recaptcha="true">
          <input
            name="name"
            type="text"
            class="feedback-input"
            placeholder="Name"
          />
          <input
            name="email"
            type="email"
            class="feedback-input"
            placeholder="Email"
          />
          <textarea
            name="text"
            class="feedback-input"
            placeholder="Message"
          ></textarea>
          <div data-netlify-recaptcha="true"></div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
