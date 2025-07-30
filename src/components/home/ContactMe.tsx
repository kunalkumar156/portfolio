"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "message") {
      setCharacterCount(value.length);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/; // adjust if not India-specific
    return re.test(phone);
  };

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
        () => {
          toast.error("Failed to send message. Please try again later.");
        },
      );
  };

  return (
    <section id="contactme" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center text-center mb-10">
        <p className="font-semibold text-[#282938] mb-2">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#282938] mb-4">
          Contact Me
        </h2>
        <p className="text-[#282938] max-w-2xl">
          If you have any questions, project inquiries, or just want to say
          hello, feel free to reach out. I&apos;m here to help and excited to
          connect with you!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6"
      >
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-3/4">
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-[#282938] mb-1">
              First Name
            </label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE] rounded-md"
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
              className="border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE] rounded-md"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-3/4">
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-[#282938] mb-1">
              Email
            </label>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE] rounded-md"
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
              className="border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE] rounded-md"
            />
          </div>
        </div>

        {/* Topic */}
        <div className="flex flex-col w-full md:w-3/4">
          <label className="text-sm font-medium text-[#282938] mb-1">
            Explain Your Topic Briefly
          </label>
          <Input
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE] rounded-md"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col w-full md:w-3/4">
          <label className="text-sm font-medium text-[#282938] mb-1">
            Message
          </label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE] rounded-md h-28"
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
        <Button
          type="submit"
          className="bg-[#5E3BEE] hover:bg-[#4b2dd9] text-white rounded-full px-8 py-3 mt-4"
        >
          Submit
        </Button>
      </form>

      <ToastContainer position="bottom-right" />
    </section>
  );
}

export default ContactMe;
