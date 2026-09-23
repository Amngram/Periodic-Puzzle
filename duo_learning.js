/* ============================================================
   DUOLINGO CONVERSATIONAL CHEMISTRY LEARNING ENGINE
   Interactive learning mode with animated Blobatar characters,
   dialogue bubbles, practical chemistry lessons, and full-screen view.
   Powered by:
   - https://blobatar.dev/ (Geometric dynamic avatars)
   - https://reactbits.dev/ (ShinyText, DecryptedText, TrueFocus)
   - https://vibefarsi.ir/ (BorderBeam, ShineButton, ErrorShake, Confetti)
   ============================================================ */

(function() {
    'use strict';

    // Mentors definition
    const MENTORS = {
        mendeleev: {
            id: 'mendeleev',
            name: 'پروفسور مندلیف',
            seed: 'Mendeleev',
            role: 'پدر جدول تناوبی 🧪',
            color: '#06b6d4',
            accentBg: 'rgba(6, 182, 212, 0.15)',
            accentBorder: '#06b6d4'
        },
        curie: {
            id: 'curie',
            name: 'ماری کوری',
            seed: 'MarieCurie',
            role: 'کاشف پرتوها و نوبلیست 🌟',
            color: '#a855f7',
            accentBg: 'rgba(168, 85, 247, 0.15)',
            accentBorder: '#a855f7'
        },
        bohr: {
            id: 'bohr',
            name: 'نیلز بور',
            seed: 'NielsBohr',
            role: 'معمار مدل اتمی ⚛️',
            color: '#10b981',
            accentBg: 'rgba(16, 185, 129, 0.15)',
            accentBorder: '#10b981'
        },
        neon: {
            id: 'neon',
            name: 'نئون بازیگوش',
            seed: 'NeonSpark',
            role: 'سفیر گازهای نجیب ⚡',
            color: '#f59e0b',
            accentBg: 'rgba(245, 158, 11, 0.15)',
            accentBorder: '#f59e0b'
        }
    };

    // 10 Detailed Conversational Lessons
    const DUO_LESSONS = [
        {
            id: 'dl-1',
            unit: 1,
            unitTitle: 'فصل ۱: الفبای کیهان و پیدایش ماده',
            unitDesc: 'با هیدروژن، اولین و فراوان‌ترین عنصر جهان آغاز می‌کنیم',
            unitColor: '#06b6d4',
            title: 'راز هیدروژن؛ سوخت ستارگان',
            mentor: MENTORS.mendeleev,
            xp: 25,
            steps: [
                {
                    type: 'dialogue',
                    text: 'سلام دوست من! خیلی خوش اومدی به آزمایشگاه من. می‌دونستی بیش از ۷۵٪ کل جرم جهان مادی، فقط و فقط از یک عنصر ساخته شده؟ اون عنصر هیدروژنه (H)!',
                    buttonText: 'چه جالب! مگه چه ویژگی داره؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'هیدروژن ساده‌ترین و سبک‌ترین اتم عالمه؛ فقط ۱ پروتون در هسته و ۱ الکترون در مدارش داره. در واقع تنها عنصری در کل ۱۱۸ عنصر است که هیچ نوترونی در هسته‌اش نداره!',
                    buttonText: 'حالا چالش رو نشونم بده! →'
                },
                {
                    type: 'quiz',
                    question: 'خورشید درخشان و میلیاردها ستاره آسمان، انرژی عظیم خود را از سوزاندن و همجوشی کدام عنصر تولید می‌کنند؟',
                    options: [
                        'همجوشی هیدروژن و تبدیل آن به هلیم',
                        'سوختن زغال‌سنگ و کربن فشرده',
                        'تبخیر آهن و سنگ‌های مذاب'
                    ],
                    correct: 0,
                    explanation: 'کاملاً درسته! خورشید در هر ثانیه بیش از ۶۰۰ میلیون تن هیدروژن را به هلیم تبدیل می‌کند و نور و گرمای حیات را می‌تاباند.'
                },
                {
                    type: 'quiz',
                    question: 'چرا هیدروژن با وجود داشتن یک الکترون در لایه اول، برخلاف لیتیوم و سدیم یک فلز قلیایی به شمار نمی‌رود؟',
                    options: [
                        'چون گازی نافلز با خواص کاملاً منحصر به فرد است',
                        'چون رنگ آن در آزمایشگاه سرخ است',
                        'چون در آب حل نمی‌شود'
                    ],
                    correct: 0,
                    explanation: 'احسنت! هیدروژن یک نافلز دواتمی و سبک است و رفتاری کاملاً متمایز از فلزات قلیایی سفت و واکنش‌پذیر دارد.'
                }
            ]
        },
        {
            id: 'dl-2',
            unit: 1,
            unitTitle: 'فصل ۱: الفبای کیهان و پیدایش ماده',
            unitDesc: 'با هیدروژن، اولین و فراوان‌ترین عنصر جهان آغاز می‌کنیم',
            unitColor: '#06b6d4',
            title: 'هلیم؛ گاز پرواز و صدای نازک',
            mentor: MENTORS.neon,
            xp: 25,
            steps: [
                {
                    type: 'dialogue',
                    text: 'هی رفیق! من نئونم، ولی بذار داداش خونسردم هلیم (He) رو بهت معرفی کنم! دومین عنصر سبک و پایدار جهان.',
                    buttonText: 'چرا با استنشاق هلیم صدامون نازک میشه؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'چون چگالی هلیم خیلی کمتر از هواست، امواج صوتی ۳ برابر سریع‌تر از تارهای صوتی عبور می‌کنند و فرکانس صدا به صورت موقت بالا میره!',
                    buttonText: 'بریم سراغ چالش هلیم! →'
                },
                {
                    type: 'quiz',
                    question: 'در سانحه هیندنبورگ کشتی هوایی هیدروژنی آتش گرفت، اما امروزه بالن‌ها کاملاً امن هستند. چرا گاز هلیم هرگز آتش نمی‌گیرد؟',
                    options: [
                        'چون لایه الکترونی ۲ تایی آن کاملاً پر و پایدار است (گاز نجیب)',
                        'چون هلیم سنگین‌تر از آب است',
                        'چون هلیم در دمای بالا منجمد می‌شود'
                    ],
                    correct: 0,
                    explanation: 'درست گفتی! هلیم نخستین عضو خانواده گازهای نجیب است؛ مدار آن سیراب از الکترون است و با هیچ گازی آتش نمی‌گیرد.'
                }
            ]
        },
        {
            id: 'dl-3',
            unit: 2,
            unitTitle: 'فصل ۲: فلزات قلیایی آتشین',
            unitDesc: 'فلزاتی که با چاقو بریده می‌شوند و عاشق آب هستند!',
            unitColor: '#f59e0b',
            title: 'لیتیم و سدیم؛ جادوی گروه ۱',
            mentor: MENTORS.mendeleev,
            xp: 30,
            steps: [
                {
                    type: 'dialogue',
                    text: 'خوش آمدی به گروه ۱ جدول! فلزات قلیایی شامل لیتیم (Li)، سدیم (Na) و پتاسیم (K). این فلزات آن‌قدر نرم هستند که می‌توانی آن‌ها را مثل کره با چاقو برش بزنی!',
                    buttonText: 'چرا اینقدر مشتاق واکنش هستند؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'تمام این عناصر فقط ۱ الکترون در آخرین مدار خود دارند. آن‌ها بی‌صبرانه می‌خواهند این الکترون اضافی را به عنصری دیگر ببخشند تا پایدار شوند!',
                    buttonText: 'بریم تستش کنیم! →'
                },
                {
                    type: 'quiz',
                    question: 'اگر یک تکه فلز سدیم (Na) خالص را درون یک کاسه آب بیندازیم چه رخ می‌دهد؟',
                    options: [
                        'به سرعت روی آب می‌چرخد، گاز هیدروژن متصاعد کرده و با شعله زرد منفجر می‌شود',
                        'مانند سنگ در ته آب ساکن مانده و سرد می‌شود',
                        'سریعاً آب را تبدیل به یخ مکعبی می‌کند'
                    ],
                    correct: 0,
                    explanation: 'فوق‌العاده بود! ۲Na + ۲H2O باعث تولید هیدروکسید سدیم و گاز هیدروژن مشتعل می‌شود. به همین دلیل سدیم را زیر نفت نگهداری می‌کنند.'
                },
                {
                    type: 'quiz',
                    question: 'کدام فلز قلیایی سبک، عنصر اصلی باتری تمام گوشی‌های هوشمند و خودروهای الکتریکی امروزی است؟',
                    options: [
                        'لیتیم (Lithium)',
                        'سزیم (Cesium)',
                        'فرانسیم (Francium)'
                    ],
                    correct: 0,
                    explanation: 'دقیقاً! لیتیم بالاترین پتانسیل الکتروشیمیایی و کمترین چگالی را در میان فلزات دارد و ستون فناوری باتری جهان است.'
                }
            ]
        },
        {
            id: 'dl-4',
            unit: 2,
            unitTitle: 'فصل ۲: فلزات قلیایی آتشین',
            unitDesc: 'فلزاتی که با چاقو بریده می‌شوند و عاشق آب هستند!',
            unitColor: '#f59e0b',
            title: 'کلسیم و منیزیم؛ معماران استخوان',
            mentor: MENTORS.bohr,
            xp: 30,
            steps: [
                {
                    type: 'dialogue',
                    text: 'درود! نیلز بور هستم. گروه ۲ جدول، فلزات قلیایی خاکی هستند: بریلیم، منیزیم و کلسیم. آن‌ها ۲ الکترون در مدار آخر دارند.',
                    buttonText: 'کلسیم چه نقشی در بدن ما داره؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'بیش از ۹۹٪ کلسیم موجود در بدن انسان در استخوان‌ها و دندان‌ها به صورت هیدروکسی آپاتیت ذخیره شده تا اسکلت ما محکم بماند!',
                    buttonText: 'چالش این مرحله چیست؟ →'
                },
                {
                    type: 'quiz',
                    question: 'نوار فلز منیزیم (Mg) هنگام سوختن در فستیوال‌ها یا آتش‌بازی، چه نوع نوری تولید می‌کند؟',
                    options: [
                        'نور سفید خیره‌کننده و بسیار درخشان',
                        'نور مادون قرمز نامرئی',
                        'دود سیاه غلیظ بدون هیچ نوری'
                    ],
                    correct: 0,
                    explanation: 'آفرین! منیزیم در حضور اکسیژن با دمای بسیار بالا می‌سوزد و نور سفید درخشانی ساطع می‌کند که در فلش‌های عکاسی قدیمی کاربرد داشت.'
                }
            ]
        },
        {
            id: 'dl-5',
            unit: 3,
            unitTitle: 'فصل ۳: قلمرو کربن و فلزات واسطه',
            unitDesc: 'از الماس درخشان تا ستون‌های فولادی آسمان‌خراش‌ها',
            unitColor: '#10b981',
            title: 'کربن؛ معمار بی‌همتای حیات',
            mentor: MENTORS.curie,
            xp: 35,
            steps: [
                {
                    type: 'dialogue',
                    text: 'سلام قهرمان! ماری کوری هستم. بیا درباره ستاره بی‌چون‌وچرای شیمی آلی صحبت کنیم: کربن (C) با عدد اتمی ۶!',
                    buttonText: 'چرا کربن اینقدر ساختارهای متنوع می‌سازه؟ →'
                },
                {
                    type: 'dialogue',
                    text: 'کربن ۴ ظرفیتی است؛ یعنی مثل یک مکعب ۴ دست دارد و می‌تواند با خودش زنجیره‌های طویل، حلقه‌های بنزن، گرافن و الماس بسازد.',
                    buttonText: 'بزن بریم چالش! →'
                },
                {
                    type: 'quiz',
                    question: 'الماس (گران‌بهاترین ماده) و گرافیت (مغز نرم مداد) هر دو ۱۰۰٪ از کربن ساخته شده‌اند. علت تفاوت چشمگیر سختی آن‌ها چیست؟',
                    options: [
                        'تفاوت در ساختار بلوری و نحوه چیدمان فضایی پیوندها',
                        'اضافه شدن مقداری طلا به الماس',
                        'تفاوت در تعداد پروتون‌های هسته کربن'
                    ],
                    correct: 0,
                    explanation: 'پاسخ عالی! به این حالت دگرشکلی (Allotropy) می‌گویند؛ در الماس پیوندها به صورت شبکه ۴وجهی فشرده و در گرافیت به صورت لایه‌های لغزنده است.'
                }
            ]
        },
        {
            id: 'dl-6',
            unit: 3,
            unitTitle: 'فصل ۳: قلمرو کربن و فلزات واسطه',
            unitDesc: 'از الماس درخشان تا ستون‌های فولادی آسمان‌خراش‌ها',
            unitColor: '#10b981',
            title: 'آهن، مس و طلا؛ فلزات واسطه',
            mentor: MENTORS.mendeleev,
            xp: 35,
            steps: [
                {
                    type: 'dialogue',
                    text: 'به بلوک d در میانه جدول رسیدیم؛ فلزات واسطه مانند آهن (Fe)، مس (Cu) و طلا (Au). فلزاتی با جلای درخشان و رسانایی فوق‌العاده گرما و برق.',
                    buttonText: 'چرا مس برای سیم‌کشی برق انتخاب شد؟ →'
                },
                {
                    type: 'quiz',
                    question: 'کدام فلز به دلیل رسانایی الکتریکی بسیار بالا و مقاومت در برابر خوردگی، در تمام بردهای الکترونیکی و سیم‌ها استفاده می‌شود؟',
                    options: [
                        'مس (Copper)',
                        'سرب (Lead)',
                        'آهن زنگ‌زده'
                    ],
                    correct: 0,
                    explanation: 'صحیح است! مس بعد از نقره بالاترین رسانایی الکتریکی را دارد و به دلیل قیمت مناسب و انعطاف‌پذیری، ستون برق جهان است.'
                },
                {
                    type: 'quiz',
                    question: 'تنها عنصری در میان تمام فلزات جدول تناوبی که در دمای اتاق (۲۵ درجه) مایع است کدام است؟',
                    options: [
                        'جیوه (Mercury - Hg)',
                        'آلومینیوم (Al)',
                        'روی (Zinc)'
                    ],
                    correct: 0,
                    explanation: 'احسنت! جیوه با عدد اتمی ۸۰ تنها فلز مایع در دمای اتاق است و در دماسنج‌ها و فشارسنج‌ها کاربرد تاریخی داشته است.'
                }
            ]
        },
        {
            id: 'dl-7',
            unit: 4,
            unitTitle: 'فصل ۴: هالوژن‌ها و نمک‌سازان',
            unitDesc: 'گرسنگان الکترون و راز تشکیل نمک طعام',
            unitColor: '#ec4899',
            title: 'هالوژن‌ها؛ قاصدان پیوند یونی',
            mentor: MENTORS.bohr,
            xp: 35,
            steps: [
                {
                    type: 'dialogue',
                    text: 'گروه ۱۷ جدول، هالوژن‌ها به معنی «سازنده نمک» نام دارند: فلوئور، کلر، برم و ید. آن‌ها ۷ الکترون در لایه آخر دارند و فقط ۱ الکترون تا کمال فاصله دارند!',
                    buttonText: 'وقتی کلر الکترون سدیم رو می‌گیره چی میشه؟ →'
                },
                {
                    type: 'quiz',
                    question: 'گاز کلر (Cl2) سمی و کشنده است و فلز سدیم (Na) با آب آتش می‌گیرد؛ اما پیوند یونی آن‌ها چه ماده حیاتی می‌سازد؟',
                    options: [
                        'نمک طعام خوراکی (NaCl)',
                        'جوهر نمک اسیدی تند',
                        'پودر گوگرد زرد'
                    ],
                    correct: 0,
                    explanation: 'اعجاب شیمی! دو عنصر مرگبار در اثر انتقال الکترون، بلورهای سفید و بی‌خطر نمک طعام را پدید می‌آورند که برای فعالیت سلول‌های عصبی انسان ضروری است.'
                }
            ]
        },
        {
            id: 'dl-8',
            unit: 4,
            unitTitle: 'فصل ۴: هالوژن‌ها و نمک‌سازان',
            unitDesc: 'گرسنگان الکترون و راز تشکیل نمک طعام',
            unitColor: '#ec4899',
            title: 'نئون و گازهای نجیب؛ اشراف‌زادگان آرام',
            mentor: MENTORS.neon,
            xp: 35,
            steps: [
                {
                    type: 'dialogue',
                    text: 'نوبت خانواده خودم رسید! گروه ۱۸، گازهای نجیب. ما به قدری مدارهای الکترونی‌مان تکمیل است که اصلاً با هیچ عنصر دیگری قاطی نمی‌شویم!',
                    buttonText: 'چرا تابلوهای نئون اینقدر قشنگ می‌درخشند؟ →'
                },
                {
                    type: 'quiz',
                    question: 'هنگامی که ولتاژ الکتریکی بالا به گاز نئون درون لوله شیشه‌ای اعمال می‌شود چه رخ می‌دهد؟',
                    options: [
                        'الکترون‌ها برانگیخته شده و هنگام بازگشت به لایه پایه، فوتون‌های نور قرمز-نارنجی درخشان می‌تابانند',
                        'گاز نئون تبدیل به الماس فشرده می‌شود',
                        'شیشه لوله ذوب و سیاه می‌شود'
                    ],
                    correct: 0,
                    explanation: 'آفرین! پدیده طیف نشری خطی نئون باعث خلق تابلوهای تبلیغاتی و درخشش شهرهای مدرن شبانه شد.'
                }
            ]
        },
        {
            id: 'dl-9',
            unit: 5,
            unitTitle: 'فصل ۵: پرتوها و اعماق جدول',
            unitDesc: 'رادیواکتیویته، ایزوتوپ‌ها و انرژی هسته‌ای',
            unitColor: '#a855f7',
            title: 'رادیواکتیویته؛ جادوی ماری کوری',
            mentor: MENTORS.curie,
            xp: 40,
            steps: [
                {
                    type: 'dialogue',
                    text: 'در ردیف‌های پایین جدول، عناصری قرار دارند که هسته‌شان به قدری سنگین است که ناپایدارند و پرتو ساطع می‌کنند: مانند رادیوم و پولونیوم که خودم کشف کردم.',
                    buttonText: 'ایزوتوپ چیه و چه کمکی به تاریخ می‌کنه؟ →'
                },
                {
                    type: 'quiz',
                    question: 'کدام ایزوتوپ طبیعی برای تعیین قدمت اشیای باستانی، استخوان‌ها و چوب‌های تاریخی تا ۵۰ هزار سال قبل استفاده می‌شود؟',
                    options: [
                        'کربن-۱۴ (Carbon-14)',
                        'اورانیوم-۲۳۸',
                        'هلیم-۳'
                    ],
                    correct: 0,
                    explanation: 'احسنت! کربن-۱۴ با نیمه‌عمر ۵۷۳۰ سال، ساعت طبیعی زمین‌شناسی و باستان‌شناسی برای کاوش در تاریخ تمدن بشر است.'
                }
            ]
        },
        {
            id: 'dl-10',
            unit: 5,
            unitTitle: 'فصل ۵: پرتوها و اعماق جدول',
            unitDesc: 'رادیواکتیویته، ایزوتوپ‌ها و انرژی هسته‌ای',
            unitColor: '#a855f7',
            title: 'فینال بزرگ؛ قانون مندلیف',
            mentor: MENTORS.mendeleev,
            xp: 50,
            steps: [
                {
                    type: 'dialogue',
                    text: 'دانشمند جوان من! به آخرین گام این سفر رسیدی. جدول تناوبی نظمی شگفت‌انگیز از تمام آجرهای سازنده کیهان است.',
                    buttonText: 'چالش نهایی برای دریافت نشان استادی! →'
                },
                {
                    type: 'quiz',
                    question: 'کدام مشخصه اتمی هویت منحصر به فرد هر عنصر را تعیین می‌کند و مانند کد ملی اتم هرگز تغییر نمی‌کند؟',
                    options: [
                        'تعداد پروتون‌های هسته (عدد اتمی Z)',
                        'تعداد نوترون‌های سرگردان',
                        'تعداد لایه‌های الکترونی بیرونی'
                    ],
                    correct: 0,
                    explanation: 'شاهکار کردی! تعداد پروتون‌ها (عدد اتمی Z) هویت بنیادین هر عنصر را رقم می‌زند. تبریک می‌گویم، تو اکنون استاد جدول تناوبی هستی!'
                }
            ]
        }
    ];

    // State management
    let duoState = {
        unlockedLevel: 0,
        stars: {},
        xp: 0,
        streak: 3,
        currentLesson: null,
        currentStepIdx: 0,
        hearts: 3,
        selectedOption: null,
        isAnswerChecked: false
    };

    function loadDuoProgress() {
        try {
            const raw = localStorage.getItem('pp_duo_learning_state');
            if (raw) {
                const parsed = JSON.parse(raw);
                duoState = { ...duoState, ...parsed };
            }
        } catch (e) {}
    }

    function saveDuoProgress() {
        try {
            localStorage.setItem('pp_duo_learning_state', JSON.stringify({
                unlockedLevel: duoState.unlockedLevel,
                stars: duoState.stars,
                xp: duoState.xp,
                streak: duoState.streak
            }));
        } catch (e) {}
    }

    // Avatar generator using blobatar.js
    function renderAvatar(seed, size = 110) {
        if (window.BlobatarLib && typeof window.BlobatarLib.blobatar === 'function') {
            try {
                return window.BlobatarLib.blobatar(seed, { size: size });
            } catch (e) {}
        }
        if (typeof window.blobatar === 'function') {
            try {
                return window.blobatar(seed, { size: size });
            } catch (e) {}
        }
        // Fallback SVG if blobatar is still initializing
        return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" class="rounded-full bg-slate-800">
            <circle cx="50" cy="50" r="45" fill="#06b6d4" opacity="0.3"/>
            <circle cx="35" cy="40" r="8" fill="#fff"/>
            <circle cx="65" cy="40" r="8" fill="#fff"/>
            <circle cx="35" cy="40" r="4" fill="#0f172a"/>
            <circle cx="65" cy="40" r="4" fill="#0f172a"/>
            <path d="M 35 65 Q 50 80 65 65" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>
        </svg>`;
    }

    // Render Duolingo Sinuous Path
    function renderDuoPath() {
        const pathContainer = document.getElementById('duo-path-stream');
        if (!pathContainer) return;

        let currentUnitId = -1;
        let html = '';

        DUO_LESSONS.forEach((lesson, idx) => {
            const isUnlocked = idx <= duoState.unlockedLevel;
            const isDone = idx < duoState.unlockedLevel;
            const isActive = idx === duoState.unlockedLevel;
            const starsEarned = duoState.stars[lesson.id] || (isDone ? 3 : 0);

            // Unit Header
            if (lesson.unit !== currentUnitId) {
                currentUnitId = lesson.unit;
                const mentorAvatar = renderAvatar(lesson.mentor.seed, 64);
                html += `
                <div class="duo-unit-banner mb-6 mt-6 p-4 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl relative overflow-hidden" style="border-right: 6px solid ${lesson.unitColor}">
                    <div class="flex items-center gap-4">
                        <div class="shrink-0 rounded-2xl p-1 bg-slate-800/80 border border-slate-700/60 shadow-inner">
                            ${mentorAvatar}
                        </div>
                        <div class="min-w-0 flex-1">
                            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">${lesson.unitTitle}</span>
                            <h3 class="text-base md:text-lg font-black text-white leading-tight mt-0.5">${lesson.unitDesc}</h3>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">مربی: ${lesson.mentor.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }

            // Sinuous curve offset calculation: sin curve
            const offsetX = Math.round(Math.sin(idx * 1.1) * 85);

            html += `
            <div class="duo-step-row flex flex-col items-center my-4 relative">
                <!-- Stepping road line dots -->
                ${idx > 0 ? `
                <div class="duo-stepping-dots flex flex-col gap-1.5 opacity-40 mb-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                    <span class="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                </div>
                ` : ''}

                <div style="transform: translateX(${offsetX}px);" class="relative flex flex-col items-center">
                    ${isActive ? `
                    <div class="duo-step-beacon absolute -top-8 px-3 py-1 rounded-full text-[11px] font-black bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/40 flex items-center gap-1 animate-bounce z-10 whitespace-nowrap">
                        <span>شروع کن!</span>
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>
                    </div>
                    ` : ''}

                    <button type="button"
                        onclick="window.startDuoLesson(${idx})"
                        ${!isUnlocked ? 'disabled' : ''}
                        class="duo-step-btn relative flex items-center justify-center rounded-full transition-all duration-150 select-none
                        ${isDone ? 'bg-gradient-to-br from-emerald-500 to-teal-600 shadow-[0_6px_0_#065f46] text-white hover:brightness-110 active:translate-y-1 active:shadow-[0_2px_0_#065f46]' : ''}
                        ${isActive ? 'bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_6px_0_#1e40af] text-white hover:brightness-110 ring-4 ring-cyan-400/30 active:translate-y-1 active:shadow-[0_2px_0_#1e40af]' : ''}
                        ${!isUnlocked ? 'bg-slate-800 shadow-[0_6px_0_#0f172a] text-slate-500 cursor-not-allowed opacity-60' : ''}
                        w-18 h-18 md:w-20 md:h-20"
                    >
                        ${isDone ? `
                            <svg class="w-8 h-8 text-white stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                        ` : isActive ? `
                            <svg class="w-8 h-8 text-white fill-current animate-pulse" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        ` : `
                            <svg class="w-7 h-7 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        `}
                    </button>

                    <!-- Stars indicator -->
                    <div class="duo-stars flex gap-1 mt-2">
                        ${[1, 2, 3].map(s => `
                            <svg class="w-3.5 h-3.5 ${s <= starsEarned ? 'text-amber-400 fill-amber-400' : 'text-slate-700'}" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        `).join('')}
                    </div>

                    <span class="text-xs font-bold text-slate-300 mt-1 max-w-[130px] text-center leading-snug">
                        ${lesson.title}
                    </span>
                </div>
            </div>
            `;
        });

        pathContainer.innerHTML = html;
        updateDuoTopStats();
    }

    function updateDuoTopStats() {
        const xpEl = document.getElementById('duo-stat-xp');
        if (xpEl) xpEl.textContent = `${duoState.xp} XP`;
        const streakEl = document.getElementById('duo-stat-streak');
        if (streakEl) streakEl.textContent = `${duoState.streak} روز`;
    }

    // Start a lesson
    window.startDuoLesson = function(levelIdx) {
        const lesson = DUO_LESSONS[levelIdx];
        if (!lesson) return;
        if (levelIdx > duoState.unlockedLevel) {
            if (window.showToast) window.showToast('مرحله قفل است', 'ابتدا مراحل قبلی را با موفقیت تمام کن!', 'error');
            return;
        }

        duoState.currentLesson = lesson;
        duoState.currentStepIdx = 0;
        duoState.hearts = 3;
        duoState.selectedOption = null;
        duoState.isAnswerChecked = false;

        document.getElementById('duo-path-view').classList.add('hidden');
        document.getElementById('duo-lesson-view').classList.remove('hidden');

        renderDuoCurrentStep();
        if (window.SFX && window.SFX.click) window.SFX.click();
    };

    function renderDuoCurrentStep() {
        const lesson = duoState.currentLesson;
        const step = lesson.steps[duoState.currentStepIdx];
        const totalSteps = lesson.steps.length;
        const progressPct = Math.round(((duoState.currentStepIdx) / totalSteps) * 100);

        // Update progress bar
        const fill = document.getElementById('duo-lesson-progress-fill');
        if (fill) fill.style.width = `${progressPct}%`;

        // Update hearts
        const heartsContainer = document.getElementById('duo-hearts-container');
        if (heartsContainer) {
            let hHtml = '';
            for (let i = 0; i < 3; i++) {
                hHtml += `
                <svg class="w-6 h-6 transition-transform ${i < duoState.hearts ? 'text-rose-500 fill-rose-500 animate-pulse' : 'text-slate-700'}" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                `;
            }
            heartsContainer.innerHTML = hHtml;
        }

        // Render stage
        const stage = document.getElementById('duo-stage-content');
        if (!stage) return;

        const mentor = lesson.mentor;
        const mentorAvatar = renderAvatar(mentor.seed, 120);

        if (step.type === 'dialogue') {
            stage.innerHTML = `
            <div class="flex flex-col items-center max-w-lg mx-auto w-full my-auto py-4">
                <!-- Mentor Avatar with glowing aura -->
                <div class="relative mb-6">
                    <div class="absolute inset-0 rounded-full blur-xl opacity-40 animate-pulse" style="background: ${mentor.color}"></div>
                    <div class="relative rounded-3xl p-3 bg-slate-900 border-2 shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform" style="border-color: ${mentor.accentBorder}">
                        ${mentorAvatar}
                    </div>
                    <span class="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-black text-white bg-slate-900 border border-slate-700 shadow-md whitespace-nowrap">
                        ${mentor.name}
                    </span>
                </div>

                <!-- Speech Bubble -->
                <div class="relative bg-slate-900/90 border-2 border-slate-700/80 rounded-3xl p-6 shadow-2xl w-full text-right mb-6 text-slate-100">
                    <div class="absolute -top-3 right-10 w-6 h-6 bg-slate-900 border-t-2 border-r-2 border-slate-700 rotate-[-45deg]"></div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold" style="background:${mentor.accentBg}; color:${mentor.color}">
                            ${mentor.role}
                        </span>
                    </div>
                    <p class="text-base md:text-lg leading-relaxed font-medium text-slate-200" id="duo-speech-text">
                        ${step.text}
                    </p>
                </div>

                <!-- Next button -->
                <button type="button"
                    onclick="window.nextDuoStep()"
                    class="vibefarsi-shine w-full py-4 rounded-2xl font-black text-slate-950 text-base shadow-xl transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer"
                    style="background: linear-gradient(135deg, ${mentor.color}, #10b981)"
                >
                    ${step.buttonText || 'ادامه بده →'}
                </button>
            </div>
            `;
        } else if (step.type === 'quiz') {
            duoState.selectedOption = null;
            duoState.isAnswerChecked = false;

            stage.innerHTML = `
            <div class="flex flex-col items-center max-w-lg mx-auto w-full my-auto py-2">
                <!-- Mentor mini avatar + question prompt -->
                <div class="flex items-center gap-4 w-full bg-slate-900/80 border border-slate-800 p-4 rounded-3xl mb-6 shadow-lg">
                    <div class="w-16 h-16 shrink-0 rounded-2xl bg-slate-800 p-1 border border-slate-700 flex items-center justify-center">
                        ${renderAvatar(mentor.seed, 60)}
                    </div>
                    <div class="text-right">
                        <span class="text-xs font-bold text-slate-400 block">${mentor.name} می‌پرسد:</span>
                        <h4 class="text-sm md:text-base font-black text-white leading-snug mt-0.5">${step.question}</h4>
                    </div>
                </div>

                <!-- Multiple choice options -->
                <div class="flex flex-col gap-3 w-full mb-6" id="duo-options-list">
                    ${step.options.map((opt, oIdx) => `
                        <button type="button"
                            onclick="window.selectDuoOption(${oIdx})"
                            id="duo-opt-${oIdx}"
                            class="duo-quiz-opt text-right p-4 rounded-2xl font-bold text-sm md:text-base border-2 bg-slate-900/70 border-slate-700 text-slate-200 hover:border-cyan-400 hover:bg-slate-800/80 transition-all cursor-pointer flex items-center justify-between"
                        >
                            <span>${opt}</span>
                            <span class="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center text-xs text-slate-400">
                                ${oIdx === 0 ? 'الف' : oIdx === 1 ? 'ب' : 'ج'}
                            </span>
                        </button>
                    `).join('')}
                </div>

                <!-- Check button -->
                <button type="button"
                    id="duo-check-btn"
                    onclick="window.checkDuoAnswer()"
                    disabled
                    class="w-full py-4 rounded-2xl font-black text-slate-950 text-base shadow-xl transition-all opacity-50 cursor-not-allowed bg-gradient-to-r from-cyan-400 to-emerald-400"
                >
                    بررسی پاسخ ✓
                </button>
            </div>
            `;
        }
    }

    // Option Selection
    window.selectDuoOption = function(idx) {
        if (duoState.isAnswerChecked) return;
        duoState.selectedOption = idx;

        document.querySelectorAll('.duo-quiz-opt').forEach((btn, i) => {
            if (i === idx) {
                btn.classList.add('border-cyan-400', 'bg-cyan-950/40', 'text-cyan-300');
                btn.classList.remove('border-slate-700', 'bg-slate-900/70');
            } else {
                btn.classList.remove('border-cyan-400', 'bg-cyan-950/40', 'text-cyan-300');
                btn.classList.add('border-slate-700', 'bg-slate-900/70');
            }
        });

        const checkBtn = document.getElementById('duo-check-btn');
        if (checkBtn) {
            checkBtn.disabled = false;
            checkBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            checkBtn.classList.add('hover:brightness-110', 'active:scale-98', 'cursor-pointer');
        }
        if (window.SFX && window.SFX.click) window.SFX.click();
    };

    // Check Answer
    window.checkDuoAnswer = function() {
        if (duoState.selectedOption === null || duoState.isAnswerChecked) return;
        duoState.isAnswerChecked = true;

        const lesson = duoState.currentLesson;
        const step = lesson.steps[duoState.currentStepIdx];
        const isCorrect = (duoState.selectedOption === step.correct);

        const checkBtn = document.getElementById('duo-check-btn');
        if (checkBtn) checkBtn.classList.add('hidden');

        const optBtn = document.getElementById(`duo-opt-${duoState.selectedOption}`);

        // Show bottom result sheet
        const sheet = document.getElementById('duo-result-sheet');
        if (!sheet) return;

        if (isCorrect) {
            if (optBtn) {
                optBtn.classList.add('border-emerald-500', 'bg-emerald-950/60', 'text-emerald-200');
                optBtn.classList.remove('border-cyan-400', 'bg-cyan-950/40');
            }
            if (window.SFX && window.SFX.correct) window.SFX.correct();
            if (window.launchConfetti) window.launchConfetti();

            sheet.className = 'fixed bottom-0 inset-x-0 bg-emerald-950/95 border-t-2 border-emerald-500 p-6 z-30 transition-transform duration-300 flex flex-col items-center';
            sheet.innerHTML = `
            <div class="max-w-lg w-full flex items-center justify-between gap-4">
                <div class="text-right">
                    <div class="flex items-center gap-2 text-emerald-400 font-black text-lg mb-1">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                        <span>فوق‌العاده بود! آفرین 🎉</span>
                    </div>
                    <p class="text-xs md:text-sm text-emerald-200 leading-relaxed font-medium">${step.explanation}</p>
                </div>
                <button type="button"
                    onclick="window.nextDuoStep()"
                    class="shrink-0 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 px-6 rounded-2xl shadow-lg transition-all active:scale-95 text-sm"
                >
                    ادامه بده →
                </button>
            </div>
            `;
            sheet.classList.remove('hidden');
        } else {
            if (optBtn) {
                optBtn.classList.add('border-rose-500', 'bg-rose-950/60', 'text-rose-200', 'vibefarsi-shake');
            }
            duoState.hearts = Math.max(0, duoState.hearts - 1);
            if (window.SFX && window.SFX.wrong) window.SFX.wrong();

            sheet.className = 'fixed bottom-0 inset-x-0 bg-rose-950/95 border-t-2 border-rose-500 p-6 z-30 transition-transform duration-300 flex flex-col items-center';
            sheet.innerHTML = `
            <div class="max-w-lg w-full flex items-center justify-between gap-4">
                <div class="text-right">
                    <div class="flex items-center gap-2 text-rose-400 font-black text-lg mb-1">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>
                        <span>اشکالی نداره! باهم یاد می‌گیریم 😊</span>
                    </div>
                    <p class="text-xs md:text-sm text-rose-200 leading-relaxed font-medium">${step.explanation}</p>
                </div>
                <button type="button"
                    onclick="window.nextDuoStep()"
                    class="shrink-0 bg-rose-500 hover:bg-rose-400 text-slate-950 font-black py-3 px-6 rounded-2xl shadow-lg transition-all active:scale-95 text-sm"
                >
                    متوجه شدم →
                </button>
            </div>
            `;
            sheet.classList.remove('hidden');

            // Update hearts UI
            const heartsContainer = document.getElementById('duo-hearts-container');
            if (heartsContainer) {
                let hHtml = '';
                for (let i = 0; i < 3; i++) {
                    hHtml += `
                    <svg class="w-6 h-6 ${i < duoState.hearts ? 'text-rose-500 fill-rose-500' : 'text-slate-700'}" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    `;
                }
                heartsContainer.innerHTML = hHtml;
            }
        }
    };

    // Advance to next step
    window.nextDuoStep = function() {
        const sheet = document.getElementById('duo-result-sheet');
        if (sheet) sheet.classList.add('hidden');

        const lesson = duoState.currentLesson;
        if (!lesson) return;

        duoState.currentStepIdx++;

        if (duoState.currentStepIdx >= lesson.steps.length) {
            finishDuoLesson();
        } else {
            renderDuoCurrentStep();
        }
        if (window.SFX && window.SFX.click) window.SFX.click();
    };

    // Lesson Completed
    function finishDuoLesson() {
        const lesson = duoState.currentLesson;
        const currentIdx = DUO_LESSONS.indexOf(lesson);

        // Advance unlocked level if applicable
        if (currentIdx === duoState.unlockedLevel) {
            duoState.unlockedLevel = Math.min(DUO_LESSONS.length - 1, duoState.unlockedLevel + 1);
        }

        duoState.stars[lesson.id] = Math.max(duoState.stars[lesson.id] || 0, duoState.hearts > 1 ? 3 : 2);
        duoState.xp += lesson.xp;
        saveDuoProgress();

        if (window.SFX && window.SFX.victory) window.SFX.victory();
        if (window.launchConfetti) window.launchConfetti();

        const stage = document.getElementById('duo-stage-content');
        if (!stage) return;

        const mentor = lesson.mentor;
        const mentorAvatar = renderAvatar(mentor.seed, 130);

        stage.innerHTML = `
        <div class="flex flex-col items-center max-w-lg mx-auto w-full my-auto text-center py-6">
            <div class="relative mb-6">
                <div class="absolute inset-0 rounded-full blur-2xl opacity-60 bg-emerald-500 animate-pulse"></div>
                <div class="relative rounded-3xl p-4 bg-slate-900 border-2 border-emerald-400 shadow-2xl">
                    ${mentorAvatar}
                </div>
            </div>

            <span class="px-3.5 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-3">
                درس با موفقیت فتح شد! 🏆
            </span>
            <h2 class="text-2xl md:text-3xl font-black text-white mb-2">${lesson.title}</h2>
            <p class="text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                ${mentor.name}: «فوق‌العاده بود! تسلط شما بر این مبحث تحسین‌برانگیز است. به پیشروی در جدول ادامه دهید!»
            </p>

            <div class="grid grid-cols-3 gap-3 w-full mb-8">
                <div class="bg-slate-900/90 border border-slate-700/80 p-3 rounded-2xl text-center">
                    <span class="text-[11px] font-bold text-slate-400 block">امتیاز کسب‌شده</span>
                    <span class="text-lg font-black text-cyan-400 font-english">+${lesson.xp} XP</span>
                </div>
                <div class="bg-slate-900/90 border border-slate-700/80 p-3 rounded-2xl text-center">
                    <span class="text-[11px] font-bold text-slate-400 block">ستاره‌ها</span>
                    <span class="text-lg font-black text-amber-400">★★★</span>
                </div>
                <div class="bg-slate-900/90 border border-slate-700/80 p-3 rounded-2xl text-center">
                    <span class="text-[11px] font-bold text-slate-400 block">جان‌های باقی‌مانده</span>
                    <span class="text-lg font-black text-rose-400">❤️ ${duoState.hearts}</span>
                </div>
            </div>

            <button type="button"
                onclick="window.returnToDuoPath()"
                class="vibefarsi-shine w-full py-4 rounded-2xl font-black text-slate-950 text-base shadow-xl bg-gradient-to-r from-emerald-400 to-teal-300 hover:brightness-110 active:scale-98 cursor-pointer"
            >
                بازگشت به نقشه ماجراجویی →
            </button>
        </div>
        `;
    }

    // Return to path
    window.returnToDuoPath = function() {
        document.getElementById('duo-lesson-view').classList.add('hidden');
        document.getElementById('duo-path-view').classList.remove('hidden');
        renderDuoPath();
        if (window.SFX && window.SFX.click) window.SFX.click();
    };

    // Open Fullscreen App
    window.openDuoLearnApp = function() {
        const app = document.getElementById('duo-learn-app');
        if (!app) return;
        app.classList.remove('hidden');
        renderDuoPath();
        if (window.SFX && window.SFX.click) window.SFX.click();
    };

    window.closeDuoLearnApp = function() {
        const app = document.getElementById('duo-learn-app');
        if (!app) return;
        app.classList.add('hidden');
        if (window.SFX && window.SFX.click) window.SFX.click();
    };

    window.DUO_LESSONS = DUO_LESSONS;

    // Close Fullscreen App
    window.closeDuoLearnApp = function() {
        const app = document.getElementById('duo-learn-app');
        if (!app) return;

        app.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        if (window.SFX && window.SFX.click) window.SFX.click();
    };

    // Auto-init on load
    document.addEventListener('DOMContentLoaded', () => {
        loadDuoProgress();
    });

})();
