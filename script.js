const translations = {
    en: {
        "nav-brand": "Sahabe Guidelines",
        title: "Sahabe User Guide",
        subtitle: "Everything you need to know to get started with the Sahabe app.",
        "ios-beta": "iOS Beta Access",
        "version-label": "Latest Version:",
        "download-text": "Download on TestFlight",
        "tab-1": "Getting Started",
        "tab-full-guide": "Full Guide",
        "tab-2": "Features",
        "tab-3": "FAQ",
        "gs-title": "How to Install",
        "step1-title": "Install TestFlight",
        "step1-desc": "Download Apple's TestFlight app from the App Store on your iPhone or iPad.",
        "step2-title": "Join Beta",
        "step2-desc": "Tap the download link above and accept the invitation to join the Sahabe beta program.",
        "step3-title": "Install Sahabe",
        "step3-desc": "Tap 'Install' in the TestFlight app to download Sahabe to your device.",
        "docs-title": "Detailed Documentation",
        "feat-title": "Key Features",
        "feat1-title": "Real-time Chat",
        "feat1-desc": "Communicate instantly with a modern and intuitive chat interface.",
        "feat2-title": "Voice Messages",
        "feat2-desc": "Send and receive crystal clear voice messages effortlessly.",
        "feat3-title": "Secure & Private",
        "feat3-desc": "Your conversations are protected with industry-standard security.",
        "faq-title": "Frequently Asked Questions",
        "faq1-q": "Do I need an account to use the app?",
        "faq1-a": "Yes, you can sign in easily using your Google or Apple account.",
        "faq2-q": "Is the app available on Android?",
        "faq2-a": "Currently, we are focusing on the iOS beta release. An Android version will be available in the future.",
        "faq3-q": "How do I report a bug?",
        "faq3-a": "You can report bugs directly through the TestFlight app by taking a screenshot and sharing your feedback.",
        "footer-text": "&copy; 2026 Sahabe. All rights reserved."
    },
    tr: {
        "nav-brand": "Sahabe Kılavuzu",
        title: "Sahabe Kullanım Kılavuzu",
        subtitle: "Sahabe uygulamasına başlamak için bilmeniz gereken her şey.",
        "ios-beta": "iOS Beta Erişimi",
        "version-label": "Son Sürüm:",
        "download-text": "TestFlight'ta İndir",
        "tab-1": "Başlarken",
        "tab-full-guide": "Tüm Kılavuz",
        "tab-2": "Özellikler",
        "tab-3": "SSS",
        "gs-title": "Nasıl Yüklenir?",
        "step1-title": "TestFlight'ı Yükleyin",
        "step1-desc": "iPhone veya iPad'inizdeki App Store'dan Apple'ın TestFlight uygulamasını indirin.",
        "step2-title": "Beta'ya Katılın",
        "step2-desc": "Yukarıdaki indirme bağlantısına dokunun ve Sahabe beta programına katılma davetini kabul edin.",
        "step3-title": "Sahabe'yi Yükleyin",
        "step3-desc": "Sahabe'yi cihazınıza indirmek için TestFlight uygulamasında 'Yükle'ye dokunun.",
        "docs-title": "Detaylı Dokümantasyon",
        "feat-title": "Temel Özellikler",
        "feat1-title": "Gerçek Zamanlı Sohbet",
        "feat1-desc": "Modern ve sezgisel bir sohbet arayüzü ile anında iletişim kurun.",
        "feat2-title": "Sesli Mesajlar",
        "feat2-desc": "Kristal netliğinde sesli mesajları zahmetsizce gönderin ve alın.",
        "feat3-title": "Güvenli ve Gizli",
        "feat3-desc": "Görüşmeleriniz endüstri standardı güvenlik ile korunmaktadır.",
        "faq-title": "Sıkça Sorulan Sorular",
        "faq1-q": "Uygulamayı kullanmak için bir hesaba ihtiyacım var mı?",
        "faq1-a": "Evet, Google veya Apple hesabınızı kullanarak kolayca giriş yapabilirsiniz.",
        "faq2-q": "Uygulama Android'de mevcut mu?",
        "faq2-a": "Şu anda iOS beta sürümüne odaklanıyoruz. Gelecekte bir Android sürümü de mevcut olacak.",
        "faq3-q": "Bir hatayı nasıl bildirebilirim?",
        "faq3-a": "Ekran görüntüsü alıp geri bildiriminizi paylaşarak hataları doğrudan TestFlight uygulaması üzerinden bildirebilirsiniz.",
        "footer-text": "&copy; 2026 Sahabe. Tüm hakları saklıdır."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Language switching
    const btnEn = document.getElementById('btn-en');
    const btnTr = document.getElementById('btn-tr');
    const guideEn = document.getElementById('guide-en-content');
    const guideTr = document.getElementById('guide-tr-content');

    const setLanguage = (lang) => {
        if (lang === 'en') {
            btnEn.classList.add('active');
            btnTr.classList.remove('active');
            guideEn.style.display = 'block';
            guideTr.style.display = 'none';
        } else {
            btnTr.classList.add('active');
            btnEn.classList.remove('active');
            guideEn.style.display = 'none';
            guideTr.style.display = 'block';
        }

        const t = translations[lang];
        for (const [id, text] of Object.entries(t)) {
            const el = document.getElementById(id);
            if (el) {
                el.innerHTML = text;
            }
        }
    };

    btnEn.addEventListener('click', () => setLanguage('en'));
    btnTr.addEventListener('click', () => setLanguage('tr'));

    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const isActive = header.classList.contains('active');
            
            // Close all
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.style.maxHeight = null;
            });

            // Toggle current
            if (!isActive) {
                header.classList.add('active');
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
});
