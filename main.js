// Initialize Lucide Icons
lucide.createIcons();

/* --- Translations --- */
const translations = {
  en: {
    nav_work: "Our Work",
    nav_process: "Process",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    nav_cta: "Book 30-min Call",
    hero_badge: "For Coaches & Creators",
    hero_title: 'We Build <span class="text-accent gradient-text">Premium Landing Pages</span> That Convert',
    hero_subtitle: "Transform your audience into clients with professional, high-converting landing pages designed specifically for your brand.",
    hero_cta_primary: "Book Your Strategy Call",
    hero_cta_secondary: "See Our Work",
    work_title: "Proven Aesthetics",
    work_subtitle: "Explore some of our recent transformations.",
    work_example_1: "Personal Development",
    work_example_2: "Fitness Coach",
    work_example_3: "Women's Wellness",
    process_title: "How We Work",
    process_subtitle: "From zero to launch in 4 simple steps.",
    process_step1_title: "1. Discovery Call",
    process_step1_desc: "We discuss your goals, target audience, and brand vision.",
    process_step2_title: "2. Design & Strategy",
    process_step2_desc: "We create a high-converting wireframe and stunning UI design.",
    process_step3_title: "3. Development",
    process_step3_desc: "We build it with robust code, blazing fast speeds, and flawless mobile responsiveness.",
    process_step4_title: "4. Launch & Handoff",
    process_step4_desc: "Final review, domain connection, and you're ready to convert.",
    review_text: '"Structure Agency completely changed the game for me. My landing page not only looks premium but my lead generation skyrocketed by 300% in the first two weeks."',
    reviewer_name: "Sarah Jenkins",
    reviewer_title: "Fitness Coach",
    chart_title: "Conversion Rate Growth",
    chart_subtitle: "Average Increase",
    stat_old: "Industry: 1.5%",
    stat_new: "Our Avg: 8.2%",
    pricing_title: "Simple, Transparent Pricing",
    pricing_subtitle: "Invest in your brand's future. Limited time promotional offers.",
    tier1_title: "Starter",
    tier1_desc: "Perfect for essential online presence.",
    save_25: "Save 25%",
    tier1_f1: "Beautiful Landing Page",
    tier1_f2: "All Standard Sections",
    tier1_f3: "Mobile Responsive",
    tier1_f4: "WhatsApp Direct CTA",
    tier1_maintenance: "+ $10/mo Maintenance",
    pricing_btn: "Get Started",
    popular_badge: "Most Popular",
    tier2_title: "Pro",
    tier2_desc: "Automate your 1:1 scheduling.",
    save_28: "Save 28%",
    everything_tier1: "Everything in Starter",
    tier2_maintenance: "+ $20/mo Maintenance",
    tier2_f1: "Direct Calendar Booking",
    tier2_f2: "Custom Form Intake",
    tier2_f3: "Premium Animations",
    tier3_title: "Automated AI",
    tier3_desc: "Future-proof with a custom 24/7 AI agent.",
    everything_tier2: "Everything in Pro",
    tier3_maintenance: "+ $100/mo Maintenance",
    tier3_f1: "AI Chat Agent Integration",
    tier3_f2: "Automated Q&A Handling",
    tier3_f3: "Agent Direct Booking",
    faq_title: "Frequently Asked Questions",
    faq_q1: "How long does it take to deliver the landing page?",
    faq_a1: "Typically, a landing page takes between 3 to 7 business days from the discovery call to the final launch, depending on the tier and features selected.",
    faq_q2: "Do I need to provide images and text?",
    faq_a2: "We highly recommend providing your own professional photos. However, we assist with copywriting and structuring your offer to ensure maximum conversion.",
    faq_q3: "Can I upgrade to the AI Chat agent later?",
    faq_a3: "Yes! You can start with the Starter or Pro tier and upgrade to the Automated AI tier at any time as your business grows.",
    faq_q5: "Is there a monthly maintenance fee?",
    faq_a5: "Yes, there is a small monthly maintenance fee depending on your tier: $10 for Starter, $20 for Pro, and $100 for Automated AI. You only pay for your own domain and basic hosting which we help you set up.",
    final_cta_title: "Ready to scale your business?",
    final_cta_subtitle: "Book your 30-minute discovery call below. Let's discuss how we can build a high-converting machine for your brand.",
    booking_wa_title: "Prefer to text us?",
    booking_wa_desc: "Get an instant response and discuss your project directly on WhatsApp.",
    booking_wa_btn: "Chat on WhatsApp",
    booking_or_cal: "Or pick a time for a video call:",
    cal_placeholder_title: "Calendly Widget Placeholder",
    cal_placeholder_desc: "The backend connection for direct booking will be integrated here in the next phase.",
    cal_btn: "Loading Calendar...",
    footer_desc: "Engineering digital trust and high conversions for modern coaches and creators.",
    footer_links_title: "Quick Links",
    footer_contact_title: "Contact"
  },
  ar: {
    nav_work: "أعمالنا",
    nav_process: "طريقة العمل",
    nav_pricing: "الأسعار",
    nav_faq: "الأسئلة الشائعة",
    nav_cta: "احجز مكالمة 30 دقيقة",
    hero_badge: "للمدربين وصناع المحتوى",
    hero_title: 'نبني <span class="text-accent gradient-text">صفحات هبوط احترافية</span> تزيد من مبيعاتك',
    hero_subtitle: "حوّل جمهورك إلى عملاء من خلال صفحات هبوط احترافية مصممة خصيصاً لعلامتك التجارية.",
    hero_cta_primary: "احجز مكالمتك الاستراتيجية",
    hero_cta_secondary: "شاهد أعمالنا",
    work_title: "تصاميم أثبتت فعاليتها",
    work_subtitle: "تصفح بعض أعمالنا الأخيرة.",
    work_example_1: "تطوير الذات",
    work_example_2: "مدرب لياقة",
    work_example_3: "صحة المرأة",
    process_title: "كيف نعمل",
    process_subtitle: "من الفكرة إلى الإطلاق في 4 خطوات بسيطة.",
    process_step1_title: "1. مكالمة الاستكشاف",
    process_step1_desc: "نناقش أهدافك، جمهورك المستهدف، ورؤية علامتك التجارية.",
    process_step2_title: "2. التصميم والاستراتيجية",
    process_step2_desc: "نصمم واجهة مستخدم مذهلة لزيادة معدل التحويل.",
    process_step3_title: "3. التطوير والبرمجة",
    process_step3_desc: "نبني الصفحة بأكواد قوية، سرعة فائقة، وتوافق تام مع الجوال.",
    process_step4_title: "4. الإطلاق والتسليم",
    process_step4_desc: "المراجعة النهائية، ربط النطاق، وأنت جاهز لاستقبال العملاء.",
    review_text: '"استوديو Structure Agency غير قواعد اللعبة بالنسبة لي. صفحة الهبوط الخاصة بي لا تبدو احترافية فحسب، بل زادت من نسبة جذب العملاء المحتملين بنسبة 300% في أول أسبوعين."',
    reviewer_name: "سارة جينكينز",
    reviewer_title: "مدربة لياقة",
    chart_title: "نمو معدل التحويل",
    chart_subtitle: "متوسط الزيادة",
    stat_old: "المتوسط: 1.5%",
    stat_new: "معدلنا: 8.2%",
    pricing_title: "أسعار بسيطة وشفافة",
    pricing_subtitle: "استثمر في مستقبل علامتك التجارية. عروض ترويجية لفترة محدودة.",
    tier1_title: "البداية",
    tier1_desc: "مثالي للتواجد الأساسي على الإنترنت.",
    save_25: "وفر 25%",
    tier1_f1: "صفحة هبوط احترافية",
    tier1_f2: "جميع الأقسام القياسية",
    tier1_f3: "متوافقة مع الجوال",
    tier1_f4: "زر تواصل مباشر واتساب",
    tier1_maintenance: "+ 10$/شهر صيانة",
    pricing_btn: "ابدأ الآن",
    popular_badge: "الأكثر طلباً",
    tier2_title: "الاحترافي",
    tier2_desc: "أتمتة جدولة مواعيدك.",
    save_28: "وفر 28%",
    everything_tier1: "كل ميزات باقة البداية",
    tier2_maintenance: "+ 20$/شهر صيانة",
    tier2_f1: "حجز مواعيد مباشر (تقويم)",
    tier2_f2: "نموذج بيانات مخصص",
    tier2_f3: "تأثيرات حركية فائقة",
    tier3_title: "الذكاء الاصطناعي",
    tier3_desc: "تواكب مع المستقبل عبر وكيل ذكاء اصطناعي 24/7.",
    everything_tier2: "كل ميزات الباقة الاحترافية",
    tier3_maintenance: "+ 100$/شهر صيانة",
    tier3_f1: "دمج دردشة الذكاء الاصطناعي",
    tier3_f2: "أتمتة الرد على الاستفسارات",
    tier3_f3: "حجز مباشر عبر الذكاء الاصطناعي",
    faq_title: "الأسئلة الشائعة",
    faq_q1: "كم يستغرق تسليم صفحة الهبوط؟",
    faq_a1: "في العادة، تستغرق صفحة الهبوط بين 3 إلى 7 أيام عمل من مكالمة الاستكشاف إلى الإطلاق النهائي، اعتماداً على الباقة والميزات.",
    faq_q2: "هل يجب علي توفير الصور والنصوص؟",
    faq_a2: "نوصي بشدة بتوفير صورك الاحترافية الخاصة. ومع ذلك، نحن نساعد في كتابة المحتوى وتنظيم عرضك لضمان أعلى معدل تحويل.",
    faq_q3: "هل يمكنني الترقية لباقة الذكاء الاصطناعي لاحقاً؟",
    faq_a3: "نعم! يمكنك البدء بالباقة العادية أو الاحترافية والترقية لاحقاً في أي وقت مع نمو أعمالك.",
    faq_q5: "هل هناك رسوم صيانة شهرية؟",
    faq_a5: "نعم، هناك رسوم صيانة شهرية بسيطة تعتمد على باقتك: 10$ للبداية، 20$ للاحترافي، و100$ للذكاء الاصطناعي. وتدفع فقط رسوم نطاقك واستضافتك الأساسية التي نساعدك في إعدادها.",
    final_cta_title: "هل أنت مستعد لتوسيع نطاق عملك؟",
    final_cta_subtitle: "احجز مكالمة اكتشاف مدتها 30 دقيقة أدناه. دعنا نناقش كيف يمكننا بناء آلة تحويل عالية لعلامتك التجارية.",
    booking_wa_title: "هل تفضل المراسلة؟",
    booking_wa_desc: "احصل على رد فوري وناقش مشروعك مباشرة عبر واتساب.",
    booking_wa_btn: "تواصل عبر واتساب",
    booking_or_cal: "أو اختر وقتاً لمكالمة فيديو:",
    cal_placeholder_title: "مكان أداة Calendly",
    cal_placeholder_desc: "سيتم دمج الاتصال الخلفي للحجز المباشر هنا في المرحلة القادمة.",
    cal_btn: "جاري تحميل التقويم...",
    footer_desc: "بناء ثقة رقمية ومعدلات تحويل عالية للمدربين وصناع المحتوى.",
    footer_links_title: "روابط سريعة",
    footer_contact_title: "تواصل معنا"
  }
};

