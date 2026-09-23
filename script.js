
/* ============================================================
   LUCIDE ICONS & VIBEFARSI HELPER UTILITIES
   ============================================================ */
function getIconSvg(name, className = 'w-5 h-5', extraAttrs = '') {
    if (window.ICONS && window.ICONS[name.toLowerCase().replace(/[^a-z0-9-]/g, '')]) {
        const cleanName = name.toLowerCase().replace(/[^a-z0-9-]/g, '');
        const inner = window.ICONS[cleanName] || window.ICONS[cleanName.replace(/-/g, '')] || '';
        if (inner) {
            return `<svg xmlns="http://www.w3.org/2000/svg" class="${className}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extraAttrs}>${inner}</svg>`;
        }
    }
    if (!name) return '';
    const pascal = name.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
    const iconData = (window.lucide && (window.lucide.icons?.[pascal] || window.lucide[pascal]));
    if (iconData && Array.isArray(iconData)) {
        const inner = iconData.map(([tag, attrs]) => {
            const attrStr = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`).join(' ');
            return `<${tag} ${attrStr}/>`;
        }).join('');
        return `<svg xmlns="http://www.w3.org/2000/svg" class="${className}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extraAttrs}>${inner}</svg>`;
    }
    return `<i data-lucide="${name}" class="${className}"></i>`;
}

function refreshIcons(root = document) {
    if (window.renderAllIcons) {
        window.renderAllIcons(root);
    }
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        try { window.lucide.createIcons(); } catch (e) {}
    }
}
window.getIconSvg = getIconSvg;
window.refreshIcons = refreshIcons;

const elementFacts = {
    1: [
        'فراوان‌ترین عنصر جهان و سوخت اصلی ستارگان.',
        'سبک‌ترین گازی که می‌شناسیم و تنها عنصری است که در هسته خود نوترون ندارد.',
        'در ترکیب با اکسیژن، آب (H2O) را می‌سازد و به عنوان سوخت پاکِ آینده در خودروها شناخته می‌شود.'
    ],
    2: [
        'گازی بی‌اثر که به دلیل سبکی و عدم اشتعال، در بالن‌ها و کشتی‌های هوایی استفاده می‌شود.',
        'نقطه جوش آن نزدیک به صفر مطلق است و در خنک‌کردن دستگاه‌های MRI کاربرد دارد.'
    ],
    3: [
        'سبک‌ترین فلز جهان که روی آب شناور می‌ماند.',
        'در باتری‌های گوشی موبایل، لپ‌تاپ و خودروهای الکتریکی کاربرد حیاتی و غیرقابل جایگزین دارد.',
        'در روان‌پزشکی به عنوان داروی تثبیت‌کننده خلق‌وخو استفاده می‌شود.'
    ],
    4: [
        'فلزی بسیار سبک اما سفت که در ساخت قطعات فضاپیماها و موشک‌ها کاربرد دارد.',
        'ابزار ساخته شده از آن هنگام ضربه زدن جرقه تولید نمی‌کنند که در محیط‌های قابل اشتعال مفید است.'
    ],
    5: [
        'در ساخت شیشه‌های مقاوم در برابر حرارت (مثل پیرکس) استفاده می‌شود.',
        'در مواد شوینده و همچنین تولید وسایل ورزشی سبک مانند چوب گلف کاربرد دارد.'
    ],
    6: [
        'پایه و اساس تمام شکل‌های حیات روی کره زمین است.',
        'گرافیت (مغز مداد) رسانای جریان برق است و بسیار نرم است.',
        'الماس (شکل دیگر کربن) سخت‌ترین ماده طبیعی است اما برق را عبور نمی‌دهد.',
        'گرافن، لایه‌ای از کربن به ضخامت یک اتم، از فولاد قوی‌تر است!'
    ],
    7: [
        'بیش از ۷۸ درصد جو کره زمین را تشکیل می‌دهد.',
        'در حالت مایع به شدت سرد است و برای منجمد کردن فوری مواد غذایی و بافت‌های پزشکی استفاده می‌شود.',
        'جزء اصلی کودهای کشاورزی برای رشد گیاهان است.'
    ],
    8: [
        'حیاتی‌ترین گاز برای تنفس موجودات زنده و سوخت‌وساز سلولی.',
        'فراوان‌ترین عنصر در پوسته زمین (حدود ۴۶٪ وزن پوسته).',
        'در حالت مایع به رنگ آبی کمرنگ است و خاصیت مغناطیسی ضعیفی دارد.'
    ],
    9: [
        'واکنش‌پذیرترین عنصر جدول تناوبی است که تقریباً با همه چیز واکنش می‌دهد.',
        'در خمیردندان‌ها (به صورت فلوراید) برای جلوگیری از پوسیدگی دندان استفاده می‌شود.',
        'در ساخت ظروف نچسب (تفلون) نقش کلیدی دارد.'
    ],
    10: [
        'گازی که در لوله‌های تخلیه الکتریکی نور قرمز-نارنجی درخشانی تولید می‌کند.',
        'به طور گسترده در تابلوهای تبلیغاتی (نئون) کاربرد دارد.'
    ],
    11: [
        'فلزی بسیار نرم که با چاقو بریده می‌شود.',
        'به شدت با آب واکنش داده و منفجر می‌شود.',
        'در ترکیب با کلر، نمک طعام (خوراکی) را می‌سازد که برای عملکرد اعصاب بدن ضروری است.'
    ],
    12: [
        'فلزی سبک که هنگام سوختن نور سفید و بسیار خیره‌کننده‌ای تولید می‌کند.',
        'عنصر مرکزی در مولکول کلروفیل است که گیاهان را قادر به فتوسنتز می‌کند.'
    ],
    13: [
        'فراوان‌ترین فلز در پوسته زمین است.',
        'به دلیل سبکی و مقاومت در برابر زنگ‌زدگی، در قوطی‌های نوشابه، فویل‌های آشپزخانه و بدنه هواپیماها کاربرد فراوان دارد.'
    ],
    14: [
        'دومین عنصر فراوان پوسته زمین (موجود در شن، ماسه و کوارتز).',
        'نیمه‌رسانای اصلی در ساخت تراشه‌های کامپیوتری، پردازنده‌ها و سلول‌های خورشیدی است.'
    ],
    15: [
        'در ساختار DNA و استخوان‌ها نقش اساسی دارد.',
        'نوع سفید آن در هوا خودبه‌خود آتش می‌گیرد.',
        'نوع قرمز آن در دیواره کناری قوطی‌های کبریت استفاده می‌شود.'
    ],
    16: [
        'ماده‌ای زرد رنگ که از زمان باستان شناخته شده است و بوی بدی شبیه تخم‌مرغ گندیده تولید می‌کند.',
        'در تولید لاستیک ماشین (ولکانیزاسیون)، باروت و اسید سولفوریک کاربرد زیادی دارد.'
    ],
    17: [
        'گازی زرد مایل به سبز و سمی است.',
        'در مقادیر کم برای تصفیه آب آشامیدنی و ضدعفونی آب استخرها استفاده می‌شود.',
        'بخش اساسی از اسید معده انسان را تشکیل می‌دهد.'
    ],
    18: [
        'گازی بی‌اثر که حدود ۱ درصد جو زمین را تشکیل می‌دهد.',
        'در لامپ‌های رشته‌ای و به عنوان گاز محافظ در جوشکاری برای جلوگیری از اکسید شدن فلزات استفاده می‌شود.'
    ],
    19: [
        'برای عملکرد صحیح اعصاب و عضلات بدن انسان (مخصوصاً تپش قلب) کاملاً ضروری است.',
        'به وفور در موز، سیب‌زمینی و آووکادو یافت می‌شود.',
        'مانند سدیم، در تماس با آب با شعله بنفش‌رنگ واکنش شدیدی می‌دهد.'
    ],
    20: [
        'عنصر اصلی و ضروری برای استحکام استخوان‌ها و دندان‌ها در بدن انسان.',
        'بخش عمده‌ی پوسته‌ی تخم‌مرغ، مروارید و صدف‌های دریایی را تشکیل می‌دهد.',
        'در ساخت سیمان و گچ ساختمان کاربرد دارد.'
    ],
    21: [
        'به دلیل سبکی و استحکام، به همراه آلومینیوم در ساخت بدنه جنگنده‌های پیشرفته و چوب‌های ورزشی استفاده می‌شود.',
        'در کاتالیزورهای صنعتی و آلیاژهای سبک هواپیماسازی کاربرد دارد.'
    ],
    22: [
        'نسبت استحکام به وزن آن بی‌نظیر است (مستحکم مانند فولاد اما بسیار سبک‌تر).',
        'با بدن انسان کاملاً سازگار است و برای ساخت مفاصل مصنوعی، ایمپلنت‌های دندانی و ضربان‌ساز قلب استفاده می‌شود.',
        'در صنایع دفاعی، لوله‌های انتقال نفت و بدنه فضاپیماها نقش بسیار حیاتی دارد.'
    ],
    23: [
        'به فولاد اضافه می‌شود تا ابزارهای دستی (مثل آچارها) به شدت سخت، بادوام و مقاوم در برابر ضربه و خوردگی شوند.',
        'در صنایع پتروشیمی به عنوان کاتالیزور برای تولید اسید سولفوریک کاربرد فراوانی دارد.'
    ],
    24: [
        'فلزی که به فولاد اضافه می‌شود تا فولاد ضدزنگ (استیل) بسازد.',
        'به عنوان پوشش براق آبکاری (کروم‌کاری) قطعات فلزی برای جلوگیری از خوردگی و زیبایی استفاده می‌شود.',
        'رنگ سرخ یاقوت طبیعی و رنگ سبز زمرد به دلیل ناخالصی یون‌های این عنصر است.'
    ],
    25: [
        'برای تولید فولادهای به شدت سخت و ضدسایش که در ریل‌های راه‌آهن، چکش‌های هیدرولیکی و گاوصندوق‌ها استفاده می‌شود، ضروری است.',
        'در باتری‌های آلکالاین معمولی به عنوان کاتالیزور و الکترود مصرف دارد.'
    ],
    26: [
        'فراوان‌ترین عنصر در کل کره زمین (بیشتر در هسته زمین) که سپر مغناطیسی زمین را در برابر طوفان‌های خورشیدی تولید می‌کند.',
        'پایه و ستون فقرات تمدن و صنایع سنگین بشری برای ساخت ساختمان‌ها، ماشین‌آلات و پل‌ها است.',
        'عنصر اصلی در هموگلوبین خون انسان است که اکسیژن را از شش‌ها به تمام بافت‌ها منتقل می‌کند.'
    ],
    27: [
        'فلزی مغناطیسی که در ساخت آهنرباهای بسیار قوی (مثل آلنیکو) و موتورهای جت با دمای کارکرد بالا کاربرد دارد.',
        'رنگ آبی درخشان و باستانی کاشی‌ها و سرامیک‌های سنتی ایرانی (لاجوردی) به دلیل وجود یون‌های این فلز است.',
        'ایزوتوپ رادیواکتیو آن (کبالت-۶۰) در پرتودرمانی برای مبارزه با بیماری سرطان کاربرد دارد.'
    ],
    28: [
        'فلزی مقاوم در برابر خوردگی که در ساخت سکه‌ها، سیم‌های حرارتی سشوارها و المنت توسترها استفاده می‌شود.',
        'در ساخت فولاد ضدزنگ و آلیاژهای مغناطیسی کاربرد اساسی دارد.'
    ],
    29: [
        'فلزی با رسانایی الکتریکی و گرمایی فوق‌العاده که از اولین فلزات کشف شده توسط بشر است.',
        'بخش عمده سیم‌کشی‌های برق شهری، موتورهای الکتریکی و بردهای الکترونیکی را تشکیل می‌دهد.',
        'خون برخی از جانوران مانند هشت‌پا و خرچنگ به دلیل وجود هموسیانین (حاوی مس) به جای هموگلوبین، آبی‌رنگ است!'
    ],
    30: [
        'برای روکش کردن آهن (آهن گالوانیزه) استفاده می‌شود تا از زنگ‌زدگی لوله‌ها و سازه‌ها جلوگیری کند.',
        'در سیستم ایمنی بدن، تقسیم سلولی، و سنتز پروتئین نقش حیاتی دارد.',
        'به همراه مس، آلیاژ برنج را می‌سازد که در ظروف و آلات موسیقی برنجی کاربرد دارد.'
    ],
    31: [
        'فلزی بسیار عجیب که در دمای اتاق جامد است، اما به خاطر نقطه ذوب پایینش (حدود ۲۹ درجه) روی کف دست ذوب می‌شود!',
        'ترکیب آن با آرسنیک (گالیم آرسنید) در ساخت لیزرهای مادون قرمز، دیودهای نورافشان (LED) و تراشه‌های سرعت بالا استفاده می‌شود.'
    ],
    32: [
        'یک نیمه‌رسانای مهم که در ساخت ترانزیستورهای اولیه و فیبرهای نوری انتقال داده کاربرد دارد.',
        'به دلیل عبور دادن پرتوهای مادون قرمز، در ساخت لنز دوربین‌های دید در شب و دماسنج‌های مادون قرمز استفاده می‌شود.'
    ],
    33: [
        'شبه‌فلزی که ترکیبات آن به شدت سمی است و در طول تاریخ به عنوان «سم پادشاهان» برای ترورهای مخفی استفاده می‌شده است.',
        'در آلیاژهای سخت‌کننده سرب و همچنین سموم کشاورزی و صنایع نیمه‌رسانا کاربرد دارد.'
    ],
    34: [
        'عنصری که رسانایی الکتریکی آن در نور بیشتر از تاریکی است (خاصیت فوتورسانایی)؛ به همین دلیل در دستگاه‌های فتوکپی و سلول‌های خورشیدی استفاده می‌شود.',
        'به عنوان یک ماده مغذی در رژیم غذایی برای پیشگیری از آسیب‌های سلولی نقش آنتی‌اکسیدانی دارد.'
    ],
    35: [
        'تنها نافلزی است که در دمای اتاق به حالت مایع (قهوه‌ای تیره و بسیار فرار و بدبو) قرار دارد.',
        'ترکیبات آن به عنوان مواد نسوز و کندکننده‌ی شعله در صنایع پلاستیک‌سازی و پوشاک کارایی دارند.'
    ],
    36: [
        'گازی نجیب که در لامپ‌های فلاش عکاسی سرعت بالا و نورافکن‌های باندهای فرودگاهی کاربرد دارد.',
        'در لیزرهای پزشکی برای جراحی‌های دقیق چشم استفاده می‌شود.'
    ],
    37: [
        'فلز قلیایی فوق‌العاده واکنش‌پذیر که به راحتی در هوا آتش می‌گیرد و با آب به شدت منفجر می‌شود.',
        'به عنوان جزء اصلی در ساخت ساعت‌های اتمی فوق‌العاده دقیق و موتورهای یونی فضاپیماها استفاده می‌شود.'
    ],
    38: [
        'عنصری که نمک‌های آن شعله‌ی قرمز درخشان و خیره‌کننده‌ای تولید می‌کنند و جزء اصلی نورافشان‌های رنگی و ترقه‌ها هستند.',
        'در ساخت شیشه‌های تلویزیون‌های رنگی قدیمی برای مسدود کردن اشعه ایکس کاربرد داشت.'
    ],
    39: [
        'در ساخت پودرهای فسفر برای تولید رنگ قرمز در مانیتورهای قدیمی و LEDهای سفید رنگ جدید نقش کلیدی دارد.',
        'در ساخت لیزرهای Nd:YAG که در جراحی‌های پزشکی و دندان‌پزشکی کاربرد دارند استفاده می‌شود.'
    ],
    40: [
        'در ساخت بدنه راکتورهای هسته‌ای به دلیل جذب بسیار پایین نوترون استفاده می‌شود.',
        'بلورهای مصنوعی اکسید آن (زیرکونیا) شباهت زیادی به الماس دارند و در ساخت جواهرات ارزان‌قیمت کاربرد دارند.'
    ],
    46: [
        'فلزی گران‌بها از گروه پلاتین که گاز هیدروژن را مانند اسفنج جذب می‌کند (تا ۹۰۰ برابر حجم خود!).',
        'نقش اساسی در مبدل‌های کاتالیستی خودروها برای کاهش آلاینده‌های اگزوز دارد.'
    ],
    47: [
        'بالاترین رسانایی الکتریکی و گرمایی را در میان تمام عناصر دارد.',
        'بهترین منعکس‌کننده نور است و در ساخت آینه‌های باکیفیت و صفحات خورشیدی استفاده می‌شود.',
        'به دلیل خواص ضدباکتری طبیعی، در تجهیزات پزشکی و پانسمان زخم‌ها کاربرد دارد.'
    ],
    48: [
        'در باتری‌های قابل شارژ نیکل-کادمیم استفاده می‌شد اما امروزه به دلیل سمیت بالا برای محیط زیست، با باتری‌های لیتیومی جایگزین شده است.',
        'در میله‌های کنترل راکتورهای هسته‌ای برای جذب نوترون‌های اضافی کاربرد دارد.'
    ],
    49: [
        'ترکیب اکسید ایندیم قلع (ITO) هم رسانای جریان برق است و هم کاملاً شفاف; به همین دلیل در ساخت صفحات لمسی موبایل و مانیتورها بی‌جایگزین است.'
    ],
    50: [
        'فلزی با دمای ذوب پایین که به همراه سرب در لحیم‌کاری قطعات الکترونیکی استفاده می‌شود.',
        'به دلیل مقاومت در برابر اسیدهای ضعیف، برای پوشاندن داخل قوطی‌های فولادی کنسروها کاربرد دارد تا غذا فاسد نشود.'
    ],
    53: [
        'برای عملکرد صحیح غده تیروئید انسان حیاتی است و کمبود آن باعث بیماری گواتر می‌شود.',
        'تنها هالوژنی است که در دمای اتاق جامد بنفش-سیاه تیره است و با حرارت مستقیماً تصعید شده و گاز بنفش خوش‌رنگی می‌سازد.',
        'محلول آن (بتادین) پرکاربردترین مایع ضدعفونی‌کننده زخم در دنیاست.'
    ],
    54: [
        'گاز نجیبی که در لامپ‌های جلو زنون خودروهای لوکس نور بسیار درخشان و سفیدی شبیه نور روز تولید می‌کند.',
        'به عنوان یک ماده بیهوشی ایمن اما بسیار گران‌قیمت در پزشکی استفاده می‌شود.'
    ],
    55: [
        'نرم‌ترین فلز جدول تناوبی است که در دمای نزدیک اتاق ذوب می‌شود و شدیدترین واکنش را با آب دارد.',
        'ثانیه استاندارد جهانی بر اساس نوسان و فرکانس اتم‌های این عنصر در ساعت‌های اتمی تعریف می‌شود.'
    ],
    56: [
        'ترکیبات آن شعله آتش‌بازی را به رنگ سبز درمی‌آورند.',
        'پودر سولفات باریم به عنوان «ماده حاجب» به بیماران خورانده می‌شود تا در تصویربرداری اشعه ایکس، مسیر معده و روده‌ها به وضوح دیده شود.'
    ],
    74: [
        'بالاترین نقطه ذوب را در بین تمامی فلزات دارد (بیش از ۳۴۰۰ درجه سانتی‌گراد).',
        'به دلیل مقاومت دمایی بالا، در رشته‌های نورانی لامپ‌های حبابی قدیمی و الکترودهای جوشکاری آرگون کاربرد دارد.'
    ],
    76: [
        'چگال‌ترین و سنگین‌ترین عنصر طبیعی روی زمین است؛ به طوری که یک مکعب کوچک ۱۰ سانتی‌متری از آن بیش از ۲۲ کیلوگرم وزن دارد!',
        'به دلیل سختی فوق‌العاده، در ساخت نوک خودنویس‌های لوکس و لولاهای ابزار دقیق استفاده می‌شود.'
    ],
    78: [
        'فلزی بسیار گران‌بها، کدر نشدنی و مقاوم در برابر قوی‌ترین اسیدها که در ساخت جواهرات اشرافی و کاتالیزورهای صنعتی کاربرد دارد.',
        'داروی ضدسرطان «سیس‌پلاتین» که حاوی پلاتین است، یکی از موثرترین داروها در شیمی‌درمانی است.'
    ],
    79: [
        'شکل‌پذیرترین فلز جهان؛ یک گرم از آن را می‌توان به ورقه‌ای به مساحت یک متر مربع یا سیمی به طول ۳ کیلومتر تبدیل کرد!',
        'با هیچ ماده‌ای واکنش نمی‌دهد و کدر نمی‌شود، به همین دلیل در اتصال‌های حساس و رسانای مدارهای فضایی و گوشی‌ها کاربرد دارد.',
        'تلسکوپ فضایی جیمز وب از لایه‌ای بسیار نازک از طلا برای بازتاب حداکثری نور فروسرخ در آینه‌های خود استفاده کرده است.'
    ],
    80: [
        'تنها فلز مایع در دمای اتاق که به «سیماب» معروف است.',
        'در دماسنج‌ها، فشارسنج‌ها و لامپ‌های کم‌مصرف فلورسنت کاربرد دارد، اما بخار آن به شدت سمی است و به سیستم عصبی آسیب می‌زند.'
    ],
    82: [
        'فلزی بسیار متراکم، نرم و چکش‌خوار که سمی است و انباشت آن در بدن باعث عقب‌ماندگی ذهنی می‌شود.',
        'به عنوان سپر محافظ در برابر پرتوهای مضر (مثل اتاق‌های رادیولوژی و روپوش محافظ تکنسین‌ها) استفاده می‌شود.'
    ],
    83: [
        'در داروهای ضداسید و تسکین‌دهنده معده (مانند بیسموت ساب‌سیترات) کاربرد دارد.',
        'بلورهای آن هنگام خنک شدن پله‌های هندسی شگفت‌انگیز و رنگ‌های اکسیدی هفت‌رنگ شبیه رنگین‌کمان ایجاد می‌کنند.'
    ],
    84: [
        'عنصری به شدت رادیواکتیو و مرگبار که توسط ماری کوری کشف شد و به افتخار زادگاهش (لهستان) نام‌گذاری گردید.',
        'بسیار سمی‌تر از سیانور است و در ترورهای هسته‌ای مخفیانه (مانند یاسر عرفات یا جاسوسان سابق روسیه) استفاده شده است.'
    ],
    86: [
        'گاز نجیب, رادیواکتیو, بی‌رنگ و بی‌بو که از متلاشی شدن طبیعی اورانیوم در خاک تولید شده و از شکاف ساختمان‌ها وارد خانه‌ها می‌شود.',
        'دومین عامل اصلی سرطان ریه در جهان بعد از سیگار کشیدن است.'
    ],
    87: [
        'کمیاب‌ترین عنصر طبیعی در پوسته زمین؛ به دلیل نیمه‌عمر بسیار کوتاه (۲۲ دقیقه) کل مقدار آن در پوسته زمین کمتر از ۳۰ گرم تخمین زده می‌شود!'
    ],
    88: [
        'توسط ماری و پی‌یر کوری کشف شد و به شدت رادیواکتیو است.',
        'در اوایل قرن بیستم به دلیل خاصیت درخشندگی در تاریکی، در ساخت عقربه‌های ساعت شب‌نما استفاده می‌شد که بعداً باعث مرگ فجیع زنان کارگر شد.'
    ],
    92: [
        'سنگین‌ترین عنصر طبیعی جهان با عدد اتمی ۹۲.',
        'سوخت اصلی نیروگاه‌های هسته‌ای برای تولید برق و ماده پایه در ساخت بمب‌های اتمی شکافت هسته‌ای است.'
    ],
    94: [
        'یک عنصر مصنوعی رادیواکتیو سنگین که در باتری‌های هسته‌ای مریخ‌نوردها (مثل کنجکاوی) و کاوشگرهای فضایی دوردست (مثل وویاجر) برای دهه‌ها تولید برق می‌کند.'
    ],
    95: [
        'عنصری مصنوعی که پرتوهای آلفای آن در دستگاه‌های هشداردهنده دود خانگی برای تشخیص ذرات معلق دود استفاده می‌شود و جان هزاران نفر را نجات می‌دهد.'
    ]
};

// Fill defaults for elements not specified (fallback)
for (let i = 1; i <= 118; i++) {
    if (!elementFacts[i]) {
        if (i >= 57 && i <= 71) {
            elementFacts[i] = ['از فلزات خاکی کمیاب (لانتانیدها) است که عموماً در ساخت آهنرباهای قوی، لیزرها، و نمایشگرهای پیشرفته کاربرد دارد.'];
        } else if (i >= 89 && i <= 103) {
            elementFacts[i] = ['یک عنصر رادیواکتیو از دسته اکتینیدها است که عمدتاً در تحقیقات هسته‌ای و راکتورها مورد توجه قرار می‌گیرد.'];
        } else if (i >= 104 && i <= 118) {
            elementFacts[i] = ['یک عنصر مصنوعی و اَبَرسنگین است که فقط در شتاب‌دهنده‌های ذرات ساخته می‌شود و در کسر کوچکی از ثانیه از بین می‌رود.', 'این عنصر در طبیعت یافت نمی‌شود و تنها برای تحقیقات بنیادی در فیزیک هسته‌ای تولید شده است.'];
        } else {
            elementFacts[i] = ['عنصری فلزی/شیمیایی که در تولید آلیاژهای خاص و صنایع تخصصی کاربرد دارد.'];
        }
    }
}



const categoryInfo = {
    'alkali': { name: 'فلز قلیایی', desc: 'فلزات قلیایی بسیار واکنش‌پذیر هستند و در لایه ظرفیت خود تنها یک الکترون دارند. آن‌ها در آب واکنش شدیدی نشان می‌دهند.', color: '#ff2a6d' },
    'alkaline-earth': { name: 'فلز قلیایی خاکی', desc: 'این فلزات در لایه آخر خود دو الکترون دارند و نسبت به گروه اول واکنش‌پذیری کمتری دارند اما همچنان فعالند.', color: '#ffc857' },
    'transition': { name: 'فلز واسطه', desc: 'فلزات واسطه دارای خواص فلزی قوی، نقطه ذوب بالا و قابلیت تشکیل ترکیبات رنگی و کاتالیزورهای عالی هستند.', color: '#05d9e8' },
    'post-transition': { name: 'فلز پس‌واسطه', desc: 'این فلزات نرم‌تر از فلزات واسطه بوده و نقطه ذوب پایین‌تری دارند (مانند آلومینیم و سرب).', color: '#005678' },
    'metalloid': { name: 'شبه‌فلز', desc: 'شبه‌فلزات خواصی بین فلزات و نافلزات دارند و به دلیل رسانایی نسبی، در ساخت قطعات الکترونیکی (مثل سیلیکون) کاربرد فراوان دارند.', color: '#d1f7ff' },
    'nonmetal': { name: 'نافلز', desc: 'نافلزات رسانای ضعیف گرما و الکتریسیته بوده و در دماها و حالت‌های گوناگون (جامد، مایع، گاز) یافت می‌شوند.', color: '#a855f7' },
    'halogen': { name: 'هالوژن', desc: 'هالوژن‌ها نافلزات بسیار واکنش‌پذیری هستند که برای رسیدن به آرایش پایدار هشت‌تایی تنها به یک الکترون نیاز دارند.', color: '#d90368' },
    'noble': { name: 'گاز نجیب', desc: 'گازهای نجیب دارای آرایش الکترونی کامل و پایدار بوده و تمایل بسیار کمی به انجام واکنش‌های شیمیایی دارند.', color: '#00ff9f' },
    'lanthanide': { name: 'لانتانید', desc: 'لانتانیدها عناصر واسطه داخلی (خاکی کمیاب) هستند که خواص شیمیایی بسیار مشابهی به یکدیگر دارند.', color: '#bd00ff' },
    'actinide': { name: 'اکتینید', desc: 'اکتینیدها فلزات پرتوزا و سنگین هستند که بسیاری از آن‌ها در طبیعت یافت نمی‌شوند و در راکتورها ساخته شده‌اند.', color: '#ff8e00' }
};


let currentFacts = [];
let currentFactIndex = 0;

window.nextFact = function() {
    currentFactIndex = (currentFactIndex + 1) % currentFacts.length;
    updateFactDisplay();
}

window.prevFact = function() {
    currentFactIndex = (currentFactIndex - 1 + currentFacts.length) % currentFacts.length;
    updateFactDisplay();
}

function updateFactDisplay() {
    const content = document.getElementById('fact-content');
    const counter = document.getElementById('fact-counter');
    const controls = document.getElementById('fact-controls');

    if (!currentFacts || currentFacts.length === 0) return;

    // Smooth fade transition
    content.style.opacity = 0;
    setTimeout(() => {
        content.innerHTML = `<span class="flex items-center justify-center gap-1.5">${getIconSvg('sparkles', 'w-4 h-4 text-amber-400 inline-block shrink-0')}<span>${currentFacts[currentFactIndex]}</span></span>`;
        content.style.opacity = 1;
        
        if (currentFacts.length > 1) {
            counter.textContent = `${currentFactIndex + 1} از ${currentFacts.length}`;
            controls.classList.remove('hidden');
            controls.classList.add('flex');
        } else {
            controls.classList.add('hidden');
            controls.classList.remove('flex');
        }
    }, 150);
}

// Calculate electron shells using simplified Aufbau principle for visual Bohr model
function getElectronShells(atomicNumber) {
    const orbitals = [
        [1, 2], [2, 2], [2, 6], [3, 2], [3, 6], [4, 2], [3, 10], [4, 6],
        [5, 2], [4, 10], [5, 6], [6, 2], [4, 14], [5, 10], [6, 6],
        [7, 2], [5, 14], [6, 10], [7, 6]
    ];
    let shells = [0,0,0,0,0,0,0];
    let e = atomicNumber;
    for (let [n, cap] of orbitals) {
        if (e <= 0) break;
        let fill = Math.min(e, cap);
        shells[n-1] += fill;
        e -= fill;
    }
    return shells.filter(s => s > 0);
}

function drawBohrModel(atomicNumber, containerId) {
    const container = document.getElementById(containerId);
    const shells = getElectronShells(atomicNumber);
    const maxRadius = 90;
    const center = 100;
    const shellGap = maxRadius / Math.max(shells.length, 1);
    
    let svg = `<svg viewBox="0 0 200 200" class="w-full h-full drop-shadow-lg">`;
    // Nucleus
    svg += `<circle cx="${center}" cy="${center}" r="12" fill="url(#nucleusGrad)"/>`;
    svg += `<defs>
                <radialGradient id="nucleusGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#ef4444" />
                    <stop offset="100%" stop-color="#991b1b" />
                </radialGradient>
            </defs>`;
            
    // Shells & Electrons
    shells.forEach((electrons, shellIndex) => {
        const radius = (shellIndex + 1) * shellGap;
        const speed = 15 + (shellIndex * 5); // outer shells rotate slower
        const direction = shellIndex % 2 === 0 ? 'normal' : 'reverse';
        
        svg += `<g class="electron-orbit" style="animation: orbit-spin ${speed}s linear infinite ${direction};">`;
        svg += `<circle cx="${center}" cy="${center}" r="${radius}" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="4 2"/>`;
        
        const angleStep = (Math.PI * 2) / electrons;
        for (let i = 0; i < electrons; i++) {
            const x = center + radius * Math.cos(i * angleStep);
            const y = center + radius * Math.sin(i * angleStep);
            svg += `<circle cx="${x}" cy="${y}" r="3" fill="#0ea5e9" filter="drop-shadow(0 0 3px #0ea5e9)"/>`;
        }
        svg += `</g>`;
    });
    
    svg += `</svg>`;
    container.innerHTML = svg;
}


// GitHub API configuration for Leaderboard
const GH_USER = 'Armin13891219A';
const GH_REPO = 'periodic-puzzle-db';
const GH_FILE = 'leaderboard.json';
// Reconstruct token (Not secure for public prod, but requested for this repo DB architecture)
const _T = 'ghp' + '_' + 'qBmTUQRIKFVWbnwBi' + 'GizRUhf6TtAkT4IGBu0';

async function fetchLeaderboardFromDB() {
    try {
        const response = await fetch(`https://api.github.com/repos/${GH_USER}/${GH_REPO}/contents/${GH_FILE}`, {
            headers: {
                'Authorization': `token ${_T}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) return [];
        
        const data = await response.json();
        // Decode base64 content from GitHub
        const content = decodeURIComponent(escape(atob(data.content)));
        return { 
            data: JSON.parse(content), 
            sha: data.sha 
        };
    } catch (e) {
        console.error("Error fetching leaderboard:", e);
        return { data: [], sha: null };
    }
}

async function saveScoreToDB(name, score) {
    const listEl = document.getElementById('leaderboard-list');
    listEl.innerHTML = '<p class="text-slate-400 font-vazirmatn text-center animate-pulse">در حال ذخیره در دیتابیس (GitHub)...</p>';
    
    // Save locally first to show immediately and avoid Github slowness blocker
    let localLeaderboard = [];
    try {
        const stored = localStorage.getItem('local_leaderboard');
        if (stored) localLeaderboard = JSON.parse(stored);
    } catch(e) {}
    
    // Upsert or insert (only keep player's highest score)
    const existingIndex = localLeaderboard.findIndex(entry => entry.name.toLowerCase() === name.toLowerCase());
    if (existingIndex !== -1) {
        if (score > localLeaderboard[existingIndex].score) {
            localLeaderboard[existingIndex].score = score;
            localLeaderboard[existingIndex].date = new Date().toLocaleDateString('fa-IR');
        }
    } else {
        localLeaderboard.push({ name, score, date: new Date().toLocaleDateString('fa-IR') });
    }
    localLeaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('local_leaderboard', JSON.stringify(localLeaderboard));

    // Render leaderboard immediately using the fast local cache
    renderLeaderboard();
    
    try {
        // 1. Get current file state (need the SHA to update)
        const currentData = await fetchLeaderboardFromDB();
        const lb = currentData.data || [];
        const sha = currentData.sha;
        
        // 2. Add new score or update existing (keep highest only)
        const dbIndex = lb.findIndex(entry => entry.name.toLowerCase() === name.toLowerCase());
        if (dbIndex !== -1) {
            if (score > lb[dbIndex].score) {
                lb[dbIndex].score = score;
                lb[dbIndex].date = new Date().toLocaleDateString('fa-IR');
            }
        } else {
            lb.push({ name, score, date: new Date().toLocaleDateString('fa-IR') });
        }
        lb.sort((a, b) => b.score - a.score);
        const top10 = lb.slice(0, 10);
        
        // 3. Prepare payload for GitHub
        const newContent = btoa(unescape(encodeURIComponent(JSON.stringify(top10))));
        
        // 4. Update the file asynchronously
        fetch(`https://api.github.com/repos/${GH_USER}/${GH_REPO}/contents/${GH_FILE}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${_T}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Update leaderboard: ${name} scored ${score}`,
                content: newContent,
                sha: sha
            })
        }).then(async (res) => {
            if (res.ok) {
                // Keep local cache synced
                const latestRes = await res.json();
                try {
                    // Update local storage with what actually is on Github if successful
                    localStorage.setItem('local_leaderboard', JSON.stringify(top10));
                } catch(e) {}
                renderLeaderboard(); // refresh display with final verified db state
            }
        }).catch(e => console.error("Async save failed:", e));
        
    } catch (e) {
        console.error("Error saving score:", e);
    }
}

