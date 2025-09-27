import { useState } from "react";
import Heading from "./Heading";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validate(data: FormData) {
    const newErrors: Partial<FormData> = {};

    if (!data.name.trim()) newErrors.name = "Name is required.";
    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!data.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    localStorage.setItem("contactForm", JSON.stringify(formData));

    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setSuccess(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto flex flex-col p-6 bg-[var(--color-bg-nav)] text-[var(--color-text)] shadow space-y-4 rounded-2xl"
    >
      {/* title */}
      <Heading as="h2" className="text-2xl text-center">
        Contact Us now
      </Heading>

      {/* inputs*/}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_5fr] gap-6 w-full">
        <div className="flex flex-col justify-start mb-4 md:mb-16">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <Heading as="h5" className="h-5 mx-2 py-2 tracking-widest">
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name}</p>
            )}
          </Heading>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-4 md:mt-auto"
          />
          <Heading as="h5" className="h-5 mx-2 py-2 tracking-widest">
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </Heading>
        </div>

        {/* message box */}
        <div className="w-full">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-48 md:h-[12rem] border p-2 rounded"
          />
          <Heading as="h5" className="h-3 mx-2 py-1 tracking-widest">
            {errors.message && (
              <p className="text-red-600 text-sm">{errors.message}</p>
            )}
          </Heading>
        </div>
      </div>

      {/* button send info */}
      <div className="flex flex-col gap-2 justify-center items-center">
        <Heading as="h5" className="h-6 mx-2 py-1 tracking-widest">
          {success && (
            <p className="text-green-600 text-sm">✅ Saved in localStorage!</p>
          )}
        </Heading>

        <button
          type="submit"
          className="w-full md:w-48 bg-[var(--color-primary)] text-[var(--color-bg)] py-2 rounded hover:bg-blue-700 mt-auto transition"
        >
          Send
        </button>
      </div>
    </form>
  );
}
