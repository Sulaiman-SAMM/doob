const translations = {
    en: {
        home: "Home",
        our_skills: "Our skills",
        about_us: "About us",
        portfolio: "Portfolio",
        blog: "Blog",
        contact_us: "Contact Us",
    },
    de: {
        home: "Heim",
        our_skills: "Fähigkeiten",
        about_us: "Über uns",
        portfolio: "Portfolio",
        blog: "Blog",
        contact_us: "Kontaktiere uns",
    },
    ar: {
        home: "الصفحة الرئيسية",
        our_skills: "مهاراتنا",
        about_us: "معلومات عنا",
        portfolio: "مَلَفّ",
        blog: "مدونة",
        contact_us: "اتصل بنا",
    },
};
const languageSelector = document.querySelector("select");

languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
});

const setLanguage = (Language) => {
    const elements = document.querySelectorAll("[data-il8n]");
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-il8n");
        element.textContent = translations[Language][translationKey];
    });
};
