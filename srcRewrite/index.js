// Setup materialize.css
$(document).ready(function() {
  $('.tabs').tabs();
  $('.sidenav').sidenav();
  $('.scrollspy').scrollSpy({
      scrollOffset: 30
  });
});

// Header
const brandTitle = `Matthew Lin`;
const personalTitle = `Full-Stack Web + (Desktop) Application Developer`;
const personalDescription = `I create high quality web applications, games,
  and projects`;
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
  strings: "Matthew Lin",
  waitUntilVisible: true,

  afterComplete: () => {
    // Delete the first placeholder
    $('#placeholder-personal-title').remove();

    // After the name is typed, begin typing the title
    new TypeIt('#personal-title', {
      speed: 30,
      strings: personalTitle,
      waitUntilVisible: true,

      afterComplete: (instance) => {
        // Delete the second placeholder
        $('#placeholder-personal-description').remove();

        // Get rid of the cursor for the personal title
        instance.reset();
        $('#personal-title').html(personalTitle);

        // After the title is typed, begin typing the description
        new TypeIt('#personal-description', {
          speed: 25,
          strings: personalDescription,
          waitUntilVisible: true,

          afterComplete: () => {
            $('#portfolio-button').removeClass('hide');
          }
        }).go();
      }
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
    // Delete the placeholder
    $('#placeholder-motto-description').remove();

    if (!portfolioTitleShown) {
      portfolioTitleShown = true;
      new TypeIt('#portfolio-title', {
        speed: 30,
        strings: portfolioTitle,
        waitUntilVisible: true,
      }).go();
    }
  }
}).go();

$('#portfolio-button').click(() => {
  if (!portfolioTitleShown) {
    portfolioTitleShown = true;
    new TypeIt('#portfolio-title', {
      speed: 30,
      strings: portfolioTitle,
      waitUntilVisible: true,
    }).go();
  }
});

new TypeIt('#work-experience-title', {
  speed: 30,
  strings: workExperienceTitle,
  waitUntilVisible: true,
}).go();