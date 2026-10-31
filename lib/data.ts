// Static content for the public site, plus mock data for the demo panels until a backend is connected.

/** Fartash's office and phone line. */
export const contact = {
  phone: '۰۹۰۵ ۰۳۱ ۸۹۰۹',
  phoneHref: 'tel:+989050318909',
  address: 'مشهد، طبرسی جنوبی ۶۰، فتاح ۲',
  city: 'مشهد',
};

export type LanguageSlug = 'english' | 'german' | 'french';

/** The three languages Fartash teaches. Single source for the site, forms and panels. */
export const languages = [
  {
    code: 'en',
    slug: 'english' as LanguageSlug,
    name: 'انگلیسی',
    native: 'English',
    tracks: 'عمومی، مکالمه، انگلیسی کاری، آمادگی IELTS و TOEFL',
    exams: ['IELTS', 'TOEFL'],
    intro: 'از اولین جمله‌ها تا نوشتن ایمیل کاری و آماده‌شدن برای IELTS؛ با کلاس زنده و استادی که پیشرفتت را دنبال می‌کند.',
    phrase: { before: 'Could you ', marked: 'say that again', after: ', please?', fa: 'می‌شود دوباره بگویید؟' },
  },
  {
    code: 'de',
    slug: 'german' as LanguageSlug,
    name: 'آلمانی',
    native: 'Deutsch',
    tracks: 'عمومی از صفر، مکالمه، آمادگی Goethe و ÖSD',
    exams: ['Goethe', 'ÖSD', 'telc'],
    intro: 'برای تحصیل، کار یا مهاجرت؛ آلمانی را از حروف تعریف تا مصاحبه‌ی شفاهی Goethe قدم‌به‌قدم با استاد پیش می‌بری.',
    phrase: { before: 'Ich ', marked: 'hätte gern', after: ' einen Kaffee.', fa: 'یک قهوه می‌خواستم.' },
  },
  {
    code: 'fr',
    slug: 'french' as LanguageSlug,
    name: 'فرانسوی',
    native: 'Français',
    tracks: 'عمومی، مکالمه، آمادگی DELF و TCF',
    exams: ['DELF', 'TCF'],
    intro: 'فرانسه‌ی روزمره، تلفظی که شنیده شود و آمادگی DELF و TCF؛ همه در کلاس زنده با گروه کوچک یا خصوصی.',
    phrase: { before: 'Je ', marked: 'voudrais', after: ' un croissant.', fa: 'یک کروسان می‌خواستم.' },
  },
];

export type Language = (typeof languages)[number];
export const getLanguage = (slug: string) => languages.find((l) => l.slug === slug);
export const getLanguageByCode = (code: string) => languages.find((l) => l.code === code);

/** CEFR levels, described the way a learner would notice them. */
export const levels = [
  { code: 'A1', name: 'مبتدی', can: 'خودت را معرفی می‌کنی، سفارش می‌دهی و جمله‌های کوتاه روزمره را می‌فهمی.' },
  { code: 'A2', name: 'پایه', can: 'درباره‌ی کار، خانواده و برنامه‌هایت حرف می‌زنی و پیام‌های ساده می‌نویسی.' },
  { code: 'B1', name: 'متوسط', can: 'در سفر از پس بیشتر موقعیت‌ها برمی‌آیی و نظرت را با دلیل می‌گویی.' },
  { code: 'B2', name: 'فوق متوسط', can: 'در بحث‌ها شرکت می‌کنی، متن‌های تخصصی را می‌خوانی و بیشتر آزمون‌های مهاجرتی را هدف می‌گیری.' },
  { code: 'C1', name: 'پیشرفته', can: 'روان و دقیق حرف می‌زنی و برای تحصیل یا کار در محیط دانشگاهی آماده‌ای.' },
  { code: 'C2', name: 'تسلط', can: 'تفاوت‌های ظریف لحن و معنا را می‌فهمی و تقریباً مثل اهل زبان می‌نویسی.' },
];

/**
 * Sample teacher profiles. They only show how a profile will look; every card
 * renders a «نمونه» badge until real, approved profiles replace them.
 */
