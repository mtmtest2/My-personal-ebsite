'use client';

import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import Highlighter from '@/components/ui/Highlighter';
import { cn } from '@/lib/utils';

type Phrase = {
  code: string;
  speechLang: string;
  label: string;
  // The sentence is split so the phrase being taught can be highlighted.
  before: string;
  marked: string;
  after: string;
  pron: string;
  note: string;
};

const source = 'سلام، اسم من نگار است. از آشنایی‌تان خوشحالم.';

const phrases: Phrase[] = [
  { code: 'en', speechLang: 'en-GB', label: 'English', before: 'Hi, ', marked: 'my name is', after: ' Negar. Nice to meet you.', pron: 'های، مای نِیم ایز نگار. نایس تو میت یو.', note: '«my name is» یعنی «اسم من … است». در جلسه‌ی اول سطح A1 همین را می‌گویی.' },
  { code: 'de', speechLang: 'de-DE', label: 'Deutsch', before: 'Hallo, ', marked: 'ich heiße', after: ' Negar. Freut mich.', pron: 'هالو، ایش هایسه نگار. فُرُیت میش.', note: '«ich heiße» از فعل heißen است؛ آلمانی‌ها برای معرفی خودشان بیشتر از این استفاده می‌کنند تا «mein Name ist».' },
  { code: 'fr', speechLang: 'fr-FR', label: 'Français', before: 'Bonjour, ', marked: "je m'appelle", after: ' Negar. Enchantée.', pron: 'بُنژور، ژُ ماپِل نگار. آنشانته.', note: '«je m’appelle» یعنی «خودم را … صدا می‌زنم». Enchantée با e آخر، چون گوینده زن است.' },
];

export default function Phrasebook() {
  const [active, setActive] = useState(1);
  const p = phrases[active];

  const speak = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const u = new SpeechSynthesisUtterance(p.before + p.marked + p.after);
    u.lang = p.speechLang;
    u.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  return (
    <div className="relative">
      {/* Spine of the book: the stacked pages behind the open card */}
      <div className="absolute inset-x-3 -bottom-2 h-full rounded-[20px] bg-brand-100" aria-hidden />
      <div className="relative rounded-[20px] border border-rule bg-paper">
        <div role="tablist" aria-label="زبان" className="flex gap-1 overflow-x-auto px-3 pt-3">
          {phrases.map((ph, i) => (
            <button
              key={ph.code}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              lang={ph.code}
              className={cn(
                'shrink-0 rounded-t-lg border-b-2 px-3 pb-2.5 pt-1.5 text-sm transition-colors',
                i === active ? 'border-brand-600 font-semibold text-ink' : 'border-transparent text-slate-600 hover:text-ink',
              )}
            >
              {ph.label}
            </button>
          ))}
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm text-slate-500">{source}</p>

          <p key={p.code} lang={p.code} dir="ltr" className="phrase-in mt-5 text-left font-display text-[2.1rem] font-semibold leading-[1.35] text-ink sm:text-[2.5rem]">
            {p.before}
            <Highlighter padding={3}>{p.marked}</Highlighter>
            {p.after}
          </p>

          <p key={`${p.code}-pron`} className="phrase-in mt-3 text-[15px] leading-7 text-brand-700">{p.pron}</p>

          <div className="mt-6 flex items-start gap-3 rounded-xl bg-tint p-4">
            <span className="mt-1.5 h-3 w-3 shrink-0 rounded-sm bg-[rgb(var(--mark)/0.8)]" aria-hidden />
            <p className="text-sm leading-7 text-slate-600">{p.note}</p>
          </div>

          <button onClick={speak} className="btn-ghost mt-6">
            <Volume2 size={17} className="text-brand-600" />
            شنیدن تلفظ
          </button>
        </div>
      </div>
    </div>
  );
}
