/* ============================================================
   PERIODIC TABLE MASTERY ACADEMY (آکادمی فتح جدول تناوبی)
   Conversational location-first interactive learning engine.
   Focus: Memorizing the exact positions, rows, and columns of all 118 elements.
   Powered by:
   - Live Animated Blobatar characters (https://blobatar.dev/)
   - ReactBits text effects (https://reactbits.dev/)
   - VibeFarsi interactive UI components (https://vibefarsi.ir/)
   ============================================================ */

(function() {
    'use strict';

    // Mentors definition with live interactive quotes and personality
    const MENTORS = {
        mendeleev: {
            id: 'mendeleev',
            name: 'پروفسور مندلیف',
            seed: 'Mendeleev',
            role: 'پدر جدول تناوبی 🧪',
            color: '#06b6d4',
            accentBg: 'rgba(6, 182, 212, 0.15)',
            accentBorder: '#06b6d4',
            quote: 'جایگاه هر عنصر در سطر و ستون، شناسنامه ابدی اونه!',
            quotes: [
                'جایگاه هر عنصر در سطر و ستون، شناسنامه ابدی اونه!',
                'من جدول را در خواب دیدم — تو آن را در ذهن ثبت کن!',
                'سطر یعنی طبقه، ستون یعنی خانواده؛ همین و بس!'
            ]
        },
        curie: {
            id: 'curie',
            name: 'ماری کوری',
            seed: 'MarieCurie',
            role: 'کاشف پرتوها و نوبلیست 🌟',
            color: '#a855f7',
            accentBg: 'rgba(168, 85, 247, 0.15)',
            accentBorder: '#a855f7',
            quote: 'سنگین‌ترین عناصر جدول در پایین‌ترین سطرها منتظر کشف تو هستن!',
            quotes: [
                'سنگین‌ترین عناصر جدول در پایین‌ترین سطرها منتظر کشف تو هستن!',
                'دو جایزه نوبل گرفتم چون از تاریکی نترسیدم — ردیف پایین جدول هم تاریک است، بدرخش!',
                'رادیوم در تاریکی می‌درخشید؛ حافظه تو هم با تکرار می‌درخشد.'
            ]
        },
        bohr: {
            id: 'bohr',
            name: 'نیلز بور',
            seed: 'NielsBohr',
            role: 'معمار لایه‌های کوانتومی ⚛️',
            color: '#10b981',
            accentBg: 'rgba(16, 185, 129, 0.15)',
            accentBorder: '#10b981',
            quote: 'تعداد لایه‌های الکترونی اتم، دقیقاً شماره سطر جدول رو می‌سازه!',
            quotes: [
                'تعداد لایه‌های الکترونی اتم، دقیقاً شماره سطر جدول رو می‌سازه!',
                'هر سطر جدول یک لایه الکترونی است — از هسته بشمار!',
                'اتم‌ها مثل پیاز لایه‌لایه‌اند؛ جدول هم همین‌طور.'
            ]
        },
        neon: {
            id: 'neon',
            name: 'نئون بازیگوش',
            seed: 'NeonSpark',
            role: 'سفیر گازهای نجیب ⚡',
            color: '#f59e0b',
            accentBg: 'rgba(245, 158, 11, 0.15)',
            accentBorder: '#f59e0b',
            quote: 'ستون آخر سمت راست مال ماست، امن و واکنش‌ناپذیر!',
            quotes: [
                'ستون آخر سمت راست مال ماست، امن و واکنش‌ناپذیر!',
                'ما گازهای نجیب با هیچ‌کس قاطی نمی‌شویم — جز با حافظه تو!',
                'ستون ۱۸، خانه آخر سمت راست؛ امن‌ترین آدرس جدول!'
            ]
        }
    };

    // 12 Location-First Mastery Chapters
    const ACADEMY_LESSONS = [
        {
            id: 'al-1',
            unit: 1,
            unitTitle: 'فصل ۱: دو گوشه بالای جدول (هیدروژن و هلیم)',
            unitDesc: 'یادگیری مکان هیدروژن در (۱،۱) و هلیم در (۱،۱۸)',
            unitColor: '#06b6d4',
            title: 'دو گوشه آسمان جدول',
            mentor: MENTORS.mendeleev,
            xp: 30,
            highlightCols: [1, 18],
            highlightRows: [1],
            targetCoords: [[1, 1], [1, 18]],
            steps: [
                {
                    type: 'dialogue',
                    text: 'سلام دانشمند من! هدف این آکادمی اینه که چشم‌بسته جای تک‌تک ۱۱۸ عنصر جدول تناوبی رو حفظ بشی! ویژگی‌ها مهم نیستن، جایگاه مکانی اصل کاره. اولین گام: دو گوشه بالای جدول!',
                    buttonText: 'دو گوشه بالا کجان؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'به نقشه رادار بالا نگاه کن! سطر اول فقط دو خانه در دو سر جدول داره: هیدروژن (H) در گوشه چپ بالا یعنی سطر ۱ و ستون ۱، و هلیم (He) در گوشه راست بالا یعنی سطر ۱ و ستون ۱۸!',
                    buttonText: 'برو بریم سراغ چالش جایابی! →'
                },
                {
                    type: 'quiz',
                    question: 'عنصر هیدروژن (H - عدد اتمی ۱) دقیقاً در کدام مختصات از جدول تناوبی نشسته است؟',
                    options: [
                        'سطر ۱، ستون ۱ (گوشه چپ بالا)',
                        'سطر ۱، ستون ۱۸ (گوشه راست بالا)',
                        'سطر ۴، ستون ۸ (وسط جدول)'
                    ],
                    correct: 0,
                    explanation: 'آفرین! هیدروژن نخستین عنصر جدول است و در بالاترین خانه سمت چپ (سطر ۱، ستون ۱) جا خوش کرده.'
                },
                {
                    type: 'quiz',
                    question: 'عنصر هلیم (He - عدد اتمی ۲) در کدام موقعیت قرار دارد؟',
                    options: [
                        'سطر ۱، ستون ۱۸ (بالاترین خانه سمت راست)',
                        'سطر ۲، ستون ۱ (زیر هیدروژن)',
                        'سطر ۷، ستون ۱'
                    ],
                    correct: 0,
                    explanation: 'دقیقاً درسته! هلیم در ستون آخر (گازهای نجیب) و در انتهای سطر اول نشسته است.'
                }
            ]
        },
        {
            id: 'al-2',
            unit: 1,
            unitTitle: 'فصل ۲: ستون اول؛ شاهراه فلزات قلیایی',
            unitDesc: 'حفظ ستون ۱ از بالا به پایین: H, Li, Na, K, Rb, Cs, Fr',
            unitColor: '#06b6d4',
            title: 'ستون ۱: شاهراه غربی جدول',
            mentor: MENTORS.mendeleev,
            xp: 35,
            highlightCols: [1],
            highlightRows: [1, 2, 3, 4, 5, 6, 7],
            targetCoords: [[1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1]],
            steps: [
                {
                    type: 'dialogue',
                    text: 'حالا ستون اول سمت چپ رو از بالا تا پایین مثل کف دست حفظ می‌کنیم! این ستون شامل ۷ عنصره: H (هیدروژن)، Li (لیتیم)، Na (سدیم)، K (پتاسیم)، Rb (روبیدیم)، Cs (سزیم)، Fr (فرانسیم).',
                    buttonText: 'چطور ترتیبشون یادم بمونه؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'برای حفظش این رمز ماندگار رو با ریتم تکرار کن: «هلینا کرباسی فر»! (H=هـ، Li=لی، Na=نا، K=ک، Rb=رب، Cs=سی، Fr=فر). سدیم در سطر ۳ و پتاسیم در سطر ۴ قرار داره!',
                    buttonText: 'تست جایگاه ستون ۱! →'
                },
                {
                    type: 'quiz',
                    question: 'عنصر سدیم (Na) در کدام سطر از ستون اول جدول قرار گرفته است؟',
                    options: [
                        'سطر سوم (دوره ۳)',
                        'سطر اول (دوره ۱)',
                        'سطر پنجم (دوره ۵)'
                    ],
                    correct: 0,
                    explanation: 'احسنت! در ستون اول، هیدروژن در سطر ۱، لیتیم در سطر ۲ و سدیم در سطر ۳ قرار دارد.'
                },
                {
                    type: 'quiz',
                    question: 'کدام عنصر در ستون اول، در سطر چهارم و دقیقاً زیر سدیم قرار دارد؟',
                    options: [
                        'پتاسیم (K)',
                        'روبیدیم (Rb)',
                        'کلسیم (Ca)'
                    ],
                    correct: 0,
                    explanation: 'عالی بود! پتاسیم (K) با عدد اتمی ۱۹ در سطر چهارم، ستون اول قرار گرفته است.'
                }
            ]
        },
        {
            id: 'al-3',
            unit: 1,
            unitTitle: 'فصل ۳: ستون دوم؛ فلزات قلیایی خاکی',
            unitDesc: 'حفظ ستون ۲ از بالا به پایین: Be, Mg, Ca, Sr, Ba, Ra',
            unitColor: '#a855f7',
            title: 'ستون ۲: ستون دوم از چپ',
            mentor: MENTORS.curie,
            xp: 35,
            highlightCols: [2],
            highlightRows: [2, 3, 4, 5, 6, 7],
            targetCoords: [[2,2], [3,2], [4,2], [5,2], [6,2], [7,2]],
            steps: [
                {
                    type: 'dialogue',
                    text: 'درود قهرمان من! ستون دوم جدول تناوبی دقیقاً چسبیده به ستون اوله. اما دقت کن: سطر اولش خالیه و از سطر ۲ شروع می‌شه: Be (بریلیم)، Mg (منیزیم)، Ca (کلسیم)، Sr (استرانسیم)، Ba (باریم)، Ra (رادیوم)!',
                    buttonText: 'نکته مکانی کلسیم و منیزیم چیه؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'منیزیم در سطر ۳، کلسیم استخوان‌ها در سطر ۴ و رادیوم پرتوزا که من کشف کردم در پایین‌ترین خانه (سطر ۷) قرار داره!',
                    buttonText: 'بریم سراغ سوال‌ها! →'
                },
                {
                    type: 'quiz',
                    question: 'کلسیم (Ca - عنصر شماره ۲۰) در چه موقعیتی از جدول نشسته است؟',
                    options: [
                        'سطر ۴، ستون ۲',
                        'سطر ۳، ستون ۱',
                        'سطر ۲، ستون ۱۸'
                    ],
                    correct: 0,
                    explanation: 'فوق‌العاده است! کلسیم دقیقاً در سطر چهارم و ستون دوم جدول جای گرفته است.'
                },
                {
                    type: 'quiz',
                    question: 'کدام عنصر در ستون دوم، در سطر سوم (کنار سدیم) قرار دارد؟',
                    options: [
                        'منیزیم (Mg)',
                        'بریلیم (Be)',
                        'باریم (Ba)'
                    ],
                    correct: 0,
                    explanation: 'صحیح! منیزیم در سطر ۳ ستون ۲، درست همسایه سمت راست سدیم در ستون ۱ است.'
                }
            ]
        },
        {
            id: 'al-4',
            unit: 2,
            unitTitle: 'فصل ۴: ستون ۱۸؛ برج نهایی گازهای نجیب',
            unitDesc: 'حفظ ستون آخر سمت راست: He, Ne, Ar, Kr, Xe, Rn, Og',
            unitColor: '#f59e0b',
            title: 'ستون ۱۸: قلعه شرقی جدول',
            mentor: MENTORS.neon,
            xp: 40,
            highlightCols: [18],
            highlightRows: [1, 2, 3, 4, 5, 6, 7],
            targetCoords: [[1,18], [2,18], [3,18], [4,18], [5,18], [6,18], [7,18]],
            steps: [
                {
                    type: 'dialogue',
                    text: 'هی رفیق! من نئونم و این ستون قلمرو پادشاهی ماست! آخرین ستون سمت راست جدول (ستون ۱۸): He (هلیم)، Ne (نئون)، Ar (آرگون)، Kr (کریپتون)، Xe (زنون)، Rn (رادون)، Og (اوگانسون ۱۱۸)!',
                    buttonText: 'این ستون چه کمکی به حفظ کل جدول می‌کنه؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'ستون ۱۸ کلید طلایی پیدا کردن سطرهاست! چون هر سطری در جدول با یکی از ما تموم می‌شه. مثلاً سطر ۲ با من (نئون ۱۰) و سطر ۳ با آرگون ۱۸ بسته می‌شه!',
                    buttonText: 'چالش گازهای نجیب رو بزنیم! →'
                },
                {
                    type: 'quiz',
                    question: 'عنصر نئون (Ne) در انتهای کدام سطر از جدول تناوبی قرار گرفته است؟',
                    options: [
                        'انتهای سطر ۲ (ستون ۱۸)',
                        'انتهای سطر ۱',
                        'انتهای سطر ۴'
                    ],
                    correct: 0,
                    explanation: 'ایول! نئون با عدد اتمی ۱۰، انتهای سطر دوم جدول را مهر و موم می‌کند.'
                },
                {
                    type: 'quiz',
                    question: 'آخرین خانه کل جدول تناوبی یعنی عنصر ۱۱۸ (اوگانسون Og) کجاست؟',
                    options: [
                        'گوشه پایین سمت راست (سطر ۷، ستون ۱۸)',
                        'گوشه چپ بالا',
                        'وسط ستون‌های فلزات واسطه'
                    ],
                    correct: 0,
                    explanation: 'احسنت! اوگانسون آخرین خانه کشف‌شده جدول در گوشه راست و پایین است.'
                }
            ]
        },
        {
            id: 'al-5',
            unit: 2,
            unitTitle: 'فصل ۵: ستون ۱۷؛ هالوژن‌ها',
            unitDesc: 'حفظ ستون ۱۷: F, Cl, Br, I, At, Ts',
            unitColor: '#10b981',
            title: 'ستون ۱۷: همسایه گازهای نجیب',
            mentor: MENTORS.bohr,
            xp: 40,
            highlightCols: [17],
            highlightRows: [2, 3, 4, 5, 6, 7],
            targetCoords: [[2,17], [3,17], [4,17], [5,17], [6,17], [7,17]],
            steps: [
                {
                    type: 'dialogue',
                    text: 'سلام! یک قدم قبل از گازهای نجیب، ستون ۱۷ قرار داره؛ معروف به هالوژن‌ها. این ستون هم از سطر ۲ شروع می‌شه: F (فلوئور)، Cl (کلر)، Br (برم)، I (ید)، At (استاتین)، Ts (تنسین).',
                    buttonText: 'نکته مکانی مهم هالوژن‌ها چیه؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'فلوئور چسبیده به نئونه، کلر (ماده ضدعفونی) چسبیده به آرگونه در سطر ۳، و برم تنها نافلز مایع در سطر ۴ جا گرفته!',
                    buttonText: 'آماده سنجش مکان هالوژن‌ها! →'
                },
                {
                    type: 'quiz',
                    question: 'عنصر کلر (Cl) در کدام سطر و ستون از جدول قرار دارد؟',
                    options: [
                        'سطر ۳، ستون ۱۷',
                        'سطر ۲، ستون ۱۶',
                        'سطر ۱، ستون ۱'
                    ],
                    correct: 0,
                    explanation: 'دقیقاً درسته! کلر با عدد اتمی ۱۷ در سطر سوم، ستون ۱۷ قرار دارد.'
                },
                {
                    type: 'quiz',
                    question: 'کدام هالوژن مایع در سطر چهارم (دوره ۴) ستون ۱۷ قرار گرفته است؟',
                    options: [
                        'برم (Br)',
                        'فلوئور (F)',
                        'ید (I)'
                    ],
                    correct: 0,
                    explanation: 'باریکلا! برم (Br ۳۵) در سطر چهارم ستون ۱۷ قرار دارد.'
                }
            ]
        },
        {
            id: 'al-6',
            unit: 2,
            unitTitle: 'فصل ۶: سطر دوم (دوره ۲)؛ پیاده‌روی ۸ عنصری',
            unitDesc: 'حفظ سطر ۲ از چپ به راست: Li, Be ... B, C, N, O, F, Ne',
            unitColor: '#06b6d4',
            title: 'پیاده‌روی روی سطر ۲',
            mentor: MENTORS.mendeleev,
            xp: 40,
            highlightRows: [2],
            highlightCols: [1, 2, 13, 14, 15, 16, 17, 18],
            targetCoords: [[2,1],[2,2],[2,13],[2,14],[2,15],[2,16],[2,17],[2,18]],
            steps: [
                {
                    type: 'dialogue',
                    text: 'حالا وقتشه افقی فکر کنیم! سطر دوم جدول رو از چپ به راست قدم می‌زنیم: با Li (۳) و Be (۴) شروع می‌شه، یک فاصله خالی ۱۰ خانه‌ای رو می‌پره، و می‌رسه به ۶ خانه راست: B(۵), C(۶), N(۷), O(۸), F(۹), Ne(۱۰)!',
                    buttonText: 'کربن و اکسیژن کجان؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'همیشه یادت باشه: کربن (C) در ستون ۱۴ نشسته، نیتروژن (N) در ستون ۱۵ و اکسیژن حیاتی (O) در ستون ۱۶ جا گرفته!',
                    buttonText: 'بریم سراغ تست سطر دوم! →'
                },
                {
                    type: 'quiz',
                    question: 'عنصر کربن (C - عنصر شماره ۶) در سطر دوم، در کدام ستون قرار دارد؟',
                    options: [
                        'ستون ۱۴',
                        'ستون ۱',
                        'ستون ۱۸'
                    ],
                    correct: 0,
                    explanation: 'احسنت! کربن ستون‌فقرات شیمی آلی در سطر ۲، ستون ۱۴ جای دارد.'
                },
                {
                    type: 'quiz',
                    question: 'عنصر اکسیژن (O) در سطر دوم، بین کدام دو عنصر قرار گرفته است؟',
                    options: [
                        'بین نیتروژن (ستون ۱۵) و فلوئور (ستون ۱۷)',
                        'بین لیتیم و بریلیم',
                        'بین هیدروژن و هلیم'
                    ],
                    correct: 0,
                    explanation: 'عالی! اکسیژن در ستون ۱۶ دقیقاً بین نیتروژن (۱۵) و فلوئور (۱۷) است.'
                }
            ]
        },
        {
            id: 'al-7',
            unit: 3,
            unitTitle: 'فصل ۷: سطر سوم (دوره ۳)؛ همسایگان طبقه پایین',
            unitDesc: 'حفظ سطر ۳ از چپ به راست: Na, Mg ... Al, Si, P, S, Cl, Ar',
            unitColor: '#10b981',
            title: 'سطر ۳: طبقه سوم جدول',
            mentor: MENTORS.bohr,
            xp: 45,
            highlightRows: [3],
            highlightCols: [1, 2, 13, 14, 15, 16, 17, 18],
            targetCoords: [[3,1],[3,2],[3,13],[3,14],[3,15],[3,16],[3,17],[3,18]],
            steps: [
                {
                    type: 'dialogue',
                    text: 'به طبقه سوم خوش اومدی! سطر سوم هم ۸ عنصره: از چپ Na (۱۱) و Mg (۱۲)، و در راست Al (۱۳)، Si (۱۴)، P (۱۵)، S (۱۶)، Cl (۱۷) و Ar (۱۸).',
                    buttonText: 'چطور اینا رو با سطر بالا جفت کنیم؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'تطبیق عمودی فوق‌العاده است: سیلیسیم (Si) زیر کربنه! فسفر (P) زیر نیتروژنه! گوگرد (S) زیر اکسیژنه! و آلومینیوم (Al) زیر بوره!',
                    buttonText: 'چالش تطبیق سطر ۳! →'
                },
                {
                    type: 'quiz',
                    question: 'عنصر سیلیسیم (Si - تراشه‌های الکترونیکی) دقیقاً زیر کدام عنصر سطر دوم نشسته است؟',
                    options: [
                        'کربن (C) در ستون ۱۴',
                        'اکسیژن (O)',
                        'سدیم (Na)'
                    ],
                    correct: 0,
                    explanation: 'صحیح! سیلیسیم در سطر ۳ و ستون ۱۴، دقیقاً زیر دست کربن قرار دارد.'
                },
                {
                    type: 'quiz',
                    question: 'گوگرد (S) در سطر سوم، زیر کدام عنصر قرار دارد؟',
                    options: [
                        'اکسیژن (O) در ستون ۱۶',
                        'فلوئور (F)',
                        'منیزیم (Mg)'
                    ],
                    correct: 0,
                    explanation: 'آفرین! گوگرد با عدد اتمی ۱۶ دقیقاً زیر اکسیژن در ستون ۱۶ جا گرفته.'
                }
            ]
        },
        {
            id: 'al-8',
            unit: 3,
            unitTitle: 'فصل ۸: پل فلزات واسطه؛ سطر چهارم',
            unitDesc: 'پر شدن وسط جدول از ستون ۳ تا ۱۲: Sc تا Zn و جایگاه آهن Fe',
            unitColor: '#a855f7',
            title: 'دوره ۴: پل بزرگ فلزات واسطه',
            mentor: MENTORS.curie,
            xp: 50,
            highlightRows: [4],
            highlightCols: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            targetCoords: [[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12]],
            steps: [
                {
                    type: 'dialogue',
                    text: 'در سطر چهارم اتفاق شگفت‌انگیزی می‌افته: شکاف خالی وسط جدول برای اولین بار پر می‌شه! ۱۰ ستون فلزات واسطه (ستون‌های ۳ تا ۱۲) از اسکاندیم (Sc ۲۱) تا روی (Zn ۳۰) ظاهر می‌شن.',
                    buttonText: 'آهن و مس در کجای این پل هستن؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'فلز سازه‌های بشری یعنی آهن (Fe) در ستون ۸ نشسته! مس (Cu) در ستون ۱۱ و روی (Zn) در ستون ۱۲، پایان‌بخش این پل ۱۰ تایی هستن.',
                    buttonText: 'آماده سنجش مکان آهن و مس! →'
                },
                {
                    type: 'quiz',
                    question: 'فلز آهن (Fe ۲۶) در سطر چهارم در کدام ستون از جدول تناوبی قرار دارد؟',
                    options: [
                        'ستون ۸',
                        'ستون ۱',
                        'ستون ۱۸'
                    ],
                    correct: 0,
                    explanation: 'احسنت! آهن در میانه پل فلزات واسطه، در سطر ۴ و ستون ۸ قرار دارد.'
                },
                {
                    type: 'quiz',
                    question: 'عنصر مس (Cu ۲۹) در کدام ستون از سطر چهارم جای گرفته است؟',
                    options: [
                        'ستون ۱۱',
                        'ستون ۲',
                        'ستون ۷'
                    ],
                    correct: 0,
                    explanation: 'عالی! مس در ستون ۱۱ قرار دارد که ستون طلا و نقره هم هست.'
                }
            ]
        },
        {
            id: 'al-9',
            unit: 3,
            unitTitle: 'فصل ۹: ستون‌های طلا، نقره، مس و جیوه',
            unitDesc: 'ستون‌های ۱۱ و ۱۲: مس، نقره، طلا و جیوه مایع',
            unitColor: '#06b6d4',
            title: 'ستون طلا و فلزات گرانبها',
            mentor: MENTORS.mendeleev,
            xp: 50,
            highlightCols: [10, 11, 12],
            highlightRows: [4, 5, 6],
            targetCoords: [[4,11], [5,11], [6,11], [4,12], [5,12], [6,12]],
            steps: [
                {
                    type: 'dialogue',
                    text: 'ستون ۱۱ جدول معروفه به ستون سکه‌ها و فلزات گرانبها! سه عنصر طلایی پشت سر هم زیر هم چیده شدن: مس (Cu - سطر ۴)، نقره (Ag - سطر ۵)، و طلا (Au - سطر ۶)!',
                    buttonText: 'جیوه و پلاتین کجان؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'در ستون بغلی یعنی ستون ۱۲: روی (Zn)، کادمیم (Cd) و در سطر ۶، تنها فلز مایع جهان یعنی جیوه (Hg) نشسته! پلاتین (Pt) هم در سطر ۶ ستون ۱۰ همسایه طلاست!',
                    buttonText: 'تست جایگاه طلا و جیوه! →'
                },
                {
                    type: 'quiz',
                    question: 'عنصر گرانبهای طلا (Au ۷۹) دقیقاً در چه مختصاتی از جدول قرار دارد؟',
                    options: [
                        'سطر ۶، ستون ۱۱ (دقیقاً زیر نقره)',
                        'سطر ۴، ستون ۱',
                        'سطر ۲، ستون ۱۷'
                    ],
                    correct: 0,
                    explanation: 'فوق‌العاده! طلا در سطر ششم و در ستون ۱۱ زیر نقره نشسته است.'
                },
                {
                    type: 'quiz',
                    question: 'تنها فلز مایع جهان، جیوه (Hg ۸۰) در کدام سطر و ستون قرار دارد؟',
                    options: [
                        'سطر ۶، ستون ۱۲ (همسایه راست طلا)',
                        'سطر ۱، ستون ۱۸',
                        'سطر ۳، ستون ۲'
                    ],
                    correct: 0,
                    explanation: 'احسنت! جیوه در سطر ششم و ستون دوازدهم قرار گرفته است.'
                }
            ]
        },
        {
            id: 'al-10',
            unit: 4,
            unitTitle: 'فصل ۱۰: خط پلکانی شبه‌فلزات',
            unitDesc: 'مرز مورب جداکننده فلزات از نافلزات: B, Si, Ge, As, Sb, Te',
            unitColor: '#10b981',
            title: 'خط مرزی شبه‌فلزات',
            mentor: MENTORS.bohr,
            xp: 50,
            highlightCols: [13, 14, 15, 16],
            highlightRows: [2, 3, 4, 5, 6],
            targetCoords: [[2,13], [3,14], [4,14], [4,15], [5,15], [5,16]],
            steps: [
                {
                    type: 'dialogue',
                    text: 'در سمت راست جدول یک پله مورب جالب وجود داره که مرز بین فلزات در سمت چپ و نافلزات در سمت راسته! به این عناصر می‌گیم شبه‌فلزات.',
                    buttonText: 'این پله‌ها از کجا تا کجا می‌رن؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'از بور (B - سطر ۲، ستون ۱۳) شروع می‌شه، به سیلیسیم (Si - سطر ۳، ستون ۱۴) و ژرمانیوم (Ge - سطر ۴، ستون ۱۴)، سپس آرسنیک (As) و آنتیموان (Sb) می‌رسه!',
                    buttonText: 'چالش خط مرزی! →'
                },
                {
                    type: 'quiz',
                    question: 'اولین عنصر پلکانی شبه‌فلزات در سطر ۲، ستون ۱۳ چیست؟',
                    options: [
                        'بور (B)',
                        'کربن (C)',
                        'آلومینیوم (Al)'
                    ],
                    correct: 0,
                    explanation: 'دقیقاً! بور اولین پله از نردبان شبه‌فلزات جدول تناوبی است.'
                },
                {
                    type: 'quiz',
                    question: 'عنصر ژرمانیوم (Ge) در سطر چهارم، زیر کدام عنصر در ستون ۱۴ نشسته است؟',
                    options: [
                        'سیلیسیم (Si)',
                        'گوگرد (S)',
                        'آهن (Fe)'
                    ],
                    correct: 0,
                    explanation: 'آفرین! ژرمانیوم در سطر ۴ ستون ۱۴، درست زیر سیلیسیم قرار دارد.'
                }
            ]
        },
        {
            id: 'al-11',
            unit: 4,
            unitTitle: 'فصل ۱۱: دو ردیف جزیره‌ای پایین (لانتانیدها و اکتینیدها)',
            unitDesc: 'شناخت ردیف‌های ۵۷-۷۱ و ۸۹-۱۰۳ (جایگاه اورانیوم ۹۲)',
            unitColor: '#a855f7',
            title: 'جزیره جنوبی جدول تناوبی',
            mentor: MENTORS.curie,
            xp: 55,
            highlightRows: [6, 7],
            highlightCols: [3],
            targetCoords: [[6,3], [7,3]],
            steps: [
                {
                    type: 'dialogue',
                    text: 'شاید پرسیده باشی اون دو ردیف ۱۴ تایی که پایین جدول جدا افتادن کجان؟ اونا در واقع متعلق به سطرهای ۶ و ۷ هستند که برای جا شدن در صفحه به پایین منتقل شدن!',
                    buttonText: 'اورانیوم در کدوم ردیفه؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'ردیف بالا لانتانیدها (دوره ۶) و ردیف پایین اکتینیدها (دوره ۷) هستن. عنصر پرتوزا و استراتژیک اورانیوم (U با عدد اتمی ۹۲) در ردیف دوم همین جزیره است!',
                    buttonText: 'تست ردیف‌های پایین! →'
                },
                {
                    type: 'quiz',
                    question: 'عنصر اورانیوم (U ۹۲) در کدام بخش از جدول تناوبی قرار دارد؟',
                    options: [
                        'ردیف پایین جزیره‌ای (اکتینیدها)',
                        'ستون اول کنار هیدروژن',
                        'ستون گازهای نجیب'
                    ],
                    correct: 0,
                    explanation: 'کاملاً درسته! اورانیوم در ردیف دوم پایین جدول (اکتینیدها) جای گرفته.'
                },
                {
                    type: 'quiz',
                    question: 'دو ردیف جداافتاده پایین جدول از نظر ساختار اصلی به کدام دوره‌ها تعلق دارند؟',
                    options: [
                        'دوره‌های ۶ و ۷',
                        'دوره‌های ۱ و ۲',
                        'دوره‌های ۴ و ۵'
                    ],
                    correct: 0,
                    explanation: 'احسنت! لانتانیدها متعلق به دوره ۶ و اکتینیدها متعلق به دوره ۷ جدول هستند.'
                }
            ]
        },
        {
            id: 'al-12',
            unit: 4,
            unitTitle: 'فصل ۱۲: آزمون قهرمانی و فتح کل ۱۱۸ خانه جدول',
            unitDesc: 'آزمون جامع مختصات و نقشه کل جدول تناوبی',
            unitColor: '#06b6d4',
            title: 'نشان زرین فتح جدول مندلیف',
            mentor: MENTORS.mendeleev,
            xp: 60,
            highlightRows: [1,2,3,4,5,6,7],
            highlightCols: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
            targetCoords: [[1,1], [1,18], [4,8], [6,11], [7,18]],
            steps: [
                {
                    type: 'dialogue',
                    text: 'تبریک می‌گم دانشمند جوان! حالا تو نقشه کل ۱۱۸ عنصر جدول تناوبی رو در ذهنت داری. می‌دونی هر عنصر در چه سطر، چه ستون و چه ناحیه‌ای زندگی می‌کنه.',
                    buttonText: 'آماده آخرین چالش جامع هستم! 🏆'
                },
                {
                    type: 'quiz',
                    question: 'عناصر سدیم (Na)، آهن (Fe) و طلا (Au) به ترتیب در کدام سطرهای جدول قرار دارند؟',
                    options: [
                        'سطر ۳، سطر ۴، سطر ۶',
                        'سطر ۱، سطر ۲، سطر ۳',
                        'سطر ۷، سطر ۷، سطر ۷'
                    ],
                    correct: 0,
                    explanation: 'بی‌نظیره! سدیم در سطر ۳، آهن در سطر ۴ و طلا در سطر ۶ قرار دارند.'
                },
                {
                    type: 'quiz',
                    question: 'در جدول تناوبی مدرن، شماره دوره (سطر) و شماره گروه (ستون) نشان‌دهنده چیست؟',
                    options: [
                        'مختصات دقیق و آدرس ثابت هر عنصر در نقشه جدول',
                        'فقط قیمت عنصر در بازار',
                        'سال کشف عنصر'
                    ],
                    correct: 0,
                    explanation: 'دقیقاً درسته! تبریک می‌گم، تو اکنون استاد مکان‌یابی جدول تناوبی هستی!'
                }
            ]
        }
    ];

    // Academy Runtime State
    let academyState = {
        unlockedLevel: 0,
        stars: {},
        currentLesson: null,
        currentStepIdx: 0,
        hearts: 3,
        xp: 0,
        streakDays: 1,
        selectedOption: null,
        isAnswerChecked: false
    };

    function loadAcademyProgress() {
        try {
            const raw = localStorage.getItem('pp-academy-progress-v2');
            if (raw) {
                const data = JSON.parse(raw);
                academyState.unlockedLevel = data.unlockedLevel || 0;
                academyState.stars = data.stars || {};
                academyState.xp = data.xp || 0;
            }
        } catch (e) {}
        touchStreakDay();
        updateHeaderStats();
    }

    // Real daily streak: one visit per calendar day bumps the counter,
    // a skipped day resets it — pure academy loop, stored locally.
    function touchStreakDay() {
        try {
            const today = new Date().toDateString();
            const last = localStorage.getItem('pp-academy-last-day');
            let streak = parseInt(localStorage.getItem('pp-academy-streak') || '0', 10) || 0;
            if (last !== today) {
                const y = new Date(); y.setDate(y.getDate() - 1);
                streak = (last === y.toDateString()) ? streak + 1 : 1;
                localStorage.setItem('pp-academy-streak', String(streak));
                localStorage.setItem('pp-academy-last-day', today);
            }
            academyState.streakDays = Math.max(streak, 1);
        } catch (e) {
            academyState.streakDays = academyState.streakDays || 1;
        }
    }

    // XP level ladder — every 150 XP is one league rank
    function academyRank(xp) {
        const ranks = ['تازه‌وارد 🌱', 'کاوشگر 🧭', 'دانشمند 🧪', 'استاد جدول 🏅', 'افسانه مندلیف 👑'];
        return ranks[Math.min(ranks.length - 1, Math.floor((xp || 0) / 150))];
    }

    function saveAcademyProgress() {
        try {
            localStorage.setItem('pp-academy-progress-v2', JSON.stringify({
                unlockedLevel: academyState.unlockedLevel,
                stars: academyState.stars,
                xp: academyState.xp
            }));
        } catch (e) {}
        updateHeaderStats();
    }

    function updateHeaderStats() {
        const xpEl = document.getElementById('duo-stat-xp');
        if (xpEl) xpEl.textContent = `${academyState.xp} XP • ${academyRank(academyState.xp)}`;
        const streakEl = document.getElementById('duo-stat-streak');
        if (streakEl) streakEl.textContent = `${academyState.streakDays} روز 🔥`;
    }

    // Live Animated Blobatar Avatar with Talking & Blinking Eyes (https://blobatar.dev/)
    function renderLiveAvatar(seed, size = 110, state = 'idle', mentorId = 'mendeleev') {
        let rawSvg = '';
        if (window.BlobatarLib && typeof window.BlobatarLib.blobatar === 'function') {
            try { rawSvg = window.BlobatarLib.blobatar(seed, { size: size }); } catch (e) {}
        }
        if (!rawSvg && typeof window.blobatar === 'function') {
            try { rawSvg = window.blobatar(seed, { size: size }); } catch (e) {}
        }
        if (!rawSvg) {
            rawSvg = `<svg width="${size}" height="${size}" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="#06b6d4" opacity="0.3"/>
                <circle cx="35" cy="40" r="8" fill="#fff"/>
                <circle cx="65" cy="40" r="8" fill="#fff"/>
                <circle cx="35" cy="40" r="4" fill="#0f172a"/>
                <circle cx="65" cy="40" r="4" fill="#0f172a"/>
                <path d="M 35 65 Q 50 80 65 65" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>
            </svg>`;
        }

        // Add eye blinking class to facial features group
        let count = 0;
        rawSvg = rawSvg.replace(/<g fill="([^"]+)">/g, (match, fill) => {
            count++;
            return count >= 2 ? `<g fill="${fill}" class="vf-blob-eyes">` : match;
        });

        const stateClass = state === 'talking' ? 'is-talking' : (state === 'happy' ? 'is-happy' : (state === 'sad' ? 'is-sad' : ''));

        return `
            <div class="vf-blobatar-stage ${stateClass}" data-mentor="${mentorId}" onclick="window.onMentorAvatarClick('${mentorId}')" title="برای گفتگو با مربی کلیک کنید!">
                <div class="vf-blobatar-body">
                    ${rawSvg}
                </div>
            </div>
        `;
    }

    // Mentor interactive dialogue on click — rotates through personality quotes
    // Shared avatar renderer: story mode reuses the live Blobatar mentor
    // heads via window.renderGuideAvatar(seed, size, state, mentorId).
    window.renderGuideAvatar = renderLiveAvatar;
    window.onMentorAvatarClick = function(mentorId) {
        const m = MENTORS[mentorId] || MENTORS.mendeleev;
        if (window.SFX && window.SFX.click) window.SFX.click();
        const pool = (m.quotes && m.quotes.length) ? m.quotes : [m.quote];
        m._qi = ((m._qi || 0) + 1) % pool.length;
        if (window.showToast) {
            window.showToast(`💬 ${m.name}`, pool[m._qi], 'info', 3000);
        }
        const stage = document.querySelector(`.vf-blobatar-stage[data-mentor="${mentorId}"]`);
        if (stage) {
            stage.classList.remove('is-happy');
            void stage.offsetWidth;
            stage.classList.add('is-happy');
            setTimeout(() => stage.classList.remove('is-happy'), 1200);
        }
    };

    // Interactive Mini Periodic Table Radar for Stage
    // isQuizMode=true hides ALL answer signals (mystery cells) so the
    // question and answer are never shown side-by-side.
    function renderMiniTable(highlightCols = [], highlightRows = [], targetCoords = [], isQuizMode = false) {
        const elements = window.elementData || [];
        let html = '<div class="vf-mini-table-wrap" dir="ltr"><div class="vf-mini-table" dir="ltr">';
        html += '<div class="vf-mini-corner"></div>';
        for (let c = 1; c <= 18; c++) {
            html += `<div class="vf-mini-header">${c}</div>`;
        }
        for (let r = 1; r <= 7; r++) {
            html += `<div class="vf-mini-row-num" title="دوره ${r}">${r}</div>`;
            for (let c = 1; c <= 18; c++) {
                let exists = true;
                if (r === 1 && c > 1 && c < 18) exists = false;
                else if ((r === 2 || r === 3) && c > 2 && c < 13) exists = false;

                if (!exists) {
                    html += '<div class="vf-mini-cell opacity-0 pointer-events-none"></div>';
                    continue;
                }

                const isTarget = targetCoords.some(coord => coord[0] === r && coord[1] === c);
                const isCol = highlightCols.includes(c);
                const isRow = highlightRows.includes(r);

                const el = elements.find(e => e.p === r && e.g === c);
                const sym = el ? el.sym : '';
                const tip = el ? `${el.name} (${el.sym}) - سطر ${r} ستون ${c}` : '';

                if (isQuizMode) {
                    // QUIZ: genuine recall test — blank cells with coordinate-only
                    // tooltips, so the mini table can never leak the answer.
                    html += `<div class="vf-mini-cell vf-mini-blank" title="سطر ${r}، ستون ${c}"></div>`;
                    continue;
                }

                let cls = 'vf-mini-cell';
                if (isTarget) cls += ' is-target';
                else if (isCol) cls += ' is-active-col';
                else if (isRow) cls += ' is-active-row';

                html += `<div class="${cls}" title="${tip}">${isTarget || isCol || isRow ? sym : ''}</div>`;
            }
        }
        html += '</div></div>';
        return html;
    }

    // Render Sinuous Academy Path
    function renderAcademyPath() {
        const pathContainer = document.getElementById('duo-path-stream');
        if (!pathContainer) return;

        let currentUnitId = -1;
        let html = '';

        // Motivation banner — gamified league header (real streak + rank)
        const doneCount = ACADEMY_LESSONS.filter((l, i) => i < academyState.unlockedLevel).length;
        html += `
        <div class="w-full max-w-md mx-auto my-4 px-4">
            <div class="p-4 rounded-3xl border-2 border-amber-400/60 bg-amber-400/10 shadow-[0_5px_0_rgba(0,0,0,0.5)] flex items-center justify-between gap-3">
                <div class="text-right">
                    <span class="text-[11px] font-black text-amber-300 block">🔥 استریک ${academyState.streakDays} روزه — ادامه بده!</span>
                    <span class="text-xs font-bold text-white block mt-0.5">${academyRank(academyState.xp)} • ${academyState.xp} XP</span>
                </div>
                <div class="text-left shrink-0">
                    <span class="inline-flex items-center gap-1 text-xs font-black px-3 py-1.5 rounded-xl bg-slate-900 border-2 border-emerald-400/60 text-emerald-300">
                        ${doneCount} / ${ACADEMY_LESSONS.length} فصل
                    </span>
                </div>
            </div>
        </div>`;

        ACADEMY_LESSONS.forEach((lesson, idx) => {
            const isUnlocked = idx <= academyState.unlockedLevel;
            const isDone = idx < academyState.unlockedLevel;
            const isActive = idx === academyState.unlockedLevel;
            const starsEarned = academyState.stars[lesson.id] || (isDone ? 3 : 0);

            // Unit Header
            if (lesson.unit !== currentUnitId) {
                currentUnitId = lesson.unit;
                html += `
                <div class="w-full max-w-md mx-auto my-6 px-4">
                    <div class="p-4 rounded-3xl border border-slate-700/80 bg-slate-900 shadow-xl flex items-center justify-between">
                        <div class="text-right">
                            <span class="text-[11px] font-bold text-slate-400 block">${lesson.unitTitle}</span>
                            <h3 class="text-sm font-black text-white mt-0.5">${lesson.unitDesc}</h3>
                        </div>
                        <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black shadow-lg" style="background:${lesson.unitColor}">
                            ${lesson.unit}
                        </div>
                    </div>
                </div>
                `;
            }

            // Sinuous curve offset (0, 32px, 0, -32px)
            const offsets = [0, 40, 0, -40];
            const offsetPx = offsets[idx % offsets.length];

            const mentor = lesson.mentor;
            const avatarHtml = renderLiveAvatar(mentor.seed, 64, isUnlocked ? 'idle' : 'sad', mentor.id);

            html += `
            <div class="flex flex-col items-center my-4 transition-transform duration-300" style="transform: translateX(${offsetPx}px)">
                <div class="relative group">
                    ${isActive ? `
                    <div class="duo-step-beacon">
                        <span>اینجا کلیک کن!</span>
                    </div>
                    ` : ''}

                    <button type="button"
                        onclick="window.startAcademyLesson('${lesson.id}')"
                        ${!isUnlocked ? 'disabled' : ''}
                        class="duo-step-btn w-20 h-20 rounded-full flex flex-col items-center justify-center transition-all ${isDone ? 'completed' : isActive ? 'active-level' : 'locked'} cursor-pointer"
                        style="${isActive ? `background:${mentor.color}; box-shadow: 0 8px 0 ${mentor.accentBorder}` : ''}"
                    >
                        <div class="scale-90 transform group-hover:scale-105 transition-transform">
                            ${avatarHtml}
                        </div>
                    </button>
                </div>

                <span class="duo-step-label">${lesson.title}</span>

                ${isDone ? `
                <div class="duo-stars">
                    ${[1, 2, 3].map(s => `
                        <svg class="w-3.5 h-3.5 ${s <= starsEarned ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    `).join('')}
                </div>
                ` : ''}
            </div>

            <!-- Stepping dots to next level -->
            ${idx < ACADEMY_LESSONS.length - 1 ? `
            <div class="duo-stepping-dots">
                <div class="duo-stepping-dot"></div>
                <div class="duo-stepping-dot"></div>
                <div class="duo-stepping-dot"></div>
            </div>
            ` : ''}
            `;
        });

        pathContainer.innerHTML = html;
    }

    // Start Lesson
    window.startAcademyLesson = function(lessonId) {
        const lesson = ACADEMY_LESSONS.find(l => l.id === lessonId);
        if (!lesson) return;

        academyState.currentLesson = lesson;
        academyState.currentStepIdx = 0;
        academyState.hearts = 3;
        academyState.selectedOption = null;
        academyState.isAnswerChecked = false;

        document.getElementById('duo-path-view').classList.add('hidden');
        document.getElementById('duo-lesson-view').classList.remove('hidden');

        if (window.SFX && window.SFX.click) window.SFX.click();
        renderAcademyCurrentStep();
    };

    // Render Current Step inside Active Lesson
    function renderAcademyCurrentStep() {
        const lesson = academyState.currentLesson;
        const step = lesson.steps[academyState.currentStepIdx];
        const totalSteps = lesson.steps.length;
        const progressPct = Math.round(((academyState.currentStepIdx) / totalSteps) * 100);

        const fill = document.getElementById('duo-lesson-progress-fill');
        if (fill) fill.style.width = `${progressPct}%`;

        // Update hearts display
        const heartsContainer = document.getElementById('duo-hearts-container');
        if (heartsContainer) {
            let hHtml = '';
            for (let i = 0; i < 3; i++) {
                hHtml += `
                <svg class="w-7 h-7 transition-transform ${i < academyState.hearts ? 'text-rose-500 fill-rose-500 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]' : 'text-slate-700 scale-90 opacity-60'}" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                `;
            }
            heartsContainer.innerHTML = hHtml;
        }

        const stage = document.getElementById('duo-stage-content');
        if (!stage) return;

        const mentor = lesson.mentor;
        const miniTableHtml = step.type === 'dialogue'
            ? renderMiniTable(lesson.highlightCols, lesson.highlightRows, lesson.targetCoords, false)
            : renderMiniTable([], [], [], true);

        if (step.type === 'dialogue') {
            const avatarHtml = renderLiveAvatar(mentor.seed, 120, 'talking', mentor.id);

            stage.innerHTML = `
            <div class="flex flex-col items-center max-w-lg mx-auto w-full my-auto py-3">
                <!-- Mentor Avatar with glowing aura -->
                <div class="relative mb-3">
                    <div class="absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse" style="background: ${mentor.color}"></div>
                    <div class="relative rounded-3xl p-3 bg-slate-900 border-2 shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform" style="border-color: ${mentor.accentBorder}">
                        ${avatarHtml}
                    </div>
                    <span class="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-black text-white bg-slate-900 border border-slate-700 shadow-md whitespace-nowrap">
                        ${mentor.name}
                    </span>
                </div>

                <!-- Interactive Mini Periodic Table Radar -->
                ${miniTableHtml}

                <!-- Speech Bubble -->
                <div class="relative bg-slate-900/90 border-2 border-slate-700/80 rounded-3xl p-5 shadow-2xl w-full text-right mb-4 text-slate-100">
                    <div class="absolute -top-3 right-10 w-6 h-6 bg-slate-900 border-t-2 border-r-2 border-slate-700 rotate-[-45deg]"></div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold" style="background:${mentor.accentBg}; color:${mentor.color}">
                            ${mentor.role}
                        </span>
                    </div>
                    <p class="text-sm md:text-base leading-relaxed font-medium text-slate-200" id="duo-speech-text">
                        ${step.text}
                    </p>
                </div>

                <!-- Next button -->
                <button type="button"
                    onclick="window.nextAcademyStep()"
                    class="vibefarsi-shine w-full py-3.5 rounded-2xl font-black text-slate-950 text-base shadow-xl transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer"
                    style="background: linear-gradient(135deg, ${mentor.color}, #10b981)"
                >
                    ${step.buttonText || 'ادامه بده →'}
                </button>
            </div>
            `;
        } else if (step.type === 'quiz') {
            academyState.selectedOption = null;
            academyState.isAnswerChecked = false;

            const avatarHtml = renderLiveAvatar(mentor.seed, 60, 'idle', mentor.id);

            stage.innerHTML = `
            <div class="flex flex-col items-center max-w-lg mx-auto w-full my-auto py-2">
                <!-- Mentor mini avatar + question prompt -->
                <div class="flex items-center gap-3 w-full bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl mb-3 shadow-lg">
                    <div class="w-14 h-14 shrink-0 rounded-2xl bg-slate-800 p-1 border border-slate-700 flex items-center justify-center">
                        ${avatarHtml}
                    </div>
                    <div class="text-right">
                        <span class="text-xs font-bold text-slate-400 block">${mentor.name} می‌پرسد:</span>
                        <h4 class="text-xs md:text-sm font-black text-white leading-snug mt-0.5">${step.question}</h4>
                    </div>
                </div>

                <!-- Mini Periodic Table Radar (blank recall grid in quiz mode) -->
                ${miniTableHtml}
                <p class="text-[11px] text-slate-500 font-bold mb-2 -mt-1">🧠 جدول بالا خالیه — از حافظه‌ات جواب بده!</p>

                <!-- Multiple choice options -->
                <div class="flex flex-col gap-2.5 w-full mb-4" id="duo-options-list">
                    ${step.options.map((opt, oIdx) => `
                        <button type="button"
                            onclick="window.selectAcademyOption(${oIdx})"
                            id="duo-opt-${oIdx}"
                            class="duo-quiz-opt text-right p-3.5 rounded-2xl font-bold text-xs md:text-sm border-2 bg-slate-900/70 border-slate-700 text-slate-200 hover:border-cyan-400 hover:bg-slate-800/80 transition-all cursor-pointer flex items-center justify-between"
                        >
                            <span>${opt}</span>
                            <span class="w-5 h-5 rounded-full border border-slate-600 flex items-center justify-center text-[10px] text-slate-400">
                                ${oIdx === 0 ? 'الف' : oIdx === 1 ? 'ب' : 'ج'}
                            </span>
                        </button>
                    `).join('')}
                </div>

                <!-- Check button -->
                <button type="button"
                    id="duo-check-btn"
                    disabled
                    onclick="window.checkAcademyAnswer()"
                    class="w-full py-3.5 rounded-2xl font-black text-slate-900 text-base shadow-xl bg-slate-700 opacity-50 cursor-not-allowed transition-all"
                >
                    بررسی پاسخ
                </button>
            </div>
            `;
        }

        // Refresh dynamic SVG icons + soft entrance animation for the new stage
        try { if (window.renderAllIcons) window.renderAllIcons(stage); } catch (e) {}
        try {
            stage.style.opacity = '0';
            stage.style.transform = 'translateY(10px)';
            requestAnimationFrame(() => requestAnimationFrame(() => {
                stage.style.transition = 'opacity .3s ease, transform .3s ease';
                stage.style.opacity = '1';
                stage.style.transform = 'translateY(0)';
            }));
        } catch (e) {}
    }

    // Option Selection
    window.selectAcademyOption = function(optIdx) {
        if (academyState.isAnswerChecked) return;
        academyState.selectedOption = optIdx;

        const options = document.querySelectorAll('.duo-quiz-opt');
        options.forEach((btn, idx) => {
            if (idx === optIdx) {
                btn.classList.add('border-cyan-400', 'bg-cyan-950/40', 'text-cyan-200');
                btn.classList.remove('border-slate-700', 'bg-slate-900/70');
            } else {
                btn.classList.remove('border-cyan-400', 'bg-cyan-950/40', 'text-cyan-200');
                btn.classList.add('border-slate-700', 'bg-slate-900/70');
            }
        });

        const checkBtn = document.getElementById('duo-check-btn');
        if (checkBtn) {
            checkBtn.disabled = false;
            checkBtn.classList.remove('bg-slate-700', 'opacity-50', 'cursor-not-allowed');
            checkBtn.classList.add('vibefarsi-shine', 'bg-cyan-400', 'hover:brightness-110', 'active:scale-98', 'cursor-pointer');
        }

        if (window.SFX && window.SFX.click) window.SFX.click();
    };

    // Check Answer
    window.checkAcademyAnswer = function() {
        if (academyState.selectedOption === null || academyState.isAnswerChecked) return;
        academyState.isAnswerChecked = true;

        const lesson = academyState.currentLesson;
        const step = lesson.steps[academyState.currentStepIdx];
        const isCorrect = academyState.selectedOption === step.correct;

        const checkBtn = document.getElementById('duo-check-btn');
        if (checkBtn) checkBtn.classList.add('hidden');

        const sheet = document.getElementById('duo-feedback-sheet');
        const iconContainer = document.getElementById('duo-feedback-icon');
        const titleEl = document.getElementById('duo-feedback-title');
        const descEl = document.getElementById('duo-feedback-desc');
        const actionBtn = document.getElementById('duo-feedback-action-btn');

        if (!sheet) return;

        sheet.classList.remove('hidden');

        // Lock all options + mark correct / wrong visually
        const optBtns = document.querySelectorAll('.duo-quiz-opt');
        optBtns.forEach((btn, idx) => {
            btn.disabled = true;
            btn.classList.remove('hover:border-cyan-400', 'cursor-pointer');
            if (idx === step.correct) btn.classList.add('opt-correct');
            else if (idx === academyState.selectedOption && !isCorrect) btn.classList.add('opt-wrong');
            else btn.classList.add('opt-dim');
        });
        const correctBtn = document.getElementById(`duo-opt-${step.correct}`);
        if (correctBtn) {
            correctBtn.classList.remove('opt-dim');
            correctBtn.classList.add('opt-correct');
        }

        if (isCorrect) {
            if (window.SFX && window.SFX.correct) window.SFX.correct();
            if (window.triggerHaptic) window.triggerHaptic('success');
            document.body.classList.remove('vf-screen-flash-correct', 'vf-screen-flash-wrong');
            void document.body.offsetWidth;
            document.body.classList.add('vf-screen-flash-correct');
            setTimeout(() => document.body.classList.remove('vf-screen-flash-correct'), 450);

            academyState.xp += 15;
            saveAcademyProgress();

            // Avatar emotional reaction: joyful leap!
            const avatarStage = document.querySelector('#duo-stage-content .vf-blobatar-stage');
            if (avatarStage) {
                avatarStage.classList.remove('is-idle', 'is-sad', 'is-talking');
                avatarStage.classList.add('is-happy');
            }

            sheet.className = 'fixed bottom-0 left-0 right-0 p-5 md:p-6 rounded-t-3xl border-t-2 bg-slate-900/95 backdrop-blur-2xl border-emerald-500 shadow-2xl text-right z-[130] transition-transform transform translate-y-0';
            iconContainer.className = 'w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0';
            iconContainer.innerHTML = '✓';
            titleEl.className = 'text-base font-black text-emerald-400';
            titleEl.textContent = 'آفرین! مکان عنصر را درست گفتی! 🎉';
            descEl.textContent = step.explanation || 'موقعیت عنصر در جدول تثبیت شد.';

            actionBtn.className = 'vibefarsi-shine px-6 py-3 rounded-2xl font-black text-slate-950 text-sm shadow-[0_4px_0_rgba(2,6,23,0.9)] active:shadow-none active:translate-y-[4px] bg-emerald-400 hover:bg-emerald-300 cursor-pointer shrink-0 border-2 border-emerald-200 transition-all';
            actionBtn.textContent = 'عالی، مرحله بعد →';

            if (window.launchConfetti) {
                window.launchConfetti(70);
            }
        } else {
            if (window.SFX && window.SFX.wrong) window.SFX.wrong();
            if (window.triggerHaptic) window.triggerHaptic('error');
            document.body.classList.remove('vf-screen-flash-correct', 'vf-screen-flash-wrong');
            void document.body.offsetWidth;
            document.body.classList.add('vf-screen-flash-wrong');
            setTimeout(() => document.body.classList.remove('vf-screen-flash-wrong'), 450);

            academyState.hearts = Math.max(0, academyState.hearts - 1);

            // Avatar emotional reaction: encouraging sad tilt
            const avatarStage = document.querySelector('#duo-stage-content .vf-blobatar-stage');
            if (avatarStage) {
                avatarStage.classList.remove('is-idle', 'is-happy', 'is-talking');
                avatarStage.classList.add('is-sad');
            }

            // Re-render hearts immediately so the loss is visible
            const heartsBox = document.getElementById('duo-hearts-container');
            if (heartsBox) {
                let hhHtml = '';
                for (let i = 0; i < 3; i++) {
                    hhHtml += `
                    <svg class="w-7 h-7 transition-transform ${i < academyState.hearts ? 'text-rose-500 fill-rose-500 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]' : 'text-slate-700 scale-90 opacity-60'}" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    `;
                }
                heartsBox.innerHTML = hhHtml;
            }

            // Screen flash red
            const flash = document.createElement('div');
            flash.className = 'screen-danger-flash';
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 600);

            sheet.className = 'fixed bottom-0 left-0 right-0 p-5 md:p-6 rounded-t-3xl border-t-2 bg-slate-900/95 backdrop-blur-2xl border-rose-500 shadow-2xl text-right z-[80] transition-transform transform translate-y-0';
            iconContainer.className = 'w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0';
            iconContainer.innerHTML = '✕';
            titleEl.className = 'text-base font-black text-rose-400';
            titleEl.textContent = 'نادرست بود! به مختصات دقت کن.';
            descEl.textContent = step.explanation || 'به شماره سطر و ستون توجه کنید.';

            actionBtn.className = 'vibefarsi-shine px-6 py-3 rounded-2xl font-black text-white text-sm shadow-[0_4px_0_rgba(2,6,23,0.9)] active:shadow-none active:translate-y-[4px] bg-rose-500 hover:bg-rose-400 cursor-pointer shrink-0 border-2 border-rose-300 transition-all';
            actionBtn.textContent = 'فهمیدم، ادامه →';

            // Error shake on selected button
            const wrongBtn = document.getElementById(`duo-opt-${academyState.selectedOption}`);
            if (wrongBtn) {
                wrongBtn.classList.add('border-rose-500', 'bg-rose-950/40', 'vibefarsi-shake');
            }
        }
    };

    // Feedback Action Button (Next Step)
    window.advanceDuoFromFeedback = function() {
        const sheet = document.getElementById('duo-feedback-sheet');
        if (sheet) sheet.classList.add('hidden');

        if (academyState.hearts <= 0) {
            showAcademyGameOver();
            return;
        }

        window.nextAcademyStep();
    };

    // Next Step
    window.nextAcademyStep = function() {
        const lesson = academyState.currentLesson;
        academyState.currentStepIdx++;

        if (academyState.currentStepIdx >= lesson.steps.length) {
            completeAcademyLesson();
        } else {
            renderAcademyCurrentStep();
        }
    };

    // Complete Lesson
    function completeAcademyLesson() {
        const lesson = academyState.currentLesson;
        const currentIdx = ACADEMY_LESSONS.findIndex(l => l.id === lesson.id);

        if (currentIdx === academyState.unlockedLevel) {
            academyState.unlockedLevel = Math.min(ACADEMY_LESSONS.length - 1, currentIdx + 1);
        }

        academyState.stars[lesson.id] = Math.max(academyState.stars[lesson.id] || 0, academyState.hearts);
        academyState.xp += lesson.xp;
        saveAcademyProgress();

        if (window.confetti) {
            try {
                window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
            } catch (e) {}
        }
        if (window.SFX && window.SFX.victory) window.SFX.victory();

        const stage = document.getElementById('duo-stage-content');
        if (!stage) return;

        const mentor = lesson.mentor;
        const avatarHtml = renderLiveAvatar(mentor.seed, 140, 'happy', mentor.id);

        stage.innerHTML = `
        <div class="flex flex-col items-center justify-center max-w-md mx-auto my-auto text-center py-6">
            <div class="mb-4 transform hover:scale-105 transition-transform">
                ${avatarHtml}
            </div>

            <h2 class="text-xl md:text-2xl font-black text-white mb-2">فصل فتح شد! 🏆</h2>
            <p class="text-xs md:text-sm text-amber-300 mb-1 font-bold leading-relaxed">
                «${mentor.quotes ? mentor.quotes[Math.floor(Math.random() * mentor.quotes.length)] : mentor.quote}»
            </p>
            <p class="text-[11px] text-slate-400 mb-5">— ${mentor.name}</p>

            <div class="flex items-center gap-4 mb-6">
                <div class="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-sm">
                    <span data-icon="sparkles" class="w-4 h-4"></span>
                    <span>+${lesson.xp} XP کسب شد</span>
                </div>
                <div class="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-bold text-sm">
                    <span>${'❤️'.repeat(academyState.hearts)}</span>
                </div>
            </div>

            <button type="button"
                onclick="window.returnToDuoPath()"
                class="vibefarsi-shine w-full py-4 rounded-2xl font-black text-slate-950 text-base shadow-[0_5px_0_rgba(2,6,23,0.9)] active:shadow-none active:translate-y-[5px] bg-emerald-400 hover:bg-emerald-300 cursor-pointer border-2 border-emerald-200 transition-all"
            >
                ادامه مسیر فتح جدول →
            </button>
        </div>
        `;
    }

    // Game Over
    function showAcademyGameOver() {
        const stage = document.getElementById('duo-stage-content');
        if (!stage) return;

        const mentor = academyState.currentLesson.mentor;
        const avatarHtml = renderLiveAvatar(mentor.seed, 120, 'sad', mentor.id);

        stage.innerHTML = `
        <div class="flex flex-col items-center justify-center max-w-md mx-auto my-auto text-center py-6">
            <div class="mb-4">
                ${avatarHtml}
            </div>
            <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/40 text-rose-300 font-black text-xs mb-3">
                <span>💔 ${academyState.xp} XP ذخیره شد • استریک ${academyState.streakDays} روزه حفظه!</span>
            </div>
            <h2 class="text-xl font-black text-rose-400 mb-2">جان‌ها تموم شد!</h2>
            <p class="text-xs md:text-sm text-slate-300 mb-6 leading-relaxed">
                «${mentor.quote}» — ${mentor.name} کنارت می‌مونه، یه نفس عمیق بکش و دوباره حمله کن!
            </p>
            <button type="button"
                onclick="window.startAcademyLesson('${academyState.currentLesson.id}')"
                class="vibefarsi-shine w-full py-3.5 rounded-2xl font-black text-white text-base shadow-[0_5px_0_rgba(2,6,23,0.9)] active:shadow-none active:translate-y-[5px] bg-cyan-500 hover:bg-cyan-400 cursor-pointer border-2 border-cyan-300 transition-all mb-3"
            >
                تلاش مجدد ↺
            </button>
            <button type="button"
                onclick="window.returnToDuoPath()"
                class="w-full py-3 rounded-2xl font-bold text-slate-400 text-sm hover:text-white transition-colors"
            >
                بازگشت به نقشه
            </button>
        </div>
        `;
    }

    // Return to Path
    window.returnToDuoPath = function() {
        document.getElementById('duo-lesson-view').classList.add('hidden');
        document.getElementById('duo-path-view').classList.remove('hidden');
        renderAcademyPath();
        if (window.SFX && window.SFX.click) window.SFX.click();
    };

    // Open Fullscreen App
    window.openDuoLearnApp = function() {
        const app = document.getElementById('duo-learn-app');
        if (!app) return;
        app.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        renderAcademyPath();
        if (window.SFX && window.SFX.click) window.SFX.click();
    };

    // Close Fullscreen App
    window.closeDuoLearnApp = function() {
        const app = document.getElementById('duo-learn-app');
        if (!app) return;
        app.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        if (window.SFX && window.SFX.click) window.SFX.click();
    };

    // Aliases for compatibility
    window.nextDuoStep = window.nextAcademyStep;
    window.selectDuoOption = window.selectAcademyOption;
    window.checkDuoAnswer = window.checkAcademyAnswer;
    window.startDuoLesson = window.startAcademyLesson;

    document.addEventListener('DOMContentLoaded', () => {
        loadAcademyProgress();
    });

})();
