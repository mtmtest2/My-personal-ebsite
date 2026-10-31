# فرتاش — آموزشگاه آنلاین زبان

وب‌سایت آموزش زبان با Next.js 15، React 19 و Tailwind CSS (راست‌به‌چپ، فونت وزیرمتن).

## اجرا

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## صفحات

| مسیر | توضیح |
| --- | --- |
| `/` | صفحه‌ی اصلی: معرفی، مسیر شروع، سه زبان، کلاس آنلاین، هفته‌ی نمونه، اساتید، شهریه، مجله، جایگاه تجربه‌ی زبان‌آموزان، سوالات |
| `/online-classes` | معرفی کلاس‌های آنلاین زنده: ساختار جلسه، شکل‌های کلاس، پیش‌نیازها |
| `/languages/english` · `german` · `french` | صفحه‌ی اختصاصی هر زبان: مسیرها، سطح‌های CEFR، مدرس‌ها، مقاله‌ها |
| `/teachers` | معرفی مدرس‌ها با فیلتر زبان (`?lang=`) |
| `/consultation` | درخواست مشاوره و تعیین سطح (`?lang=` و `?teacher=` پیش‌انتخاب می‌کنند) |
| `/magazine` | صفحه‌ی اصلی مجله‌ی آموزشی |
| `/magazine/[lang]`، `/magazine/[lang]/[topic]`، `/magazine/topics/[topic]` | آرشیو زبان، زبان+موضوع و موضوع |
| `/magazine/articles/[slug]` | صفحه‌ی مقاله با فهرست مطالب، اشتراک‌گذاری، نویسنده و مقاله‌های مرتبط |
| `/magazine/authors/[slug]`، `/magazine/search` | صفحه‌ی نویسنده و جست‌وجو/فیلتر (`q`، `lang`، `topic`، `tag`) |
| `/login`, `/register` | ورود و ثبت‌نام (نمایشی) |
| `/student/*`, `/teacher/*`, `/admin/*` | پنل‌های نمونه‌ی دانشجو، استاد و مدیر |

## نکات

- اطلاعات تماس (تلفن و آدرس دفتر مشهد) در `contact` داخل `lib/data.ts` است.
- این نسخه فقط رابط کاربری است: بک‌اند، پایگاه داده و احراز هویت ندارد. فرم‌ها چیزی ارسال یا ذخیره نمی‌کنند و این را به کاربر نشان می‌دهند (`components/site/DemoNotice.tsx`).
- محتوای عمومی در `lib/data.ts` و محتوای مجله در `lib/magazine.ts` است. صفحه‌ها فقط از توابع کمکی پایین `lib/magazine.ts` استفاده می‌کنند تا بعداً بتوان منبع داده را بدون تغییر کامپوننت‌ها عوض کرد.
- هر محتوای نمونه (`isSample: true`) برچسب «نمونه» می‌گیرد و مقاله‌ها و نویسنده‌های نمونه `noindex` هستند.
- رنگ‌های برند در `tailwind.config.ts` (پالت `brand`) و کلاس‌های مشترک در `app/globals.css` تعریف شده‌اند.
- عکس‌ها از کیت [Tail-Kit](https://github.com/Charlie85270/tail-kit) (MIT) گرفته شده‌اند: `public/images/people` (پنل‌های نمونه و نمای نمونه‌ی کلاس) و `public/images/scenes` (میز مطالعه، دفتر و قهوه، دست‌نوشته، ماشین تحریر). عکس آماده هرگز به‌عنوان مدرس یا زبان‌آموز واقعی معرفی نمی‌شود.
- اسکیل‌های طراحی در `.claude/skills` نصب‌اند (design-taste-frontend، ui-ux-pro-max، emil-design-eng، web-design-guidelines، vercel-react-best-practices، frontend-design). بازرسی ظاهر: `node .claude/skills/design-taste-frontend/scripts/inspect.mjs <url>`.
- علامت‌گذاری دست‌کشیده (`components/ui/Highlighter.tsx`) و انیمیشن تغییر تم از [Magic UI](https://magicui.design) (MIT) اقتباس شده‌اند.
