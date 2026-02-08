let body = document.body;
let yes = document.getElementById('yes');
let no = document.getElementById('no');
let main = document.querySelector('.main');
let question = document.getElementById('question');
let buttons = document.querySelector('.buttons');
let itinerary = document.querySelector('#itinerary');
let home = document.querySelector('#home');
let song = new Audio('audio/song.mp3');

yes.addEventListener('click', () => {
    main.style.backgroundImage = 'url("images/yesbackground.jpg")';
    question.innerHTML = 'i love u <3';
    question.classList.add('said-yes');
    buttons.style.display = 'none';
    song.currentTime = 111;
    song.play();

    setTimeout(() => {
        main.style.backgroundImage = 'url("images/walking.jpeg")';
        main.style.backgroundSize = 'cover';
        main.style.transition = 'opacity 3s ease-out';
        question.innerHTML = 'so whats next?';
        question.style.top = '32vh';
    }, 3000);

    setTimeout(() => {
        main.style.backgroundImage = 'url("images/hands.jpg")';
        main.style.backgroundSize = 'cover';
        main.style.transition = 'opacity 3s ease-out';
        question.style.display = 'none';
        itinerary.classList.add('said-yes');
        gift.classList.add('said-yes');
    }, 6000);

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