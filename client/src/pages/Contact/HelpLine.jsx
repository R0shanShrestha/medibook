import React, { useState } from "react";
import { Phone, Mail, MessageCircle, AlertCircle } from "lucide-react";
import { toast } from "react-toastify";

const faqs = [
  {
    question: "How to book an appointment?",
    answer:
      "You can book an appointment by selecting a doctor from the list, choosing a slot, and confirming your appointment.",
  },
  {
    question: "How to cancel an appointment?",
    answer:
      "Go to your appointments page, select the appointment you want to cancel, and click 'Cancel'.",
  },
  {
    question: "How to contact a doctor?",
    answer:
      "You can contact a doctor through the appointment page after booking or via the contact options provided.",
  },
];

const HelpLine = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your query has been submitted!");
    setFormData({ name: "", email: "", issue: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6f7f4] to-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-700">
            Help Line / Support
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Need assistance? Reach out to our support team through the following channels.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <Phone className="text-emerald-600 w-6 h-6" />
            <div>
              <h3 className="font-semibold text-gray-700">Help Line (24/7)</h3>
              <a
                href="tel:+9779763299634"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                +977 9763299634
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <Mail className="text-emerald-600 w-6 h-6" />
            <div>
              <h3 className="font-semibold text-gray-700">Email Support</h3>
              <a
                href="mailto:commail@gmail.com"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                commail@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
            <MessageCircle className="text-emerald-600 w-6 h-6" />
            <div>
              <h3 className="font-semibold text-gray-700">Live Chat</h3>
              <p className="text-emerald-600 font-medium">Chat with our support team</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-emerald-700">FAQ</h2>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <button
                  className="w-full flex justify-between items-center font-semibold text-gray-800"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                >
                  {faq.question}
                  <span className="transform transition-transform duration-300">
                    {openFAQ === idx ? "−" : "+"}
                  </span>
                </button>
                {openFAQ === idx && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-red-600">Emergency Contacts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg border-l-4 border-red-500">
              <AlertCircle className="text-red-500 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-gray-700">Ambulance</h3>
                <a href="tel:102" className="text-red-500 font-medium">102</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg border-l-4 border-red-500">
              <AlertCircle className="text-red-500 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-gray-700">Hospital</h3>
                <a href="tel:101" className="text-red-500 font-medium">101</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg border-l-4 border-red-500">
              <AlertCircle className="text-red-500 w-6 h-6" />
              <div>
                <h3 className="font-semibold text-gray-700">Urgent Care</h3>
                <a href="tel:103" className="text-red-500 font-medium">103</a>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white bg-opacity-70 backdrop-blur-lg p-8 rounded-3xl shadow-xl max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 mb-6">Submit a Query</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-emerald-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-emerald-500"
              required
            />
            <select
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-emerald-500"
              required
            >
              <option value="">Select Issue</option>
              <option value="Booking Issue">Booking Issue</option>
              <option value="Payment Issue">Payment Issue</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Message"
              className="w-full p-3 border border-gray-200 rounded-xl outline-none focus:border-emerald-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HelpLine;
