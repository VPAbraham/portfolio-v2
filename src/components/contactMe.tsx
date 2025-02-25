'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert('Message sent successfully!');
        setEmail('');
        setMessage('');
      })
      .catch(() => alert('Failed to send message'))
      .finally(() => setLoading(false));
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <div className="bg-base-200 p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl font-bold text-primary mb-6 md:mb-0">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="w-full md:w-2/3 space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Your message..."
            className="textarea textarea-bordered w-full h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </section>
  );
}
