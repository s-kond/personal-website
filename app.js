const aboutMeBtn = document.querySelector('[data-js="toggle-btn"]');
const aboutMeText = document.querySelector('[data-js="toggle-text"]'); 

aboutMeBtn.addEventListener('click', () => {
    aboutMeText.classList.toggle("hidden");
})