export const teachers = [
  { id: 't1', slug: 'sara-mohammadi', name: 'سارا محمدی', lang: 'english' as LanguageSlug, title: 'مکالمه و آمادگی IELTS', levels: 'A2 تا C1', focus: ['Speaking', 'IELTS Writing'], bio: 'روی جمله‌سازی در لحظه کار می‌کند؛ هر جلسه با یک موقعیت واقعی شروع می‌شود.', isSample: true },
  { id: 't2', slug: 'ali-rezaei', name: 'علی رضایی', lang: 'german' as LanguageSlug, title: 'آلمانی از صفر و Goethe', levels: 'A1 تا B2', focus: ['Grammatik', 'Goethe B1'], bio: 'گرامر آلمانی را با جدول‌های کوچک و تمرین‌های شفاهی کوتاه درس می‌دهد.', isSample: true },
  { id: 't3', slug: 'maryam-karimi', name: 'مریم کریمی', lang: 'french' as LanguageSlug, title: 'فرانسه‌ی عمومی و DELF', levels: 'A1 تا B2', focus: ['Prononciation', 'DELF B1'], bio: 'تلفظ را از جلسه‌ی اول جدی می‌گیرد و برای هر زبان‌آموز فهرست صداهای سخت می‌سازد.', isSample: true },
  { id: 't4', slug: 'reza-ahmadi', name: 'رضا احمدی', lang: 'english' as LanguageSlug, title: 'انگلیسی کاری و TOEFL', levels: 'B1 تا C2', focus: ['Business English', 'TOEFL'], bio: 'ایمیل، جلسه‌ی کاری و ارائه را با نمونه‌های واقعی محیط کار تمرین می‌کند.', isSample: true },
  { id: 't5', slug: 'neda-farahani', name: 'ندا فراهانی', lang: 'german' as LanguageSlug, title: 'مکالمه و آمادگی ÖSD', levels: 'B1 تا C1', focus: ['Sprechen', 'ÖSD B2'], bio: 'کلاس‌هایش بیشتر حرف زدن است؛ اصلاح‌ها را بعد از هر تمرین جمع‌بندی می‌کند.', isSample: true },
  { id: 't6', slug: 'kaveh-amini', name: 'کاوه امینی', lang: 'french' as LanguageSlug, title: 'آمادگی TCF', levels: 'B1 تا C1', focus: ['Compréhension orale', 'TCF'], bio: 'برای TCF با آزمون‌های زمان‌دار کوتاه و مرور خطاهای پرتکرار کار می‌کند.', isSample: true },
];

export type Teacher = (typeof teachers)[number];

/** Illustrative tuition plans: amounts are placeholders until pricing is final. */
export const plans = [
  {
    name: 'گروهی',
    price: 890000,
    desc: 'کلاس زنده با گروه کوچک هم‌سطح',
    features: ['۸ جلسه‌ی زنده در ماه', 'تکلیف و بازخورد استاد', 'آزمونک واژگان در پنل'],
    featured: false,
  },
  {
    name: 'گروهی + خصوصی',
    price: 1890000,
    desc: 'کلاس گروهی به‌همراه جلسه‌های خصوصی',
    features: ['۱۲ جلسه‌ی زنده‌ی گروهی', '۲ جلسه‌ی خصوصی با استاد', 'کلاب مکالمه‌ی هفتگی', 'برنامه‌ی تمرین شخصی'],
    featured: true,
  },
  {
    name: 'خصوصی',
    price: 3490000,
    desc: 'تمام جلسه‌ها یک‌به‌یک با استاد',
    features: ['۱۲ جلسه‌ی خصوصی', 'انتخاب استاد و ساعت', 'برنامه‌ی آمادگی آزمون'],
    featured: false,
  },
];

export const faqs = [
  { q: 'کلاس‌ها زنده‌اند یا ضبط‌شده؟', a: 'همه‌ی کلاس‌های فرتاش زنده و آنلاین برگزار می‌شوند. در حال حاضر دوره‌ی ضبط‌شده یا ویدیویی نداریم.' },
  { q: 'کدام زبان‌ها را آموزش می‌دهید؟', a: 'انگلیسی، آلمانی و فرانسوی؛ برای هر سه، دوره‌ی عمومی از سطح صفر و آمادگی آزمون‌های رسمی داریم.' },
  { q: 'تعیین سطح چطور انجام می‌شود؟', a: 'در گفت‌وگوی مشاوره، چند سؤال شنیداری و شفاهی می‌پرسیم و سطحت را بر اساس چارچوب CEFR (از A1 تا C2) مشخص می‌کنیم. بعد کلاس و استاد مناسب را پیشنهاد می‌دهیم.' },
  { q: 'برای کلاس آنلاین به چه چیزی نیاز دارم؟', a: 'اینترنت پایدار، هدفون با میکروفون و یک جای آرام. با لپ‌تاپ راحت‌تری، ولی گوشی هم کافی است.' },
  { q: 'اگر یک جلسه را از دست بدهم چه می‌شود؟', a: 'قانون جابه‌جایی و جبران جلسه پیش از شروع کلاس، در گفت‌وگوی مشاوره برایت توضیح داده می‌شود.' },
  { q: 'دفتر فرتاش کجاست؟', a: 'دفتر ما در مشهد، طبرسی جنوبی ۶۰، فتاح ۲ است. کلاس‌ها آنلاین برگزار می‌شوند، پس از هر شهری می‌توانی شرکت کنی.' },
];