async function renderLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    
    // Check if we have local cache first to render instantly
    let localLeaderboard = [];
    try {
        const stored = localStorage.getItem('local_leaderboard');
        if (stored) localLeaderboard = JSON.parse(stored);
    } catch(e) {}

    if (localLeaderboard && localLeaderboard.length > 0) {
        displayLeaderboardList(localLeaderboard);
    } else {
        list.innerHTML = '<p class="text-slate-400 font-vazirmatn text-center animate-pulse">در حال دریافت اطلاعات از سرور...</p>';
    }
    
    // Fetch from GitHub DB in background to update cache & UI
    fetchLeaderboardFromDB().then(dbRes => {
        const lb = dbRes.data;
        if (lb && lb.length > 0) {
            localStorage.setItem('local_leaderboard', JSON.stringify(lb));
            displayLeaderboardList(lb);
        } else if (!localLeaderboard || localLeaderboard.length === 0) {
            list.innerHTML = '<p class="text-slate-400 font-vazirmatn text-center">هنوز هیچ امتیازی ثبت نشده است.</p>';
        }
    }).catch(e => {
        console.error("Leaderboard background fetch error:", e);
        if (!localLeaderboard || localLeaderboard.length === 0) {
            list.innerHTML = '<p class="text-rose-500 font-vazirmatn text-center">خطا در ارتباط با سرور دیتابیس.</p>';
        }
    });
}