let currentLang = 'ar';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', currentLang);
  
  const toggleBtn = document.getElementById('langToggle');
  toggleBtn.innerHTML = currentLang === 'ar' ? '🇬🇧 EN' : '🇸🇦 AR';
  toggleBtn.setAttribute('aria-label', currentLang === 'ar' ? 'Switch to English' : 'Switch to Arabic');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.innerHTML = translations[currentLang][key]; // innerHTML applied for span/strong bold elements
    }
  });
}

document.getElementById('langToggle').addEventListener('click', toggleLanguage);

// Initialize translated content on load
document.querySelectorAll('[data-i18n]').forEach(el => {
  const key = el.getAttribute('data-i18n');
  if (translations[currentLang][key]) {
    el.innerHTML = translations[currentLang][key];
  }
});

/* --- Mobile Menu Toggle --- */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

if(mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('open');
    
    // Toggle icon
    mobileMenuBtn.querySelector('.open-icon').style.display = isExpanded ? 'block' : 'none';
    mobileMenuBtn.querySelector('.close-icon').style.display = isExpanded ? 'none' : 'block';
  });
}

/* --- Navbar Scroll Effect --- */
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* --- Continuous Marquee Carousel --- */
const track = document.getElementById('carouselTrack');
const originalSlides = Array.from(track.children);