/* ---------- Panel mock data (demo only) ---------- */

export const languageShare = [
  { name: 'انگلیسی', value: 58 },
  { name: 'آلمانی', value: 27 },
  { name: 'فرانسوی', value: 15 },
];

/* ---------- Student panel ---------- */

export const student = { name: 'نگار طاهری', level: 'B2', photo: '/images/people/9.jpg', streak: 18, xp: 2340 };

export const studentCourses = [
  { id: 'c1', title: 'انگلیسی عمومی B2', teacher: 'سارا محمدی', progress: 68, lessons: 36, done: 24, next: 'شنبه ۱۸:۰۰', color: 'bg-brand-600' },
  { id: 'c2', title: 'آمادگی IELTS Academic', teacher: 'رضا احمدی', progress: 42, lessons: 30, done: 13, next: 'دوشنبه ۲۰:۰۰', color: 'bg-sky2-500' },
  { id: 'c3', title: 'کلاب مکالمه هفتگی', teacher: 'سارا محمدی', progress: 80, lessons: 10, done: 8, next: 'چهارشنبه ۱۹:۳۰', color: 'bg-navy' },
];

export const studentSchedule = [
  { day: 'شنبه', date: '۱۰ آبان', time: '۱۸:۰۰ - ۱۹:۳۰', title: 'انگلیسی عمومی B2', teacher: 'سارا محمدی', type: 'گروهی' },
  { day: 'دوشنبه', date: '۱۲ آبان', time: '۲۰:۰۰ - ۲۱:۳۰', title: 'IELTS Writing Task 2', teacher: 'رضا احمدی', type: 'گروهی' },
  { day: 'سه‌شنبه', date: '۱۳ آبان', time: '۱۷:۰۰ - ۱۸:۰۰', title: 'جلسه خصوصی Speaking', teacher: 'رضا احمدی', type: 'خصوصی' },
  { day: 'چهارشنبه', date: '۱۴ آبان', time: '۱۹:۳۰ - ۲۰:۳۰', title: 'کلاب مکالمه: سفر', teacher: 'سارا محمدی', type: 'کلاب' },
];

export const assignments = [
  { title: 'Essay: Technology & Education', course: 'IELTS', due: 'فردا', status: 'pending' },
  { title: 'Unit 7: Vocabulary Quiz', course: 'انگلیسی B2', due: '۳ روز دیگر', status: 'pending' },
  { title: 'Listening Practice Set 4', course: 'IELTS', due: 'تحویل شد', status: 'done' },
  { title: 'Grammar: Conditionals', course: 'انگلیسی B2', due: 'تحویل شد', status: 'graded', score: 92 },
];

export const skills = [
  { name: 'Speaking', value: 72 },
  { name: 'Listening', value: 81 },
  { name: 'Reading', value: 76 },
  { name: 'Writing', value: 58 },
];

export const weeklyStudy = [35, 50, 20, 65, 45, 80, 55]; // minutes per day, Sat..Fri

/* ---------- Teacher panel ---------- */

export const teacher = { name: 'سارا محمدی', title: 'مدرس ارشد انگلیسی', photo: '/images/people/4.jpg' };

export const teacherClasses = [
  { id: 'k1', title: 'انگلیسی عمومی B2، گروه ۳', students: 8, time: 'شنبه و سه‌شنبه ۱۸:۰۰', next: 'امروز ۱۸:۰۰', level: 'B2', progress: 68 },
  { id: 'k2', title: 'انگلیسی عمومی A2، گروه ۱', students: 10, time: 'یکشنبه و چهارشنبه ۱۶:۰۰', next: 'فردا ۱۶:۰۰', level: 'A2', progress: 35 },
  { id: 'k3', title: 'کلاب مکالمه هفتگی', students: 14, time: 'چهارشنبه ۱۹:۳۰', next: 'چهارشنبه ۱۹:۳۰', level: 'B1+', progress: 80 },
  { id: 'k4', title: 'خصوصی با امیر حسینی', students: 1, time: 'دوشنبه ۱۷:۰۰', next: 'دوشنبه ۱۷:۰۰', level: 'B1', progress: 52 },
];