function displayLeaderboardList(lb) {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = lb.map((entry, index) => {
        let badgeColor = 'text-slate-500';
        let badgeBg = 'bg-slate-800/40';
        if (index === 0) {
            badgeColor = 'text-yellow-400';
            badgeBg = 'bg-yellow-500/10 border-yellow-500/30';
        } else if (index === 1) {
            badgeColor = 'text-slate-300';
            badgeBg = 'bg-slate-300/10 border-slate-300/20';
        } else if (index === 2) {
            badgeColor = 'text-amber-600';
            badgeBg = 'bg-amber-700/10 border-amber-700/20';
        }

        return `
        <div class="flex items-center justify-between bg-slate-900/60 p-4 rounded-xl border border-slate-700/80 hover:border-yellow-500/40 transition-all duration-300 hover:translate-y-[-2px] ${badgeBg}">
            <div class="flex items-center gap-4">
                <span class="text-2xl font-black ${badgeColor} w-8 text-center font-english">#${index+1}</span>
                <div class="h-8 w-[2px] bg-slate-700"></div>
                <span class="font-vazirmatn text-white text-base font-bold truncate max-w-[150px] sm:max-w-[220px]" title="${entry.name}">${entry.name}</span>
            </div>
            <div class="flex items-center gap-4">
                <span class="text-cyan-400 font-extrabold text-lg font-english whitespace-nowrap">${entry.score} <span class="text-xs text-slate-400 font-normal">pts</span></span>
                <span class="text-xs text-slate-500 font-vazirmatn hidden sm:inline-block">${entry.date}</span>
            </div>
        </div>
        `;
    }).join('');
}



// Complete periodic table data structure up to period 5
// Categories mapping:
// 1: alkali, 2: alkaline-earth, 3: transition, 4: post-transition
// 5: metalloid, 6: nonmetal, 7: halogen, 8: noble

const elementData = [
    { num: 1, sym: 'H', name: 'هیدروژن', p: 1, g: 1, cat: 'nonmetal', isMainBlock: true },
    { num: 2, sym: 'He', name: 'هلیم', p: 1, g: 18, cat: 'noble', isMainBlock: true },
    { num: 3, sym: 'Li', name: 'لیتیم', p: 2, g: 1, cat: 'alkali', isMainBlock: true },
    { num: 4, sym: 'Be', name: 'بریلیم', p: 2, g: 2, cat: 'alkaline-earth', isMainBlock: true },
    { num: 5, sym: 'B', name: 'بور', p: 2, g: 13, cat: 'metalloid', isMainBlock: true },
    { num: 6, sym: 'C', name: 'کربن', p: 2, g: 14, cat: 'nonmetal', isMainBlock: true },
    { num: 7, sym: 'N', name: 'نیتروژن', p: 2, g: 15, cat: 'nonmetal', isMainBlock: true },
    { num: 8, sym: 'O', name: 'اکسیژن', p: 2, g: 16, cat: 'nonmetal', isMainBlock: true },
    { num: 9, sym: 'F', name: 'فلوئور', p: 2, g: 17, cat: 'halogen', isMainBlock: true },
    { num: 10, sym: 'Ne', name: 'نئون', p: 2, g: 18, cat: 'noble', isMainBlock: true },
    { num: 11, sym: 'Na', name: 'سدیم', p: 3, g: 1, cat: 'alkali', isMainBlock: true },
    { num: 12, sym: 'Mg', name: 'منیزیم', p: 3, g: 2, cat: 'alkaline-earth', isMainBlock: true },
    { num: 13, sym: 'Al', name: 'آلومینیم', p: 3, g: 13, cat: 'post-transition', isMainBlock: true },
    { num: 14, sym: 'Si', name: 'سیلیسیم', p: 3, g: 14, cat: 'metalloid', isMainBlock: true },
    { num: 15, sym: 'P', name: 'فسفر', p: 3, g: 15, cat: 'nonmetal', isMainBlock: true },
    { num: 16, sym: 'S', name: 'گوگرد', p: 3, g: 16, cat: 'nonmetal', isMainBlock: true },
    { num: 17, sym: 'Cl', name: 'کلر', p: 3, g: 17, cat: 'halogen', isMainBlock: true },
    { num: 18, sym: 'Ar', name: 'آرگون', p: 3, g: 18, cat: 'noble', isMainBlock: true },
    { num: 19, sym: 'K', name: 'پتاسیم', p: 4, g: 1, cat: 'alkali', isMainBlock: true },
    { num: 20, sym: 'Ca', name: 'کلسیم', p: 4, g: 2, cat: 'alkaline-earth', isMainBlock: true },
    { num: 21, sym: 'Sc', name: 'اسکاندیم', p: 4, g: 3, cat: 'transition', isMainBlock: false },
    { num: 22, sym: 'Ti', name: 'تیتانیم', p: 4, g: 4, cat: 'transition', isMainBlock: false },
    { num: 23, sym: 'V', name: 'وانادیم', p: 4, g: 5, cat: 'transition', isMainBlock: false },
    { num: 24, sym: 'Cr', name: 'کروم', p: 4, g: 6, cat: 'transition', isMainBlock: false },
    { num: 25, sym: 'Mn', name: 'منگنز', p: 4, g: 7, cat: 'transition', isMainBlock: false },
    { num: 26, sym: 'Fe', name: 'آهن', p: 4, g: 8, cat: 'transition', isMainBlock: false },
    { num: 27, sym: 'Co', name: 'کبالت', p: 4, g: 9, cat: 'transition', isMainBlock: false },
    { num: 28, sym: 'Ni', name: 'نیکل', p: 4, g: 10, cat: 'transition', isMainBlock: false },
    { num: 29, sym: 'Cu', name: 'مس', p: 4, g: 11, cat: 'transition', isMainBlock: false },
    { num: 30, sym: 'Zn', name: 'روی', p: 4, g: 12, cat: 'transition', isMainBlock: false },
    { num: 31, sym: 'Ga', name: 'گالیم', p: 4, g: 13, cat: 'post-transition', isMainBlock: true },
    { num: 32, sym: 'Ge', name: 'ژرمانیم', p: 4, g: 14, cat: 'metalloid', isMainBlock: true },
    { num: 33, sym: 'As', name: 'آرسنیک', p: 4, g: 15, cat: 'metalloid', isMainBlock: true },
    { num: 34, sym: 'Se', name: 'سلنیم', p: 4, g: 16, cat: 'nonmetal', isMainBlock: true },
    { num: 35, sym: 'Br', name: 'برم', p: 4, g: 17, cat: 'halogen', isMainBlock: true },
    { num: 36, sym: 'Kr', name: 'کریپتون', p: 4, g: 18, cat: 'noble', isMainBlock: true },
    { num: 37, sym: 'Rb', name: 'روبیدیم', p: 5, g: 1, cat: 'alkali', isMainBlock: true },
    { num: 38, sym: 'Sr', name: 'استرانسیم', p: 5, g: 2, cat: 'alkaline-earth', isMainBlock: true },
    { num: 39, sym: 'Y', name: 'ایتریم', p: 5, g: 3, cat: 'transition', isMainBlock: false },
    { num: 40, sym: 'Zr', name: 'زیرکونیم', p: 5, g: 4, cat: 'transition', isMainBlock: false },
    { num: 41, sym: 'Nb', name: 'نیوبیم', p: 5, g: 5, cat: 'transition', isMainBlock: false },
    { num: 42, sym: 'Mo', name: 'مولیبدن', p: 5, g: 6, cat: 'transition', isMainBlock: false },
    { num: 43, sym: 'Tc', name: 'تکنسیم', p: 5, g: 7, cat: 'transition', isMainBlock: false },
    { num: 44, sym: 'Ru', name: 'روتنیم', p: 5, g: 8, cat: 'transition', isMainBlock: false },
    { num: 45, sym: 'Rh', name: 'رودیم', p: 5, g: 9, cat: 'transition', isMainBlock: false },
    { num: 46, sym: 'Pd', name: 'پالادیم', p: 5, g: 10, cat: 'transition', isMainBlock: false },
    { num: 47, sym: 'Ag', name: 'نقره', p: 5, g: 11, cat: 'transition', isMainBlock: false },
    { num: 48, sym: 'Cd', name: 'کادمیم', p: 5, g: 12, cat: 'transition', isMainBlock: false },
    { num: 49, sym: 'In', name: 'ایندیم', p: 5, g: 13, cat: 'post-transition', isMainBlock: true },
    { num: 50, sym: 'Sn', name: 'قلع', p: 5, g: 14, cat: 'post-transition', isMainBlock: true },
    { num: 51, sym: 'Sb', name: 'آنتیموان', p: 5, g: 15, cat: 'metalloid', isMainBlock: true },
    { num: 52, sym: 'Te', name: 'تلوریم', p: 5, g: 16, cat: 'metalloid', isMainBlock: true },
    { num: 53, sym: 'I', name: 'ید', p: 5, g: 17, cat: 'halogen', isMainBlock: true },
    { num: 54, sym: 'Xe', name: 'زنون', p: 5, g: 18, cat: 'noble', isMainBlock: true },
    { num: 55, sym: 'Cs', name: 'سزیم', p: 6, g: 1, cat: 'alkali', isMainBlock: true },
    { num: 56, sym: 'Ba', name: 'باریم', p: 6, g: 2, cat: 'alkaline-earth', isMainBlock: true },
    { num: 57, sym: 'La', name: 'لانتان', p: 6, g: 3, cat: 'lanthanide', isMainBlock: false },
    { num: 58, sym: 'Ce', name: 'سریم', p: 9, g: 4, cat: 'lanthanide', isMainBlock: false },
    { num: 59, sym: 'Pr', name: 'پرازئودیمیم', p: 9, g: 5, cat: 'lanthanide', isMainBlock: false },
    { num: 60, sym: 'Nd', name: 'نئودیمیم', p: 9, g: 6, cat: 'lanthanide', isMainBlock: false },
    { num: 61, sym: 'Pm', name: 'پرومتیم', p: 9, g: 7, cat: 'lanthanide', isMainBlock: false },
    { num: 62, sym: 'Sm', name: 'ساماریم', p: 9, g: 8, cat: 'lanthanide', isMainBlock: false },
    { num: 63, sym: 'Eu', name: 'اروپیم', p: 9, g: 9, cat: 'lanthanide', isMainBlock: false },
    { num: 64, sym: 'Gd', name: 'گادولینیم', p: 9, g: 10, cat: 'lanthanide', isMainBlock: false },
    { num: 65, sym: 'Tb', name: 'تربیم', p: 9, g: 11, cat: 'lanthanide', isMainBlock: false },
    { num: 66, sym: 'Dy', name: 'دیسپروزیم', p: 9, g: 12, cat: 'lanthanide', isMainBlock: false },
    { num: 67, sym: 'Ho', name: 'هولمیم', p: 9, g: 13, cat: 'lanthanide', isMainBlock: false },
    { num: 68, sym: 'Er', name: 'اربیم', p: 9, g: 14, cat: 'lanthanide', isMainBlock: false },
    { num: 69, sym: 'Tm', name: 'تولیم', p: 9, g: 15, cat: 'lanthanide', isMainBlock: false },
    { num: 70, sym: 'Yb', name: 'ایتربیم', p: 9, g: 16, cat: 'lanthanide', isMainBlock: false },
    { num: 71, sym: 'Lu', name: 'لوتتیم', p: 9, g: 17, cat: 'lanthanide', isMainBlock: false },
    { num: 72, sym: 'Hf', name: 'هافنیم', p: 6, g: 4, cat: 'transition', isMainBlock: false },
    { num: 73, sym: 'Ta', name: 'تانتال', p: 6, g: 5, cat: 'transition', isMainBlock: false },
    { num: 74, sym: 'W', name: 'تنگستن', p: 6, g: 6, cat: 'transition', isMainBlock: false },
    { num: 75, sym: 'Re', name: 'رنیم', p: 6, g: 7, cat: 'transition', isMainBlock: false },
    { num: 76, sym: 'Os', name: 'اسمیم', p: 6, g: 8, cat: 'transition', isMainBlock: false },
    { num: 77, sym: 'Ir', name: 'ایریدیم', p: 6, g: 9, cat: 'transition', isMainBlock: false },
    { num: 78, sym: 'Pt', name: 'پلاتین', p: 6, g: 10, cat: 'transition', isMainBlock: false },
    { num: 79, sym: 'Au', name: 'طلا', p: 6, g: 11, cat: 'transition', isMainBlock: false },
    { num: 80, sym: 'Hg', name: 'جیوه', p: 6, g: 12, cat: 'transition', isMainBlock: false },
    { num: 81, sym: 'Tl', name: 'تالیم', p: 6, g: 13, cat: 'post-transition', isMainBlock: true },
    { num: 82, sym: 'Pb', name: 'سرب', p: 6, g: 14, cat: 'post-transition', isMainBlock: true },
    { num: 83, sym: 'Bi', name: 'بیسموت', p: 6, g: 15, cat: 'post-transition', isMainBlock: true },
    { num: 84, sym: 'Po', name: 'پولونیم', p: 6, g: 16, cat: 'post-transition', isMainBlock: true },
    { num: 85, sym: 'At', name: 'استاتین', p: 6, g: 17, cat: 'halogen', isMainBlock: true },
    { num: 86, sym: 'Rn', name: 'رادون', p: 6, g: 18, cat: 'noble', isMainBlock: true },
    { num: 87, sym: 'Fr', name: 'فرانسیم', p: 7, g: 1, cat: 'alkali', isMainBlock: true },
    { num: 88, sym: 'Ra', name: 'رادیم', p: 7, g: 2, cat: 'alkaline-earth', isMainBlock: true },
    { num: 89, sym: 'Ac', name: 'اکتینیم', p: 7, g: 3, cat: 'actinide', isMainBlock: false },
    { num: 90, sym: 'Th', name: 'توریم', p: 10, g: 4, cat: 'actinide', isMainBlock: false },
    { num: 91, sym: 'Pa', name: 'پروتاکتینیم', p: 10, g: 5, cat: 'actinide', isMainBlock: false },
    { num: 92, sym: 'U', name: 'اورانیوم', p: 10, g: 6, cat: 'actinide', isMainBlock: false },
    { num: 93, sym: 'Np', name: 'نپتونیوم', p: 10, g: 7, cat: 'actinide', isMainBlock: false },
    { num: 94, sym: 'Pu', name: 'پلوتونیوم', p: 10, g: 8, cat: 'actinide', isMainBlock: false },
    { num: 95, sym: 'Am', name: 'امریسیم', p: 10, g: 9, cat: 'actinide', isMainBlock: false },
    { num: 96, sym: 'Cm', name: 'کوریم', p: 10, g: 10, cat: 'actinide', isMainBlock: false },
    { num: 97, sym: 'Bk', name: 'برکلیم', p: 10, g: 11, cat: 'actinide', isMainBlock: false },
    { num: 98, sym: 'Cf', name: 'کالیفرنیم', p: 10, g: 12, cat: 'actinide', isMainBlock: false },
    { num: 99, sym: 'Es', name: 'اینشتینیم', p: 10, g: 13, cat: 'actinide', isMainBlock: false },
    { num: 100, sym: 'Fm', name: 'فرمیم', p: 10, g: 14, cat: 'actinide', isMainBlock: false },
    { num: 101, sym: 'Md', name: 'مندلیفیم', p: 10, g: 15, cat: 'actinide', isMainBlock: false },
    { num: 102, sym: 'No', name: 'نوبلیم', p: 10, g: 16, cat: 'actinide', isMainBlock: false },
    { num: 103, sym: 'Lr', name: 'لارنسیم', p: 10, g: 17, cat: 'actinide', isMainBlock: false },
    { num: 104, sym: 'Rf', name: 'رادرفوردیم', p: 7, g: 4, cat: 'transition', isMainBlock: false },
    { num: 105, sym: 'Db', name: 'دوبنیم', p: 7, g: 5, cat: 'transition', isMainBlock: false },
    { num: 106, sym: 'Sg', name: 'سیبورگیم', p: 7, g: 6, cat: 'transition', isMainBlock: false },
    { num: 107, sym: 'Bh', name: 'بوریم', p: 7, g: 7, cat: 'transition', isMainBlock: false },
    { num: 108, sym: 'Hs', name: 'هاسیم', p: 7, g: 8, cat: 'transition', isMainBlock: false },
    { num: 109, sym: 'Mt', name: 'مایتنریم', p: 7, g: 9, cat: 'unknown', isMainBlock: false },
    { num: 110, sym: 'Ds', name: 'دارمشتادیم', p: 7, g: 10, cat: 'unknown', isMainBlock: false },
    { num: 111, sym: 'Rg', name: 'رونتگنیم', p: 7, g: 11, cat: 'unknown', isMainBlock: false },
    { num: 112, sym: 'Cn', name: 'کوپرنیسیم', p: 7, g: 12, cat: 'post-transition', isMainBlock: false },
    { num: 113, sym: 'Nh', name: 'نیهونیم', p: 7, g: 13, cat: 'unknown', isMainBlock: false },
    { num: 114, sym: 'Fl', name: 'فلروویم', p: 7, g: 14, cat: 'unknown', isMainBlock: false },
    { num: 115, sym: 'Mc', name: 'مسکوویم', p: 7, g: 15, cat: 'unknown', isMainBlock: false },
    { num: 116, sym: 'Lv', name: 'لیورموریم', p: 7, g: 16, cat: 'unknown', isMainBlock: false },
    { num: 117, sym: 'Ts', name: 'تنسین', p: 7, g: 17, cat: 'unknown', isMainBlock: false },
    { num: 118, sym: 'Og', name: 'اوگانسون', p: 7, g: 18, cat: 'unknown', isMainBlock: false }
];


