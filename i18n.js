/**
 * Bilingual system — English / Arabic
 */
const I18n = {
  STORAGE_KEY: 'portfolio-lang',
  defaultLang: 'en',

  translations: {
    en: {
      meta: {
        title: 'Aiman Al-Tahir | MIS Student · IT Professional · Digital Entrepreneur',
        description:
          'Aiman Al-Tahir — MIS student from El Geneina, Sudan. Building global digital solutions with Java, Spring Boot, and modern web technologies.',
      },
      nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
      hero: {
        eyebrow: 'Welcome — Global Portfolio',
        location: 'West Darfur – El Geneina, Sudan 🇸🇩',
        desc: 'Passionate Management Information Systems student focused on combining technology and business to build impactful digital solutions and innovative systems for a global audience.',
        btnSkills: 'View Skills',
        btnContact: 'Contact Me',
        badge: 'Open for worldwide projects',
        scroll: 'Scroll down',
      },
      typing: ['MIS Student', 'Future IT Professional', 'Digital Entrepreneur'],
      stats: { projects: 'Projects', skills: 'Core Skills', global: 'Global Mindset' },
      global: {
        tag: 'Worldwide',
        title: 'Building for local impact, thinking globally',
        text: 'Based in Sudan — collaborating remotely with clients and teams across regions.',
      },
      about: {
        tag: 'About Me',
        title: 'Bridging business & technology',
        card1Title: 'Management Information Systems',
        card1Text: 'Aligning technology strategy with real-world business outcomes.',
        card2Title: 'Business & Technology',
        card2Text: 'How digital systems drive growth, efficiency, and innovation.',
        card3Title: 'Web & Systems Development',
        card3Text: 'Java, Spring Boot, MySQL, HTML, CSS, JavaScript — full-stack mindset.',
        timelineTitle: 'My Journey',
        t1Year: 'Present',
        t1Title: 'MIS Student & Aspiring IT Professional',
        t1Text: 'Developing skills and entrepreneurial mindset from West Darfur to the world.',
        t2Year: 'Focus',
        t2Title: 'Full-Stack & Data-Driven Solutions',
        t2Text: 'Java ecosystem, databases, front-end craft, and analytics.',
        t3Year: 'Vision',
        t3Title: 'Digital Entrepreneur',
        t3Text: 'Impactful systems and startups for communities and modern enterprises.',
        stat1: 'Student',
        stat2: 'Future Pro',
        stat3: 'Entrepreneur',
      },
      skills: {
        tag: 'Expertise',
        title: 'Skills & Services',
        barsTitle: 'Technical Proficiency',
        servicesTitle: 'What I Offer',
        s1Title: 'Web Development',
        s1Text: 'Modern, responsive websites with premium UI/UX.',
        s2Title: 'Data Analysis',
        s2Text: 'SQL, dashboards, and analytical workflows.',
        s3Title: 'Portfolio Websites',
        s3Text: 'Personal brands that stand out globally.',
        s4Title: 'Systems Development',
        s4Text: 'Business tools tailored to real needs.',
      },
      projects: {
        tag: 'Portfolio',
        title: 'Featured Projects',
        filterAll: 'All',
        filterWeb: 'Web',
        filterSystems: 'Systems',
        filterData: 'Data',
        p1Title: 'Personal Portfolio Website',
        p1Text: 'Bilingual, glassmorphism, advanced JavaScript — global-ready portfolio.',
        p2Title: 'Student Management System',
        p2Text: 'Track-based school UI with Spring Boot backend integration.',
        p3Title: 'Business Dashboard',
        p3Text: 'KPIs, charts, and executive decision-support interfaces.',
        p4Title: 'Data Analysis Project',
        p4Text: 'Data pipeline and reporting with SQL analytical skills.',
      },
      contact: {
        tag: 'Get In Touch',
        title: "Let's build something great",
        intro: 'Open to collaborations, freelance projects, and opportunities worldwide.',
        formTitle: 'Send a Message',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        namePh: 'Your name',
        emailPh: 'you@email.com',
        messagePh: 'Tell me about your project...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent! I will get back to you soon.',
        error: 'Failed to send. Please try again or email directly.',
      },
      footer: '©️ 2026 Aiman Al-Tahir — From West Darfur, El Geneina, Sudan 🇸🇩',
      loader: 'Aiman Al-Tahir',
      backTop: 'Back to top',
      menuToggle: 'Toggle menu',
      langSwitch: 'عربي',
    },
    ar: {
      meta: {
        title: 'أيمن الطاهر | طالب نظم معلومات · محترف تقنية · رائد أعمال رقمي',
        description:
          'أيمن الطاهر — طالب نظم معلومات إدارية من الجنينة، السودان. أبني حلولاً رقمية عالمية باستخدام Java و Spring Boot وتقنيات الويب الحديثة.',
      },
      nav: { home: 'الرئيسية', about: 'عني', skills: 'المهارات', projects: 'المشاريع', contact: 'تواصل' },
      hero: {
        eyebrow: 'مرحباً — معرض عالمي',
        location: 'غرب دارفور – الجنينة، السودان 🇸🇩',
        desc: 'طالب نظم معلومات إدارية شغوف بدمج التقنية والأعمال لبناء حلول رقمية مؤثرة وأنظمة مبتكرة لجمهور عالمي.',
        btnSkills: 'عرض المهارات',
        btnContact: 'تواصل معي',
        badge: 'متاح لمشاريع عالمية',
        scroll: 'انتقل للأسفل',
      },
      typing: ['طالب نظم معلومات', 'محترف تقنية مستقبلي', 'رائد أعمال رقمي'],
      stats: { projects: 'مشاريع', skills: 'مهارات أساسية', global: 'عقلية عالمية' },
      global: {
        tag: 'عالمياً',
        title: 'أبني أثراً محلياً وأفكر عالمياً',
        text: 'من السودان — أتعاون عن بُعد مع عملاء وفرق من مختلف المناطق.',
      },
      about: {
        tag: 'من أنا',
        title: 'جسر بين الأعمال والتقنية',
        card1Title: 'نظم المعلومات الإدارية',
        card1Text: 'مواءمة استراتيجية التقنية مع نتائج الأعمال الواقعية.',
        card2Title: 'الأعمال والتقنية',
        card2Text: 'كيف تدفع الأنظمة الرقمية النمو والكفاءة والابتكار.',
        card3Title: 'تطوير الويب والأنظمة',
        card3Text: 'Java و Spring Boot و MySQL و HTML و CSS و JavaScript.',
        timelineTitle: 'رحلتي',
        t1Year: 'الحاضر',
        t1Title: 'طالب MIS ومحترف تقنية طموح',
        t1Text: 'تطوير المهارات وعقلية ريادة الأعمال من دارفور إلى العالم.',
        t2Year: 'التركيز',
        t2Title: 'حلول Full-Stack مدعومة بالبيانات',
        t2Text: 'منظومة Java وقواعد البيانات والواجهات والتحليلات.',
        t3Year: 'الرؤية',
        t3Title: 'رائد أعمال رقمي',
        t3Text: 'أنظمة وشركات ناشئة تخدم المجتمعات والمؤسسات الحديثة.',
        stat1: 'طالب',
        stat2: 'محترف',
        stat3: 'رائد أعمال',
      },
      skills: {
        tag: 'الخبرات',
        title: 'المهارات والخدمات',
        barsTitle: 'الكفاءة التقنية',
        servicesTitle: 'ما أقدمه',
        s1Title: 'تطوير الويب',
        s1Text: 'مواقع عصرية متجاوبة بتجربة مستخدم متميزة.',
        s2Title: 'تحليل البيانات',
        s2Text: 'SQL ولوحات معلومات وسير عمل تحليلي.',
        s3Title: 'مواقع Portfolio',
        s3Text: 'هويات شخصية تبرز عالمياً.',
        s4Title: 'تطوير الأنظمة',
        s4Text: 'أدوات أعمال مخصصة لاحتياجات حقيقية.',
      },
      projects: {
        tag: 'الأعمال',
        title: 'مشاريع مميزة',
        filterAll: 'الكل',
        filterWeb: 'ويب',
        filterSystems: 'أنظمة',
        filterData: 'بيانات',
        p1Title: 'موقع Portfolio شخصي',
        p1Text: 'ثنائي اللغة، زجاجي، JavaScript متقدم — جاهز عالمياً.',
        p2Title: 'نظام إدارة مدرسة',
        p2Text: 'واجهة مدرسة حسب المساق مع Spring Boot.',
        p3Title: 'لوحة أعمال',
        p3Text: 'مؤشرات ورسوم بيانية لدعم القرار.',
        p4Title: 'مشروع تحليل بيانات',
        p4Text: 'خط بيانات وتقارير بمهارات SQL.',
      },
      contact: {
        tag: 'تواصل',
        title: 'لنبني شيئاً رائعاً',
        intro: 'متاح للتعاون والمشاريع الحرة والفرص على مستوى العالم.',
        formTitle: 'أرسل رسالة',
        name: 'الاسم',
        email: 'البريد',
        message: 'الرسالة',
        namePh: 'اسمك',
        emailPh: 'you@email.com',
        messagePh: 'أخبرني عن مشروعك...',
        send: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        success: 'تم الإرسال! سأرد عليك قريباً.',
        error: 'فشل الإرسال. حاول مرة أخرى أو راسلني بالبريد.',
      },
      footer: '©️ 2026 أيمن الطاهر — من غرب دارفور، الجنينة، السودان 🇸🇩',
      loader: 'أيمن الطاهر',
      backTop: 'العودة للأعلى',
      menuToggle: 'فتح القائمة',
      langSwitch: 'EN',
    },
  },

  get lang() {
    return localStorage.getItem(this.STORAGE_KEY) || this.defaultLang;
  },

  t(key) {
    const keys = key.split('.');
    let val = this.translations[this.lang];
    for (const k of keys) {
      val = val?.[k];
    }
    return val ?? key;
  },

  apply() {
    const lang = this.lang;
    const isAr = lang === 'ar';

    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-ar', isAr);
    document.body.classList.toggle('lang-en', !isAr);

    document.title = this.t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = this.t('meta.description');

    if (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.siteUrl) {
      const base = SITE_CONFIG.siteUrl.replace(/\/$/, '');
      const canonical = document.getElementById('canonical-link');
      if (canonical) canonical.href = `${base}/`;
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        const m = document.createElement('meta');
        m.setAttribute('property', 'og:url');
        m.content = `${base}/`;
        document.head.appendChild(m);
      } else {
        ogUrl.content = `${base}/`;
      }
    }

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const val = this.t(key);
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      const val = this.t(key);
      if (val) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      el.placeholder = this.t(el.dataset.i18nPlaceholder);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', this.t(el.dataset.i18nAria));
    });

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = this.t('langSwitch');

    const loaderText = document.querySelector('.loader-text');
    if (loaderText) loaderText.textContent = this.t('loader');

    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  },

  toggle() {
    const next = this.lang === 'en' ? 'ar' : 'en';
    localStorage.setItem(this.STORAGE_KEY, next);
    this.apply();
  },

  init() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (!saved && navigator.language?.startsWith('ar')) {
      localStorage.setItem(this.STORAGE_KEY, 'ar');
    }
    this.apply();
    document.getElementById('lang-toggle')?.addEventListener('click', () => this.toggle());
  },
};
