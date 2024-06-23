const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section[id]');
const skillsHeader = document.querySelectorAll('.skills__header');


if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

if(navClose){
  navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-menu');
  })
}

// navToggle.addEventListener('click', () => {
//   navMenu.classList.add('show-menu');
// })

// navClose.addEventListener("click", () => {
//   navMenu.classList.remove('show-menu');
// })

navLink.forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
}));

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link');
    }else{
      sectionsClass.classList.remove('active-link');
    }


  } );
};

window.addEventListener('scroll', scrollActive);

//scrollreveal

var srAnime = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration: 700,
  delay:200,
})

srAnime.reveal('.projects__cards,.contact__container')
srAnime.reveal('.home__content,.skills__data',{origin:'left'});
srAnime.reveal('.about__data,.skills__content',{origin:'right'});


var contactForm = document.getElementById("contact-form");
var contactMessage = document.getElementById("contact-message");

const  sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_98m4wbo', 'template_bh4hoqg','#contact-form','7nBCPv_zvIHEyBXBh')
                    .then(() => {
                      contactMessage.textContent = "message sent";
                        console.log('SUCCESS!');
                        contactForm.reset();
                    }, (error) => {
                      ontactMessage.textContent = "message not sent"
                        console.log('FAILED...', error);
                    });


} 

contactForm.addEventListener('submit', sendEmail);