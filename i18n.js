// Simple bilingual i18n (AR/EN) with RTL/LTR switching
const dict = {
  ar: {
    'nav.about':'عنّي','nav.skills':'المهارات','nav.projects':'الأعمال','nav.services':'الخدمات','nav.resume':'السيرة','nav.contact':'تواصل',
    'hero.eyebrow':'أمن سيبراني · شبكات · برمجة آمنة',
    'hero.title':'مرحباً، أنا <span class="accent">مُرتضى علي</span>',
    'hero.sub':'مختص في <strong>الدفاع عن الأنظمة</strong>، <strong>تقييم الثغرات</strong>، وتصميم <strong>البُنى الشبكية الآمنة</strong>، مع خبرة في <strong>البرمجة الآمنة</strong> وتخفيف التهديدات. حاصل على شهادة <strong>TOEFL</strong> في اللغة الإنجليزية.',
    'hero.cta1':'ابدأ التواصل','hero.cta2':'استعراض الأعمال',
    'about.title':'عنّي','about.text':'أنا مهندس أمن سيبراني وشبكات أساعد المؤسسات على بناء دفاعات تقنية صلبة، من وضع السياسات إلى التنفيذ العملي. أُجري اختبارات اختراق، أُصمّم بنى شبكية آمنة، وأطبّق ممارسات البرمجة الآمنة عبر دورة حياة التطوير (SSDLC).',
    'about.mission.title':'الرسالة','about.mission.text':'رفع النضج الأمني مع تقليل التعقيد، وبناء أنظمة resilient يمكن الوثوق بها.',
    'about.values.title':'القيم','about.values.text':'النزاهة، السرية، التوفّر، والتوثيق القابل للمراجعة.',
    'about.langs.title':'اللغات','about.langs.text':'العربية · English (TOEFL)',
    'skills.title':'المهارات','skills.defense.title':'الدفاع والاختبار','skills.network.title':'الشبكات','skills.secprog.title':'البرمجة الآمنة','skills.certs.title':'الشهادات',
    'projects.title':'نماذج أعمال','projects.p1.title':'تقوية خوادم Linux لمؤسسة متوسطة','projects.p1.text':'تطبيق CIS Benchmarks، إعداد مراقبة سجلات، وتلقيم تنبيهات إلى SIEM.',
    'projects.p2.title':'تقييم ثغرات شامل لشبكة داخلية','projects.p2.text':'اكتشاف خدمات مكشوفة، تصنيف المخاطر، وخطة إغلاق حسب الأولوية.',
    'projects.p3.title':'أتمتة فحوصات OWASP لمشروع ويب','projects.p3.text':'دمج فحوصات SAST/DAST في CI/CD وتثقيف الفريق حول OWASP Top 10.',
    'services.title':'الخدمات',
    'services.vuln.title':'تقييم الثغرات','services.vuln.text':'فحص دوري وتوصيات عملية بالإغلاق وفق أثر الأعمال.',
    'services.hard.title':'تقوية الأنظمة','services.hard.text':'Baseline آمن، ضبط خدمات، وإدارة تحديثات.',
    'services.net.title':'تصميم الشبكات الآمنة','services.net.text':'تقسيم شبكي، VPN، جدران نارية وسياسات وصول.',
    'services.secprog.title':'البرمجة الآمنة','services.secprog.text':'مراجعات كود، نمذجة تهديدات، وأتمتة مهام الأمان.',
    'resume.title':'السيرة الذاتية','resume.text':'يمكنك تحميل سيرتي أو استعراض النسخة HTML.','resume.view':'استعراض السيرة','resume.download':'تحميل',
    'contact.title':'تواصل معي','contact.text':'للتعاون أو العروض الوظيفية: ','contact.send':'إرسال',
    'contact.name':'الاسم','contact.email':'البريد','contact.message':'الرسالة',
    'footer.rights':'جميع الحقوق محفوظة'
  },
  en: {
    'nav.about':'About','nav.skills':'Skills','nav.projects':'Projects','nav.services':'Services','nav.resume':'Resume','nav.contact':'Contact',
    'hero.eyebrow':'Cybersecurity · Networks · Secure Coding',
    'hero.title':'Hi, I\'m <span class="accent">Mortadha Ali</span>',
    'hero.sub':'Cybersecurity & Network Specialist with experience in <strong>system defense</strong>, <strong>vulnerability assessment</strong>, and <strong>secure network design</strong>. Skilled in <strong>secure programming</strong> and threat mitigation. TOEFL-certified in English.',
    'hero.cta1':'Get in touch','hero.cta2':'View Projects',
    'about.title':'About','about.text':'I help organizations build strong security posture—from policy to hands-on execution. I conduct penetration tests, design secure network architectures, and apply secure coding across the SSDLC.',
    'about.mission.title':'Mission','about.mission.text':'Raise security maturity while reducing complexity—building resilient, trustworthy systems.',
    'about.values.title':'Values','about.values.text':'Integrity, confidentiality, availability, and auditable documentation.',
    'about.langs.title':'Languages','about.langs.text':'Arabic · English (TOEFL)',
    'skills.title':'Skills','skills.defense.title':'Defense & Testing','skills.network.title':'Networking','skills.secprog.title':'Secure Programming','skills.certs.title':'Certifications',
    'projects.title':'Featured Projects','projects.p1.title':'Linux Server Hardening for Mid-size Org','projects.p1.text':'Applied CIS Benchmarks, log monitoring, and SIEM alerting.',
    'projects.p2.title':'Comprehensive Internal Vulnerability Assessment','projects.p2.text':'Discovered exposed services, risk-ranked findings, and prioritized remediation.',
    'projects.p3.title':'Automated OWASP Checks for a Web App','projects.p3.text':'Integrated SAST/DAST into CI/CD and trained the team on OWASP Top 10.',
    'services.title':'Services',
    'services.vuln.title':'Vulnerability Assessment','services.vuln.text':'Routine scanning with actionable, business-impact aligned recommendations.',
    'services.hard.title':'System Hardening','services.hard.text':'Secure baselines, service configuration, and patch management.',
    'services.net.title':'Secure Network Design','services.net.text':'Segmentation, VPN, firewalls, and access policies.',
    'services.secprog.title':'Secure Programming','services.secprog.text':'Code reviews, threat modeling, and security automation.',
    'resume.title':'Resume','resume.text':'You can view or download my resume (HTML).','resume.view':'View Resume','resume.download':'Download',
    'contact.title':'Contact Me','contact.text':'For collaboration or job offers: ','contact.send':'Send',
    'contact.name':'Name','contact.email':'Email','contact.message':'Message',
    'footer.rights':'All rights reserved'
  }
};

