"use client";
import React, { useState } from "react";

interface ContactProps {
  firstName: string | null;
}

const Contact: React.FC<ContactProps> = ({ firstName }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-300 h-screen dark:bg-gray-900">
      <div className="py-12 lg:py-16 px-4 mx-auto max-w-screen-md flex justify-center">
        <div className="h-max lg:mt-16 mt-20">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Wanna Contact us {firstName}?
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback? Need more details? Let us
            know.
          </p>
          
          {submitStatus.type && (
            <div
              className={`mb-4 p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@forescribe.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                name="message"
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="py-3 px-5 bg-[#8B3DFF] text-white text-sm font-medium text-center rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-[#8B3DFF] dark:hover:bg-[#8B3DFF] dark:text-white dark:focus:ring-primary-800 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;