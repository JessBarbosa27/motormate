import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/garage.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto relative flex items-center justify-center h-full text-center text-white">
        <div className="bg-black bg-opacity-60 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl mb-8">
            We would love to hear from you! Please reach out with any questions
            or comments.
          </p>
          <form
            action="/submit-form"
            method="POST"
            className="flex flex-col space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-800 text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-800 text-white"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-800 text-white"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