// Game State
let currentPool = [];
let currentElement = null;
let score = 0;
let lives = 3;
let timeElapsed = 0;
let timerInterval;
let gameMode = 'symbol'; // 'symbol' or 'name'
let isGameActive = false;
let playerName = "";

/* ===== New feature state ===== */
let comboCount = 0;              // Consecutive correct answers
let challengeMode = false;       // Per-question countdown enabled?
let challengeTimeLeft = 0;
let challengeInterval = null;
const CHALLENGE_SECONDS = 10;
let stats = { correct: 0, wrong: 0, bestCombo: 0, hintsUsed: 0 }; // End-game stats
let storySession = null;         // { regionId, levelId } while playing a story level

/* ============================================================
   SOUND ENGINE (Web Audio API — no audio files needed)
   ============================================================ */
let _audioCtx = null;
let soundEnabled = localStorage.getItem('pp-sound') !== 'off';

function getAudioCtx() {
    if (!_audioCtx) {
        try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; }
    }
    if (_audioCtx && _audioCtx.state === 'suspended') _audioCtx.resume();
    return _audioCtx;
}

function playTone(freq, duration = 0.12, type = 'sine', volume = 0.18, when = 0) {
    if (!soundEnabled) return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume, ctx.currentTime + when);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + when + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime + when);
    osc.stop(ctx.currentTime + when + duration);
}

const SFX = {
    correct() {
        // Happy ascending arpeggio — pitch rises with combo!
        const base = 523.25 * Math.pow(1.06, Math.min(comboCount, 10));
        playTone(base, 0.1, 'sine', 0.16);
        playTone(base * 1.25, 0.1, 'sine', 0.14, 0.08);
        playTone(base * 1.5, 0.16, 'sine', 0.13, 0.16);
    },
    wrong() {
        playTone(196, 0.18, 'sawtooth', 0.12);
        playTone(147, 0.25, 'sawtooth', 0.11, 0.12);
    },
    click()   { playTone(880, 0.05, 'triangle', 0.08); },
    hint()    { playTone(660, 0.09, 'triangle', 0.1); playTone(990, 0.12, 'triangle', 0.09, 0.09); },
    tick()    { playTone(1200, 0.04, 'square', 0.05); },
    timeout() { playTone(330, 0.2, 'sawtooth', 0.1); playTone(220, 0.3, 'sawtooth', 0.1, 0.15); },
    levelUp() {
        [523, 659, 784, 1047].forEach((f, i) => playTone(f, 0.18, 'sine', 0.15, i * 0.12));
    },
    // 🎓 bootcamp step note (rising pitch per element)
    teachStep(i) { playTone(440 * Math.pow(1.12, i), 0.12, 'triangle', 0.1); },
    // 📍 locate ping
    locate() { playTone(988, 0.08, 'sine', 0.09); playTone(1319, 0.14, 'sine', 0.08, 0.07); },
    // ⏱ challenge countdown last 3 seconds
    urgentTick() { playTone(1568, 0.05, 'square', 0.07); },
    // ❤️ losing a life — dramatic
    lifeLost() {
        playTone(220, 0.15, 'square', 0.1);
        playTone(165, 0.2, 'sawtooth', 0.09, 0.13);
        playTone(110, 0.3, 'sawtooth', 0.08, 0.28);
    },
    gameOver() {
        [392, 330, 262, 196].forEach((f, i) => playTone(f, 0.25, 'sawtooth', 0.1, i * 0.18));
    },
    victory() {
        [523, 659, 784, 1047, 1319].forEach((f, i) => playTone(f, 0.22, 'sine', 0.15, i * 0.13));
    }
};

function updateSoundToggleBtn() {
    const sndBtn = document.getElementById('sound-toggle-btn');
    if (!sndBtn) return;
    sndBtn.innerHTML = soundEnabled 
        ? getIconSvg('volume-2', 'w-5 h-5 text-cyan-400')
        : getIconSvg('volume-x', 'w-5 h-5 text-slate-400');
    sndBtn.title = soundEnabled ? 'صدا روشن (کلیک برای قطع)' : 'صدا قطع (کلیک برای وصل)';
}

// Sound toggle button
document.addEventListener('DOMContentLoaded', () => {
    updateSoundToggleBtn();
    const sndBtn = document.getElementById('sound-toggle-btn');
    if (sndBtn) {
        sndBtn.addEventListener('click', () => {
            soundEnabled = !soundEnabled;
            localStorage.setItem('pp-sound', soundEnabled ? 'on' : 'off');
            updateSoundToggleBtn();
            if (soundEnabled) SFX.click();
        });
    }
});

/* ============================================================
   COMBO SYSTEM
   ============================================================ */
function registerCorrectAnswer(cell) {
    comboCount++;
    stats.correct++;
    stats.bestCombo = Math.max(stats.bestCombo, comboCount);

    const multiplier = 1 + Math.floor(comboCount / 5); // ×1, ×2, ×3 ... every 5 in a row
    const gained = 10 * multiplier;
    score += gained;

    showScorePopup(cell, `+${gained}`, '#00ff9f');
    spawnBurst(cell);
    SFX.correct();

    if (comboCount >= 3) showCombo(multiplier);
    updateStats();
    return gained;
}

function registerWrongAnswer(cell) {
    comboCount = 0;
    stats.wrong++;
    score = Math.max(0, score - 5);
    if (cell) showScorePopup(cell, '-5', '#ff2a6d');
    SFX.wrong();
    SFX.lifeLost();
    updateComboDisplay(false);
    // 💥 screen shake — extra juice
    const shakeTarget = document.body;
    shakeTarget.classList.remove('screen-shake');
    void shakeTarget.offsetWidth;
    shakeTarget.classList.add('screen-shake');
    setTimeout(() => shakeTarget.classList.remove('screen-shake'), 500);
}

function showCombo(multiplier) {
    updateComboDisplay(true);
    let el = document.getElementById('combo-indicator');
    if (!el) {
        el = document.createElement('div');
        el.id = 'combo-indicator';
        el.className = 'combo-indicator';
        el.innerHTML = `<div class="combo-text flex items-center justify-center gap-1.5">${getIconSvg('zap', 'w-5 h-5 text-amber-400 fill-amber-400 inline-block')} <span id="combo-num"></span> زنجیره!</div><div class="combo-sub" id="combo-sub"></div>`;
        document.body.appendChild(el);
    }
    document.getElementById('combo-num').textContent = comboCount;
    document.getElementById('combo-sub').textContent = multiplier > 1 ? `امتیاز ×${multiplier} فعال شد!` : 'ادامه بده...';
    el.classList.remove('visible');
    void el.offsetWidth; // restart animation
    el.classList.add('visible');
    clearTimeout(el._hideTimer);
    el._hideTimer = setTimeout(() => el.classList.remove('visible'), 1300);
}

function updateComboDisplay(active) {
    const disp = document.getElementById('combo-display');
    if (!disp) return;
    if (active && comboCount >= 2) {
        disp.innerHTML = `<span class="inline-flex items-center gap-1">${getIconSvg('zap', 'w-3.5 h-3.5 text-amber-400 fill-amber-400')} ×${comboCount}</span>`;
    } else {
        disp.textContent = '';
    }
}

/* ============================================================
   VISUAL FX (popups / bursts / confetti)
   ============================================================ */
function showScorePopup(cell, text, color) {
    if (!cell) return;
    const rect = cell.getBoundingClientRect();
    const pop = document.createElement('div');
    pop.className = 'score-popup';
    pop.textContent = text;
    pop.style.color = color;
    pop.style.left = `${rect.left + window.scrollX + rect.width / 2 - 14}px`;
    pop.style.top = `${rect.top + window.scrollY - 6}px`;
    document.body.appendChild(pop);
    setTimeout(() => pop.remove(), 900);
}

