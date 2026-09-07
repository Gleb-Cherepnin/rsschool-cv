const ru = document.getElementById('ru');
const en = document.getElementById('en');

const navLinks = document.querySelectorAll('.navigation a');
const demoLinks = document.querySelectorAll('.demo');

const navMap = {
  "nav-about": "about",
  "nav-skills": "skills",
  "nav-code": "code",
  "nav-projects": "projects",
  "nav-education": "education",
  "nav-english": "english",
  "nav-contacts": "contacts"
};

const heroTexts = document.querySelectorAll('.hero-text [id]');
const aboutText = document.getElementById('aboutText');
const aboutTitle = document.getElementById('aboutTitle');
const skillsTitle = document.getElementById('skillsTitle');
const codeTitle = document.getElementById('codeTitle');

const projectTexts = document.querySelectorAll('#projects h3[id]');
const educationTexts = document.querySelectorAll('#education [id]');
const languageTexts = document.querySelectorAll('#english [id]');
const footerTexts = document.querySelectorAll('#contacts [id]');
const projectsTitle = document.getElementById('projectsTitle');
const checkCode = document.getElementById('checkCode');


const translations = {

  ru: {
    about: 'ОБО МНЕ',
    skills: 'СКИЛЛЫ',
    code: 'КОД',
    projects: 'ПРОЕКТЫ',
    education: 'ОБРАЗОВАНИЕ',
    english: 'ЯЗЫКИ',
    contacts: 'КОНТАКТЫ',

    name: 'ГЛЕБ ЧЕРЕПНИН',
    profession: 'ФРОНТЕНД РАЗРАБОТЧИК',
    location: 'Казахстан, Караганда',

    aboutTitle: 'ОБО МНЕ',


    aboutText: `
      Фронтенд-разработчик с опытом около 2 лет. Работал с Telegram-ботами,
      сайтами и веб-приложениями, а также создал несколько собственных проектов
      для развития навыков на практике.
      <br><br>
      Сейчас активно изучаю новые языки программирования — моя цель освоить
      5 языков до конца года. Также планирую пройти курс RS School и устроиться
      на работу разработчиком.
      <br><br>
      Люблю ловить вайб жизни и просто сидеть писать код. Помимо разработки,
      играю на бас-, электро- и акустической гитаре, больше всего люблю
      электрогитару. И не могу прожить день без пары чашек кофе ☕️
    `,

    skillsTitle: 'СКИЛЛЫ',
    codeTitle: 'КОД',

    projectsTitle: 'ПРОЕКТЫ',
    musicPlayer: 'Музыкальный плеер',
    weatherApp: 'Погода',
    game2048: 'Игра 2048',
    chess: 'Шахматы',
    demo: 'Демо',

    educationTitle: 'ОБРАЗОВАНИЕ',
    school1: 'Средняя школа № 5',
    speciality1: 'Среднее образование',
    school2: 'Высший банковский колледж <br> имени Ж. К. Букенова',
    speciality2: 'Веб дизайнер & программист',

    languagesTitle: 'ЯЗЫКИ',
    russian: 'Русский',
    native: 'Родной',
    englishLanguage: 'Английский',
    intermediate: 'Средний (B1)',

    contactsTitle: 'КОНТАКТЫ',
    footerCopy: 'Разработано Глебом Черепниным © 2026',
    checkCode: 'Чекнуть код',
  },


  en: {
    about: 'ABOUT ME',
    skills: 'SKILLS',
    code: 'CODE',
    projects: 'PROJECTS',
    education: 'EDUCATION',
    english: 'LANGUAGES',
    contacts: 'CONTACTS',

    name: 'GLEB CHEREPNIN',
    profession: 'FRONTEND DEVELOPER',
    location: 'Kazakhstan, Karaganda',

    aboutTitle: 'ABOUT ME',
    aboutText: `
        Frontend Developer with about 2 years of experience. I've worked with Telegram bots, websites,
        and web applications, and also built several of my own small projects to sharpen my skills
        through practice.
        <br><br>
        Right now I'm actively learning new programming languages — my goal is to master 5 of them
        by the end of the year. I'm also planning to complete the RS School course and land a job
        as a developer.
        <br><br>
        I love catching the vibe of life and enjoy sitting down and writing code. Besides development,
        I play guitar — bass, electric, and acoustic — with electric being my favorite. And I can't
        get through a day without a couple of cups of coffee ☕️
      `,

    skillsTitle: 'SKILLS',
    codeTitle: 'CODE',

    projectsTitle: 'PROJECTS',
    musicPlayer: 'Music Player',
    weatherApp: 'Weather',
    game2048: '2048 Game',
    chess: 'Chess',
    demo: 'LIVE DEMO',

    educationTitle: 'EDUCATION',
    school1: 'Secondary School No. 5',
    speciality1: 'General Secondary Education',
    school2: 'Zh. K. Bukenov Karaganda <br> Higher College',
    speciality2: 'Web Design <br> & Programming',

    languagesTitle: 'LANGUAGES',
    russian: 'Russian',
    native: 'Native',
    englishLanguage: 'English',
    intermediate: 'Intermediate (B1)',

    contactsTitle: 'CONTACTS',
    footerCopy: 'Designed by Gleb Cherepnin © 2026',
    checkCode: 'Check Code',
  }
};


ru.addEventListener('click', () => {

  navLinks.forEach((link) => {
    link.textContent = translations.ru[navMap[link.id]];
  });


  heroTexts.forEach((link) => {
    link.textContent = translations.ru[link.id];
  });


  aboutText.innerHTML = translations.ru.aboutText;
  aboutTitle.textContent = translations.ru.aboutTitle;
  skillsTitle.textContent = translations.ru.skillsTitle;
  codeTitle.textContent = translations.ru.codeTitle;
  checkCode.textContent = translations.ru.checkCode;
  projectsTitle.textContent = translations.ru.projectsTitle;


  projectTexts.forEach((item) => {
    item.textContent = translations.ru[item.id];
  });


  demoLinks.forEach((item) => {
    item.textContent = translations.ru.demo;
  });


  educationTexts.forEach((item) => {
    item.innerHTML = translations.ru[item.id];
  });


  languageTexts.forEach((item) => {
    item.textContent = translations.ru[item.id];
  });


  footerTexts.forEach((item) => {
    item.textContent = translations.ru[item.id];
  });

});



en.addEventListener('click', () => {

  navLinks.forEach((link) => {
    link.textContent = translations.en[navMap[link.id]];
  });


  heroTexts.forEach((link) => {
    link.textContent = translations.en[link.id];
  });


  aboutText.innerHTML = translations.en.aboutText;
  aboutTitle.textContent = translations.en.aboutTitle;
  skillsTitle.textContent = translations.en.skillsTitle;
  codeTitle.textContent = translations.en.codeTitle;
  checkCode.textContent = translations.en.checkCode;
  projectsTitle.textContent = translations.en.projectsTitle;


  projectTexts.forEach((item) => {
    item.textContent = translations.en[item.id];
  });


  demoLinks.forEach((item) => {
    item.textContent = translations.en.demo;
  });


  educationTexts.forEach((item) => {
    item.innerHTML = translations.en[item.id];
  });


  languageTexts.forEach((item) => {
    item.textContent = translations.en[item.id];
  });


  footerTexts.forEach((item) => {
    item.textContent = translations.en[item.id];
  });

});