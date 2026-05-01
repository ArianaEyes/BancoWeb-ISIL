import { useState, type ChangeEvent } from "react";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  saveInfo: boolean;
}


const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
  </svg>
);

const BoltIcon = () => (
  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const inputBase =
  " w-1/1 border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-700  focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 transition-all duration-200";

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  saveInfo: false,
};

export default function Formulario() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: e.target instanceof HTMLInputElement ? e.target.checked : false }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm(initialForm);
    }, 3000);
  };

  const scrollToTop = (): void => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="relative h-180 w-full overflow-hidden px-8 py-16 md:px-16 md:py-20">
      <img src="/public/icons/map.png" alt="Background Map" className="absolute left-80 w-6xl h-150 object-cover opacity-10" />
      <div className="relative z-10 formulario-section w-full flex flex-col h-130 lg:flex-row gap-12 items-start justify-center">

        {/* Left */}
        <div className="w-160 flex flex-col h-100 left gap-5 pt-2">
          <div className="flex items-center gap-2">
            <BoltIcon />
            <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
              Connect With Us
            </span>
          </div>

          <h2
            className="text-6xl font-black leading-tight text-gray-900"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Have <span className="text-green-600">Questions?</span>
            <br />
            <span className="text-green-600">Get In</span> Touch!
          </h2>

          <p className="text-lg text-gray-500 leading-relaxed w-4/5">
            We take pride in serving our community and building lasting
            relationships with our clients.
          </p>
        </div>

        {/* Right — Form */}
        <form
          onSubmit={handleSubmit}
          className=" flex right flex-col gap-4 w-1/2 h-130"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input className={`${inputBase} rounded-full`}
              type="text"
              name="name"
              placeholder="Name *"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              className={`${inputBase} rounded-full`}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="Your email address *"
              required
              value={form.email}
              onChange={handleChange}
              className={`${inputBase} rounded-full`}
            />
            <input
              type="text"
              name="service"
              placeholder="Our Services *"
              required
              value={form.service}
              onChange={handleChange}
              className={`${inputBase} rounded-full`}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message Here.."
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={`${inputBase} rounded-2xl resize-none`}
          />

          <label className="flex items-start gap-3 cursor-pointer text-sm text-gray-500 select-none">
            <input
              type="checkbox"
              name="saveInfo"
              checked={form.saveInfo}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 accent-green-600 rounded"
            />
            Save my name, email, and website in this browser for the next time I comment.
          </label>

          <div>
            <button
              type="submit"
              className="group flex items-center gap-3 rounded-full text-white font-semibold text-sm transition-all duration-200"
              style={{ backgroundColor: sent ? "#16a34a" : "#1a2e44" }}
            >
              {sent ? "Message Sent!" : "Send A Message"}
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#16a34a" }}
              >
                <ArrowIcon className="w-4 h-4 text-white" />
              </span>
            </button>
          </div>
        </form>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform duration-200 z-50"
      >
        <ChevronUpIcon />
      </button>
    </section>
  );
}