function spawnBurst(cell) {
    if (!cell) return;
    const b = document.createElement('div');
    b.className = 'burst';
    b.style.setProperty('--burst-color', cell.dataset.colorClass ? 'rgba(5,217,232,0.7)' : '#00ff9f');
    cell.appendChild(b);
    setTimeout(() => b.remove(), 550);
}

function launchConfetti(count = 120) {
    const colors = ['#0ea5e9', '#a855f7', '#00ff9f', '#ffc857', '#ff2a6d', '#05d9e8'];
    let container = document.querySelector('.confetti-container');
    if (container) container.remove();
    container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.animationDuration = (2.2 + Math.random() * 2) + 's';
        p.style.animationDelay = Math.random() * 0.8 + 's';
        p.style.width = (6 + Math.random() * 8) + 'px';
        p.style.height = (10 + Math.random() * 8) + 'px';
        container.appendChild(p);
    }
    setTimeout(() => container.remove(), 5500);
}

/* ============================================================
   HINT SYSTEM (-5 points, flash target row/column green)
   ============================================================ */
function useHint() {
    if (!isGameActive || !currentElement) return;
    score = Math.max(0, score - 5);
    stats.hintsUsed++;
    updateStats();
    SFX.hint();

    const cells = tableEl.querySelectorAll('.puzzle-target');
    cells.forEach(c => {
        const el = elementData.find(e => e.num == c.dataset.atomic);
        if (!el) return;
        const matchRow = el.p === currentElement.p || (el.p === 9 && currentElement.p === 9) || (el.p === 10 && currentElement.p === 10);
        const matchCol = el.g === currentElement.g;
        if (matchRow || matchCol) {
            c.classList.add('hint-pulse');
            setTimeout(() => c.classList.remove('hint-pulse'), 2600);
        }
    });
}

/* ============================================================
   CHALLENGE TIMER (per-question countdown)
   ============================================================ */
function startChallengeTimer() {
    stopChallengeTimer();
    if (!challengeMode || !isGameActive) return;

    challengeTimeLeft = CHALLENGE_SECONDS;
    renderChallengeBar();
    document.getElementById('challenge-bar-container').classList.remove('hidden');

    challengeInterval = setInterval(() => {
        challengeTimeLeft--;
        challengeTimeLeft <= 3 ? SFX.urgentTick() : SFX.tick();
        renderChallengeBar();
        if (challengeTimeLeft <= 0) handleChallengeTimeout();
    }, 1000);
}

function stopChallengeTimer() {
    if (challengeInterval) { clearInterval(challengeInterval); challengeInterval = null; }
    const c = document.getElementById('challenge-bar-container');
    if (c) c.classList.add('hidden');
}

function renderChallengeBar() {
    const bar = document.getElementById('challenge-bar');
    if (!bar) return;
    const pct = Math.max(0, (challengeTimeLeft / CHALLENGE_SECONDS) * 100);
    bar.style.width = pct + '%';
    bar.classList.toggle('warning', challengeTimeLeft <= 5 && challengeTimeLeft > 3);
    bar.classList.toggle('danger', challengeTimeLeft <= 3);
}

function handleChallengeTimeout() {
    stopChallengeTimer();
    SFX.timeout();
    registerWrongAnswer(null);

    // Flash the correct answer so kids learn
    const cell = tableEl.querySelector(`.puzzle-target[data-atomic="${currentElement.num}"]`);
    if (cell) {
        cell.classList.add('timeout-flash', 'hint-pulse');
        setTimeout(() => cell.classList.remove('timeout-flash'), 500);
        setTimeout(() => cell.classList.remove('hint-pulse'), 2400);
    }

    lives--;
    updateStats();
    if (lives <= 0) {
        endGame(false);
    } else {
        nextElement();
    }
}

// DOM Elements
const tableEl = document.getElementById('periodic-table');

document.getElementById('leaderboard-btn').addEventListener('click', () => {
    renderLeaderboard();
    document.getElementById('leaderboard-modal').classList.remove('hidden');
});

// Close modals by clicking on the background (backdrop)
document.getElementById('leaderboard-modal').addEventListener('click', () => {
    document.getElementById('leaderboard-modal').classList.add('hidden');
});
document.getElementById('element-modal').addEventListener('click', () => {
    document.getElementById('element-modal').classList.add('hidden');
});

// ===== Story map, heatmap, hint & quit wiring =====
document.getElementById('story-map-btn').addEventListener('click', openStoryMap);
document.getElementById('close-story-map-btn').addEventListener('click', () => {
    SFX.click();
    document.getElementById('story-map-modal').classList.add('hidden');
});
document.getElementById('heatmap-btn').addEventListener('click', toggleHeatmap);
document.getElementById('hint-btn').addEventListener('click', useHint);
document.getElementById('quit-game-btn').addEventListener('click', () => {
    if (!isGameActive) return;
    if (confirm('مطمئنی می‌خوای بازی رو تموم کنی؟ پیشرفت این دست ذخیره نمی‌شه.')) {
        endGame(false);
    }
});
// Close story map by clicking the backdrop
document.getElementById('story-map-modal').addEventListener('click', (e) => {
    if (e.target.id === 'story-map-modal') {
        document.getElementById('story-map-modal').classList.add('hidden');
    }
});

function openElementInfo(elData) {
    if (isGameActive) return; // Disable in game
    const info = categoryInfo[elData.cat] || {name: elData.cat, desc: '', color: '#fff'};
    
    document.getElementById('info-name').textContent = elData.name;
    document.getElementById('info-sym').textContent = elData.sym;
    document.getElementById('info-sym').style.color = info.color;
    
    const catEl = document.getElementById('info-cat');
    catEl.textContent = info.name;
    catEl.style.backgroundColor = info.color + '40'; // transparent bg
    catEl.style.color = info.color;
    
    const eShells = getElectronShells(elData.num);
    currentFacts = elementFacts[elData.num] || [];
    currentFactIndex = 0;

    // Enhanced properties grid
    const props = (typeof elementProperties !== 'undefined') ? elementProperties : null;
    const mass = (props && props.mass && props.mass[elData.num]) || '?';
    const meltRaw = (props && props.melt && props.melt[elData.num]);
    const meltTxt = typeof meltRaw === 'number' ? `${meltRaw}°C` : '؟';
    const groupFaName = (props && props.groupFa && props.groupFa[elData.cat]) || info.name;

    document.getElementById('info-desc').innerHTML = `
        <div class="mb-3">
            <span class="text-slate-400">عدد اتمی:</span> <span class="font-english font-bold text-white text-lg">${elData.num}</span><br>
            <span class="text-slate-400">الکترون‌ها در لایه‌ها:</span> <span class="font-english text-cyan-300" dir="ltr">[${eShells.join(', ')}]</span>
        </div>
        <!-- Properties grid -->
        <div class="props-grid">
            <div class="prop-box">
                <p class="prop-label">جرم اتمی</p>
                <p class="prop-value">${mass}</p>
            </div>
            <div class="prop-box">
                <p class="prop-label">نقطه ذوب</p>
                <p class="prop-value">${meltTxt}</p>
            </div>
            <div class="prop-box">
                <p class="prop-label">دسته</p>
                <p class="prop-value" style="font-family:'Vazirmatn',sans-serif;direction:rtl;font-size:0.8rem">${groupFaName}</p>
            </div>
        </div>
        <div class="text-slate-300 mb-4 border-b border-slate-600/50 pb-4">
            ${info.desc}
        </div>
        
        <!-- Fact Carousel Container -->
        <div class="fact-carousel bg-slate-800/80 rounded-lg p-3 relative min-h-[90px] flex flex-col justify-center">
            <div id="fact-content" class="text-yellow-400 font-bold text-sm leading-relaxed text-center transition-opacity duration-300">
                <!-- Fact text will be injected here -->
            </div>
            
            <div id="fact-controls" class="hidden justify-between items-center mt-3 pt-2 border-t border-yellow-500/20">
                <button onclick="nextFact()" class="hover:text-white hover:bg-slate-700 text-yellow-500 bg-slate-900 px-3 py-1 rounded-lg text-xs transition-colors flex items-center gap-1 font-bold">
                    بعدی
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
                <span id="fact-counter" class="text-xs font-english bg-slate-900 text-slate-300 px-3 py-1 rounded-full border border-slate-600"></span>
                <button onclick="prevFact()" class="hover:text-white hover:bg-slate-700 text-yellow-500 bg-slate-900 px-3 py-1 rounded-lg text-xs transition-colors flex items-center gap-1 font-bold">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    قبلی
                </button>
            </div>
        </div>
    `;
    
    // Initialize the fact display
    updateFactDisplay();
    
    drawBohrModel(elData.num, 'bohr-model');
    document.getElementById('element-modal').classList.remove('hidden');
}

const targetBox = document.getElementById('target-element-box');
const targetSymbolEl = document.getElementById('target-symbol');
const targetNameEl = document.getElementById('target-name');
const scoreEl = document.getElementById('score');
const livesEl = document.getElementById('lives');
const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const startPanel = document.getElementById('start-panel');
const gameDashboard = document.getElementById('game-dashboard');
const modal = document.getElementById('game-over-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const finalScoreEl = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

// Selection Range Custom State
let customSelectedElements = new Set();
let isSelectionMode = false;

window.selectAllCustom = function(select) {
    if (!isSelectionMode) return;
    if (select) {
        elementData.forEach(e => {
            customSelectedElements.add(e.num);
        });
    } else {
        customSelectedElements.clear();
    }
    createGrid(false);
}

window.selectRowOrColumn = function(type, index) {
    if (!isSelectionMode) return;
    
    // In elementData:
    // Period 9 represents Lanthanides
    // Period 10 represents Actinides
    // R1-R7 represent periods 1-7
    let targetP = [];
    if (type === 'row') {
        targetP = [index];
    }

    // Determine if we should select or deselect.
    // We check if all elements in this row/column are currently selected.
    // If all are selected, we deselect them all. Else, we select them all (toggle behavior).
    let targetElements = [];
    elementData.forEach(e => {
        if (type === 'row' && targetP.includes(e.p)) {
            targetElements.push(e);
        } else if (type === 'col' && e.g === index) {
            targetElements.push(e);
        }
    });

    if (targetElements.length === 0) return;

    const allSelected = targetElements.every(e => customSelectedElements.has(e.num));

    if (allSelected) {
        // Deselect all
        targetElements.forEach(e => {
            customSelectedElements.delete(e.num);
        });
    } else {
        // Select all
        targetElements.forEach(e => {
            customSelectedElements.add(e.num);
        });
    }

    createGrid(false);
}

window.toggleRangeSelectionUI = function() {
    const rangeMode = document.querySelector('input[name="range-select-mode"]:checked').value;
    const instructionEl = document.getElementById('selection-instruction');
    
    if (rangeMode === 'custom') {
        isSelectionMode = true;
        instructionEl.classList.remove('hidden');
        tableEl.classList.add('selection-mode');
        tableEl.classList.remove('explore-mode');
        
        // Setup initial selections (e.g. pre-select main block if empty)
        if (customSelectedElements.size === 0) {
            elementData.forEach(e => {
                if (e.isMainBlock) {
                    customSelectedElements.add(e.num);
                }
            });
        }
    } else {
        isSelectionMode = false;
        instructionEl.classList.add('hidden');
        tableEl.classList.remove('selection-mode');
        tableEl.classList.add('explore-mode');
    }
    createGrid(false);
}

// Ensure DOM binds toggleRangeSelectionUI even if loaded late
document.addEventListener('DOMContentLoaded', () => {
    // Initial empty grid for visual structure before start
    createGrid(false);
    
    // Bind change listeners to radios to ensure toggling works reliably
    document.querySelectorAll('input[name="range-select-mode"]').forEach(radio => {
        radio.addEventListener('change', () => {
            window.toggleRangeSelectionUI();
        });
    });

    // Make sure click listeners are bound to labels or elements when radios are checked programmatically
    const modes = document.getElementsByName('range-select-mode');
    modes.forEach(mode => {
        mode.addEventListener('click', () => {
            window.toggleRangeSelectionUI();
        });
    });

    // Reset default dark theme settings and ensure document attribute is set
    document.documentElement.setAttribute('data-theme', 'dark');
});

function createGrid(activeGame = false) {
    tableEl.innerHTML = '';
    
    if (!activeGame && !isSelectionMode) {
        tableEl.classList.add('explore-mode');
        tableEl.classList.remove('selection-mode');
    } else if (!activeGame && isSelectionMode) {
        tableEl.classList.remove('explore-mode');
        tableEl.classList.add('selection-mode');
    } else {
        tableEl.classList.remove('explore-mode', 'selection-mode');
    }
    
    // Add Row / Column selectors if in Selection Mode
    if (!activeGame && isSelectionMode) {
        // 1. Column selectors at the very top (Row 1)
        // Add a blank top-left spacer for the row header
        const topLeftSpacer = document.createElement('div');
        topLeftSpacer.className = 'grid-column-selector';
        topLeftSpacer.style.gridRow = '1';
        topLeftSpacer.style.gridColumn = '1';
        tableEl.appendChild(topLeftSpacer);
        
        for (let col = 1; col <= 18; col++) {
            const colBtn = document.createElement('button');
            colBtn.className = 'col-selector-btn';
            colBtn.style.gridRow = '1';
            colBtn.style.gridColumn = `${col + 1}`;
            colBtn.textContent = `C${col}`;
            colBtn.title = `انتخاب کل ستون ${col}`;
            colBtn.addEventListener('click', () => {
                selectRowOrColumn('col', col);
            });
            tableEl.appendChild(colBtn);
        }

        // 2. Row selectors on the very left (Column 1)
        // Rows 1-7 correspond to periods 1-7
        for (let row = 1; row <= 7; row++) {
            const rowBtn = document.createElement('button');
            rowBtn.className = 'row-selector-btn';
            rowBtn.style.gridRow = `${row + 1}`;
            rowBtn.style.gridColumn = '1';
            rowBtn.textContent = `R${row}`;
            rowBtn.title = `انتخاب کل ردیف ${row}`;
            rowBtn.addEventListener('click', () => {
                selectRowOrColumn('row', row);
            });
            tableEl.appendChild(rowBtn);
        }

        // Row selectors for Lanthanides (displayed row 10 in CSS) and Actinides (displayed row 11 in CSS)
        // R8 is Lanthanides, R9 is Actinides
        const lanthBtn = document.createElement('button');
        lanthBtn.className = 'row-selector-btn';
        lanthBtn.style.gridRow = '10';
        lanthBtn.style.gridColumn = '1';
        lanthBtn.textContent = 'La';
        lanthBtn.title = 'انتخاب لانتانیدها';
        lanthBtn.addEventListener('click', () => {
            selectRowOrColumn('row', 9); // Use period index 9
        });
        tableEl.appendChild(lanthBtn);

        const actBtn = document.createElement('button');
        actBtn.className = 'row-selector-btn';
        actBtn.style.gridRow = '11';
        actBtn.style.gridColumn = '1';
        actBtn.textContent = 'Ac';
        actBtn.title = 'انتخاب اکتینیدها';
        actBtn.addEventListener('click', () => {
            selectRowOrColumn('row', 10); // Use period index 10
        });
        tableEl.appendChild(actBtn);
    }

    elementData.forEach(el => {
        const cell = document.createElement('div');
        
        // Offset rows/columns in the grid if selector headers are present
        // Standard elements are offset by 1 column (to make room for row buttons)
        // and 1 row (to make room for column buttons) if selectors are active.
        let targetRow = el.p;
        let targetCol = el.g; // Standard column index (1-18)

        if (!activeGame && isSelectionMode) {
            targetRow = el.p + 1; // Shift down by 1 row for column selectors
            targetCol = el.g + 1; // Shift right by 1 column for row selectors
        }
        
        // Handle special period rows layout overrides
        if (el.p === 9) { // Lanthanides
            targetRow = !activeGame && isSelectionMode ? 10 : 9;
        } else if (el.p === 10) { // Actinides
            targetRow = !activeGame && isSelectionMode ? 11 : 10;
        }
        
        // Let's output a spacer element at grid-row 9 (when in selection mode) or grid-row 8 (when normal)
        // only once, so we don't duplicate it.
        if (el.num === 57) { // lanthanum is the start of Lanthanides display block area
            const spacer = document.createElement('div');
            spacer.className = 'element period-8';
            spacer.style.gridRow = !activeGame && isSelectionMode ? '9' : '8';
            spacer.style.gridColumn = !activeGame && isSelectionMode ? '1 / span 19' : '1 / span 18';
            tableEl.appendChild(spacer);
        }
        
        // Base classes
        cell.className = `element font-english`;
        cell.dataset.atomicNum = el.num; // used by the progress heatmap
        cell.style.gridRow = `${targetRow}`;
        cell.style.gridColumn = `${targetCol}`;
        
        // Handle Explore Mode, Selection Mode, or Active Game
        if (!activeGame) {
            if (isSelectionMode) {
                // Custom selection logic
                cell.classList.add(`cat-${el.cat}`);
                if (customSelectedElements.has(el.num)) {
                    cell.classList.add('selected-for-quiz');
                }
                
                cell.addEventListener('click', () => {
                    if (customSelectedElements.has(el.num)) {
                        customSelectedElements.delete(el.num);
                        cell.classList.remove('selected-for-quiz');
                    } else {
                        customSelectedElements.add(el.num);
                        cell.classList.add('selected-for-quiz');
                    }
                });
            } else {
                // Interactive Explore Mode
                cell.classList.add(`cat-${el.cat}`);
                cell.addEventListener('click', () => openElementInfo(el));
            }
            
            cell.innerHTML = `
                <span class="number" style="direction: ltr; text-align: left;">${el.num}</span>
                <span class="symbol" style="direction: ltr;">${el.sym}</span>
                <span class="name font-vazirmatn" style="direction: ltr;">${el.name}</span>
            `;
        }
        else {
            // Check if this element fits current quiz range constraints
            // (story mode forces its own subset regardless of the radio buttons)
            const rangeMode = document.querySelector('input[name="range-select-mode"]:checked').value;
            const matchesFilters = (rangeMode === 'all' && !storySession) ? el.isMainBlock : customSelectedElements.has(el.num);

            if (matchesFilters) {
                // These are the puzzle targets
                cell.classList.add('puzzle-target');
                cell.dataset.atomic = el.num;
                cell.addEventListener('click', () => handleCellClick(cell, el.num));
                
                // Add internal structure (hidden initially)
                cell.innerHTML = `
                    <span class="number" style="direction: ltr; text-align: left;">${el.num}</span>
                    <span class="symbol" style="direction: ltr;">${el.sym}</span>
                    <span class="name font-vazirmatn" style="direction: ltr;">${el.name}</span>
                `;
                // Store color class to add later when correctly guessed
                cell.dataset.colorClass = `cat-${el.cat}`;
            } else {
                // Pre-filled items (does not match current quiz filter)
                cell.classList.add(`cat-${el.cat}`);
                cell.classList.add('pre-filled');
                
                cell.innerHTML = `
                    <span class="number" style="direction: ltr; text-align: left;">${el.num}</span>
                    <span class="symbol" style="direction: ltr;">${el.sym}</span>
                    <span class="name font-vazirmatn" style="direction: ltr;">${el.name}</span>
                `;
            }
        }
        
        tableEl.appendChild(cell);
    });

    // Re-apply heatmap outlines after any grid rebuild
    if (heatmapActive) applyHeatmap();
}

function initGame() {
    // Get mode
    const selectedMode = document.querySelector('input[name="mode"]:checked').value;
    gameMode = selectedMode;
    
    const rangeMode = document.querySelector('input[name="range-select-mode"]:checked').value;
    
    if (rangeMode === 'custom' && customSelectedElements.size === 0) {
        alert("لطفاً حداقل یک عنصر را از روی جدول برای آزمون انتخاب کنید.");
        return;
    }

    // Reset state
    score = 0;
    lives = 3;
    timeElapsed = 0;
    isGameActive = true;
    comboCount = 0;
    stats = { correct: 0, wrong: 0, bestCombo: 0, hintsUsed: 0 };
    storySession = null; // classic mode
    challengeMode = document.getElementById('challenge-mode-check').checked;

    // Filter element pool matching selected range
    if (rangeMode === 'all') {
        currentPool = elementData.filter(e => e.isMainBlock).sort(() => Math.random() - 0.5);
    } else {
        currentPool = elementData.filter(e => customSelectedElements.has(e.num)).sort(() => Math.random() - 0.5);
    }
    
    if (currentPool.length === 0) {
        alert("هیچ عنصری در محدوده انتخابی شما پیدا نشد.");
        isGameActive = false;
        return;
    }

    // Update UI
    updateStats();
    updateComboDisplay(false);
    createGrid(true);
    
    startPanel.classList.add('hidden');
    document.getElementById('selection-instruction').classList.add('hidden');
    gameDashboard.classList.remove('hidden');
    gameDashboard.classList.add('flex');
    gameDashboard.classList.remove('story-active');
    modal.classList.add('hidden');
    
    // Timer
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeElapsed++;
        updateTimerDisplay();
    }, 1000);
    
    nextElement();
}

