const translations = {
    en: {
        "nav-brand": "App Guidelines",
        title: "TheyChat User Guide",
        subtitle: "Everything you need to know to get started with the TheyChat app.",
        "ios-beta": "iOS Beta Access",
        "version-label": "Latest Version:",
        "download-text": "Download on TestFlight",
        "android-beta": "Android Beta Access",
        "android-download-text": "Download on Google Play",
        "tab-1": "Getting Started",
        "tab-full-guide": "Full Guide",
        "tab-2": "Features",
        "tab-3": "FAQ",
        "version-label": "VERSION",
        "build-label": "Build 80",
        "expires-label": "EXPIRES",
        "days-unit": "Days",
        "gs-title": "How to Install",
        "gs-ios-title": "iOS Installation",
        "gs-android-title": "Android Installation",
        "step1-title": "Install TestFlight",
        "step1-desc": "Download Apple's TestFlight app from the App Store on your iPhone or iPad.",
        "step2-title": "Join Beta",
        "step2-desc": "Tap the download link above and accept the invitation to join the TheyChat beta program.",
        "step3-title": "Install TheyChat App",
        "step3-desc": "Tap 'Install' in the TestFlight app to download TheyChat App to your device.",
        "android-step1-title": "Open Google Play",
        "android-step1-desc": "Click the 'Download on Google Play' button at the top of this page.",
        "android-step2-title": "Install App",
        "android-step2-desc": "On the Google Play Store page, tap the 'Install' button to download the app.",
        "feat-title": "Key Features",
        "feat1-title": "Real-time Chat",
        "feat1-desc": "Communicate instantly with a modern and intuitive chat interface.",
        "feat2-title": "Text Chat",
        "feat2-desc": "Enjoy seamless text-based conversations anytime, anywhere.",
        "feat3-title": "Private & Secure",
        "feat3-desc": "Your data and conversations are protected with advanced encryption.",
        "feat4-title": "Educational Content",
        "feat4-desc": "Access informative and educational content designed to help you grow.",
        "faq-title": "Frequently Asked Questions",
        "faq1-q": "Do I need an account to use the app?",
        "faq1-a": "Yes, you can sign in easily using your Google or Apple account.",
        "faq2-q": "How do I report a bug?",
        "faq2-a": "You can report bugs directly through the TestFlight app by taking a screenshot and sharing your feedback.",
        "free-notice-text": "The test version of our application is completely free. No charges will be applied."
    },
    tr: {
        "nav-brand": "App Kılavuzu",
        title: "TheyChat Kullanım Kılavuzu",
        subtitle: "TheyChat uygulamasına başlamak için bilmeniz gereken her şey.",
        "ios-beta": "iOS Beta Erişimi",
        "version-label": "Son Sürüm:",
        "download-text": "TestFlight'ta İndir",
        "android-beta": "Android Beta Erişimi",
        "android-download-text": "Google Play'den İndir",
        "tab-1": "Başlarken",
        "tab-full-guide": "Tüm Kılavuz",
        "tab-2": "Özellikler",
        "tab-3": "SSS",
        "version-label": "SÜRÜM",
        "build-label": "Yapı 80",
        "expires-label": "SÜRE",
        "days-unit": "Gün",
        "gs-title": "Nasıl Yüklenir?",
        "gs-ios-title": "iOS Kurulumu",
        "gs-android-title": "Android Kurulumu",
        "step1-title": "TestFlight'ı Yükleyin",
        "step1-desc": "iPhone veya iPad'inizdeki App Store'dan Apple'ın TestFlight uygulamasını indirin.",
        "step2-title": "Beta'ya Katılın",
        "step2-desc": "Yukarıdaki indirme bağlantısına dokunun ve TheyChat beta programına katılma davetini kabul edin.",
        "step3-title": "TheyChat Uygulamasını Yükleyin",
        "step3-desc": "TheyChat Uygulamasını cihazınıza indirmek için TestFlight uygulamasında 'Yükle'ye dokunun.",
        "android-step1-title": "Google Play'i Açın",
        "android-step1-desc": "Sayfanın üst kısmında yer alan 'Google Play'den İndir' butonuna tıklayın.",
        "android-step2-title": "Uygulamayı Kurun",
        "android-step2-desc": "Açılan Google Play Store sayfasında 'Yükle' butonuna basarak uygulamayı kurun.",
        "feat-title": "Temel Özellikler",
        "feat1-title": "Gerçek Zamanlı Sohbet",
        "feat1-desc": "Modern ve sezgisel bir sohbet arayüzü ile anında iletişim kurun.",
        "feat2-title": "Metin Sohbeti",
        "feat2-desc": "Her zaman, her yerde sorunsuz metin tabanlı sohbetlerin tadını çıkarın.",
        "feat3-title": "Özel ve Güvenli",
        "feat3-desc": "Verileriniz ve görüşmeleriniz gelişmiş şifreleme ile korunmaktadır.",
        "feat4-title": "Eğitici ve Öğretici Bilgiler",
        "feat4-desc": "Gelişiminize yardımcı olmak için tasarlanmış bilgilendirici ve eğitici içeriklere erişin.",
        "faq-title": "Sıkça Sorulan Sorular",
        "faq1-q": "Uygulamayı kullanmak için bir hesaba ihtiyacım var mı?",
        "faq1-a": "Evet, Google veya Apple hesabınızı kullanarak kolayca giriş yapabilirsiniz.",
        "faq2-q": "Bir hatayı nasıl bildirebilirim?",
        "faq2-a": "Ekran görüntüsü alıp geri bildiriminizi paylaşarak hataları doğrudan TestFlight uygulaması üzerinden bildirebilirsiniz.",
        "free-notice-text": "Uygulamamızın test sürümü tamamen ücretsizdir. Herhangi bir ücret talep edilmeyecektir."
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

    // Version fetching logic
    const fetchLatestVersion = async () => {
        try {
            const response = await fetch('version.json');
            if (!response.ok) throw new Error('version.json bulunamadı');
            
            const data = await response.json();
            
            if (data.version) {
                document.getElementById('version-number').textContent = data.version;
            }
            if (data.build) {
                // Update translation objects so language switches preserve the build number
                translations.en["build-label"] = `Build ${data.build}`;
                translations.tr["build-label"] = `Yapı ${data.build}`;
                
                // Update current display
                const buildEl = document.getElementById('build-label');
                if (buildEl) {
                    const currentLang = document.getElementById('btn-en').classList.contains('active') ? 'en' : 'tr';
                    buildEl.textContent = translations[currentLang]["build-label"];
                }
            }
            if (data.expiresInDays) {
                document.getElementById('days-left').textContent = data.expiresInDays;
            }
        } catch (error) {
            console.error('Error fetching version info:', error);
        }
    };

    fetchLatestVersion();
});
