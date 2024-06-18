import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your contact form submission logic here
    alert("Message sent successfully!");
  };

  return (
    <div className="md:min-h-screen bg-gray-100 py-12">
      <div className="md:container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-4">
              We'd love to hear from you! Whether you have a question about our
              services, pricing, need a demo, or anything else, our team is
              ready to answer all your questions.
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="material-icons text-blue-500 mr-2">Phone</span>
                +(123) 4784357029
              </p>
              <p className="flex items-center">
                <span className="material-icons text-blue-500 mr-2">Email</span>
                info@elitewheels.com
              </p>
              <p className="flex items-center">
                <span className="material-icons text-blue-500 mr-2">
                  Location_on
                </span>
                123 Pedro's Strt, NG
              </p>
              <p className="flex items-center">
                <span className="material-icons text-blue-500 mr-2">
                  Access_time
                </span>
                Mon - Fri, 9:00am - 6:00pm
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={handleSubjectChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Office
          </h3>
          <p className="text-gray-700 mb-4">
            Feel free to visit us at our office during business hours. Our team
            is always ready to assist you with any inquiries you may have.
          </p>
          <iframe
            title="office-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.705825911142!2d28.97469950685781!3d41.00823730204598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba2e6287f135%3A0x8f2ed3e6b5f6e769!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1627748153501!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