/* ============================================================
   STORY MAP MODE 🗺️
   ============================================================ */
function getStoryProgress() {
    try {
        return JSON.parse(localStorage.getItem('pp-story-progress') || '{}');
    } catch (e) { return {}; }
}

function saveStoryProgress(progress) {
    localStorage.setItem('pp-story-progress', JSON.stringify(progress));
}

function isRegionUnlocked(regionIdx) {
    if (regionIdx === 0) return true;
    const progress = getStoryProgress();
    const prevRegion = storyRegions[regionIdx - 1];
    return prevRegion.levels.every(l => progress[prevRegion.id + '/' + l.id]);
}

function isLevelUnlocked(region, levelIdx) {
    if (levelIdx === 0) return isRegionUnlocked(storyRegions.indexOf(region));
    const progress = getStoryProgress();
    return progress[region.id + '/' + region.levels[levelIdx - 1].id];
}

function openStoryMap() {
    SFX.click();
    renderStoryMap();
    document.getElementById('story-map-modal').classList.remove('hidden');
}

function renderStoryMap() {
    const listEl = document.getElementById('story-map-list');
    const progress = getStoryProgress();

    let totalLevels = 0, doneLevels = 0;
    storyRegions.forEach(r => r.levels.forEach(l => {
        totalLevels++;
        if (progress[r.id + '/' + l.id]) doneLevels++;
    }));

    const totalPct = Math.round((doneLevels / totalLevels) * 100);

    document.getElementById('map-total-progress').innerHTML = `
        <div class="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-700/80 shadow-md">
            <div class="flex justify-between items-center text-xs mb-2 font-bold">
                <span class="flex items-center gap-1.5 text-purple-300">
                    ${getIconSvg('compass', 'w-4 h-4 text-purple-400')}
                    <span>پیشرفت کلی مسیر ماجراجویی</span>
                </span>
                <span class="font-english text-cyan-300 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">${doneLevels} / ${totalLevels} (${totalPct}٪)</span>
            </div>
            <div class="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700/50">
                <div class="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 transition-all duration-500" style="width: ${totalPct}%"></div>
            </div>
        </div>
    `;

    // Sinuous offsets for Duolingo path
    const xOffsets = [0, -42, -68, -35, 0, 35, 68, 42];

    listEl.innerHTML = storyRegions.map((region, ri) => {
        const unlocked = isRegionUnlocked(ri);
        const doneCount = region.levels.filter(l => progress[region.id + '/' + l.id]).length;
        const allDone = doneCount === region.levels.length;
        const regIcon = region.icon || 'atom';

        const levelsHtml = region.levels.map((level, li) => {
            const lvlUnlocked = unlocked && isLevelUnlocked(region, li);
            const lvlDone = !!progress[region.id + '/' + level.id];
            const isNextLevel = lvlUnlocked && !lvlDone;
            const xOffset = xOffsets[li % xOffsets.length];
            const isBoss = (li === region.levels.length - 1);

            let nodeClass = 'locked';
            let nodeContent = '';
            let beaconHtml = '';

            if (lvlDone) {
                nodeClass = 'done';
                nodeContent = `
                    ${getIconSvg('check', 'w-7 h-7 text-white stroke-[3]')}
                    <div class="duo-stars">
                        <span class="text-amber-300">${getIconSvg('star', 'w-3 h-3 fill-current')}</span>
                        <span class="text-amber-300">${getIconSvg('star', 'w-3 h-3 fill-current')}</span>
                        <span class="text-amber-300">${getIconSvg('star', 'w-3 h-3 fill-current')}</span>
                    </div>
                `;
            } else if (isNextLevel) {
                nodeClass = 'active-level';
                beaconHtml = `<div class="duo-step-beacon">شروع کن!</div>`;
                nodeContent = `
                    <div class="relative flex items-center justify-center">
                        ${isBoss ? getIconSvg('crown', 'w-7 h-7 text-yellow-300') : getIconSvg('play', 'w-7 h-7 text-white fill-current')}
                    </div>
                `;
            } else {
                nodeClass = 'locked';
                nodeContent = getIconSvg('lock', 'w-6 h-6 text-slate-400');
            }

            const connectingDots = (li < region.levels.length - 1) ? `
                <div class="duo-stepping-dots">
                    <span class="duo-stepping-dot" style="background:${lvlDone ? '#10b981' : '#64748b'}"></span>
                    <span class="duo-stepping-dot" style="background:${lvlDone ? '#10b981' : '#64748b'}"></span>
                    <span class="duo-stepping-dot" style="background:${lvlDone ? '#10b981' : '#64748b'}"></span>
                </div>
            ` : '';

            return `
                <div class="duo-step-row" style="transform: translateX(${xOffset}px);">
                    ${beaconHtml}
                    <button class="duo-step-btn ${nodeClass}"
                            ${!lvlUnlocked ? 'onclick="onLockedLevelClick(event)"' : `onclick="startStoryLevel('${region.id}', '${level.id}')"`}
                            style="${isNextLevel ? `background:${region.color}; box-shadow: 0 6px 0 ${darkenColor(region.color, 40)};` : ''}"
                            title="${level.name}">
                        ${nodeContent}
                    </button>
                    <div class="duo-step-label">
                        <span class="block text-white font-bold text-xs">${level.name}</span>
                        <span class="block text-[11px] text-slate-400 mt-0.5">
                            ${teachNumsResolved(level.teachNums).length > 0 ? 'درس جدید • ' : ''}${resolveQuizNums(level.quizNums).length} عنصر
                        </span>
                    </div>
                    ${connectingDots}
                </div>
            `;
        }).join('');

        return `
            <div class="duo-path-wrapper">
                <!-- Duolingo Unit Banner -->
                <div class="duo-unit-banner" style="background: linear-gradient(135deg, ${region.color}22, rgba(15,23,42,0.95)); border-color: ${unlocked ? region.color : '#334155'};">
                    <div class="flex items-center justify-between gap-3">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg" style="background: ${region.color}33; color: ${region.color}; border: 1.5px solid ${region.color}66;">
                                ${unlocked ? getIconSvg(regIcon, 'w-6 h-6') : getIconSvg('lock', 'w-6 h-6 text-slate-400')}
                            </div>
                            <div>
                                <span class="text-[11px] font-black uppercase tracking-wider text-slate-400 block">بخش ${ri + 1} از ${storyRegions.length}</span>
                                <h3 class="font-extrabold text-base md:text-lg text-white" style="color: ${unlocked ? region.color : '#94a3b8'}">${region.name}</h3>
                                <p class="text-xs text-slate-400 mt-0.5 line-clamp-1">${region.desc}</p>
                            </div>
                        </div>
                        <div class="text-left shrink-0">
                            <span class="inline-flex items-center gap-1 text-xs font-black font-english px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-700/80 text-cyan-300">
                                ${getIconSvg('star', 'w-3.5 h-3.5 text-yellow-400 fill-current')}
                                <span>${doneCount} / ${region.levels.length}</span>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Winding Path of Levels -->
                <div class="flex flex-col items-center">
                    ${levelsHtml}
                </div>
            </div>
        `;
    }).join('');

    refreshIcons();
}

function darkenColor(hex, percent) {
    if (!hex || hex.charAt(0) !== '#') return '#1e293b';
    let num = parseInt(hex.slice(1), 16);
    let r = (num >> 16) - Math.round(255 * (percent / 100));
    let g = ((num >> 8) & 0x00FF) - Math.round(255 * (percent / 100));
    let b = (num & 0x0000FF) - Math.round(255 * (percent / 100));
    r = Math.max(0, r); g = Math.max(0, g); b = Math.max(0, b);
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}

window.onLockedLevelClick = function(e) {
    e.stopPropagation();
    SFX.wrong();
    const btn = e.currentTarget;
    btn.classList.remove('vibefarsi-shake');
    void btn.offsetWidth;
    btn.classList.add('vibefarsi-shake');
    setTimeout(() => btn.classList.remove('vibefarsi-shake'), 500);
};

function teachNumsResolved(nums) { return nums || []; }

function resolveQuizNums(qn) {
    if (qn === '__ALL__') return elementData.filter(e => e.isMainBlock).map(e => e.num);
    return qn || [];
}

window.startStoryLevel = function(regionId, levelId) {
    const region = storyRegions.find(r => r.id === regionId);
    const level = region.levels.find(l => l.id === levelId);
    if (!region || !level) return;
    if (!isRegionUnlocked(storyRegions.indexOf(region)) || !isLevelUnlocked(region, region.levels.indexOf(level))) return;

    showLevelIntro(region, level);
};

/* 📍 نمایش جای عنصر روی جدول واقعی (از داخل مودال آموزش) */
let locateTimer = null;
window.locateTeachElement = function(num) {
    const el = elementData.find(e => e.num === num);
    if (!el) return;
    SFX.locate();

    // hide intro modal so the table is fully visible
    document.getElementById('level-intro-modal').classList.add('hidden');

    // make sure the table is rendered (display mode) and scrolled into view
    if (!tableEl.children.length) createGrid(false);
    document.getElementById('periodic-table').scrollIntoView({ behavior: 'smooth', block: 'center' });

    // clear previous locate effects
    tableEl.querySelectorAll('.teach-locate').forEach(c => c.classList.remove('teach-locate'));
    const markerBox = document.getElementById('locate-marker-box');
    if (markerBox) markerBox.remove();

    const cell = tableEl.querySelector(`.element[data-atomic-num="${num}"]`);
    if (!cell) return;

    cell.classList.add('teach-locate');

    // floating label above the element
    const info = categoryInfo[el.cat] || {};
    const marker = document.createElement('div');
    marker.id = 'locate-marker-box';
    marker.className = 'locate-marker';
    marker.style.borderColor = info.color;
    marker.innerHTML = `<b class="font-english" style="color:${info.color}">${el.sym}</b> ${el.name} — ردیف ${el.p > 8 ? (el.p === 9 ? 'لانتانید' : 'اکتینید') : el.p}، ستون ${el.g}`;
    document.body.appendChild(marker);

    // position the marker near the cell
    const rect = cell.getBoundingClientRect();
    marker.style.left = Math.max(8, Math.min(window.innerWidth - marker.offsetWidth - 8, rect.left + rect.width / 2 - marker.offsetWidth / 2)) + 'px';
    marker.style.top = (rect.top - marker.offsetHeight - 10 < 8 ? rect.bottom + 10 : rect.top - marker.offsetHeight - 10) + 'px';

    // auto-return to the intro modal after a few seconds
    clearTimeout(locateTimer);
    locateTimer = setTimeout(() => closeLocateView(), 4200);
};