function applyLanguage(lang){
  const isEN = lang === 'en';
  document.documentElement.lang = isEN ? 'en' : 'ar';
  document.documentElement.dir  = isEN ? 'ltr' : 'rtl';
  document.body.classList.toggle('ltr', isEN);

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const html = dict[lang]?.[key];
    if(html !== undefined){ el.innerHTML = html; }
  });

  document.querySelectorAll('[data-i18n-wrap]').forEach(label=>{
    const key = label.getAttribute('data-i18n-wrap');
    const text = dict[lang]?.[key];
    if(text !== undefined){
      const input = label.querySelector('input,textarea');
      label.childNodes.forEach(n=>{ if(n.nodeType===3){ n.textContent=''; }});
      label.insertBefore(document.createTextNode(text+' '), input);
      if(input && input.placeholder){
        if(key==='contact.name'){ input.placeholder = isEN ? 'Your full name' : 'اسمك الكامل'; }
        if(key==='contact.email'){ input.placeholder = isEN ? 'example@mail.com' : 'example@mail.com'; }
        if(key==='contact.message'){ input.placeholder = isEN ? 'Type your message here' : 'اكتب رسالتك هنا'; }
      }
    }
  });

  localStorage.setItem('lang', lang);
}

const initial = localStorage.getItem('lang') || (navigator.language.startsWith('ar') ? 'ar' : 'en');
applyLanguage(initial);
document.querySelector('#langToggle')?.addEventListener('click', ()=>{
  const next = (localStorage.getItem('lang') === 'ar') ? 'en' : 'ar';
  applyLanguage(next);
});
