// Mock data used across the public site and the panels until a backend is connected.

export const languages = [
  { code: 'en', tracks: 'عمومی، مکالمه، IELTS، TOEFL، تجاری', name: 'انگلیسی', native: 'English', flag: '🇬🇧', students: 4820, teachers: 38, color: 'from-blue-500 to-indigo-600' },
  { code: 'de', tracks: 'عمومی از صفر، آمادگی Goethe و ÖSD', name: 'آلمانی', native: 'Deutsch', flag: '🇩🇪', students: 1940, teachers: 16, color: 'from-amber-400 to-orange-500' },
  { code: 'fr', tracks: 'عمومی، آمادگی DELF و TCF کانادا', name: 'فرانسوی', native: 'Français', flag: '🇫🇷', students: 1210, teachers: 11, color: 'from-sky-400 to-blue-600' },
  { code: 'tr', tracks: 'مکالمه‌محور، آمادگی TÖMER', name: 'ترکی استانبولی', native: 'Türkçe', flag: '🇹🇷', students: 980, teachers: 9, color: 'from-rose-400 to-red-600' },
  { code: 'es', tracks: 'عمومی و مکالمه تا سطح B2', name: 'اسپانیایی', native: 'Español', flag: '🇪🇸', students: 640, teachers: 7, color: 'from-yellow-400 to-red-500' },
  { code: 'ar', tracks: 'فصیح و محاوره‌ی خلیجی', name: 'عربی', native: 'العربية', flag: '🇸🇦', students: 520, teachers: 6, color: 'from-emerald-400 to-teal-600' },
];

export const teachers = [
  { id: 't1', name: 'سارا محمدی', lang: 'انگلیسی', title: 'مدرس IELTS و مکالمه', rating: 4.9, students: 320, years: 9, photo: '/images/people/4.jpg' },
  { id: 't2', name: 'علی رضایی', lang: 'آلمانی', title: 'آمادگی آزمون Goethe', rating: 4.8, students: 210, years: 7, photo: '/images/people/1.jpg' },
  { id: 't3', name: 'مریم کریمی', lang: 'فرانسوی', title: 'مدرس DELF و فرانسه عمومی', rating: 4.9, students: 165, years: 6, photo: '/images/people/3.jpg' },
  { id: 't4', name: 'رضا احمدی', lang: 'انگلیسی', title: 'انگلیسی تجاری و TOEFL', rating: 4.7, students: 280, years: 11, photo: '/images/people/5.jpg' },
];

export const plans = [
  {
    name: 'پایه',
    price: 890000,
    period: 'ماهانه',
    desc: 'برای شروع یادگیری با کلاس‌های گروهی',
    features: ['۸ جلسه کلاس گروهی در ماه', 'دسترسی به منابع آموزشی', 'تمرین و آزمون هفتگی', 'پشتیبانی تیکتی'],
    featured: false,
  },
  {
    name: 'حرفه‌ای',
    price: 1890000,
    period: 'ماهانه',
    desc: 'محبوب‌ترین انتخاب زبان‌آموزان فرتاش',
    features: ['۱۲ جلسه کلاس گروهی کوچک', '۲ جلسه خصوصی با استاد', 'برنامه مطالعه شخصی‌سازی‌شده', 'کلاب مکالمه هفتگی', 'گواهی پایان دوره'],
    featured: true,
  },
  {
    name: 'خصوصی',
    price: 3490000,
    period: 'ماهانه',
    desc: 'یادگیری سریع با تمرکز کامل روی شما',
    features: ['۱۲ جلسه کاملاً خصوصی', 'انتخاب آزادانه استاد و زمان', 'آمادگی آزمون‌های بین‌المللی', 'پشتیبانی اختصاصی', 'گواهی پایان دوره'],
    featured: false,
  },
];