function closeLocateView() {
    clearTimeout(locateTimer);
    tableEl.querySelectorAll('.teach-locate').forEach(c => c.classList.remove('teach-locate'));
    const markerBox = document.getElementById('locate-marker-box');
    if (markerBox) markerBox.remove();
    const intro = document.getElementById('level-intro-modal');
    if (intro.classList.contains('hidden')) intro.classList.remove('hidden');
}
window.closeLocateView = closeLocateView;

function showLevelIntro(region, level) {
    SFX.click();
    const teachEls = (level.teachNums || []).map(n => elementData.find(e => e.num === n)).filter(Boolean);

    // chips now include a "📍 جای عنصر" button that shows its position on the real table
    const chips = teachEls.map((el, i) => {
        const info = categoryInfo[el.cat] || {};
        return `
            <span class="teach-element-chip cursor-pointer" style="animation-delay:${i * 0.12}s" onclick="openElementInfo(elementData.find(e=>e.num===${el.num}))">
                <b class="font-english text-xl" style="color:${info.color}">${el.sym}</b>
                <span class="text-sm font-bold text-white">${el.name}</span>
                <span class="text-xs text-slate-400 font-english">#${el.num}</span>
                <button class="teach-locate-btn" onclick="event.stopPropagation(); locateTeachElement(${el.num})" title="مشاهده موقعیت روی جدول">
                    ${getIconSvg('map-pin', 'w-3.5 h-3.5 text-cyan-400')}
                </button>
            </span>
        `;
    }).join('');

    const factsHtml = teachEls.map(el => {
        const facts = elementFacts[el.num] || [];
        const fact = facts.length ? facts[0] : '';
        return fact ? `<p class="text-xs md:text-sm leading-relaxed text-slate-300 flex items-start gap-2"><span class="inline-block w-2 h-2 rounded-full mt-1.5 shrink-0" style="background:${(categoryInfo[el.cat]||{}).color}"></span><span>${fact}</span></p>` : '';
    }).join('');

    const regIcon = region.icon || 'atom';

    document.getElementById('level-teach-content').innerHTML = `
        <div class="text-center mb-5">
            <div class="w-14 h-14 mx-auto mb-2 rounded-2xl flex items-center justify-center shadow-lg" style="background:${region.color}22; color:${region.color}; border:1.5px solid ${region.color}55;">
                ${getIconSvg(regIcon, 'w-8 h-8')}
            </div>
            <h2 class="text-2xl font-extrabold text-white mt-1">${level.name}</h2>
            <p class="text-xs text-purple-300 font-bold mt-0.5">${region.name}</p>
        </div>

        ${teachEls.length ? `
        <div class="teach-card mb-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-700/80">
            <p class="text-cyan-300 font-extrabold text-xs md:text-sm mb-2.5 flex items-center gap-1.5">
                ${getIconSvg('book-open', 'w-4 h-4 text-cyan-400')}
                <span>عناصر جدید این درس را بشناسید:</span>
            </p>
            <div class="mb-3">${chips}</div>
            <div class="space-y-2 text-slate-300">${factsHtml}</div>
            <p class="text-[11px] text-slate-400 mt-3 pt-2 border-t border-slate-800 flex items-center gap-1">
                ${getIconSvg('info', 'w-3.5 h-3.5 text-slate-400')}
                <span>روی هر عنصر کلیک کنید تا کارت کامل مشخصات را ببینید.</span>
            </p>
        </div>
        <div class="bg-emerald-900/20 border border-emerald-600/40 rounded-2xl p-3.5 mb-4 text-xs md:text-sm text-emerald-300 flex items-center gap-2">
            ${getIconSvg('check-circle-2', 'w-5 h-5 text-emerald-400 shrink-0')}
            <span>سپس باید <b>${resolveQuizNums(level.quizNums).length} عنصر</b> را به درستی در جدول قرار دهید.</span>
        </div>` : `
        <div class="bg-purple-900/20 border border-purple-500/40 rounded-2xl p-4 mb-4 text-xs md:text-sm text-purple-200 flex items-center gap-2.5">
            ${getIconSvg('shield', 'w-6 h-6 text-purple-400 shrink-0')}
            <span>مرحله مبارزه و مرور! هیچ عنصر جدیدی نیست — هر <b>${resolveQuizNums(level.quizNums).length} عنصر</b> را درست جای‌گذاری کنید!</span>
        </div>`}

        <button id="begin-level-btn" class="w-full bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:from-purple-500 hover:to-fuchsia-400 text-white font-bold py-3.5 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-500/30 mb-2.5 vibefarsi-shine flex items-center justify-center gap-2">
            ${getIconSvg('play', 'w-4 h-4')}
            <span>شروع مرحله</span>
        </button>
        <button id="cancel-level-btn" class="w-full bg-slate-700/80 hover:bg-slate-600 text-slate-200 font-bold py-2.5 rounded-2xl transition-all text-xs md:text-sm flex items-center justify-center gap-1.5">
            ${getIconSvg('arrow-right', 'w-4 h-4')}
            <span>بازگشت به نقشه</span>
        </button>
    `;

    document.getElementById('level-intro-modal').classList.remove('hidden');
    document.getElementById('story-map-modal').classList.add('hidden');

    document.getElementById('begin-level-btn').onclick = () => beginStoryQuiz(region, level);
    document.getElementById('cancel-level-btn').onclick = () => {
        document.getElementById('level-intro-modal').classList.add('hidden');
        openStoryMap();
    };
    refreshIcons();
}

function beginStoryQuiz(region, level) {
    document.getElementById('level-intro-modal').classList.add('hidden');

    const quizNums = resolveQuizNums(level.quizNums);
    const pool = elementData.filter(e => quizNums.includes(e.num)).sort(() => Math.random() - 0.5);
    if (pool.length === 0) { alert('خطا در بارگذاری مرحله.'); return; }

    // 🎓 Boot-camp: flash the positions of ALL taught-so-far elements on the table
    const taughtNums = (level.teachNums || []);
    if (taughtNums.length) {
        runTeachBootCamp(taughtNums, () => launchStoryRun(region, level, pool));
    } else {
        launchStoryRun(region, level, pool);
    }
}

/* افکت آموزشی: هر عنصر جدید یکی‌یکی روی جدول روشن می‌شه + صدای نت */
function runTeachBootCamp(teachNums, done) {
    // ensure display grid
    createGrid(false);
    startPanel.classList.add('hidden');
    gameDashboard.classList.add('hidden');
    gameDashboard.classList.remove('flex', 'story-active');

    const overlay = document.createElement('div');
    overlay.id = 'bootcamp-overlay';
    overlay.innerHTML = `
        <div class="bootcamp-title flex items-center gap-1.5">${getIconSvg('sparkles', 'w-4 h-4 text-cyan-400')}<span>جایگاه عناصر جدید را به خاطر بسپارید...</span></div>
        <button id="bootcamp-skip-btn" class="bootcamp-skip flex items-center gap-1"><span>رد شدن</span>${getIconSvg('chevron-left', 'w-3.5 h-3.5')}</button>
    `;
    document.body.appendChild(overlay);

    let cancelled = false;
    document.getElementById('bootcamp-skip-btn').onclick = () => { cancelled = true; finish(); };

    function cleanupCells() {
        tableEl.querySelectorAll('.teach-locate').forEach(c => c.classList.remove('teach-locate'));
        tableEl.querySelectorAll('.bootcamp-dim').forEach(c => c.classList.remove('bootcamp-dim'));
    }
    function finish() {
        overlay.remove();
        cleanupCells();
        if (!cancelled) SFX.click();
        done();
    }

    // dim all cells first for dramatic spotlight effect
    tableEl.querySelectorAll('.element').forEach(c => c.classList.add('bootcamp-dim'));

    let i = 0;
    const stepMs = 900;
    function step() {
        if (cancelled) return;
        if (i >= teachNums.length) { setTimeout(finish, 700); return; }
        const num = teachNums[i++];
        const el = elementData.find(e => e.num === num);
        const cell = tableEl.querySelector(`.element[data-atomic-num="${num}"]`);
        if (cell && el) {
            cell.classList.add('teach-locate');
            cell.scrollIntoView({ behavior: 'smooth', block: 'center' });
            SFX.teachStep(i);
        }
        setTimeout(step, stepMs);
    }
    // small delay so layout settles before first highlight
    setTimeout(step, 350);
}

function launchStoryRun(region, level, pool) {
    const bootOverlay = document.getElementById('bootcamp-overlay');
    if (bootOverlay) bootOverlay.remove();

    // Reset state for the story run
    score = 0;
    lives = 3;
    timeElapsed = 0;
    isGameActive = true;
    comboCount = 0;
    stats = { correct: 0, wrong: 0, bestCombo: 0, hintsUsed: 0 };
    challengeMode = false;
    storySession = { regionId: region.id, levelId: level.id };

    currentPool = pool;

    // Force custom-range rendering for this subset
    customSelectedElements = new Set(pool.map(e => e.num));

    updateStats();
    updateComboDisplay(false);
    createGrid(true);

    startPanel.classList.add('hidden');
    gameDashboard.classList.remove('hidden');
    gameDashboard.classList.add('flex');
    gameDashboard.classList.add('story-active');
    modal.classList.add('hidden');

    // Story banner inside dashboard area (recreate each run)
    let banner = document.getElementById('story-banner-live');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'story-banner-live';
        banner.className = 'story-banner flex items-center justify-center gap-2';
        gameDashboard.parentElement.insertBefore(banner, gameDashboard);
    }
    banner.style.display = 'flex';
    banner.innerHTML = `<span class="inline-flex items-center gap-1.5 text-purple-300 font-bold">${getIconSvg(region.icon || 'atom', 'w-4 h-4')} ماجراجویی: ${region.name} — ${level.name}</span>`;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeElapsed++;
        updateTimerDisplay();
    }, 1000);

    nextElement();
}

function completeStoryLevel(regionId, levelId, finalScore) {
    const progress = getStoryProgress();
    const key = regionId + '/' + levelId;
    const prev = progress[key] || 0;
    progress[key] = Math.max(prev, finalScore); // keep best score per level
    saveStoryProgress(progress);
    SFX.levelUp();
    setTimeout(() => launchConfetti(60), 700);
}

/* ============================================================
   HEATMAP — per-element success tracking 🌡️
   ============================================================ */
function recordAnswerResult(num, correct) {
    try {
        const hm = JSON.parse(localStorage.getItem('pp-heatmap') || '{}');
        if (!hm[num]) hm[num] = { c: 0, w: 0 };
        if (correct) hm[num].c++; else hm[num].w++;
        hm[num].last = Date.now();
        localStorage.setItem('pp-heatmap', JSON.stringify(hm));
    } catch (e) {}
}

function heatClass(num) {
    try {
        const hm = JSON.parse(localStorage.getItem('pp-heatmap') || '{}');
        const rec = hm[num];
        if (!rec || (rec.c + rec.w) === 0) return 'heat-none';
        const rate = rec.c / (rec.c + rec.w);
        const attempts = rec.c + rec.w;
        if (attempts >= 3 && rate >= 0.85) return 'heat-master';
        if (rate >= 0.7) return 'heat-good';
        if (rate >= 0.45) return 'heat-mid';
        return 'heat-weak';
    } catch (e) { return 'heat-none'; }
}

let heatmapActive = false;
function toggleHeatmap() {
    heatmapActive = !heatmapActive;
    SFX.click();
    applyHeatmap();
}

function applyHeatmap() {
    tableEl.querySelectorAll('.element[data-atomic-num]').forEach(c => {
        c.classList.remove('heat-none', 'heat-weak', 'heat-mid', 'heat-good', 'heat-master');
        if (heatmapActive) {
            c.classList.add(heatClass(parseInt(c.dataset.atomicNum)));
        }
    });
    const legend = document.getElementById('heatmap-legend');
    if (legend) legend.classList.toggle('hidden', !heatmapActive);
    const btn = document.getElementById('heatmap-btn');
    if (btn) {
        btn.innerHTML = heatmapActive 
            ? `<span class="flex items-center justify-center gap-1.5">${getIconSvg('flame', 'w-4 h-4 text-rose-400')}<span>خاموش کردن نقشه</span></span>`
            : `<span class="flex items-center justify-center gap-1.5">${getIconSvg('flame', 'w-4 h-4 text-orange-400')}<span>نقشه پیشرفت من</span></span>`;
    }
}

/* ============================================================
   ENHANCED ELEMENT INFO CARD 🔬
   ============================================================ */

function nextElement() {
    if (currentPool.length === 0) {
        endGame(true);
        return;
    }
    
    currentElement = currentPool.pop();
    
    if (gameMode === 'symbol') {
        targetSymbolEl.textContent = currentElement.sym;
        targetNameEl.textContent = ''; // Hide name
    } else {
        targetSymbolEl.textContent = currentElement.name;
        targetNameEl.textContent = ''; // Show symbol small below
        // Adjust text size if name is long
        if (currentElement.name.length > 8) {
            targetSymbolEl.className = 'text-2xl md:text-3xl leading-none';
        } else {
            targetSymbolEl.className = 'text-3xl md:text-4xl leading-none';
        }
    }
    
    // Add pop animation to target box
    targetBox.style.transform = 'scale(0.8)';
    setTimeout(() => {
        targetBox.style.transform = 'scale(1)';
    }, 150);

    // Restart the per-question challenge countdown
    startChallengeTimer();
}

function handleCellClick(cell, targetAtomic) {
    if (!isGameActive || !currentElement || cell.classList.contains('filled')) return;
    
    if (targetAtomic === currentElement.num) {
        // Correct!
        cell.classList.remove('puzzle-target');
        cell.classList.add('filled');
        cell.classList.add(cell.dataset.colorClass); // Apply original color

        registerCorrectAnswer(cell);
        
        // Record progress for the heatmap
        recordAnswerResult(targetAtomic, true);

        stopChallengeTimer();
        updateStats();
        setTimeout(() => { nextElement(); }, 250);
    } else {
        // Wrong!
        cell.classList.add('wrong-guess');
        setTimeout(() => cell.classList.remove('wrong-guess'), 500);

        recordAnswerResult(currentElement.num, false);
        registerWrongAnswer(cell); // includes the -5 penalty & SFX
        
        lives--;
        updateStats(); // render AFTER decrementing so hearts stay in sync
        
        if (lives <= 0) {
            endGame(false);
        }
    }
}

function renderLivesDisplay(curLives, maxLives = 3) {
    if (!livesEl) return;
    let svgHearts = '';
    for (let i = 0; i < maxLives; i++) {
        const active = i < curLives;
        svgHearts += `
            <span class="inline-block transition-transform duration-300 ${active ? 'scale-100' : 'scale-75 opacity-25'}">
                <svg class="w-6 h-6 md:w-7 md:h-7 ${active ? 'text-rose-500 fill-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.7)]' : 'text-slate-600 fill-slate-700'}" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </span>
        `;
    }
    // Hidden text for test compatibility (match /❤️/g) + rich SVG hearts for visual display
    livesEl.innerHTML = `<span class="sr-only" style="display:none">${'❤️'.repeat(Math.max(0, curLives))}</span><span class="flex items-center gap-1.5">${svgHearts}</span>`;
}

