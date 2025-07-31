"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SplitText from "../animations/SplitText";

function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
  });
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "message") setCharacterCount(value.length);
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(phone);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("Invalid email address");
      return;
    }
    if (!validatePhone(formData.phoneNumber)) {
      toast.error("Invalid phone number");
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            topic: "",
            message: "",
          });
          setCharacterCount(0);
        },
        () => toast.error("Failed to send message. Please try again later."),
      );
  };

  return (
    <section
      id="contactme"
      className="relative max-w-6xl mx-auto px-6 py-20 md:py-28"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-15%] left-[-10%] w-[400px] h-[400px] bg-gradient-radial from-purple-400 via-pink-300 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-[-20%] right-[-15%] w-[500px] h-[500px] bg-gradient-radial from-indigo-300 via-blue-200 to-transparent rounded-full blur-3xl opacity-25" />
      </div>

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <p className="font-semibold text-[#5E3BEE] mb-3">Reach me quick</p>
        <SplitText
          text="Contact Me"
          className="text-3xl md:text-5xl font-bold text-[#282938] mb-12 "
          delay={20}
          duration={1.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
        />
        <p className="text-[#1C1E53] max-w-2xl">
          Have a project idea, a question, or just want to connect? Drop me a
          message, and I’ll get back to you soon.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-8 bg-white/10 backdrop-blur-xl 
                   border border-white/20 rounded-2xl shadow-[0_8px_30px_rgb(93,59,238,0.12)] 
                   hover:shadow-[0_8px_40px_rgb(93,59,238,0.25)] 
                   transition-shadow duration-300 p-8 md:p-12"
      >
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-[#282938] mb-1">
              First Name
            </label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE]"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-[#282938] mb-1">
              Last Name
            </label>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE]"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-[#282938] mb-1">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE]"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-[#282938] mb-1">
              Phone Number
            </label>
            <Input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE]"
            />
          </div>
        </div>

        {/* Topic */}
        <div className="flex flex-col w-full">
          <label className="text-sm font-medium text-[#282938] mb-1">
            Topic
          </label>
          <Input
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            className="border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE]"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col w-full">
          <label className="text-sm font-medium text-[#282938] mb-1">
            Message
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE] h-32"
          />
          <p
            className={`text-xs mt-1 ${
              characterCount > 500 ? "text-red-500" : "text-gray-500"
            }`}
          >
            Character Count: {characterCount}/500
          </p>
        </div>

        {/* Submit */}
        <Button variant="purple">Send Message</Button>
      </form>

      <ToastContainer position="bottom-right" />
    </section>
  );
}

export default ContactMe;
