# فرتاش — آموزشگاه آنلاین زبان

وب‌سایت آموزش زبان با Next.js 16 (Turbopack)، React 19.3 و Tailwind CSS (راست‌به‌چپ، فونت وزیرمتن).

## اجرا

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
npm run typecheck     # بررسی TypeScript
npm run lint:design   # بررسی نشانه‌های طراحی AI‌مانند (taste-skill)
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
- عکس‌ها موقتی‌اند و از کیت‌های متن‌باز آمده‌اند: [Tail-Kit](https://github.com/Charlie85270/tail-kit)، [Flowbite Admin Dashboard](https://github.com/themesberg/flowbite-admin-dashboard) و [Material Tailwind](https://github.com/creativetimofficial/material-tailwind) (همه MIT). فهرست کامل در `public/images/scenes/CREDITS.md`. هیچ‌کدام مدرس، زبان‌آموز یا دفتر فرتاش نیست؛ پیش از انتشار با عکس‌های واقعی جایگزین شوند.
- انتقال بین صفحه‌ها با `<ViewTransition>` ری‌اکت (`components/ui/PageTransition.tsx`): صفحه‌ی قبلی محو و صفحه‌ی جدید با کمی بالا آمدن ظاهر می‌شود، و جلد هر مقاله از کارتش به بالای صفحه‌ی مقاله منتقل می‌شود. CSS آن در انتهای `app/globals.css` است.
- اسکیل‌های Claude Code در `.claude/skills` نصب‌اند و منبعشان در `skills-lock.json` ثبت است:
  - طراحی: design-taste-frontend ([taste-skill](https://github.com/leonxlnx/taste-skill))، frontend-design، ui-ux-pro-max، emil-design-eng
  - [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills): web-design-guidelines، writing-guidelines، vercel-react-best-practices، vercel-composition-patterns، vercel-react-view-transitions، vercel-react-native-skills، vercel-optimize، deploy-to-vercel، vercel-cli-with-tokens
  - design-md-library: ۸۴ فایل DESIGN.md از [awesome-design-md](https://github.com/voltagent/awesome-design-md) به‌عنوان مرجع ساختار (نه برای کپی هویت برندها)
  - playwright-cli: اسکیل و ابزار [Playwright CLI](https://github.com/microsoft/playwright-cli)؛ با `npx playwright-cli` اجرا می‌شود (در devDependencies). به‌روزرسانی اسکیل: `npx playwright-cli install --skills`
- بازرسی ظاهر: `node .claude/skills/design-taste-frontend/scripts/inspect.mjs <url>`.
- علامت‌گذاری دست‌کشیده (`components/ui/Highlighter.tsx`) و انیمیشن تغییر تم از [Magic UI](https://magicui.design) (MIT) اقتباس شده‌اند.
