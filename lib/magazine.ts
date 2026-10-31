// Fartash Magazine content layer.
//
// Everything here is static sample content for the UI. Pages only talk to the
// helper functions at the bottom of this file, so a CMS or database can replace
// the arrays later without touching the components. Every sample carries
// `isSample: true`, which the UI turns into a visible «نمونه» badge and a
// `noindex` robots tag.

import { getLanguage, type LanguageSlug } from '@/lib/data';

export type TopicSlug = 'vocabulary' | 'grammar' | 'conversation' | 'pronunciation' | 'skills' | 'exams';

export const topics: { slug: TopicSlug; name: string; desc: string }[] = [
  { slug: 'vocabulary', name: 'واژگان', desc: 'کلمه‌ها و عبارت‌های پرکاربرد، با مثال و روش به‌خاطر سپردن.' },
  { slug: 'grammar', name: 'گرامر', desc: 'قاعده‌ها به زبان ساده، با جدول‌های کوتاه و خطاهای رایج فارسی‌زبان‌ها.' },
  { slug: 'conversation', name: 'مکالمه', desc: 'جمله‌های آماده برای موقعیت‌های واقعی: سفر، کار، خرید و آشنایی.' },
  { slug: 'pronunciation', name: 'تلفظ', desc: 'صداهایی که در فارسی نداریم و راه تمرین‌شان.' },
  { slug: 'skills', name: 'مهارت‌های چهارگانه', desc: 'روال تمرین شنیدن، خواندن، نوشتن و صحبت کردن.' },
  { slug: 'exams', name: 'آمادگی آزمون', desc: 'ساختار و راهبرد آزمون‌های IELTS، TOEFL، Goethe، DELF و TCF.' },
];

export const getTopic = (slug: string) => topics.find((t) => t.slug === slug);

export type Author = { slug: string; name: string; role: string; bio: string; teacherSlug?: string; isSample: boolean };

export const authors: Author[] = [
  { slug: 'fartash-editorial', name: 'تحریریه‌ی فرتاش', role: 'تیم محتوای آموزشی', bio: 'مقاله‌های مجله را تیم آموزشی فرتاش می‌نویسد و یکی از مدرس‌های همان زبان پیش از انتشار بازبینی می‌کند.', isSample: true },
  { slug: 'sara-mohammadi', name: 'سارا محمدی', role: 'مدرس انگلیسی', bio: 'درباره‌ی مکالمه، تلفظ و رایتینگ IELTS می‌نویسد.', teacherSlug: 'sara-mohammadi', isSample: true },
  { slug: 'ali-rezaei', name: 'علی رضایی', role: 'مدرس آلمانی', bio: 'درباره‌ی گرامر آلمانی و آمادگی Goethe می‌نویسد.', teacherSlug: 'ali-rezaei', isSample: true },
  { slug: 'maryam-karimi', name: 'مریم کریمی', role: 'مدرس فرانسوی', bio: 'درباره‌ی تلفظ و مکالمه‌ی روزمره‌ی فرانسوی می‌نویسد.', teacherSlug: 'maryam-karimi', isSample: true },
];

export const getAuthor = (slug: string) => authors.find((a) => a.slug === slug);

/**
 * Article body blocks. Inline text may embed a foreign phrase as
 * `{{de|der Tisch}}`; it renders with the right `lang` and `dir="ltr"`.
 */
export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; id: string; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'example'; text: string; marked?: string; fa: string }
  | { type: 'table'; head: string[]; rows: string[][]; foreignCols?: number[] }
  | { type: 'tip'; text: string };

