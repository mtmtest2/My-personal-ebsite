'use client';

import { useEffect, useState } from 'react';
import { Check, Link2, Share2 } from 'lucide-react';

/** Plain share links plus copy-link and the native share sheet where the browser has one. */
export default function ShareButtons({ title, path }: { title: string; path: string }) {
  const [url, setUrl] = useState(path);
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setUrl(window.location.origin + path);
    setCanShare(typeof navigator.share === 'function');
  }, [path]);

  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const targets = [
    { label: 'تلگرام', href: `https://t.me/share/url?url=${u}&text=${t}` },
    { label: 'واتس‌اپ', href: `https://wa.me/?text=${t}%20${u}` },
    { label: 'X', href: `https://x.com/intent/post?url=${u}&text=${t}` },
    { label: 'لینکدین', href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the links remain */
    }
  };

  const chip = 'inline-flex items-center gap-1.5 rounded-lg bg-tint px-3 py-1.5 text-sm text-slate-700 transition-colors hover:bg-brand-50 hover:text-ink active:scale-[0.97]';
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="ml-1 text-sm font-semibold text-ink">اشتراک‌گذاری</span>
      {canShare && (
        <button type="button" onClick={() => navigator.share({ title, url }).catch(() => {})} className={chip}>
          <Share2 size={15} /> ارسال
        </button>
      )}
      {targets.map((x) => (
        <a key={x.label} href={x.href} target="_blank" rel="noopener noreferrer" className={chip}>{x.label}</a>
      ))}
      <button type="button" onClick={copy} className={chip} aria-live="polite">
        {copied ? <><Check size={15} className="text-emerald-600" /> کپی شد</> : <><Link2 size={15} /> کپی لینک</>}
      </button>
    </div>
  );
}
