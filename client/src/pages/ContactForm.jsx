// src/ContactForm.js
import  { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [toEmail, setToEmail] = useState("zento8822@gmail.com"); // Replace with your email
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); 

    const templateParams = {
      to_email: toEmail,
      from_name: fromName,
      from_email: fromEmail,
      message: message,
    };
  
    emailjs
      .send(
        "service_5e9yatl",
        "template_f0i980v",
        templateParams,
        "ZmZa8Z8uPWAFpvs9z"
      )
      .then((response) => {
        alert("Thank you. We will get back to you as soon as possible.");
        console.log("Email sent successfully:", response);
  
        // Reset the form by clearing state values
        setFromName("");
        setFromEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Email sending error:", error);
      })
      .finally(() => {
        setIsLoading(false); // Reset loading state to false
      });
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen  px-4">
      <div className="w-full sm:w-90 md:w-1/2 px-4 py-8 bg-gray-100 border border-gray-300 shadow-md rounded-lg">
        <h2 className="text-3xl text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Your Name:</label>
            <input
              className="border "
              placeholder="your name"
              type="text"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Your Email:</label>
            <input
              type="email"
              placeholder="your@gmail.com"
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col pb-5">
            <label className="mb-2">Message:</label>
            <textarea
              rows={7}
              name="message"
              placeholder="What you want to say?"
              className=" py-4 px-6 placeholder-gray-500  rounded-lg outline-none border-none font-medium focus:ring"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-logo py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-logo"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
