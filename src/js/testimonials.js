const title = 'Testimonials';
const subtitle =
  'I have gotten the privilege of working with some amazing people over the last few years, here are some of their thoughts!';

let typeitSpeed = 12;
let typeitSpeedFast = 7;

new TypeIt('#title', {
  speed: typeitSpeed,
  cursor: false,
  strings: title,
  waitUntilVisible: true,

  afterComplete: (instance) => {
    new TypeIt('#subtitle', {
      speed: typeitSpeedFast,
      cursor: true,
      strings: subtitle,

      afterComplete: (instance) => {
        $('.hide').removeClass('hide').addClass('animated').addClass('fadeIn');
      },
    }).go();
  },
}).go();
