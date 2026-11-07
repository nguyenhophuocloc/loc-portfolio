'use client';
import { profile } from '@/content/site';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus('sending');

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        setStatus('sent');
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus('error');
      });
  };

  const links = [
    { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
    { label: 'GitHub', href: profile.github, icon: Github },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card relative grid gap-10 overflow-hidden p-6 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {profile.availability}
            </span>
            <h2 className="section-title mt-5 max-w-[16ch]">Need a website built, fixed or found on Google?</h2>
            <p className="mt-4 max-w-[42ch] leading-relaxed text-muted">
              Tell me about the role or the project. I&apos;ll reply by email.
            </p>
            <ul className="mt-8 space-y-3">
              {links.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[15px] font-medium"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-rule bg-raised text-muted transition-colors group-hover:text-brand">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="break-all transition-colors group-hover:text-brand">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <form ref={form} onSubmit={sendEmail} className="relative space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="from_name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input id="from_name" name="from_name" type="text" autoComplete="name" required className="field" />
              </div>
              <div>
                <label htmlFor="reply_to" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input id="reply_to" name="reply_to" type="email" autoComplete="email" required className="field" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea id="message" name="message" required rows={6} className="field resize-y" />
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <button type="submit" disabled={status === 'sending'} className="btn-brand disabled:opacity-60">
                {status === 'sending' ? 'Sending message…' : 'Send message'}
              </button>
              <p role="status" aria-live="polite" className="text-sm">
                {status === 'sent' && (
                  <span className="text-ink">Message sent. I&apos;ll reply to the email you gave.</span>
                )}
                {status === 'error' && (
                  <span className="text-[#F87171]">
                    The message didn&apos;t send. Check your connection and try again, or email me directly.
                  </span>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