/** Typographic cover; `image` adds a photograph behind it (set in the article data). */
export type Cover = { before: string; marked: string; after: string; tone: 'navy' | 'tint' | 'brand'; image?: { src: string; alt: string } };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  lang: LanguageSlug;
  topic: TopicSlug;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  isSample: boolean;
  cover: Cover;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: 'german-noun-gender-der-die-das',
    title: 'der، die یا das؟ نشانه‌های جنس اسم',
    excerpt: 'جنس بیشتر اسم‌های آلمانی را باید حفظ کرد، ولی پسوند خیلی از آن‌ها جنس را از قبل مشخص می‌کند. این‌جا مطمئن‌ترین نشانه‌ها را جمع کرده‌ایم.',
    lang: 'german',
    topic: 'grammar',
    tags: ['A1', 'حروف تعریف'],
    author: 'ali-rezaei',
    publishedAt: '2026-10-24',
    featured: true,
    isSample: true,
    cover: { before: '', marked: 'die', after: ' Zeitung', tone: 'navy' },
    body: [
      { type: 'p', text: 'در آلمانی هر اسم یکی از سه جنس مذکر، مؤنث یا خنثی را دارد و حرف تعریفش به همان بستگی دارد: {{de|der}}، {{de|die}} یا {{de|das}}. جنس دستوری ربطی به معنا ندارد؛ {{de|das Mädchen}} یعنی «دختر» و خنثی است.' },
      { type: 'p', text: 'خبر خوب این است که پسوند خیلی از اسم‌ها جنس را مشخص می‌کند. اگر این نشانه‌ها را بشناسی، بخش بزرگی از حدس‌ها درست از آب درمی‌آید.' },
      { type: 'h2', id: 'feminine', text: 'پسوندهایی که تقریباً همیشه die هستند' },
      { type: 'p', text: 'این پسوندها مطمئن‌ترین نشانه‌ها هستند. اسمی که به آن‌ها ختم شود تقریباً بدون استثنا مؤنث است و جمعش هم با {{de|-en}} ساخته می‌شود.' },
      {
        type: 'table',
        head: ['پسوند', 'مثال', 'معنی'],
        rows: [
          ['-ung', 'die Zeitung', 'روزنامه'],
          ['-heit', 'die Freiheit', 'آزادی'],
          ['-keit', 'die Möglichkeit', 'امکان'],
          ['-schaft', 'die Freundschaft', 'دوستی'],
          ['-tion', 'die Information', 'اطلاعات'],
          ['-tät', 'die Universität', 'دانشگاه'],
        ],
        foreignCols: [0, 1],
      },
      { type: 'h2', id: 'neuter', text: 'پسوندهایی که das می‌سازند' },
      { type: 'p', text: 'پسوندهای تصغیر {{de|-chen}} و {{de|-lein}} همیشه اسم را خنثی می‌کنند، حتی اگر اسم اصلی مذکر یا مؤنث باشد.' },
      { type: 'example', text: 'der Tisch → das Tischchen', marked: 'das Tischchen', fa: 'میز ← میز کوچک' },
      { type: 'p', text: 'مصدرهایی که به اسم تبدیل می‌شوند هم خنثی هستند: {{de|das Essen}} (غذا) و {{de|das Lernen}} (یادگیری).' },
      { type: 'h2', id: 'masculine', text: 'گروه‌هایی که بیشتر der هستند' },
      { type: 'list', items: ['روزهای هفته، ماه‌ها و فصل‌ها: {{de|der Montag}}، {{de|der Mai}}، {{de|der Winter}}', 'اسم‌هایی که از فعل ساخته شده و به {{de|-er}} ختم می‌شوند و کننده‌ی کار را نشان می‌دهند: {{de|der Lehrer}}', 'پسوندهای {{de|-ismus}} و {{de|-ling}}: {{de|der Tourismus}}، {{de|der Frühling}}'] },
      { type: 'h2', id: 'how-to-learn', text: 'چطور جنس اسم‌ها را به خاطر بسپاریم' },
      { type: 'p', text: 'هیچ‌وقت اسم را تنها حفظ نکن. در دفتر واژگان یا فلش‌کارت، اسم را همیشه با حرف تعریف و شکل جمعش بنویس: {{de|der Tisch, die Tische}}.' },
      { type: 'tip', text: 'بعضی زبان‌آموزها برای هر جنس یک رنگ انتخاب می‌کنند و کارت‌ها را با همان رنگ می‌نویسند. حافظه‌ی تصویری کمک می‌کند جنس را همراه کلمه به یاد بیاوری.' },
    ],
  },
  {
    slug: 'everyday-english-phrasal-verbs',
    title: '۱۰ فعل عبارتی پرکاربرد انگلیسی',
    excerpt: 'انگلیسی‌زبان‌ها در گفت‌وگوی روزمره بیشتر از فعل‌های عبارتی استفاده می‌کنند تا معادل رسمی‌شان. با این ده فعل شروع کن.',
    lang: 'english',
    topic: 'vocabulary',
    tags: ['B1', 'فعل عبارتی'],
    author: 'sara-mohammadi',
    publishedAt: '2026-10-19',
    isSample: true,
    cover: { before: "Let's ", marked: 'figure it out', after: '', tone: 'tint', image: { src: '/images/scenes/notebook-coffee.jpg', alt: 'دفتر یادداشت، صفحه‌کلید و یک فنجان قهوه روی میز چوبی' } },
    body: [
      { type: 'p', text: 'فعل عبارتی (phrasal verb) از یک فعل و یک یا دو حرف اضافه یا قید ساخته می‌شود و معنایش معمولاً با معنای تک‌تک اجزا فرق دارد. {{en|give up}} یعنی «دست کشیدن»، نه «بالا دادن».' },
      { type: 'h2', id: 'list', text: 'ده فعل پرکاربرد' },
      {
        type: 'table',
        head: ['فعل', 'معنی', 'مثال'],
        rows: [
          ['find out', 'فهمیدن، خبردار شدن', 'I found out yesterday.'],
          ['figure out', 'راه‌حل پیدا کردن', "I can't figure out this form."],
          ['run out of', 'تمام کردن', "We've run out of milk."],
          ['look forward to', 'مشتاق بودن', 'I look forward to it.'],
          ['put off', 'عقب انداختن', "Don't put it off."],
          ['come up with', 'به فکر رسیدن', 'She came up with an idea.'],
          ['get along with', 'کنار آمدن با کسی', 'I get along with my boss.'],
          ['turn down', 'رد کردن', 'He turned down the offer.'],
          ['give up', 'دست کشیدن', 'Never give up.'],
          ['pick up', 'سوار کردن، برداشتن', "I'll pick you up at six."],
        ],
        foreignCols: [0, 2],
      },
      { type: 'h2', id: 'separable', text: 'جداشدنی یا جدانشدنی؟' },
      { type: 'p', text: 'بعضی فعل‌های عبارتی مفعول را وسط خودشان می‌پذیرند و بعضی نه. اگر مفعول ضمیر باشد، در فعل‌های جداشدنی حتماً باید وسط بیاید.' },
      { type: 'example', text: 'Pick it up. (not: Pick up it.)', marked: 'Pick it up.', fa: 'برش دار.' },
      { type: 'h2', id: 'practice', text: 'چطور تمرین کنیم' },
      { type: 'list', ordered: true, items: ['هر روز فقط دو یا سه فعل را انتخاب کن.', 'برای هر کدام یک جمله درباره‌ی زندگی خودت بساز.', 'در کلاس یا کلاب مکالمه، عمداً از همان فعل‌ها استفاده کن.'] },
      { type: 'tip', text: 'فعل عبارتی را همیشه داخل جمله یاد بگیر. معنای {{en|pick up}} در «pick up the phone» و «pick up a language» فرق می‌کند.' },
    ],
  },
  {
    slug: 'french-liaison-rules',
    title: 'لیزون در فرانسوی: کِی وصل کنیم؟',
    excerpt: 'چرا {{fr|les amis}} را «لِزامی» می‌خوانند ولی {{fr|les héros}} را نه؟ قاعده‌های اصلی لیزون، با جاهایی که اجباری و ممنوع است.',
    lang: 'french',
    topic: 'pronunciation',
    tags: ['A2', 'liaison'],
    author: 'maryam-karimi',
    publishedAt: '2026-10-12',
    isSample: true,
    cover: { before: '', marked: 'les‿amis', after: '', tone: 'brand' },
    body: [
      { type: 'p', text: 'در فرانسوی حرف بی‌صدای آخر خیلی از کلمه‌ها خوانده نمی‌شود: {{fr|les}} به‌تنهایی «لِ» است. اما اگر کلمه‌ی بعدی با مصوت شروع شود، آن حرف دوباره جان می‌گیرد و به کلمه‌ی بعد می‌چسبد. به این پیوند {{fr|liaison}} می‌گویند.' },
      { type: 'example', text: 'les amis', marked: 'les amis', fa: 'لِزامی، «دوستان»' },
      { type: 'h2', id: 'mandatory', text: 'جاهایی که لیزون اجباری است' },
      { type: 'list', items: ['بین حرف تعریف یا صفت اشاره و اسم: {{fr|un‿ami}}، {{fr|ces‿enfants}}', 'بین ضمیر و فعل: {{fr|nous‿avons}}، {{fr|ils‿ont}}', 'بعد از حرف اضافه‌ها و قیدهای تک‌هجایی: {{fr|chez‿elle}}، {{fr|très‿intéressant}}'] },
      { type: 'h2', id: 'forbidden', text: 'جاهایی که لیزون ممنوع است' },
      { type: 'list', items: ['بعد از {{fr|et}}: {{fr|un homme et / une femme}}', 'قبل از h آسپیره: {{fr|les / héros}}، {{fr|les / haricots}}', 'بعد از اسم مفرد: {{fr|un étudiant / anglais}}'] },
      { type: 'h2', id: 'sounds', text: 'حرف‌ها در لیزون چه صدایی می‌دهند' },
      {
        type: 'table',
        head: ['حرف', 'صدا', 'مثال'],
        rows: [
          ['s, x', '[z]', 'deux‿heures'],
          ['d', '[t]', 'un grand‿homme'],
          ['n', '[n]', 'mon‿ami'],
        ],
        foreignCols: [0, 1, 2],
      },
      { type: 'tip', text: 'در گفتار محاوره‌ای، لیزون‌های اختیاری کمتر رعایت می‌شوند. اول لیزون‌های اجباری را درست کن؛ همین‌ها هستند که تلفظت را طبیعی نشان می‌دهند.' },
    ],
  },
  {
    slug: 'ielts-writing-task-2-body-paragraph',
    title: 'پاراگراف بدنه در رایتینگ IELTS',
    excerpt: 'بیشتر پاراگراف‌هایی که نمره‌ی پایین می‌گیرند ایده‌ی خوبی دارند ولی آن را گسترش نمی‌دهند. یک ساختار ساده برای نوشتن پاراگرافی که مصحح دنبالش است.',
    lang: 'english',
    topic: 'exams',
    tags: ['IELTS', 'Writing'],
    author: 'fartash-editorial',
    publishedAt: '2026-10-05',
    isSample: true,
    cover: { before: 'Firstly, ', marked: 'remote work', after: ' saves time.', tone: 'navy', image: { src: '/images/scenes/handwriting.jpg', alt: 'دستی که با خودکار در دفتر می‌نویسد' } },
    body: [
      { type: 'p', text: 'در معیار {{en|Task Response}}، مصحح دنبال این است که ایده‌هایت را «گسترش داده و پشتیبانی کرده باشی». یک ادعای کلی بدون توضیح و مثال، حتی اگر درست باشد، نمره‌ی این بخش را پایین نگه می‌دارد.' },
      { type: 'h2', id: 'structure', text: 'ساختار چهارجمله‌ای' },
      { type: 'list', ordered: true, items: ['جمله‌ی موضوع: ایده‌ی اصلی پاراگراف را در یک جمله بگو.', 'توضیح: بگو چرا یا چطور این ایده درست است.', 'مثال: یک نمونه‌ی مشخص بیاور، نه یک جمله‌ی کلی دیگر.', 'نتیجه‌ی پاراگراف: نشان بده این ایده چطور به سؤال جواب می‌دهد.'] },
      { type: 'h2', id: 'sample', text: 'یک پاراگراف نمونه' },
      { type: 'example', text: 'Firstly, remote work saves employees a considerable amount of time. Without a daily commute, staff can spend those hours on rest or training. For instance, a worker who travels an hour each way gains ten hours a week. This extra time can make employees both healthier and more productive.', marked: 'For instance', fa: 'جمله‌ی سوم همان مثال مشخص است: یک عدد و یک موقعیت قابل تصور.' },
      { type: 'h2', id: 'mistakes', text: 'سه خطای رایج' },
      { type: 'list', items: ['آوردن دو یا سه ایده در یک پاراگراف بدون گسترش هیچ‌کدام', 'مثال‌های خیلی کلی مثل {{en|many people think}}', 'نتیجه‌ی پاراگراف که فقط جمله‌ی اول را تکرار می‌کند'] },
      { type: 'tip', text: 'بعد از نوشتن، کنار هر جمله بنویس چه وظیفه‌ای دارد. اگر دو جمله یک کار را می‌کنند، یکی را حذف کن و جایش مثال بگذار.' },
    ],
  },
  {
    slug: 'french-cafe-phrases',
    title: 'سفارش دادن در کافه‌ی فرانسوی',
    excerpt: 'از سلام اول تا گرفتن صورت‌حساب؛ جمله‌هایی که در کافه و نانوایی واقعاً به کار می‌آیند، با نکته‌های فرهنگی کوچک.',
    lang: 'french',
    topic: 'conversation',
    tags: ['A1', 'سفر'],
    author: 'fartash-editorial',
    publishedAt: '2026-09-28',
    isSample: true,
    cover: { before: "L'addition, ", marked: "s'il vous plaît", after: '', tone: 'tint' },
    body: [
      { type: 'p', text: 'در فرانسه، شروع گفت‌وگو بدون {{fr|Bonjour}} بی‌ادبی حساب می‌شود؛ حتی اگر فقط یک قهوه بخواهی. اول سلام کن، بعد سفارش بده.' },
      { type: 'h2', id: 'phrases', text: 'جمله‌ها' },
      {
        type: 'table',
        head: ['جمله', 'معنی'],
        rows: [
          ['Bonjour, monsieur / madame.', 'سلام آقا / خانم.'],
          ["Je voudrais un café, s'il vous plaît.", 'یک قهوه می‌خواستم، لطفاً.'],
          ['Je vais prendre un croissant.', 'یک کروسان برمی‌دارم.'],
          ['Sur place ou à emporter ?', 'این‌جا میل می‌کنید یا می‌برید؟'],
          ['Vous avez du lait d’avoine ?', 'شیر جو دوسر دارید؟'],
          ["C'est combien ?", 'چقدر می‌شود؟'],
          ["L'addition, s'il vous plaît.", 'صورت‌حساب، لطفاً.'],
        ],
        foreignCols: [0],
      },
      { type: 'h2', id: 'politeness', text: 'چرا «je voudrais» و نه «je veux»' },
      { type: 'p', text: '{{fr|Je veux}} یعنی «می‌خواهم» و در سفارش دادن تند به نظر می‌رسد. {{fr|Je voudrais}} شکل شرطی همان فعل است و مؤدبانه‌تر است، مثل «می‌خواستم» در فارسی.' },
      { type: 'tip', text: '{{fr|Un café}} در فرانسه یعنی اسپرسو. اگر قهوه با شیر می‌خواهی، {{fr|un café crème}} سفارش بده.' },
    ],
  },
  {
    slug: 'german-daily-listening-routine',
    title: 'شنیدن آلمانی در ۲۰ دقیقه',
    excerpt: 'گوش دادن زیاد کافی نیست؛ گوش دادن فعال است که شنیدن را تقویت می‌کند. یک روال روزانه در چهار مرحله‌ی پنج دقیقه‌ای.',
    lang: 'german',
    topic: 'skills',
    tags: ['Hören', 'A2 تا B1'],
    author: 'fartash-editorial',
    publishedAt: '2026-09-20',
    isSample: true,
    cover: { before: 'Ich ', marked: 'verstehe', after: ' schon mehr.', tone: 'brand', image: { src: '/images/scenes/desk-laptop.jpg', alt: 'میز کار با لپ‌تاپ و نمایشگر کنار پنجره' } },
    body: [
      { type: 'p', text: 'برای این روال یک فایل صوتی کوتاه یک تا دو دقیقه‌ای با متن کامل لازم داری. خبرهای آهسته‌خوانده‌شده‌ی Deutsche Welle ({{de|Langsam gesprochene Nachrichten}}) برای سطح A2 تا B1 مناسب‌اند.' },
      { type: 'h2', id: 'steps', text: 'چهار مرحله' },
      { type: 'h3', id: 'step-1', text: 'گوش دادن بدون متن' },
      { type: 'p', text: 'فایل را دو بار بدون متن گوش کن و فقط بنویس موضوع چیست و چه کلمه‌هایی را شنیدی.' },
      { type: 'h3', id: 'step-2', text: 'گوش دادن با متن' },
      { type: 'p', text: 'حالا با متن گوش کن و جاهایی را که نفهمیده بودی علامت بزن. معمولاً کلمه‌ها را می‌شناسی، فقط به هم چسبیده تلفظ شده‌اند.' },
      { type: 'h3', id: 'step-3', text: 'سایه‌خوانی' },
      { type: 'p', text: 'جمله‌به‌جمله پخش کن و هم‌زمان با گوینده بلند تکرار کن. این کار گوش و دهان را با هم تمرین می‌دهد.' },
      { type: 'h3', id: 'step-4', text: 'یادداشت واژه‌ها' },
      { type: 'p', text: 'سه تا پنج کلمه‌ی تازه را با حرف تعریف و یک جمله از همان متن در دفترت بنویس.' },
      { type: 'tip', text: 'هر فایل را سه روز پشت سر هم تکرار کن و بعد سراغ فایل بعدی برو. تکرار همان متن، سریع‌تر از متن‌های تازه نتیجه می‌دهد.' },
    ],
  },
  {
    slug: 'english-th-sound',
    title: 'صدای th: فرق think و sink',
    excerpt: 'فارسی‌زبان‌ها th را معمولاً «ت»، «س» یا «ز» تلفظ می‌کنند. دو صدای th چطور ساخته می‌شوند و با چه جفت‌کلمه‌هایی تمرین کنیم.',
    lang: 'english',
    topic: 'pronunciation',
    tags: ['A2', 'تلفظ'],
    author: 'sara-mohammadi',
    publishedAt: '2026-09-14',
    isSample: true,
    cover: { before: 'I ', marked: 'think', after: ' so.', tone: 'navy' },
    body: [
      { type: 'p', text: 'حرف‌های th در انگلیسی دو صدای متفاوت دارند: صدای بی‌واک در {{en|think}} و صدای واک‌دار در {{en|this}}. هیچ‌کدام در فارسی معیار وجود ندارد.' },
      { type: 'h2', id: 'how', text: 'دهان کجا باشد' },
      { type: 'p', text: 'نوک زبان را آرام بین دندان‌های بالا و پایین بگذار و هوا را از روی زبان بیرون بده. برای {{en|think}} تارهای صوتی نمی‌لرزند؛ برای {{en|this}} می‌لرزند. دستت را روی گلو بگذار تا لرزش را حس کنی.' },
      { type: 'h2', id: 'pairs', text: 'جفت‌کلمه‌ها برای تمرین' },
      {
        type: 'table',
        head: ['با th', 'بدون th'],
        rows: [
          ['think', 'sink'],
          ['thank', 'tank'],
          ['three', 'tree'],
          ['they', 'day'],
          ['breathe', 'breeze'],
        ],
        foreignCols: [0, 1],
      },
      { type: 'tip', text: 'جلوی آینه تمرین کن: اگر نوک زبانت را نمی‌بینی، احتمالاً داری «س» یا «ت» می‌گویی.' },
    ],
  },
];

