'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send('service_id', 'template_id', { email, message }, 'user_id')
      .then(() => alert('Message sent!'))
      .catch(() => alert('Failed to send'));
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
            placeholder="Your email address"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your message..."
            className="textarea textarea-bordered w-full h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
