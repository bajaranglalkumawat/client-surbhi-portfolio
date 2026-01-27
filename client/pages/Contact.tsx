import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link
    const mailtoLink = `mailto:prajapatisurbhi8@gmail.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`;

    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-background to-blue-50 pt-8 pb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 bounce-in">
            Get In Touch
          </h1>
          <p
            className="text-xl text-muted-foreground fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Let's connect and discuss how I can help with your HR needs
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <div
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift scale-in group overflow-hidden relative"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-in transition-transform duration-500">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 relative z-10">
              Email
            </h3>
            <a
              href="mailto:prajapatisurbhi8@gmail.com"
              className="text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-300 relative z-10"
            >
              prajapatisurbhi8@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift scale-in group overflow-hidden relative"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-in transition-transform duration-500">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 relative z-10">
              Phone
            </h3>
            <p className="text-muted-foreground relative z-10">
              Available for calls
            </p>
            <p className="text-blue-600 font-semibold relative z-10">
              Contact via email
            </p>
          </div>

          {/* Location Card */}
          <div
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift scale-in group overflow-hidden relative"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-in transition-transform duration-500">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 relative z-10">
              Location
            </h3>
            <p className="text-muted-foreground relative z-10">
              Jaipur, Rajasthan
            </p>
            <p className="text-teal-600 font-semibold relative z-10">India</p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 fade-in-up group overflow-hidden relative"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <h2 className="text-3xl font-bold text-foreground mb-8 relative z-10 bounce-in">
            Send Me a Message
          </h2>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-300">
              Thanks for reaching out! Your email client will open with your
              message.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="What's this about?"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-foreground mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Connect With Me
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/surbhiprajapati-4a5589238"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              LinkedIn Profile
            </a>
            <a
              href="mailto:prajapatisurbhi8@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
