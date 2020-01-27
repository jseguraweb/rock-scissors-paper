// user VS computer

const userWeapon = document.querySelector('.user-weapon');
const computerWeapon = document.querySelector('.computer-weapon');


// weapons

const rockWeapon = document.querySelector('.rock');
const scissorsWeapon = document.querySelector('.scissors');
const paperWeapon = document.querySelector('.paper');


// backgrounds

const rock = 'url("./img/rock.png")';
const scissors = 'url("./img/scissors.png")';
const paper = 'url("./img/paper.png")';


// options

const win = document.querySelector('.win');
const draw = document.querySelector('.draw');
const lost = document.querySelector('.lost');

// REPLAY BUTTON

const replayButtonArray = document.querySelectorAll('.play-again');


// functions

const randomWeaponComputer = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerWeapon.style.backgroundImage = rock;
    } else if (randomNumber === 1) {
        computerWeapon.style.backgroundImage = scissors;
    } else {
        computerWeapon.style.backgroundImage = paper;
    }
};

const result = () => {
    if (userWeapon.style.backgroundImage === rock &&
    computerWeapon.style.backgroundImage === rock) {
        setInterval(function(){
            draw.style.zIndex = '100';
            draw.style.transitionDuration = '0.5s';
            draw.style.opacity = '1';
        }, 2000);
    } else if (userWeapon.style.backgroundImage === rock &&
    computerWeapon.style.backgroundImage === scissors) {
        setInterval(function(){
            win.style.zIndex = '100';
            win.style.transitionDuration = '0.5s';
            win.style.opacity = '1';
        }, 2000);
    } else if (userWeapon.style.backgroundImage === rock &&
    computerWeapon.style.backgroundImage === paper) {
        setInterval(function(){
            lost.style.zIndex = '100';
            lost.style.transitionDuration = '0.5s';
            lost.style.opacity = '1';
        }, 2000);
    } else if (userWeapon.style.backgroundImage === scissors &&
    computerWeapon.style.backgroundImage === rock) {
        setInterval(function(){
            lost.style.zIndex = '100';
            lost.style.transitionDuration = '0.5s';
            lost.style.opacity = '1';
        }, 2000);
    } else if (userWeapon.style.backgroundImage === scissors &&
    computerWeapon.style.backgroundImage === scissors) {
        setInterval(function(){
            draw.style.zIndex = '100';
            draw.style.transitionDuration = '0.5s';
            draw.style.opacity = '1';
        }, 2000);
    } else if (userWeapon.style.backgroundImage === scissors &&
    computerWeapon.style.backgroundImage === paper) {
        setInterval(function(){
            win.style.zIndex = '100';
            win.style.transitionDuration = '0.5s';
            win.style.opacity = '1';
        }, 2000);
    } else if (userWeapon.style.backgroundImage === paper &&
    computerWeapon.style.backgroundImage === rock) {
        setInterval(function(){
            win.style.zIndex = '100';
            win.style.transitionDuration = '0.5s';
            win.style.opacity = '1';
        }, 2000);
    } else if (userWeapon.style.backgroundImage === paper &&
    computerWeapon.style.backgroundImage === scissors) {
        setInterval(function(){
            lost.style.zIndex = '100';
            lost.style.transitionDuration = '0.5s';
            lost.style.opacity = '1';
        }, 2000);
    } else if (userWeapon.style.backgroundImage === paper &&
    computerWeapon.style.backgroundImage === paper) {
        setInterval(function(){
            draw.style.zIndex = '100';
            draw.style.transitionDuration = '0.5s';
            draw.style.opacity = '1';
        }, 2000);
    }
};

(selectWeapon = () => { 
    rockWeapon.addEventListener('click', (e) => {
        userWeapon.style.backgroundImage = rock;
        randomWeaponComputer();
        result();
    });

    scissorsWeapon.addEventListener('click', (e) => {
        userWeapon.style.backgroundImage = scissors;
        randomWeaponComputer();
        result();
    });

    paperWeapon.addEventListener('click', (e) => {
        userWeapon.style.backgroundImage = paper;
        randomWeaponComputer();
        result();
    });
})();

(replay = () => {
    replayButtonArray.forEach(button => {
        button.addEventListener('click', (e) => {
            document.location.reload();
        })
    })
})();