// Clone slides to create an infinite ribbon
originalSlides.forEach(slide => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
});

// Disable standard CSS transitions for smooth requestAnimationFrame updates
track.style.transition = 'none';
track.style.width = 'max-content';

let currentTranslate = 0;
let speed = 1; // pixels per frame
let isDown = false;
let isHovered = false;
let startX;
let scrollLeft;

function animateMarquee() {
  if (!isDown && !isHovered) {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const dir = isRtl ? 1 : -1;
    currentTranslate += speed * dir;
  }
  
  const gap = 32;
  const slideWidth = originalSlides[0].getBoundingClientRect().width;
  // Calculate exactly half the track's virtual scroll width
  const halfScrollWidth = (slideWidth + gap) * originalSlides.length;

  const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
  if (!isRtl) {
    if (currentTranslate <= -halfScrollWidth) {
      currentTranslate += halfScrollWidth;
    } else if (currentTranslate > 0) {
      // user dragged too far right
      currentTranslate -= halfScrollWidth;
    }
  } else {
    if (currentTranslate >= halfScrollWidth) {
      currentTranslate -= halfScrollWidth;
    } else if (currentTranslate < 0) {
      // user dragged too far left
      currentTranslate += halfScrollWidth;
    }
  }
  
  track.style.transform = `translateX(${currentTranslate}px)`;
  requestAnimationFrame(animateMarquee);
}

// Start animation
animateMarquee();

// Interaction handlers
track.addEventListener('mouseenter', () => isHovered = true);
track.addEventListener('mouseleave', () => { 
  isHovered = false;
  isDown = false;
});

track.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - track.offsetLeft;
  scrollLeft = currentTranslate;
});

track.addEventListener('mouseup', () => isDown = false);

track.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX);
  currentTranslate = scrollLeft + walk;
});


/* --- Intersection Observer for Animations --- */
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // trigger charting animation if it's the chart card
      if (entry.target.classList.contains('chart-card')) {
        entry.target.classList.add('in-view');
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-target').forEach(el => fadeObserver.observe(el));


/* --- FAQ Accordion --- */
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  
  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all items
    accordionItems.forEach(faq => {
      faq.classList.remove('active');
      faq.querySelector('.accordion-content').style.maxHeight = null;
      faq.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
    });

    if (!isActive) {
      item.classList.add('active');
      header.setAttribute('aria-expanded', 'true');
      const content = item.querySelector('.accordion-content');
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Initialize Aria logic for accordions
accordionItems.forEach(item => {
  item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
});
