'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const KEY = 'consent';

// EEA + UK + CH: Google geolocates by IP and applies the denied default only here
const GDPR_REGIONS = ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH'];

// shortcut: timezone guess, misses EU users on non-Europe/* zones (they stay denied, so still compliant); upgrade to x-vercel-ip-country via proxy if that matters
const inEurope = () => Intl.DateTimeFormat().resolvedOptions().timeZone?.startsWith('Europe/');

// Runs before GTM: deny everything by default, then re-apply a saved choice so returning visitors aren't asked again.
export const consentDefaultScript = `
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500,region:${JSON.stringify(GDPR_REGIONS)}});
try{var c=localStorage.getItem('${KEY}');if(c==='granted')gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});}catch(e){}
`;

type Choice = 'granted' | 'denied';

const OPEN_EVENT = 'open-cookie-settings';

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}

function applyConsent(choice: Choice) {
  // gtag is defined globally by consentDefaultScript in layout.tsx
  (window as unknown as { gtag: (...a: unknown[]) => void }).gtag('consent', 'update', {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
  try {
    localStorage.setItem(KEY, choice);
  } catch {}
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Open when no choice is saved yet, or when CookieSettingsButton fires OPEN_EVENT
    const id = setTimeout(() => {
      try {
        if (inEurope() && !localStorage.getItem(KEY)) setOpen(true);
      } catch {
        setOpen(true);
      }
    });
    const show = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, show);
    return () => {
      clearTimeout(id);
      window.removeEventListener(OPEN_EVENT, show);
    };
  }, []);

  if (!open) return null;

  const choose = (choice: Choice) => {
    applyConsent(choice);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-rule bg-paper p-5 text-sm text-ink shadow-xl"
    >
      <p className="text-muted">
        I use Google Analytics cookies to understand how visitors use this site. Nothing is tracked unless you accept.{' '}
        <Link href="/privacy" className="underline hover:text-ink">
          Privacy policy
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap justify-end gap-2">
        <button
          onClick={() => choose('denied')}
          className="rounded-full border border-rule px-5 py-2 font-medium hover:bg-ink/5"
        >
          Reject
        </button>
        <button
          onClick={() => choose('granted')}
          className="rounded-full border border-ink bg-ink px-5 py-2 font-medium text-paper hover:opacity-90"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
