'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2 } from 'lucide-react';
import Highlighter from '@/components/ui/Highlighter';
import { cn } from '@/lib/utils';

type Phrase = {
  code: string;
  speechLang: string;
  label: string;
  dir: 'ltr' | 'rtl';
  // The sentence is split so the phrase being taught can be highlighted.
  before: string;
  marked: string;
  after: string;
  pron: string;
  note: string;
};

const source = 'سلام، اسم من نگار است. از آشنایی‌تان خوشحالم.';

const phrases: Phrase[] = [
  { code: 'en', speechLang: 'en-GB', label: 'English', dir: 'ltr', before: 'Hi, ', marked: 'my name is', after: ' Negar. Nice to meet you.', pron: 'های، مای نِیم ایز نگار. نایس تو میت یو.', note: '«my name is» یعنی «اسم من … است». در جلسه‌ی اول سطح A1 همین را می‌گویی.' },
  { code: 'de', speechLang: 'de-DE', label: 'Deutsch', dir: 'ltr', before: 'Hallo, ', marked: 'ich heiße', after: ' Negar. Freut mich.', pron: 'هالو، ایش هایسه نگار. فُرُیت میش.', note: '«ich heiße» از فعل heißen است؛ آلمانی‌ها برای معرفی خودشان بیشتر از این استفاده می‌کنند تا «mein Name ist».' },
  { code: 'fr', speechLang: 'fr-FR', label: 'Français', dir: 'ltr', before: 'Bonjour, ', marked: "je m'appelle", after: ' Negar. Enchantée.', pron: 'بُنژور، ژُ ماپِل نگار. آنشانته.', note: '«je m’appelle» یعنی «خودم را … صدا می‌زنم». Enchantée با e آخر، چون گوینده زن است.' },
  { code: 'tr', speechLang: 'tr-TR', label: 'Türkçe', dir: 'ltr', before: 'Merhaba, ', marked: 'benim adım', after: ' Negar. Memnun oldum.', pron: 'مِرحَبا، بِنیم آدِم نگار. مِمنون اولدوم.', note: '«adım» یعنی «اسمم»؛ ad همان «اسم» است و ım ضمیر ملکی «ـم».' },
  { code: 'es', speechLang: 'es-ES', label: 'Español', dir: 'ltr', before: 'Hola, ', marked: 'me llamo', after: ' Negar. Encantada.', pron: 'اُلا، مه یامو نگار. اِنکانتادا.', note: 'حرف h در Hola خوانده نمی‌شود و ll در llamo شبیه «ی» تلفظ می‌شود.' },
  { code: 'ar', speechLang: 'ar-SA', label: 'العربية', dir: 'rtl', before: 'مرحباً، ', marked: 'اسمي', after: ' نگار. تشرفنا.', pron: 'مَرحَباً، اِسمی نِگار. تَشَرَّفنا.', note: '«اسمي» یعنی «اسمم». «تشرفنا» در عربی محاوره‌ای رایج‌ترین جواب آشنایی است.' },
];

/**
 * The hero's stage: one sentence from a first lesson, in six languages. The
 * taught words get the turquoise highlighter; meaning, pronunciation and a
 * teacher's note sit underneath.
 */
export default function Phrasebook({ className }: { className?: string }) {
  const [active, setActive] = useState(1);
  const [canSpeak, setCanSpeak] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const p = phrases[active];

  useEffect(() => setCanSpeak('speechSynthesis' in window), []);

  const speak = () => {
    const u = new SpeechSynthesisUtterance(p.before + p.marked + p.after);
    u.lang = p.speechLang;
    u.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  // Arrow keys follow reading direction: in this RTL page ArrowLeft is "next".
  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const map: Record<string, number> = { ArrowLeft: i + 1, ArrowRight: i - 1, Home: 0, End: phrases.length - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    const j = (map[e.key] + phrases.length) % phrases.length;
    setActive(j);
    tabs.current[j]?.focus();
  };

  return (
    <div className={cn('stage relative overflow-hidden bg-navy text-white', className)}>
      <div role="tablist" aria-label="زبان جمله" className="flex gap-7 overflow-x-auto border-b border-white/10 px-5 [scrollbar-width:none] sm:px-10">
        {phrases.map((ph, i) => (
          <button
            key={ph.code}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`phrase-tab-${ph.code}`}
            aria-selected={i === active}
            aria-controls="phrase-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            lang={ph.code}
            className={cn(
              '-mb-px shrink-0 border-b-2 pb-4 pt-5 text-[1.0625rem] transition-colors duration-120 focus-visible:ring-offset-navy',
              i === active ? 'border-turq text-white' : 'border-transparent text-white/55 hover:text-white',
            )}
          >
            {ph.label}
          </button>
        ))}
      </div>

      {/* Every language is laid out in the same cell and only the active one is
          shown, so the stage is always as tall as its longest phrase and
          switching never moves the page. */}
      <div id="phrase-panel" role="tabpanel" aria-labelledby={`phrase-tab-${p.code}`} className="grid px-5 pb-8 pt-8 sm:px-10 sm:pb-10 sm:pt-12">
        {phrases.map((ph, i) => (
          <PhraseBody key={ph.code} phrase={ph} live={i === active} onSpeak={canSpeak ? speak : undefined} />
        ))}
      </div>
    </div>
  );
}

function PhraseBody({ phrase: p, live = false, onSpeak }: { phrase: Phrase; live?: boolean; onSpeak?: () => void }) {
  return (
    <div className={cn('[grid-area:1/1]', live ? 'phrase-in' : 'invisible')} aria-hidden={live ? undefined : true}>
      <p lang={p.code} dir={p.dir} className={cn('text-balance text-[2.15rem] leading-[1.15] sm:text-6xl lg:text-[4.75rem]', p.dir === 'ltr' ? 'text-left' : 'text-right')}>
        {p.before}
        {live ? (
          <Highlighter rtl={p.dir === 'rtl'} padding={4} className="text-navy">
            {p.marked}
          </Highlighter>
        ) : (
          <span className="inline-block">{p.marked}</span>
        )}
        {p.after}
      </p>

      <dl className="mt-8 grid gap-6 border-t border-white/10 pt-6 sm:mt-10 md:grid-cols-[1fr_1fr_1.3fr] md:gap-10">
        <div>
          <dt className="text-xs text-white/55">معنی</dt>
          <dd className="mt-1.5 text-[0.9375rem] leading-7 text-white">{source}</dd>
        </div>
        <div>
          <dt className="text-xs text-white/55">تلفظ</dt>
          <dd className="mt-1.5 text-[0.9375rem] leading-7 text-turq-soft">{p.pron}</dd>
        </div>
        <div>
          <dt className="text-xs text-white/55">نکته‌ی استاد</dt>
          <dd className="mt-1.5 text-sm leading-7 text-white/80">{p.note}</dd>
          {onSpeak && (
            <button type="button" onClick={onSpeak} className="btn mt-4 border border-white/25 text-white hover:border-white/50 hover:bg-white/10 focus-visible:ring-offset-navy">
              <Volume2 size={16} aria-hidden />
              شنیدن تلفظ
            </button>
          )}
        </div>
      </dl>
    </div>
  );
}
