let body = document.body;
let yes = document.getElementById('yes');
let no = document.getElementById('no');
let main = document.querySelector('.main');
let question = document.getElementById('question');
let buttons = document.querySelector('.buttons');
let itinerary = document.querySelector('#itinerary');



yes.addEventListener('click', () => {
    main.style.backgroundImage = 'url("images/yesbackground.jpg")';
    question.innerHTML = 'i love u <3';
    question.classList.add('said-yes');
    buttons.style.display = 'none';
    itinerary.classList.add('said-yes');
    textBubble.classList.add('said-yes');

});

no.addEventListener('click', () => {
    main.style.backgroundImage = 'url("images/nobackground.jpg")';
    main.style.backgroundSize = 'cover';
    main.style.backgroundPosition = 'center';
    main.style.backgroundRepeat = 'no-repeat';
    main.style.backgroundAttachment = 'fixed';
    question.style.display = 'none';
    buttons.style.display = 'none';
    home.classList.add('said-no');
});