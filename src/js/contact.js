const title = 'Contact';
const subtitle =
  'I would love to hear from you! There are a few different ways to reach me.';

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
