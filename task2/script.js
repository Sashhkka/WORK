document.querySelector('.header_burger_button').onclick = function()
{document.querySelector('.header_burger_menu_inner').classList.toggle('active');};

let en = document.getElementById("en");
en.addEventListener("click", languageEn);

let ru = document.getElementById("ru");
ru.addEventListener("click", languageRu)

let myname = document.getElementById("myname");
let designer = document.getElementById("designer");
let home = document.getElementById("home")
let skills = document.getElementById("skills")
let about = document.getElementById("about")
let portfolio = document.getElementById("portfolio")
let contacts = document.getElementById("contacts")
let programs = document.getElementById("programs")
let aboutme = document.getElementById("aboutme")
let chat = document.getElementById("chat")
let chatme = document.getElementById("chatme")
let send = document.getElementById("send")
let mainAbout = document.getElementById("mainAbout")
let mainSkills = document.getElementById("mainSkills")
let mainContacts = document.getElementById("mainContacts")
let mainPortfolio = document.getElementById("mainPortfolio")

function languageEn()
{
    myname.innerHTML = "Alexandra Kartinnik";
    designer.innerHTML = "UX | UI designer <br> 18 years old, Minsk";
    home.innerHTML = "HOME";
    skills.innerHTML = "SKILLS";
    about.innerHTML = "ABOUT ME";
    portfolio.innerHTML = "PORTFOLIO";
    contacts.innerHTML = "CONTACTS";
    programs.innerHTML = "I work in such programs as";
    aboutme.innerHTML = "<p>Hi, I'm Alexandra - UX/UI designer from Minsk. I'm interested in design and everything connected with it.</p><p>I study in the Belarusian State University of Radioelectronics and Informatics in the Faculty of Information Security, independently study design, coloristics, typography, composition basics, and also take courses on creating website design in Figma.</p><p>My life is filled with wonderful things and I ready to implement excellent projects with wonderful people.</p>";
    chat.innerHTML = "Want to know more or just chat?</br>You are welcome!";
    chatme.innerHTML = "Chat me on</br>Instagram, VK, Telegram, Gmail";
    send.innerHTML = "Send";
    mainAbout.innerHTML = "ABOUT";
    mainSkills.innerHTML = "SKILLS";
    mainPortfolio.innerHTML = "PORTFOLIO";
    mainContacts.innerHTML = "CONTACTS";
}

function languageRu()
{
    myname.innerHTML = "Александра Картинник";
    designer.innerHTML = "UX | UI дизайнер <br> 18 лет, город Минск";
    home.innerHTML = "ГЛАВНАЯ";
    skills.innerHTML = "НАВЫКИ";
    about.innerHTML = "ОБО МНЕ";
    portfolio.innerHTML = "ПОРТФОЛИО";
    contacts.innerHTML = "КОНТАКТЫ";
    programs.innerHTML = "Я работаю в таких программах как";
    aboutme.innerHTML = "<p>Привет, я Александра - UX/UI дизайнер из Минска. Интересуюсь дизайном и всем, что с ним связано.</p><p>Я учусь в Белорусском Государственном Университете Радиоэлектроники и Информатики на факультете Информационной Безопасности, самостоятельно изучаю дизайн, колористику, типографику, основы композиции, а также прохожу курсы по созданию макейты сайтов в Figma.</p><p>Моя жизнь наполнена прекрасными вещами, и я готов реализовывать отличные проекты с замечательными людьми.</p>";
    chat.innerHTML = "Хотите узнать больше или пообщаться?<br>Всегда на связи!";
    chatme.innerHTML = "Напиши мне</br>Instagram, VK, Telegram, Gmail";
    send.innerHTML = "Отправить";
    mainAbout.innerHTML = "ОБО МНЕ";
    mainSkills.innerHTML = "НАВЫКИ";
    mainPortfolio.innerHTML = "ПОРТФОЛИО";
    mainContacts.innerHTML = "КОНТАКТЫ";
}