/* ---------- Helpers ---------- */

const words = (s: string) => s.replace(/\{\{\w+\|([^}]+)\}\}/g, '$1').split(/\s+/).filter(Boolean).length;

/** Estimated reading time in minutes (≈180 words a minute for mixed Persian text). */
export function readingMinutes(a: Article) {
  const total = a.body.reduce((n, b) => {
    if (b.type === 'list') return n + b.items.reduce((m, i) => m + words(i), 0);
    if (b.type === 'table') return n + b.rows.flat().reduce((m, c) => m + words(c), 0);
    if (b.type === 'example') return n + words(b.text) + words(b.fa);
    return n + words(b.text);
  }, words(a.excerpt));
  return Math.max(2, Math.round(total / 180));
}

export function headings(a: Article) {
  return a.body.filter((b): b is Extract<Block, { type: 'h2' | 'h3' }> => b.type === 'h2' || b.type === 'h3');
}

const byDate = (x: Article, y: Article) => y.publishedAt.localeCompare(x.publishedAt);

export function getArticles(filter: { lang?: string; topic?: string; author?: string; q?: string; tag?: string } = {}) {
  const q = filter.q?.trim().toLowerCase();
  return articles
    .filter((a) => !filter.lang || a.lang === filter.lang)
    .filter((a) => !filter.topic || a.topic === filter.topic)
    .filter((a) => !filter.author || a.author === filter.author)
    .filter((a) => !filter.tag || a.tags.includes(filter.tag))
    .filter((a) => !q || [a.title, a.excerpt, ...a.tags].join(' ').toLowerCase().includes(q))
    .sort(byDate);
}

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
export const featuredArticle = () => articles.find((a) => a.featured) ?? [...articles].sort(byDate)[0];

/** Same language and topic first, then same language, then same topic. */
export function relatedArticles(a: Article, n = 3) {
  const score = (b: Article) => (b.lang === a.lang ? 2 : 0) + (b.topic === a.topic ? 1 : 0) + b.tags.filter((t) => a.tags.includes(t)).length * 0.5;
  return articles
    .filter((b) => b.slug !== a.slug)
    .map((b) => ({ b, s: score(b) }))
    .filter(({ s }) => s > 0)
    .sort((x, y) => y.s - x.s || byDate(x.b, y.b))
    .slice(0, n)
    .map(({ b }) => b);
}

export const formatDate = (iso: string) => new Intl.DateTimeFormat('fa-IR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));

export const articleHref = (a: Pick<Article, 'slug'>) => `/magazine/articles/${a.slug}`;
export const langHref = (slug: string) => `/magazine/${slug}`;
export const languageLabel = (slug: LanguageSlug) => getLanguage(slug)!;
