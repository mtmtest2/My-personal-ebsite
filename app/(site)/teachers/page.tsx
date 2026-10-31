import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/site/CtaBand';
import DemoNotice from '@/components/site/DemoNotice';
import PageIntro from '@/components/site/PageIntro';
import TeacherCard from '@/components/site/TeacherCard';
import FilterChips from '@/components/magazine/FilterChips';
import { getLanguage, languages, teachers } from '@/lib/data';
import { fa } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'اساتید',
  description: 'مدرس‌های انگلیسی، آلمانی و فرانسوی فرتاش؛ سطح‌ها، تخصص و آزمون‌هایی که هر مدرس روی آن‌ها کار می‌کند.',
  alternates: { canonical: '/teachers' },
};

type Props = { searchParams: Promise<{ lang?: string }> };

export default async function TeachersPage({ searchParams }: Props) {
  const { lang } = await searchParams;
  const active = getLanguage(lang ?? '');
  const list = active ? teachers.filter((t) => t.lang === active.slug) : teachers;

  return (
    <>
      <PageIntro
        crumbs={[{ href: '/', label: 'فرتاش' }, { label: 'اساتید' }]}
        title="مدرسی که با هدفت جور باشد."
        lead="هر مدرس روی چند سطح و یک هدف مشخص کار می‌کند: مکالمه، آزمون یا زبان کاری. در پروفایلش می‌بینی کلاسش برای چه کسی مناسب است و می‌توانی در مشاوره همان مدرس را درخواست کنی."
      />
      <section className="container-x pb-24">
        <div className="flex flex-col gap-4 border-t border-ink/80 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <FilterChips
            label="زبان تدریس"
            items={[
              { href: '/teachers', label: 'همه', active: !active, count: teachers.length },
              ...languages.map((l) => ({ href: `/teachers?lang=${l.slug}`, label: l.name, active: active?.slug === l.slug, count: teachers.filter((t) => t.lang === l.slug).length })),
            ]}
          />
          <p className="shrink-0 text-sm text-slate-500">{fa(list.length)} مدرس</p>
        </div>
        <DemoNotice className="mt-8">پروفایل‌های این صفحه نمونه‌اند و فقط شکل نهایی پروفایل را نشان می‌دهند. نام، تخصص و تصویر واقعی مدرس‌ها پس از معرفی رسمی جایگزین می‌شود.</DemoNotice>
        <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <div key={t.id} id={t.slug} className="scroll-mt-28">
              <TeacherCard t={t} full />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-rule bg-tint py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="h-display text-4xl">مدرس زبان هستی؟</h2>
            <p className="mt-3 max-w-xl leading-8 text-slate-600">اگر انگلیسی، آلمانی یا فرانسوی تدریس می‌کنی و کلاس آنلاین زنده را دوست داری، درخواست همکاری‌ات را بفرست.</p>
          </div>
          <Link href="/register?role=teacher" className="btn-ghost justify-self-start">درخواست همکاری</Link>
        </div>
      </section>

      <div className="pt-24">
        <CtaBand
          title="مطمئن نیستی کدام مدرس؟"
          desc="در گفت‌وگوی مشاوره، بر اساس سطح، هدف و ساعت‌های آزادت مدرس مناسب را پیشنهاد می‌دهیم."
          primary={{ href: '/consultation', label: 'درخواست مشاوره' }}
        />
      </div>
    </>
  );
}
