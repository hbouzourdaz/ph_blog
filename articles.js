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
    }
];