export const teacherStudents = [
  { name: 'نگار طاهری', className: 'B2، گروه ۳', attendance: 96, avg: 91, status: 'عالی', photo: '/images/people/9.jpg' },
  { name: 'امیر حسینی', className: 'خصوصی', attendance: 100, avg: 84, status: 'خوب', photo: '/images/people/6.jpg' },
  { name: 'هانیه موسوی', className: 'کلاب مکالمه', attendance: 88, avg: 87, status: 'خوب', photo: '/images/people/7.jpg' },
  { name: 'پویا جعفری', className: 'A2، گروه ۱', attendance: 71, avg: 64, status: 'نیاز به توجه', photo: '/images/people/8.jpg' },
  { name: 'الهام نوری', className: 'B2، گروه ۳', attendance: 92, avg: 78, status: 'خوب', photo: '/images/people/10.jpg' },
  { name: 'کیان صادقی', className: 'A2، گروه ۱', attendance: 84, avg: 73, status: 'خوب', photo: '/images/people/2.jpeg' },
];

export const submissions = [
  { student: 'نگار طاهری', title: 'Essay: Technology & Education', time: '۲ ساعت پیش' },
  { student: 'الهام نوری', title: 'Unit 7: Writing', time: '۵ ساعت پیش' },
  { student: 'کیان صادقی', title: 'Past Simple Worksheet', time: 'دیروز' },
];

/* ---------- Admin panel ---------- */

export const revenueByMonth = [
  { m: 'اردیبهشت', v: 312 },
  { m: 'خرداد', v: 345 },
  { m: 'تیر', v: 298 },
  { m: 'مرداد', v: 362 },
  { m: 'شهریور', v: 410 },
  { m: 'مهر', v: 468 },
]; // million Toman

export const adminUsers = [
  { name: 'نگار طاهری', email: 'negar@example.com', role: 'دانشجو', status: 'فعال', joined: '۱۴۰۵/۰۲/۱۴', photo: '/images/people/9.jpg' },
  { name: 'سارا محمدی', email: 'sara@example.com', role: 'معلم', status: 'فعال', joined: '۱۴۰۳/۰۶/۰۱', photo: '/images/people/4.jpg' },
  { name: 'امیر حسینی', email: 'amir@example.com', role: 'دانشجو', status: 'فعال', joined: '۱۴۰۵/۰۴/۲۰', photo: '/images/people/6.jpg' },
  { name: 'علی رضایی', email: 'ali@example.com', role: 'معلم', status: 'فعال', joined: '۱۴۰۴/۰۱/۱۸', photo: '/images/people/1.jpg' },
  { name: 'پویا جعفری', email: 'pouya@example.com', role: 'دانشجو', status: 'معلق', joined: '۱۴۰۵/۰۷/۰۲', photo: '/images/people/8.jpg' },
  { name: 'مریم کریمی', email: 'maryam@example.com', role: 'معلم', status: 'در انتظار تأیید', joined: '۱۴۰۵/۰۸/۰۵', photo: '/images/people/3.jpg' },
  { name: 'هانیه موسوی', email: 'hanieh@example.com', role: 'دانشجو', status: 'فعال', joined: '۱۴۰۵/۰۳/۱۱', photo: '/images/people/7.jpg' },
  { name: 'الهام نوری', email: 'elham@example.com', role: 'دانشجو', status: 'فعال', joined: '۱۴۰۵/۰۵/۲۹', photo: '/images/people/10.jpg' },
];

export const adminCourses = [
  { title: 'انگلیسی عمومی (A1 تا C1)', lang: 'انگلیسی', teachers: 14, students: 1840, price: 890000, status: 'منتشر شده' },
  { title: 'آمادگی IELTS Academic', lang: 'انگلیسی', teachers: 8, students: 960, price: 1890000, status: 'منتشر شده' },
  { title: 'آلمانی از صفر تا B1', lang: 'آلمانی', teachers: 9, students: 1120, price: 990000, status: 'منتشر شده' },
  { title: 'آمادگی Goethe B2', lang: 'آلمانی', teachers: 4, students: 310, price: 1690000, status: 'منتشر شده' },
  { title: 'فرانسه عمومی', lang: 'فرانسوی', teachers: 6, students: 740, price: 890000, status: 'منتشر شده' },
  { title: 'فرانسه: آمادگی TCF', lang: 'فرانسوی', teachers: 3, students: 0, price: 1590000, status: 'پیش‌نویس' },
];

export const recentPayments = [
  { user: 'امیر حسینی', plan: 'خصوصی', amount: 3490000, date: 'امروز ۱۴:۲۰', status: 'موفق' },
  { user: 'الهام نوری', plan: 'حرفه‌ای', amount: 1890000, date: 'امروز ۱۱:۰۵', status: 'موفق' },
  { user: 'کیان صادقی', plan: 'پایه', amount: 890000, date: 'دیروز', status: 'ناموفق' },
  { user: 'هانیه موسوی', plan: 'حرفه‌ای', amount: 1890000, date: 'دیروز', status: 'موفق' },
];
