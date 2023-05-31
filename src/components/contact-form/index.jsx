import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <div className="card compact bg-base-100 shadow bg-opacity-40">
            <div className="card-body">
              <span className="text-base-content opacity-70">
                <h2 className="text-2xl font-bold">Contact me</h2>
                        </span>
              <form 
                className="contact-form" 
                action="https://formspree.io/f/xknyorrb" 
                method="post">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm leading-5 text-opacity-60">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border-l border-base-300 border-opacity-30 custom-input focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm leading-5 text-opacity-60">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 custom-input focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm leading-5 text-opacity-60">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full h-40 px-4 py-2 custom-input focus:outline-none resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
