const title = 'About Me';

let typeitSpeed = 12;

new TypeIt('#title', {
  speed: typeitSpeed,
  cursor: true,
  strings: title,
  waitUntilVisible: true,

  afterComplete: (instance) => {
    $('.hide').removeClass('hide').addClass('animated').addClass('fadeIn');
  },
}).go();
