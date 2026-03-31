// هذه هي قاعدة البيانات الثابتة للمدونة (Static Database)

const articlesList = [
    {
        id: 'jwst-cosmology-crisis',
        title: 'أزمة علم الكونيات: كيف حطّم جيمس ويب فهمنا لبداية الكون؟',
        excerpt: 'عبر اكتشافه مجرات عملاقة في فجر الأزمنة تقلب الموازين، يضع التلسكوب أفكارنا القديمة في مأزق. هل نحتاج إلى فيزياء جديدة كلياً؟',
        image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200&auto=format&fit=crop',
        category: 'الفيزياء الفلكية',
        readTime: '4',
        date: 'March 30, 2026',
        file: 'posts/jwst-cosmology-crisis.md'
    },
    {
        id: 'nuclear-fusion-breakthrough',
        title: 'إشعال شمس صغيرة على الأرض: إنجاز تاريخي في الاندماج النووي',
        excerpt: 'لأول مرة، ينجح البشر في توليد طاقة من تجربة اندماج نووي نظيفة أكبر من الطاقة التي استهلكوها لتشغيلها. هل اقتربنا من طاقة لا تنضب؟',
        image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1200&auto=format&fit=crop',
        category: 'الديناميكا الحرارية',
        readTime: '3',
        date: 'March 25, 2026',
        file: 'posts/nuclear-fusion-breakthrough.md'
    },
    {
        id: 'universe-hum-nanograv',
        title: 'أخيراً.. العلماء يتمكنون من الاستماع إلى "همهمة" الكون',
        excerpt: 'الكون ليس صامتاً بل يطرب بـ"همهمة" خافتة سببها رقص ثقوب سوداء عملاقة تصطدم ببعضها. كيف استطعنا التقاط هذه النغمات الخفية؟',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
        category: 'النسبية العامة',
        readTime: '5',
        date: 'March 18, 2026',
        file: 'posts/universe-hum-nanograv.md'
    },
    {
        id: 'superconductors-future',
        title: 'الموصلات الفائقة: المادة السحرية التي ستغير شكل التكنولوجيا قريباً',
        excerpt: 'تخيل كهرباء تنتقل بدون أي حرارة وبسرعة خيالية، وقطارات تطفو في الهواء. هكذا يقترب العلماء من ابتكار موصلات فائقة في درجة حرارة الغرفة.',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop',
        category: 'فيزياء مادية',
        readTime: '4',
        date: 'March 10, 2026',
        file: 'posts/superconductors-future.md'
    },
    {
        id: 'quantum-computing-era',
        title: 'عصر الحواسيب الكمية: أين وصل الجنون التقني؟',
        excerpt: 'كمبيوتر يقوم بمهام في ثوانٍ كانت ستستغرق ملايين السنين في أسرع الحواسيب التقليدية! كيف تستخدم هذه الأجهزة قوانين فيزياء الكم الغريبة؟',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
        category: 'فيزياء الكم',
        readTime: '6',
        date: 'March 02, 2026',
        file: 'posts/quantum-computing-era.md'
    },
    {
        id: 'dark-matter-skeleton',
        title: 'رسم أول خريطة تفصيلية لـ "الهيكل العظمي" الخفي للكون',
        excerpt: 'النجوم والمجرات ليست سوى جزء بسيط من الكون. العلماء ينجحون في تحديد شكل وتضاريس "المادة المظلمة" التي تمسك بكوننا وتمنعه من التمزق.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
        category: 'الفيزياء الفلكية',
        readTime: '3',
        date: 'February 20, 2026',
        file: 'posts/dark-matter-skeleton.md'
    },
    {
        id: 'antimatter-gravity',
        title: 'تجربة حاسمة من سيرن: هل المادة المضادة تسقط "للأعلى"؟',
        excerpt: 'هل يمكن للجاذبية أن تطرد المادة بدلا من جذبها إذا كانت مادة مضادة؟ تجربة حديثة ومدهشة في مصادم الهادرونات الكبير تحسم هذا الجدل التاريخي.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
        category: 'الفيزياء الأساسية',
        readTime: '5',
        date: 'February 05, 2026',
        file: 'posts/antimatter-gravity.md'
    },
    {
        id: 'milkyway-blackhole-image',
        title: 'التحديق في قلب الظلام: أول صورة لثقبنا الأسود العملاق',
        excerpt: 'أخيراً وبعد سنوات من دمج التلسكوبات الأرضية، نحن نملك صورة للوحش القابع في قلب مجرتنا درب التبانة. ماذا تخبرنا هذه الصورة؟',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
        category: 'الفيزياء الفلكية',
        readTime: '4',
        date: 'January 28, 2026',
        file: 'posts/milkyway-blackhole-image.md'
    },
    {
        id: 'time-crystals',
        title: 'بلورات الزمن: خرق قواعد الديناميكا الحرارية في المعامل الكمية',
        excerpt: 'مادة تتحرك إلى الأبد وتعود لنقطة البداية دون استهلاك أي طاقة! بلورات الزمن ليست لفيلم خيال علمي بل حقيقة تم إثباتها حديثاً.',
        image: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1200&auto=format&fit=crop',
        category: 'فيزياء الكم',
        readTime: '6',
        date: 'January 15, 2026',
        file: 'posts/time-crystals.md'
    },
    {
        id: 'neutrino-mass',
        title: 'كتلة الجسيم "الشبح" تتضح أخيراً (النيوترينو)',
        excerpt: 'النيوترينوات تمر عبر جسدك بالمليارات كل ثانية ولا تشعر بها! العلماء تمكنوا أخيراً من حصر حجم كتلتها الضئيلة جداً في تجربة مذهلة.',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
        category: 'الفيزياء النووية',
        readTime: '4',
        date: 'December 20, 2025',
        file: 'posts/neutrino-mass.md'
    },
    {
        id: 'nuclear-clock',
        title: 'الساعات النووية: دقة تكفي لعدم تفويت ثانية واحدة حتى نفناء الكون',
        excerpt: 'بعد الساعات المهتزة والذرية، يأتي اختراع الساعات النووية بالاعتماد على التوريوم لتكون أضبط آلة زمنية تم اختراعها.',
        image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1200&auto=format&fit=crop',
        category: 'فيزياء مادية',
        readTime: '3',
        date: 'December 05, 2025',
        file: 'posts/nuclear-clock.md'
    },
    {
        id: 'ai-laws-of-physics',
        title: 'الذكاء الاصطناعي "يخترع" قوانين فيزيائية لم يفكر بها البشر',
        excerpt: 'ماذا يحدث عندما تعطي ذكاءً اصطناعياً بندولاً ونواسيات؟ يبتكر متغيرات وقوانيناً فيزيائية دقيقة لا توجد في كتبنا الجامعية!',
        image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1200&auto=format&fit=crop',
        category: 'الذكاء الاصطناعي',
        readTime: '5',
        date: 'November 22, 2025',
        file: 'posts/ai-laws-of-physics.md'
    },
    {
        id: 'w-boson-anomaly',
        title: 'صدمة "بوزون W": جسيم أثقل من المتوقع يُهدد عرش الفيزياء القياسية',
        excerpt: 'قياس دقيق استغرق 10 سنوات كشف أن جسيماً يحمل القوة الضعيفة هو أثقل مما تقوله المعادلات المعتمدة بقليل. هل نحن أمام قوة طبيعية خامسة؟',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
        category: 'الفيزياء الأساسية',
        readTime: '6',
        date: 'November 11, 2025',
        file: 'posts/w-boson-anomaly.md'
    },
    {
        id: 'euclid-dark-universe',
        title: 'تلسكوب إقليدس: العين الأوروبية الخارقة في مهمة لحل لغز الظلام',
        excerpt: 'مهمة إقليدس تنطلق بهدف واحد لا غير: مسح ثلث سماء الليل بكاملها لرسم خريطة للمادة المظلمة والطاقة المظلمة بأبعاد ثلاثية استثنائية.',
        image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop',
        category: 'الفيزياء الفلكية',
        readTime: '4',
        date: 'October 30, 2025',
        file: 'posts/euclid-dark-universe.md'
    },
    {
        id: 'quantum-teleportation',
        title: 'كسر حاجز المسافة: انتقال كمي (Teleportation) لآلاف الكيلومترات',
        excerpt: 'هل يمكننا نقل المعلومات حرفياً من مكان لآخر "دون المرور" في المسافة بينهما؟ ما كان في الخيال العلمي طبق للتو على شبكات المدن.',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
        category: 'فيزياء الكم',
        readTime: '5',
        date: 'October 15, 2025',
        file: 'posts/quantum-teleportation.md'
    },
    {
        id: 'asteroid-bennu',
        title: 'كبسولة الزمن الفضائية: ماذا تخبرنا عينة كويكب بينو عن نشأة الحياة؟',
        excerpt: 'بعد رحلة هائلة لسبع سنوات، المسبار أوزايرس ريكس يعود بتراب وصخور من كويكب يعود لأيام المجموعة الشمسية الأولى.. وللحياة مهد هناك.',
        image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200&auto=format&fit=crop',
        category: 'الفيزياء الفلكية',
        readTime: '4',
        date: 'September 28, 2025',
        file: 'posts/asteroid-bennu.md'
    },
    {
        id: 'ai-in-medicine',
        title: 'الذكاء الاصطناعي في الطب: ثورة في تشخيص الأمراض واكتشاف الأدوية',
        excerpt: 'كيف تعمل الخوارزميات والتعلم العميق على إحداث ثورة في الرعاية الصحية من خلال تشخيص أسرع وأدق للسرطان وتطوير لقاحات جديدة في وقت قياسي.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop',
        category: 'الذكاء الاصطناعي',
        readTime: '5',
        date: 'April 01, 2026',
        file: 'posts/ai-in-medicine.md'
    },
    {
        id: 'generative-ai-future',
        title: 'الذكاء الاصطناعي التوليدي: هل سيستبدل المبدعين أم يعزز قدراتهم؟',
        excerpt: 'من ChatGPT إلى Midjourney، نماذج الذكاء الاصطناعي التوليدي تعيد تعريف الإبداع البشري. نظرة على الفرص والتحديات في الفن والأدب والبرمجة.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop',
        category: 'الذكاء الاصطناعي',
        readTime: '6',
        date: 'April 02, 2026',
        file: 'posts/generative-ai-future.md'
    },
    {
        id: 'ai-ethics',
        title: 'أخلاقيات الذكاء الاصطناعي: تحيزات الخوارزميات ومعضلة الصندوق الأسود',
        excerpt: 'عندما تتخذ الآلة قراراً مصيرياً نيابة عنا، من يتحمل المسؤولية؟ نناقش التحيزات الكامنة في الذكاء الاصطناعي والجهود المبذولة لجعله شفافاً وعادلاً.',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop',
        category: 'الذكاء الاصطناعي',
        readTime: '7',
        date: 'April 03, 2026',
        file: 'posts/ai-ethics.md'
    },
    {
        id: 'agi-superintelligence',
        title: 'الذكاء الاصطناعي العام (AGI): السباق نحو الآلات فائقة الذكاء',
        excerpt: 'الذكاء الاصطناعي العام ليس مجرد أداة بل كيان يمكنه أداء أي مهمة فكرية يقوم بها الإنسان. متى سنصل إليه وما هي العواقب الوجودية؟',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80&auto=format&fit=crop',
        category: 'الذكاء الاصطناعي',
        readTime: '8',
        date: 'April 04, 2026',
        file: 'posts/agi-superintelligence.md'
    },
    {
        id: 'ai-quantum-computing',
        title: 'عندما تلتقي الحوسبة الكمية بالذكاء الاصطناعي: فجر حسابي جديد',
        excerpt: 'كيف يمكن لأجهزة الكمبيوتر الكمية أن تسرع عمليات التعلم الآلي ملايين المرات؟ اكتشف التقاطع المذهل الذي سيغير مستقبل المعالجة البيانية.',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80&auto=format&fit=crop',
        category: 'الفيزياء والذكاء الاصطناعي',
        readTime: '6',
        date: 'April 05, 2026',
        file: 'posts/ai-quantum-computing.md'
    },
    {
        id: 'ai-climate-change',
        title: 'استخدام الذكاء الاصطناعي في محاربة التغير المناخي والإنقاذ البيئي',
        excerpt: 'من التنبؤ بالكوارث الطبيعية إلى تحسين شبكات الطاقة وإدارة الموارد، كيف تسهم النماذج الذكية في تقليل البصمة الكربونية وإنقاذ كوكب الأرض.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80&auto=format&fit=crop',
        category: 'الذكاء الاصطناعي البيئي',
        readTime: '5',
        date: 'April 06, 2026',
        file: 'posts/ai-climate-change.md'
    },
    {
        id: 'ai-in-education',
        title: 'الذكاء الاصطناعي في التعليم: نحو مناهج مخصصة لكل طالب',
        excerpt: 'تجاوز حدود الفصل الدراسي التقليدي باستخدام معلمين افتراضيين يعملون على مدار الساعة وتحليل أداء الطلاب لتقديم تعليم مخصص وفعال بالذكاء الاصطناعي.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80&auto=format&fit=crop',
        category: 'الذكاء الاصطناعي',
        readTime: '4',
        date: 'April 07, 2026',
        file: 'posts/ai-in-education.md'
    },
    {
        id: 'ai-robotics-integration',
        title: 'تكامل الروبوتات المتقدمة والذكاء الاصطناعي في مختلف الصناعات',
        excerpt: 'الروبوتات لم تعد عمياء؛ الذكاء الاصطناعي يمنحها القدرة على الرؤية والتحليل واتخاذ القرارات المعقدة في البيئات الديناميكية مثل المصانع والمستشفيات.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80&auto=format&fit=crop',
        category: 'الروبوتات',
        readTime: '5',
        date: 'April 08, 2026',
        file: 'posts/ai-robotics-integration.md'
    },
    {
        id: 'ai-cybersecurity',
        title: 'مستقبل الأمن السيبراني: حروب الذكاء الاصطناعي الدفاعية والهجومية',
        excerpt: 'في الوقت الذي يستخدم فيه القراصنة الذكاء الاصطناعي لبناء وعمل هجمات أكثر ذكاءً، توظف الشركات نماذج متطورة للكشف الاستباقي عن الثغرات وسدها.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80&auto=format&fit=crop',
        category: 'الأمن السيبراني',
        readTime: '6',
        date: 'April 09, 2026',
        file: 'posts/ai-cybersecurity.md'
    },
    {
        id: 'ai-space-exploration',
        title: 'استكشاف الفضاء بالذكاء الاصطناعي: المسبارات الذكية وتحليل البيانات المجرية',
        excerpt: 'كيف تقوم الخوارزميات بالبحث عن الكواكب الخارجية الصالحة للحياة في كميات ضخمة من البيانات الفلكية، وقيادة المركبات الفضائية ذاتياً إلى المريخ.',
        image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200&q=80&auto=format&fit=crop',
        category: 'الفيزياء الفلكية والذكاء الاصطناعي',
        readTime: '7',
        date: 'April 10, 2026',
        file: 'posts/ai-space-exploration.md'
    },
    {
        id: 'fusion-record-2026',
        title: 'إنجاز جديد في الاندماج النووي: الحفاظ على بلازما مستقرة لوقت قياسي',
        excerpt: 'مفاعل توكاماك يحطم الأرقام القياسية بالاحتفاظ ببلازما اندماجية عند 100 مليون درجة مئوية مدة تتجاوز 48 ساعة متواصلة.',
        image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=1200&q=80',
        category: 'أخبار الفيزياء',
        readTime: '4',
        date: 'March 31, 2026',
        file: 'posts/fusion-record-2026.md'
    },
    {
        id: 'llm-reasoning-breakthrough-2026',
        title: 'الجيل الجديد من النماذج اللغوية يتفوق على البشر في اختبارات التفكير المنطقي المعقدة',
        excerpt: 'نموذج ذكاء اصطناعي جديد يسجل 99% في اختبارات الاستنتاج المنطقي المتقدمة لأول مرة في تاريخ التكنولوجيا.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
        category: 'أخبار الذكاء الاصطناعي',
        readTime: '5',
        date: 'March 31, 2026',
        file: 'posts/llm-reasoning-breakthrough-2026.md'
    },
    {
        id: 'nasa-asteroid-analysis-2026',
        title: 'ناسا تحلل مسار كويكب ضخم يقترب من الأرض بأمان',
        excerpt: 'وكالة الفضاء تؤكد عدم وجود خطر من كويكب أپوفيس وتستعد لجمع بيانات حاسمة أثناء مروره القريب من غلافنا الجوي.',
        image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1200&q=80',
        category: 'الفيزياء الفلكية',
        readTime: '3',
        date: 'March 31, 2026',
        file: 'posts/nasa-asteroid-analysis-2026.md'
    },
    {
        id: 'ai-virus-protein-2026',
        title: 'نظام ذكاء اصطناعي يفك شفرة بروتينات فيروس مجهول في ساعات',
        excerpt: 'تجاوز حدود علم الأحياء التركيبي بفضل خوارزميات جديدة تتنبأ بالشكل الدقيق لبروتينات الفيروسات لمنع الأوبئة المستقبلية.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
        category: 'أخبار الذكاء الاصطناعي',
        readTime: '6',
        date: 'March 31, 2026',
        file: 'posts/ai-virus-protein-2026.md'
    },
    {
        id: 'quantum-1000-qubit-2026',
        title: 'الكشف عن أول حاسوب كمي متطور بـ 1000 كيوبت خالي من الأخطاء',
        excerpt: 'باحثون يحققون قفزة نوعية في تصحيح الأخطاء الكمية مع تقديم معالج كمي يمهد لتطبيقات تجارية حقيقية.',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80',
        category: 'أخبار الفيزياء',
        readTime: '5',
        date: 'March 31, 2026',
        file: 'posts/quantum-1000-qubit-2026.md'
    },
    {
        id: 'ai-climate-prediction-2026',
        title: 'خوارزميات التنبؤ المناخي تتوقع ظواهر جوية غير مسبوقة لصيف 2026',
        excerpt: 'نماذج المناخ المدعومة بالذكاء الاصطناعي تقدم خرائط دقيقة لموجات الحر المتوقعة مسبقاً لمساعدة المدن على التكيف السريع.',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
        category: 'الذكاء الاصطناعي البيئي',
        readTime: '4',
        date: 'March 31, 2026',
        file: 'posts/ai-climate-prediction-2026.md'
    },
    {
        id: 'jwst-oldest-blackhole-2026',
        title: 'تلسكوب جيمس ويب يرصد أقدم ثقب أسود في الكون السحيق',
        excerpt: 'اكتشاف ثقب أسود هائل كتلة تشكل بعد الانفجار العظيم بوقت قصير جدًا يثير تساؤلات جديدة حول نماذج تطور الكون.',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80',
        category: 'الفيزياء الفلكية',
        readTime: '5',
        date: 'March 31, 2026',
        file: 'posts/jwst-oldest-blackhole-2026.md'
    },
    {
        id: 'humanoid-robots-factory-2026',
        title: 'نشر أول روبوتات بشرية مستقلة بالكامل للعمل في مصانع السيارات',
        excerpt: 'روبوتات مزودة برؤية حاسوبية فائقة وذكاء اصطناعي مكاني تتسلم مهام التجميع المعقدة بالتعاون مع العمال في خطوة تاريخية للقطاع الصناعي.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
        category: 'أخبار الذكاء الاصطناعي',
        readTime: '4',
        date: 'March 31, 2026',
        file: 'posts/humanoid-robots-factory-2026.md'
    },
    {
        id: 'dark-matter-signal-2026',
        title: 'مستشعرات تحت الأرض تلتقط أضعف إشارات محتملة للمادة المظلمة',
        excerpt: 'بعد شهور من الترقب، مختبر لزينون السائل يرصد أحداثاً فيزيائية نادرة قد تكون أول إثبات مباشر لجزيئات المادة المظلمة.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
        category: 'أخبار الفيزياء',
        readTime: '6',
        date: 'March 31, 2026',
        file: 'posts/dark-matter-signal-2026.md'
    },
    {
        id: 'eu-ai-regulations-2026',
        title: 'الاتحاد الأوروبي يفعل تشريعاته الصارمة الجديدة لتنظيم الوكلاء الأذكياء',
        excerpt: 'بدء سريان قوانين جديدة تلزم الشركات بالكشف عن طبيعة الذكاء الاصطناعي لضمان حماية المستخدمين وتجنب التحيز.',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80',
        category: 'أخبار الذكاء الاصطناعي',
        readTime: '5',
        date: 'March 31, 2026',
        file: 'posts/eu-ai-regulations-2026.md'
    }
];
