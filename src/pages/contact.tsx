import React from 'react';
import { useFormState } from "../contact/useFormState";
import { useSendContactForm } from "../contact/useSendContactForm";

interface ContactParams {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [contact, handleChange] = useFormState<ContactParams>({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, sendContactForm] = useSendContactForm();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendContactForm(contact);
  };

  return (
    <div className="w-full relative px-72 mt-12">
      {errorMessage && <p>{errorMessage}</p>}
      <form
        method="post"
        onSubmit={handleSubmit}
        className="dark:bg-dark-200 rounded px-6 pt-6 pb-6 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-600 dark:text-white text-sm font-semibold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <div>
            <input
              type="text"
              placeholder="Title"
              name="name"
              onChange={handleChange}
              required
              className="bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div>
          <label
            className="block text-gray-600 dark:text-white text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Mail{" "}
          </label>
          <div>
            <input
              type="email"
              placeholder="Your mail adress"
              name="email"
              onChange={handleChange}
              required
              className="bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div>
          <label
            className="mt-4 block text-gray-600 dark:text-white text-sm font-semibold mb-2"
            htmlFor="title"
          >
            Description
          </label>
          <div>
            <textarea
              name="Description"
              onChange={handleChange}
              required
              className="bg-gray-50 p-1 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={5}
              cols={75}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create post
        </button>
      </form>
    </div>
  );
};

export default Contact;
