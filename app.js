const skillsBtn = document.querySelector('[data-js="toggle-btn-skills"]');
const skillsText = document.querySelector('[data-js="toggle-text-skills"]');
const aboutMeBtn = document.querySelector('[data-js="toggle-btn-about"]');
const aboutMeText = document.querySelector('[data-js="toggle-text-about"]');
const contactBtn = document.querySelector('[data-js="toggle-btn-contact"]');
const contactText = document.querySelector('[data-js="toggle-text-contact"]');  
const contactText2 = document.querySelector('[data-js="toggle-text-contact2"]');
const projectsBtn = document.querySelector('[data-js="toggle-btn-projects"]');
const projectsText = document.querySelector('[data-js="toggle-text-projects"]');  
const navIcon = document.querySelector('[data-js="header__nav-icon"]');

skillsBtn.addEventListener('click', () => {
    skillsText.classList.toggle("hidden");
})
aboutMeBtn.addEventListener('click', () => {
    aboutMeText.classList.toggle("hidden");
})
contactBtn.addEventListener('click', () => {
    contactText.classList.toggle("hidden");
    contactText2.classList.toggle("hidden");
})
projectsBtn.addEventListener('click', () => {
    projectsText.classList.toggle("hidden");
})


const icon = document.querySelector('.icon');
const verticalNav = document.querySelector('[data-js="vertical-nav"]');

icon.addEventListener('click', (event) => {
 icon.classList.toggle("open");
 verticalNav.classList.toggle("header__vertical-nav-hidden");
});