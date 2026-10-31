import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ChevronDown } from 'lucide-react';
import CtaBand from '@/components/site/CtaBand';
import PageIntro from '@/components/site/PageIntro';
import SectionTitle from '@/components/site/SectionTitle';
import SessionTimeline from '@/components/site/SessionTimeline';
import { faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'کلاس‌های آنلاین',
  description: 'کلاس‌های آنلاین زنده‌ی انگلیسی، آلمانی و فرانسوی در فرتاش: گروهی، خصوصی و کلاب مکالمه. ساختار جلسه و آن‌چه برای شروع لازم داری.',
  alternates: { canonical: '/online-classes' },
};

const formats = [
  { name: 'کلاس گروهی', who: 'برای بیشتر زبان‌آموزان؛ مخصوصاً سطح‌های A1 تا B2.', how: ['گروه کوچک و هم‌سطح', 'دو یا سه جلسه در هفته', 'تکلیف و بازخورد استاد بین جلسه‌ها'] },
  { name: 'کلاس خصوصی', who: 'برای هدف‌های مشخص و زمان محدود: آزمون، مصاحبه یا زبان کاری.', how: ['تمام جلسه یک‌به‌یک با استاد', 'برنامه‌ی درسی مخصوص تو', 'انتخاب ساعت با هماهنگی استاد'] },
  { name: 'کلاب مکالمه', who: 'برای کسی که پایه دارد و می‌خواهد بیشتر حرف بزند.', how: ['یک موضوع در هر جلسه', '۶۰ دقیقه گفت‌وگو با هدایت استاد', 'کنار کلاس گروهی یا خصوصی'] },
];

const reasons = [
  { title: 'بدون رفت‌وآمد', desc: 'وقتی که در مسیر آموزشگاه می‌گذشت، صرف تمرین می‌شود.' },
  { title: 'ساعت متناسب با کار', desc: 'کلاس صبح، عصر یا شب؛ بر اساس برنامه‌ی هفته‌ات.' },
  { title: 'هر جا که باشی', desc: 'در شهر دیگری هستی یا سفر می‌روی؟ کلاس همراهت می‌آید.' },
  { title: 'همه‌چیز در یک پنل', desc: 'برنامه‌ی کلاس‌ها، تکلیف‌ها و بازخورد استاد در یک جا.' },
];

const checklist = ['اینترنت پایدار (برای تماس تصویری)', 'هدفون با میکروفون', 'یک جای آرام برای ۹۰ دقیقه', 'لپ‌تاپ، تبلت یا گوشی', 'دفتر یادداشت'];

export default function OnlineClassesPage() {
  return (
    <>
      <PageIntro
        crumbs={[{ href: '/', label: 'فرتاش' }, { label: 'کلاس‌های آنلاین' }]}
        title="کلاس آنلاین، با استادی که صدایت را می‌شنود."
        lead="همه‌ی کلاس‌های فرتاش زنده‌اند. استاد و هم‌کلاسی‌هایت را می‌بینی، حرف می‌زنی، اصلاح می‌شوی و دوباره امتحان می‌کنی؛ همان چیزی که یادگیری زبان لازم دارد."
      />

      <section className="border-y border-rule bg-tint py-20">
        <div className="container-x">
          <SectionTitle title="۹۰ دقیقه‌ی یک کلاس گروهی" desc="بیشتر وقت جلسه به حرف زدن خودت می‌گذرد؛ بخش‌های پررنگ زمانی است که تو صحبت می‌کنی." />
          <SessionTimeline className="mt-14" />
        </div>
      </section>

      <section className="container-x py-24">
        <SectionTitle title="سه شکل کلاس" desc="در مشاوره بر اساس هدف و زمانت یکی را انتخاب می‌کنی؛ بعداً هم می‌توانی تغییرش بدهی." />
        <div className="mt-12 grid overflow-hidden rounded-[20px] border border-rule lg:grid-cols-3">
          {formats.map((f, i) => (
            <div key={f.name} className={i > 0 ? 'border-t border-rule p-8 lg:border-r lg:border-t-0' : 'p-8'}>
              <h3 className="font-display text-3xl font-bold text-ink">{f.name}</h3>
              <p className="mt-2 text-[15px] leading-7 text-slate-600">{f.who}</p>
              <ul className="mt-6 space-y-3 text-[15px] text-slate-700">
                {f.how.map((h) => (
                  <li key={h} className="flex gap-2.5"><Check size={18} className="mt-0.5 shrink-0 text-brand-600" />{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-24 text-white">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-display text-[2.6rem] font-bold leading-[1.15] sm:text-5xl">چرا آنلاین؟</h2>
            <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {reasons.map((r) => (
                <div key={r.title}>
                  <dt className="font-bold">{r.title}</dt>
                  <dd className="mt-2 text-[15px] leading-7 text-white/70">{r.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-[20px] border border-white/15 p-8">
            <h2 className="text-lg font-bold">پیش از اولین جلسه</h2>
            <ul className="mt-6 space-y-4">
              {checklist.map((c) => (
                <li key={c} className="flex gap-3 text-[15px] text-white/85"><Check size={18} className="mt-0.5 shrink-0 text-sky2-300" />{c}</li>
              ))}
            </ul>
            <p className="mt-8 border-t border-white/15 pt-6 text-sm leading-7 text-white/70">
              فرتاش در حال حاضر فقط کلاس زنده برگزار می‌کند؛ دوره‌ی ضبط‌شده یا ویدیوی آماده نداریم.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionTitle title="سوال‌های رایج" />
            <Link href="/#faq" className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:underline">همه‌ی سوال‌ها</Link>
          </div>
          <div className="border-t border-ink/80">
            {[faqs[0], faqs[3], faqs[4]].map((f) => (
              <details key={f.q} className="group border-b border-rule">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown size={20} className="shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="-mt-1 max-w-2xl pb-6 leading-8 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="اولین قدم، یک گفت‌وگوی کوتاه است."
        desc="سطحت را می‌سنجیم و کلاس مناسب را پیشنهاد می‌دهیم. مشاوره رایگان است و تعهدی ایجاد نمی‌کند."
        primary={{ href: '/consultation', label: 'درخواست تعیین سطح' }}
        secondary={{ href: '/teachers', label: 'دیدن اساتید' }}
      />
    </>
  );
}