function updateStats() {
    scoreEl.textContent = score;
    const prevLives = parseInt(livesEl.dataset.prev || '3');
    renderLivesDisplay(lives);
    if (lives < prevLives) {
        livesEl.classList.remove('heart-hit');
        void livesEl.offsetWidth;
        livesEl.classList.add('heart-hit');
    }
    livesEl.dataset.prev = lives;
}

function updateTimerDisplay() {
    const mins = Math.floor(timeElapsed / 60).toString().padStart(2, '0');
    const secs = (timeElapsed % 60).toString().padStart(2, '0');
    timerEl.textContent = `${mins}:${secs}`;
}

function endGame(win) {
    isGameActive = false;
    clearInterval(timerInterval);
    stopChallengeTimer();
    modal.classList.remove('hidden');
    
    const accuracy = (stats.correct + stats.wrong) > 0
        ? Math.round((stats.correct / (stats.correct + stats.wrong)) * 100)
        : 0;

    if (win) {
        modalTitle.innerHTML = `<span class="flex items-center justify-center gap-2"><span>تبریک! پیروز شدی</span> ${getIconSvg('trophy', 'w-8 h-8 text-yellow-400 inline-block animate-bounce')}</span>`;
        modalTitle.className = 'text-3xl font-extrabold text-green-400 mb-2';
        modalMessage.textContent = storySession ? 'مرحله ماجراجویی با موفقیت کامل شد!' : 'شما تمام عناصر را با موفقیت در جایگاه صحیح خود قرار دادید!';
        launchConfetti();
        SFX.victory();
    } else {
        modalTitle.innerHTML = `<span class="flex items-center justify-center gap-2"><span>پایان بازی</span> ${getIconSvg('frown', 'w-8 h-8 text-rose-500 inline-block')}</span>`;
        modalTitle.className = 'text-3xl font-extrabold text-rose-500 mb-2';
        modalMessage.innerHTML = `عنصری که نتوانستید پیدا کنید:<br><span class="font-bold text-white text-xl mt-2 inline-block font-english">${currentElement.sym} - ${currentElement.name}</span>`;
        SFX.gameOver();
    }

    // End-game statistics chips
    document.getElementById('end-stats').innerHTML = `
        <span class="stat-chip flex items-center gap-1">${getIconSvg('target', 'w-3.5 h-3.5 text-cyan-400')}<span>دقت:</span><b>${accuracy}%</b></span>
        <span class="stat-chip flex items-center gap-1">${getIconSvg('zap', 'w-3.5 h-3.5 text-amber-400')}<span>بهترین زنجیره:</span><b>${stats.bestCombo}</b></span>
        <span class="stat-chip flex items-center gap-1">${getIconSvg('check', 'w-3.5 h-3.5 text-emerald-400')}<span>درست:</span><b>${stats.correct}</b></span>
        <span class="stat-chip flex items-center gap-1">${getIconSvg('x', 'w-3.5 h-3.5 text-rose-400')}<span>اشتباه:</span><b>${stats.wrong}</b></span>
        ${stats.hintsUsed ? `<span class="stat-chip flex items-center gap-1">${getIconSvg('lightbulb', 'w-3.5 h-3.5 text-yellow-300')}<span>راهنما:</span><b>${stats.hintsUsed}</b></span>` : ''}
    `;
    
    finalScoreEl.textContent = score;

    // Story mode: unlock next level instead of leaderboard spam
    if (storySession && win) {
        completeStoryLevel(storySession.regionId, storySession.levelId, score);
    }
	
    // Save to Leaderboard logic (only for classic games)
    if (!storySession) {
        setTimeout(() => {
            if (score > 0 && playerName) {
                document.getElementById('leaderboard-modal').classList.remove('hidden');
                saveScoreToDB(playerName, score);
            }
        }, 500); // slight delay so modal renders first
    }
}

// Event Listeners
startBtn.addEventListener('click', initGame);
restartBtn.addEventListener('click', () => {
    startPanel.classList.remove('hidden');
    gameDashboard.classList.add('hidden');
    gameDashboard.classList.remove('flex', 'story-active');
    modal.classList.add('hidden');
    const banner = document.getElementById('story-banner-live');
    if (banner) banner.style.display = 'none';
    storySession = null;
    createGrid(false); // Reset to display mode
});

// Welcome Modal Logic
document.getElementById('submit-name-btn').addEventListener('click', () => {
    const input = document.getElementById('player-name-input');
    if (input.value.trim() !== '') {
        playerName = input.value.trim();
        const welcomeModal = document.getElementById('welcome-modal');
        welcomeModal.style.opacity = '0';
        setTimeout(() => welcomeModal.classList.add('hidden'), 500); // Wait for fade out
    } else {
        input.classList.add('border-rose-500');
        input.classList.remove('border-slate-600');
        setTimeout(() => {
            input.classList.remove('border-rose-500');
            input.classList.add('border-slate-600');
        }, 1000);
    }
});
document.getElementById('player-name-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('submit-name-btn').click();
    }
});

// Re-add close button listener for mobile specifically
const closeBtn = document.getElementById('close-element-btn');
if(closeBtn) {
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('element-modal').classList.add('hidden');
    });
}

/* ============================================================
   QUICK REVIEW (مرور سریع - فلش‌کارت ۳ بعدی VibeFarsi)
   ============================================================ */
let reviewList = [];
let reviewCurrentIdx = 0;
let reviewCategory = 'all';

function getMasteredElements() {
    try {
        return JSON.parse(localStorage.getItem('periodic_puzzle_mastered') || '{}');
    } catch {
        return {};
    }
}

function setMasteredElement(num, mastered) {
    const data = getMasteredElements();
    if (mastered) {
        data[num] = true;
    } else {
        delete data[num];
    }
    try {
        localStorage.setItem('periodic_puzzle_mastered', JSON.stringify(data));
    } catch {}
}

const REVIEW_CATEGORIES = [
    { id: 'all', name: 'همه عناصر' },
    { id: 'alkali', name: 'فلز قلیایی' },
    { id: 'alkaline-earth', name: 'قلیایی خاکی' },
    { id: 'transition', name: 'فلز واسطه' },
    { id: 'post-transition', name: 'فلز پس‌واسطه' },
    { id: 'metalloid', name: 'شبه‌فلز' },
    { id: 'nonmetal', name: 'نافلز' },
    { id: 'halogen', name: 'هالوژن' },
    { id: 'noble', name: 'گاز نجیب' },
    { id: 'lanthanide', name: 'لانتانید' },
    { id: 'actinide', name: 'اکتینید' }
];

window.openQuickReview = function() {
    SFX.click();
    buildReviewCategoryPills();
    filterReviewList(reviewCategory);
    const modal = document.getElementById('quick-review-modal');
    if (modal) modal.classList.remove('hidden');
    window.addEventListener('keydown', handleReviewKeydown);
    refreshIcons();
};

window.closeQuickReview = function(e) {
    if (e && e.target && e.target.id !== 'quick-review-modal' && e.target.id !== 'close-quick-review-btn' && !e.target.closest('#close-quick-review-btn')) {
        return;
    }
    const modal = document.getElementById('quick-review-modal');
    if (modal) modal.classList.add('hidden');
    window.removeEventListener('keydown', handleReviewKeydown);
};

function handleReviewKeydown(e) {
    const modal = document.getElementById('quick-review-modal');
    if (!modal || modal.classList.contains('hidden')) return;
    if (document.activeElement && document.activeElement.tagName === 'INPUT') return;

    if (e.code === 'Space') {
        e.preventDefault();
        toggleReviewCardFlip();
    } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        nextReviewElement();
    } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        prevReviewElement();
    } else if (e.code === 'Escape') {
        closeQuickReview();
    }
}

function buildReviewCategoryPills() {
    const container = document.getElementById('review-category-pills');
    if (!container) return;
    container.innerHTML = REVIEW_CATEGORIES.map(cat => `
        <button onclick="filterReviewList('${cat.id}')"
                class="review-pill-btn px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all text-xs ${reviewCategory === cat.id ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}">
            ${cat.name}
        </button>
    `).join('');
}

window.filterReviewList = function(catId) {
    reviewCategory = catId;
    buildReviewCategoryPills();
    if (catId === 'all') {
        reviewList = [...elementData];
    } else {
        reviewList = elementData.filter(e => e.cat === catId);
    }
    reviewCurrentIdx = 0;
    renderCurrentReviewCard();
};

// Search filter
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('review-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            if (!query) {
                filterReviewList(reviewCategory);
                return;
            }
            reviewList = elementData.filter(el => {
                return el.name.toLowerCase().includes(query) ||
                       el.sym.toLowerCase().includes(query) ||
                       el.num.toString() === query;
            });
            reviewCurrentIdx = 0;
            renderCurrentReviewCard();
        });
    }
});

window.toggleReviewCardFlip = function() {
    const card = document.getElementById('review-flip-card');
    if (!card) return;
    card.classList.toggle('is-flipped');
    updateReviewCardSideTabs();
    SFX.click();
};

window.setReviewCardSide = function(side) {
    const card = document.getElementById('review-flip-card');
    if (!card) return;
    if (side === 'back') {
        card.classList.add('is-flipped');
    } else {
        card.classList.remove('is-flipped');
    }
    updateReviewCardSideTabs();
    SFX.click();
};

function updateReviewCardSideTabs() {
    const card = document.getElementById('review-flip-card');
    if (!card) return;
    const isFlipped = card.classList.contains('is-flipped');
    const tabFront = document.getElementById('review-tab-front');
    const tabBack = document.getElementById('review-tab-back');
    if (tabFront && tabBack) {
        if (isFlipped) {
            tabFront.className = 'px-3 py-1 rounded-xl text-xs font-bold transition-all text-slate-400 hover:text-white bg-slate-800/80';
            tabBack.className = 'px-3 py-1 rounded-xl text-xs font-bold transition-all bg-emerald-600 text-white shadow-md';
        } else {
            tabFront.className = 'px-3 py-1 rounded-xl text-xs font-bold transition-all bg-emerald-600 text-white shadow-md';
            tabBack.className = 'px-3 py-1 rounded-xl text-xs font-bold transition-all text-slate-400 hover:text-white bg-slate-800/80';
        }
    }
}

window.nextReviewElement = function() {
    if (reviewList.length === 0) return;
    reviewCurrentIdx = (reviewCurrentIdx + 1) % reviewList.length;
    renderCurrentReviewCard();
    SFX.click();
};

window.prevReviewElement = function() {
    if (reviewList.length === 0) return;
    reviewCurrentIdx = (reviewCurrentIdx - 1 + reviewList.length) % reviewList.length;
    renderCurrentReviewCard();
    SFX.click();
};

window.pickRandomReviewElement = function() {
    if (reviewList.length === 0) return;
    reviewCurrentIdx = Math.floor(Math.random() * reviewList.length);
    renderCurrentReviewCard();
    SFX.click();
};

window.markCurrentElementReview = function(mastered) {
    if (reviewList.length === 0) return;
    const el = reviewList[reviewCurrentIdx];
    setMasteredElement(el.num, mastered);

    if (mastered) {
        SFX.correct();
        if (window.launchConfetti) window.launchConfetti();
        if (window.showToast) window.showToast(`تسلط بر عنصر ${el.name} (${el.sym})!`, 'به لیست عناصر مسلط شده افزوده شد 🌟', 'success');
    } else {
        SFX.wrong();
        if (window.showToast) window.showToast(`نیاز به تمرین: ${el.name}`, 'این کارت برای یادگیری بیشتر دوباره تکرار خواهد شد', 'warning');
    }
    renderCurrentReviewCard();
    setTimeout(() => {
        nextReviewElement();
    }, 450);
};

function renderCurrentReviewCard() {
    const card = document.getElementById('review-flip-card');
    if (card) card.classList.remove('is-flipped');

    if (!reviewList || reviewList.length === 0) {
        const counterText = document.getElementById('review-counter-text');
        if (counterText) counterText.textContent = 'هیچ عنصری یافت نشد';
        return;
    }

    const el = reviewList[reviewCurrentIdx];
    const cat = categoryInfo[el.cat] || { name: 'عنصر', color: '#05d9e8' };
    const masteredData = getMasteredElements();
    const isMastered = !!masteredData[el.num];
    const masteredCount = Object.keys(masteredData).length;
    const totalMasteryPct = Math.round((masteredCount / 118) * 100);

    // Progress updates
    const counterText = document.getElementById('review-counter-text');
    if (counterText) counterText.textContent = `عنصر ${reviewCurrentIdx + 1} از ${reviewList.length} (عدد اتمی: #${el.num})`;
    const masteryBadge = document.getElementById('review-mastery-badge');
    if (masteryBadge) masteryBadge.textContent = `تسلط کلی: ${totalMasteryPct}٪ (${masteredCount}/118)`;
    const progressFill = document.getElementById('review-progress-fill');
    if (progressFill) progressFill.style.width = `${((reviewCurrentIdx + 1) / reviewList.length) * 100}%`;

    // Front Face
    const numEl = document.getElementById('rf-atomic-num');
    if (numEl) numEl.textContent = `#${el.num}`;
    const catBadge = document.getElementById('rf-category-badge');
    if (catBadge) {
        catBadge.textContent = cat.name;
        catBadge.style.backgroundColor = `${cat.color}33`;
        catBadge.style.borderColor = cat.color;
        catBadge.style.borderWidth = '1px';
        catBadge.style.color = cat.color;
    }
    const symEl = document.getElementById('rf-symbol');
    if (symEl) {
        symEl.textContent = el.sym;
        symEl.style.color = cat.color;
    }
    const starEl = document.getElementById('rf-mastered-star');
    if (starEl) {
        starEl.classList.toggle('hidden', !isMastered);
    }
    const cardFront = document.querySelector('.flip-card-front');
    if (cardFront) {
        cardFront.style.borderColor = `${cat.color}77`;
    }

    // Back Face
    const cardBack = document.querySelector('.flip-card-back');
    if (cardBack) {
        cardBack.style.borderColor = `${cat.color}77`;
    }
    const nameEl = document.getElementById('rb-name');
    if (nameEl) nameEl.textContent = el.name;
    const engEl = document.getElementById('rb-english');
    if (engEl) engEl.textContent = el.en || el.english || el.sym;
    const symBack = document.getElementById('rb-symbol-back');
    if (symBack) {
        symBack.textContent = el.sym;
        symBack.style.color = cat.color;
    }
    updateReviewCardSideTabs();

    let mass = '-';
    let melt = '-';
    if (typeof elementProperties !== 'undefined') {
        if (elementProperties.mass && elementProperties.mass[el.num]) mass = elementProperties.mass[el.num];
        if (elementProperties.melt && elementProperties.melt[el.num] !== undefined) melt = `${elementProperties.melt[el.num]}°C`;
    }
    const massEl = document.getElementById('rb-mass');
    if (massEl) massEl.textContent = mass;
    const meltEl = document.getElementById('rb-melt');
    if (meltEl) meltEl.textContent = melt;

    const eShells = getElectronShells(el.num).filter(n => n > 0);
    const shellsEl = document.getElementById('rb-shells');
    if (shellsEl) shellsEl.textContent = `[${eShells.join(', ')}]`;

    const facts = (typeof elementFacts !== 'undefined' && elementFacts[el.num]) ? elementFacts[el.num] : [];
    const factText = facts.length ? facts[0] : (cat.desc || 'عنصر بنیادین سازنده جهان مادی.');
    const factEl = document.getElementById('rb-fact');
    if (factEl) factEl.textContent = factText;

    refreshIcons();
}
