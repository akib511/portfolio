"use client";

import { useState } from "react";

export default function Contact() {
  const contactEmail = "shahariar.akib.dev@example.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Compose direct mailto link with entered form details
    const mailtoSubject = encodeURIComponent(
      formData.subject || "Project Inquiry from Portfolio"
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-zinc-900 bg-black overflow-hidden"
    >
      {/* 1. Background Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:52px_52px]"
        aria-hidden="true"
      />

          {/* 2. Subtle Red Ambient Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none"
            aria-hidden="true"
          />

          {/* 3. Section Header (Matching Reference Design) */}
          <div className="relative z-10 text-center space-y-2 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-400 tracking-tight">
              Get In Touch
            </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-medium">
                Let&apos;s work together on your next project
              </p>
          </div>

                  {/* 4. Two-Column Layout (Contact Information & Send a Message) */}
                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* ========================================================= */}
                    {/* LEFT COLUMN: Contact Information Card                     */}
                    {/* ========================================================= */}
                    <div className="rounded-3xl border border-zinc-800/80 bg-zinc-950/80 p-8 sm:p-10 space-y-8 shadow-2xl hover:border-red-900/40 transition-colors duration-300">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        Contact Information
                      </h3>

                      <div className="space-y-6">
                        {/* 1. Email */}
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.8}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold text-white">Email</h4>
                            <a
                              href={`mailto:${contactEmail}`}
                              className="text-xs sm:text-sm text-zinc-400 hover:text-red-400 transition-colors break-all"
                            >
                              {contactEmail}
                            </a>
                          </div>
                        </div>

                        {/* 2. Location */}
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.8}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.8}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold text-white">Location</h4>
                            <p className="text-xs sm:text-sm text-zinc-400">
                              Dhaka, Bangladesh
                            </p>
                          </div>
                        </div>

                        {/* 3. LinkedIn */}
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0">
                            <svg
                              className="w-5 h-5 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36M5.07 18.5h2.78v-8.37H5.07v8.37Z" />
                            </svg>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold text-white">LinkedIn</h4>
                            <a
                              href="https://linkedin.com/in/shahariar-hossen-akib"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs sm:text-sm text-zinc-400 hover:text-red-400 transition-colors"
                            >
                              shahariar-hossen-akib
                            </a>
                          </div>
                        </div>

                        {/* 4. GitHub */}
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-red-500 shrink-0">
                            <svg
                              className="w-5 h-5 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              />
                            </svg>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold text-white">GitHub</h4>
                            <a
                              href="https://github.com/akib511"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs sm:text-sm text-zinc-400 hover:text-red-400 transition-colors"
                            >
                              akib511
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ========================================================= */}
                    {/* RIGHT COLUMN: Send a Message Form Card                    */}
                    {/* ========================================================= */}
                    <div className="rounded-3xl border border-zinc-800/80 bg-zinc-950/80 p-8 sm:p-10 shadow-2xl hover:border-red-900/40 transition-colors duration-300">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
                        Send a Message
                      </h3>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Row 1: Name and Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="block text-xs font-medium text-zinc-300"
                            >
                              Name
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              className="w-full rounded-xl bg-black border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                            />
                          </div>

                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="block text-xs font-medium text-zinc-300"
                            >
                              Email
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              className="w-full rounded-xl bg-black border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                            />
                          </div>
                        </div>

                        {/* Row 2: Subject */}
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="block text-xs font-medium text-zinc-300"
                          >
                            Subject
                          </label>
                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Project inquiry"
                            className="w-full rounded-xl bg-black border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                          />
                        </div>

                        {/* Row 3: Message */}
                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="block text-xs font-medium text-zinc-300"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            className="w-full rounded-xl bg-black border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                          />
                        </div>

                        {/* Submit Button with Red Glow */}
                        <button
                          type="submit"
                          className="w-full mt-2 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-red-600 text-white font-semibold text-sm shadow-[0_0_30px_rgba(239,68,68,0.65)] hover:bg-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.85)] transition-all duration-300"
                        >
                          <svg
                            className="w-4 h-4 text-white transform -rotate-45 -mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                  Send Message
                </button>

                  {submitted && (
                    <p className="text-center text-xs text-emerald-400 font-medium pt-2">
                      ✓ Default email client opened with your inquiry!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </section>
          );
}
