"use client";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvnrwkr");

  return (
    <div className="md:w-[60%] w-full  ">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-[550px] mx-auto p-4"
      >
        <div>
          <label htmlFor="emailOrNumber" className="block text-gray-400">
            Email or Phone
          </label>
          <input
            autoComplete="on"
            name="emailOrNumber"
            type="text"
            id="emailOrNumber"
            required
            className="w-full p-2 border bg-[#171717] border-green-400 text-gray-400 rounded-md"
            placeholder="Enter your email or phone"
          />
          <ValidationError
            prefix="EmailOrNumber"
            field="emailOrNumber"
            errors={state.errors}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-gray-400">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full p-2 border border-green-400 bg-[#171717] text-gray-400 rounded-md"
            placeholder="Enter subject"
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border bg-[#171717] border-green-400 text-gray-400 rounded-md"
            placeholder="Your message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-400 text-white rounded-md"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
        {state.succeeded && (
          <p className="text-green-500 mt-4">Thanks for Message!</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