export const testimonials = [
  { name: 'نگار طاهری', role: 'IELTS آکادمیک، رایتینگ ۷', text: 'رایتینگم همیشه ۵.۵ می‌شد. آقای احمدی هر هفته دو تا essay ازم می‌گرفت و کنار هر پاراگراف می‌نوشت کجا ایده‌ام گم شده. آزمون بعدی ۷ گرفتم.', photo: '/images/people/9.jpg' },
  { name: 'امیر حسینی', role: 'برنامه‌نویس، آلمانی B1', text: 'کلاس‌هایم ساعت ۸ شب بود، بعد از کار. هر جلسه‌ای که جا می‌ماندم، ویدیویش را توی مترو می‌دیدم. یک سال طول کشید تا B1.', photo: '/images/people/6.jpg' },
  { name: 'هانیه موسوی', role: 'دانشجوی پزشکی، فرانسه', text: 'سه ماه اول در کلاب مکالمه فقط گوش می‌دادم. خانم کریمی یک روز من را مسئول توضیح موضوع جلسه کرد و از آن به بعد ساکت نماندم.', photo: '/images/people/7.jpg' },
];

export const faqs = [
  { q: 'تعیین سطح چطور انجام می‌شود؟', a: 'بعد از ثبت‌نام، یک آزمون آنلاین ۲۰ دقیقه‌ای و یک مصاحبه‌ی کوتاه شفاهی با مشاور آموزشی دارید. سطح شما بر اساس چارچوب CEFR (از A1 تا C2) مشخص می‌شود.' },
  { q: 'کلاس‌ها به صورت زنده هستند یا ضبط‌شده؟', a: 'همه‌ی کلاس‌ها زنده و تعاملی برگزار می‌شوند و فایل ضبط‌شده‌ی هر جلسه تا پایان دوره در پنل شما در دسترس است.' },
  { q: 'اگر یک جلسه را از دست بدهم چه می‌شود؟', a: 'می‌توانید ویدیوی جلسه را ببینید و در کلاس‌های پرسش و پاسخ هفتگی شرکت کنید. در پلن خصوصی تا ۲۴ ساعت قبل امکان جابه‌جایی جلسه وجود دارد.' },
  { q: 'آیا گواهی پایان دوره دریافت می‌کنم؟', a: 'بله، پس از گذراندن آزمون پایانی هر سطح، گواهی معتبر فرتاش با کد استعلام آنلاین برای شما صادر می‌شود.' },
  { q: 'امکان بازگشت وجه وجود دارد؟', a: 'اگر تا پایان جلسه‌ی دوم از کیفیت کلاس راضی نبودید، کل مبلغ بدون هیچ پرسشی بازگردانده می‌شود.' },
];

/* ---------- Student panel ---------- */

export const student = { name: 'نگار طاهری', level: 'B2', photo: '/images/people/9.jpg', streak: 18, xp: 2340 };

export const studentCourses = [
  { id: 'c1', title: 'انگلیسی عمومی B2', teacher: 'سارا محمدی', progress: 68, lessons: 36, done: 24, next: 'شنبه ۱۸:۰۰', color: 'bg-brand-600' },
  { id: 'c2', title: 'آمادگی IELTS Academic', teacher: 'رضا احمدی', progress: 42, lessons: 30, done: 13, next: 'دوشنبه ۲۰:۰۰', color: 'bg-sky2-500' },
  { id: 'c3', title: 'کلاب مکالمه هفتگی', teacher: 'سارا محمدی', progress: 80, lessons: 10, done: 8, next: 'چهارشنبه ۱۹:۳۰', color: 'bg-violet-500' },
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
  { title: 'ترکی استانبولی مکالمه‌محور', lang: 'ترکی', teachers: 5, students: 520, price: 790000, status: 'پیش‌نویس' },
];

export const recentPayments = [
  { user: 'امیر حسینی', plan: 'خصوصی', amount: 3490000, date: 'امروز ۱۴:۲۰', status: 'موفق' },
  { user: 'الهام نوری', plan: 'حرفه‌ای', amount: 1890000, date: 'امروز ۱۱:۰۵', status: 'موفق' },
  { user: 'کیان صادقی', plan: 'پایه', amount: 890000, date: 'دیروز', status: 'ناموفق' },
  { user: 'هانیه موسوی', plan: 'حرفه‌ای', amount: 1890000, date: 'دیروز', status: 'موفق' },
];
