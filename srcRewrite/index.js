// Setup materialize.css
$(document).ready(function() {
  $('.tabs').tabs();
  $('.sidenav').sidenav();
  $('.scrollspy').scrollSpy({
    scrollOffset: 30,
  });
});

// Header
const brandTitle = `Matthew Lin`;
const personalTitle = `Full-Stack Software Developer`;
const personalDescription = `I create high quality web applications, games,
  and software`;
// Motto section
const motto = `Lots already learned. <u>Lots</u> to learn.`;
//Project section
const portfolioTitle = `Some things I have been working on`;
//Work experience section
const workExperienceTitle = `My current work experience`;

// Show the portfolio title after the greeting title,
// unless the 'To Portfolio' button is clicked
let portfolioTitleShown = false;

// Top level typewriter effect
new TypeIt('#brand-logo', {
  speed: 30,
  cursor: false,
  strings: 'Matthew Lin',
  waitUntilVisible: true,

  afterComplete: () => {
    // After the name is typed, begin typing the title
    new TypeIt('#personal-title', {
      speed: 30,
      strings: personalTitle,
      waitUntilVisible: true,

      afterComplete: (instance) => {
        // Get rid of the cursor for the personal title
        instance.reset();
        $('#personal-title').html(personalTitle);

        // After the title is typed, begin typing the description
        new TypeIt('#personal-description', {
          speed: 12,
          strings: personalDescription,
          waitUntilVisible: true,

          afterComplete: () => {
            $('#portfolio-button').removeClass('hide');
            $('#resume-button').removeClass('hide');
            $('#hero-img').removeClass('hide');
          },
        }).go();
      },
    }).go();
  },
}).go();

// Other typewriter effects
new TypeIt('#motto', {
  speed: 30,
  strings: motto,
  waitUntilVisible: true,

  afterComplete: () => {
    $('#motto-description').removeClass('hide');
    $('#motto-description').addClass('animated').addClass('fadeIn');

    if (!portfolioTitleShown) {
      portfolioTitleShown = true;
      // Since typeit seems to have a bug, we must use a IntersectionObserver
      // to check if the text is supposed to be in view
      new IntersectionObserver(
        function(entries) {
          if (entries[0].isIntersecting === true)
            new TypeIt('#portfolio-title', {
              speed: 30,
              strings: portfolioTitle,
            }).go();
          else document.querySelector('#portfolio-title').innerHTML('');
        },
        { threshold: [ 0.01 ] },
      ).observe(document.querySelector('#portfolio-title'));
    }
  },
}).go();

$('#portfolio-button').click(() => {
  if (!portfolioTitleShown) {
    portfolioTitleShown = true;
    // Since typeit seems to have a bug, we must use a IntersectionObserver
    // to check if the text is supposed to be in view
    new IntersectionObserver(
      function(entries) {
        if (entries[0].isIntersecting === true)
          new TypeIt('#portfolio-title', {
            speed: 30,
            strings: portfolioTitle,
          }).go();
        else document.querySelector('#portfolio-title').innerHTML('');
      },
      { threshold: [ 0.01 ] },
    ).observe(document.querySelector('#portfolio-title'));
  }
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Since typeit seems to have a bug, we must use a IntersectionObserver
// to check if the text is supposed to be in view
new IntersectionObserver(
  function(entries) {
    if (entries[0].isIntersecting === true)
      new TypeIt('#work-experience-title', {
        speed: 30,
        strings: workExperienceTitle,
      }).go();
    else document.querySelector('#work-experience-title').innerHTML('');
  },
  { threshold: [ 0.01 ] },
).observe(document.querySelector('#work-experience-title'));
