let body = document.body;
let yes = document.getElementById('yes');
let no = document.getElementById('no');
let main = document.querySelector('.main');
let question = document.getElementById('question');
let buttons = document.querySelector('.buttons');
let itinerary = document.querySelector('#itinerary');
let home = document.querySelector('#home');
let song = new Audio('audio/song.mp3');

let saidYesLayout = document.querySelector('.said-yes-layout');
let ourfirst = document.querySelector('#ourfirst');
let herfav = document.querySelector('#herfav');
let myfav = document.querySelector('#myfav');
let hands = document.querySelector('#hands');
let walking = document.querySelector('#walking');
let recentfav = document.querySelector('#recentfav');
let h1 = document.querySelector('.said-yes-layout-h1');

yes.addEventListener('click', () => {
    main.style.backgroundImage = 'url("images/yesbackground.jpg")';
    question.innerHTML = 'i love u <3';
    question.classList.add('said-yes');
    buttons.style.display = 'none';
    song.currentTime = 111;
    song.play();
    
    
    setTimeout(() => {
        saidYesLayout.style.display = 'flex';
        main.style.transition = 'background-image 0.6s ease-out';
        main.style.backgroundImage = 'url("images/gameboybackground.jpg")';
        main.style.backgroundSize = '100% 100%';
        question.style.transition = 'opacity 0.6s ease-out';
        question.style.opacity = '0';

        setTimeout(() => {
            question.style.display = 'none';
        }, 600);
    }, 1500);


    setTimeout(() => {
        ourfirst.style.opacity = '0';

        requestAnimationFrame(() => {
            ourfirst.style.opacity = '1';
        });
    }, 3000);

    setTimeout(() => {
        herfav.style.opacity = '0';

        requestAnimationFrame(() => {
            herfav.style.opacity = '1';
        });
    }, 4500);

    setTimeout(() => {
        myfav.style.opacity = '0';

        requestAnimationFrame(() => {
            myfav.style.opacity = '1';
        });
    }, 6000);

    setTimeout(() => {
        hands.style.opacity = '0';

        requestAnimationFrame(() => {
            hands.style.opacity = '1';
        });
    }, 7500);

    setTimeout(() => {
        walking.style.opacity = '0';

        requestAnimationFrame(() => {
            walking.style.opacity = '1';
        });
    }, 9000);

    setTimeout(() => {
        recentfav.style.opacity = '0';
        requestAnimationFrame(() => {
            recentfav.style.opacity = '1';
        });
    }, 10500);

    setTimeout(() => {
        h1.style.opacity = '0';
        requestAnimationFrame(() => {
            h1.style.opacity = '1';
        });
    }, 12000);
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

let itineraryLink = document.querySelector('#itinerary');
let giftLink = document.querySelector('#gift');

itineraryLink.addEventListener('click', () => {
        
});

giftLink.addEventListener('click', () => {
    window.location.href = 'gifts.html';
});