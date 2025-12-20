import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { useRef, useState } from 'react';
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(() => {
          setStatus('success');
          form.current?.reset();
        })
        .catch((error) => {
          console.error(error);
          setStatus('error');
        });
    }
  };
  const inputClasses =
    'w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-4 text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all outline-none';

  return (
    <section className="py-24 relative" id="contact">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal-up">
            <h2
              style={{ lineHeight: '1.2' }}
              className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent"
            >
              Let&apos;s build <br /> something great.
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md leading-relaxed">
              I&apos;m currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, I&apos;ll try
              my best to get back to you!
            </p>

            <Link
              href="mailto:nguyenhophuocloc.cb@gmail.com"
              className="group block w-fit"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-500/20 
                    group-hover:bg-blue-600/20 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
                    transition-all duration-300"
                >
                  <span className="text-blue-400 text-sm group-hover:scale-110 transition-transform duration-300">
                    @
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-0.5">
                    Drop me a line
                  </span>
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
                    nguyenhophuocloc.cb@gmail.com
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-3xl reveal-up shadow-2xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">
                    Your Name
                  </label>
                  <input
                    name="from_name"
                    type="text"
                    required
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">
                    Email Address
                  </label>
                  <input
                    name="reply_to"
                    type="email"
                    required
                    className={inputClasses}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Hi Loc, ..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-white text-zinc-950 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-blue-500 text-sm text-center font-medium">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center font-medium">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
