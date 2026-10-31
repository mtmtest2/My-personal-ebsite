import Image from 'next/image';
import { Hand, MessageSquare, Mic, PhoneOff, Video } from 'lucide-react';
import { languages, type Language } from '@/lib/data';
import { cn } from '@/lib/utils';

const tiles = [
  { name: 'استاد', photo: '/images/people/4.jpg', speaking: true },
  { name: 'نگار', photo: '/images/people/9.jpg' },
  { name: 'امیر', photo: '/images/people/6.jpg' },
  { name: 'شما', photo: null },
];

// One lesson moment per language: the slide, and the chat that follows it.
const lessons: Record<string, { unit: string; note: string; chat: { from: string; text: string; ltr: boolean }[] }> = {
  en: {
    unit: 'Unit 7 · Asking for repetition',
    note: 'وقتی جمله‌ای را کامل نشنیدی، مؤدبانه بخواه تکرار شود.',
    chat: [
      { from: 'استاد', text: 'Now ask your partner. Add “please” at the end.', ltr: true },
      { from: 'امیر', text: 'Could you say that again, please?', ltr: true },
      { from: 'استاد', text: 'Perfect, nice and polite.', ltr: true },
      { from: 'نگار', text: 'سؤال: could و can این‌جا فرق دارند؟', ltr: false },
    ],
  },
  de: {
    unit: 'Lektion 4 · Im Café bestellen',
    note: '«hätte gern» مؤدبانه‌تر از «will» است؛ در کافه و فروشگاه همین را بگو.',
    chat: [
      { from: 'استاد', text: 'Jetzt du: bestell einen Tee.', ltr: true },
      { from: 'امیر', text: 'Ich hätte gern einen Tee, bitte.', ltr: true },
      { from: 'استاد', text: 'Sehr gut! Und mit Milch?', ltr: true },
      { from: 'نگار', text: 'چرا einen و نه ein؟', ltr: false },
    ],
  },
  fr: {
    unit: 'Unité 3 · Commander au café',
    note: '«je voudrais» شکل مؤدبانه‌ی «می‌خواهم» است.',
    chat: [
      { from: 'استاد', text: 'À toi : commande un café crème.', ltr: true },
      { from: 'امیر', text: 'Je voudrais un café crème, s’il vous plaît.', ltr: true },
      { from: 'استاد', text: 'Parfait ! Et la liaison : « vous‿avez ».', ltr: true },
      { from: 'نگار', text: 'crème با accent نوشته می‌شود؟', ltr: false },
    ],
  },
};

/**
 * A cropped fragment of a live Fartash class: the shared lesson slide, the video tiles
 * and the class chat. Product interface, so it keeps its own UI conventions (data-ui).
 */
export default function ClassWindow({ className, lang = languages[0] }: { className?: string; lang?: Language }) {
  const lesson = lessons[lang.code];
  const chat = lesson.chat;
  const p = lang.phrase;
  return (
    <figure className={className}>
      <div data-ui className="overflow-hidden rounded-xl border border-black/10 bg-white text-[13px] text-slate-700 shadow-2xl shadow-black/30 dark:border-white/10 dark:bg-[#111834] dark:text-slate-300">
        {/* Title bar */}
        <div className="flex items-center justify-between gap-3 border-b border-black/5 bg-[#F6F8FC] px-4 py-2.5 dark:border-white/10 dark:bg-[#0D1430]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#22C55E]" aria-hidden />
            <span className="font-semibold text-[#15237A] dark:text-white">{lang.name} B1، گروه ۳</span>
            <span className="hidden text-slate-500 sm:inline">جلسه‌ی ۱۴ از ۲۴</span>
          </div>
          <span dir="ltr" className="tabular-nums text-slate-500">00:41:12</span>
        </div>

        <div className="grid md:grid-cols-[1fr_15rem]">
          {/* Stage: slide + tiles */}
          <div className="p-3 sm:p-4">
            <div className="rounded-lg bg-[#EEF4FF] p-5 sm:p-7 dark:bg-[#17214A]">
              <p dir="ltr" lang={lang.code} className="text-left text-[12px] font-medium text-[#2445E0] dark:text-[#93B4FF]">{lesson.unit}</p>
              <p dir="ltr" lang={lang.code} className="mt-3 text-left font-display text-[1.7rem] font-semibold leading-tight text-[#15237A] sm:text-[2.1rem] dark:text-white">
                {p.before}<span className="rounded-[3px] bg-[#7EE6F5] px-1 text-[#15237A]">{p.marked}</span>{p.after}
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-400">{lesson.note}</p>
            </div>
            <ul className="mt-3 grid grid-cols-4 gap-2">
              {tiles.map((t) => (
                <li key={t.name} className={cn('relative aspect-[4/3] overflow-hidden rounded-md bg-[#1B2550]', t.speaking && 'ring-2 ring-[#22C6DC]')}>
                  {t.photo ? (
                    <Image src={t.photo} alt="" fill sizes="(min-width: 768px) 140px, 22vw" className="object-cover" />
                  ) : (
                    <span className="grid h-full place-items-center font-display text-2xl font-bold text-white/80">ش</span>
                  )}
                  <span className="absolute bottom-1 right-1 rounded bg-black/55 px-1.5 py-0.5 text-[11px] text-white">{t.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat */}
          <div /* taste-skill-ignore: inside the data-ui fragment */ className="flex flex-col border-t border-black/5 md:border-r md:border-t-0 dark:border-white/10">
            <p className="px-4 pb-2 pt-3 font-semibold text-[#15237A] dark:text-white">گفت‌وگوی کلاس</p>
            <ul className="flex-1 space-y-2.5 px-4 pb-3">
              {chat.map((m, i) => (
                <li key={i}>
                  <span className="text-[11px] font-semibold text-slate-500">{m.from}</span>
                  <p dir={m.ltr ? 'ltr' : 'rtl'} lang={m.ltr ? lang.code : 'fa'} className={cn('mt-0.5 rounded-md px-2.5 py-1.5 leading-5', m.from === 'استاد' ? 'bg-[#EEF4FF] dark:bg-[#17214A]' : 'bg-[#F3F4F6] dark:bg-white/5', m.ltr && 'text-left')}>
                    {m.text}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mx-4 mb-3 rounded-md border border-black/10 px-2.5 py-2 text-slate-500 dark:border-white/10">پیامت را بنویس…</div>
          </div>
        </div>

        {/* Controls */}
        <div /* taste-skill-ignore: inside the data-ui fragment */ className="flex items-center justify-center gap-2 border-t border-black/5 bg-[#F6F8FC] px-4 py-2.5 dark:border-white/10 dark:bg-[#0D1430]" aria-hidden>
          {[Mic, Video, Hand, MessageSquare].map((Icon, i) => (
            <span key={i} className={cn('grid h-8 w-8 place-items-center rounded-full', i === 2 ? 'bg-[#22C6DC] text-[#0A1029]' : 'bg-black/5 text-slate-600 dark:bg-white/10 dark:text-slate-300')}>
              <Icon size={15} />
            </span>
          ))}
          <span className="mr-2 grid h-8 w-10 place-items-center rounded-full bg-[#DC2626] text-white"><PhoneOff size={15} /></span>
        </div>
      </div>
      <figcaption className="mt-3 text-[13px] opacity-70">نمای نمونه از یک کلاس گروهی آنلاین؛ تصاویر افراد نمایشی‌اند.</figcaption>
    </figure>
  );
}
