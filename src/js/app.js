/* add javascript here */

// Hamburger menus
const burger = document.querySelectorAll('#burger');
const sideNav = document.querySelector('.side-nav');

// loop through each button and add a click event listener
burger.forEach(function(burger) {
  burger.addEventListener('click' ,() => {
    sideNav.classList.toggle('translate-x-[-100%]');
  });
});


function stopVideo() {
console.log('please stop');
}


// Change the second argument to your options:
// https://github.com/sampotts/plyr/#options
// const player = new Plyr('#player', {captions: {active: true}});
const players = Plyr.setup('.js-player');

// Expose player so it can be used from the console
window.player = player;
