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
      className="w-[80%] flex justify-center items-center flex-col p-6 bg-[var(--color-bg-nav)] text-[var(--color-text)] shadow space-y-4 rounded-2xl"
    >
      {/* title of form */}
      <Heading as="h2">Contact Us now</Heading>

      {/* input for name and email and mess */}
      {/* <div className="flex flex-row gap-12 justify-center"> */}
      <div className="grid grid-cols-[3fr_5fr] gap-6 w-[95%] ">
        <div className="flex flex-col justify-start mb-16">
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
            className="w-full border p-2 rounded mt-auto"
          />
          <Heading as="h5" className="h-5 mx-2 py-2 tracking-widest">
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </Heading>
        </div>

        {/* message box */}
        <div className="w-full h-[100%]">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-[12rem] border p-2 rounded"
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
          className="w-[12rem] bg-[var(--color-primary)] text-[var(--color-bg)]  py-2 rounded hover:bg-blue-700 mt-auto "
        >
          Send
        </button>
      </div>
    </form>
  );
}
