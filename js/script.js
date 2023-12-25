// prevent load ( only pc )
window.addEventListener('beforeunload', function(e){
  e.preventDefault();
  e.returnValue = '';
});
// Change title ( only pc )
 const DocTitle = document.title;
 window.addEventListener("blur", () => {
   document.title = "Come Back (¬_¬)";
 });
 window.addEventListener("focus", () => {
   document.title = DocTitle;
 });
 
 // Get back to top 
const backToTopBtn = document.getElementById("back-to-top-btn");

function toggleBackToTopButton() {
  if (document.documentElement.scrollTop > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

window.addEventListener("scroll", toggleBackToTopButton);
backToTopBtn.addEventListener("click", scrollToTop);

// Nav bar open and close
const OpenNav = document.getElementById('open_close_navbar');
var NavBar = document.getElementById('navbar');
var HamburgerIcon = document.getElementsByClassName('ri-menu-2-line')[0];

OpenNav.addEventListener('click', () => {
  if (NavBar.classList.contains('show_nav')) {
    NavBar.classList.remove('show_nav');
    HamburgerIcon.classList.remove('ri-close-line');
    HamburgerIcon.classList.add('ri-menu-2-line');
  }
  else {
    NavBar.classList.add('show_nav');
    HamburgerIcon.classList.remove('ri-menu-2-line');
    HamburgerIcon.classList.add('ri-close-line');
    
  }
});

var scrollY = window.pageYOffset;

const scrollActive = () => {
    // Define sections variable here
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop ,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('#navbar_ul a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Add 'active_link' class to the matching element if it exists
            if (sectionsClass) {
                sectionsClass.classList.add('active_link');
            }
        } else {
            // Remove 'active_link' class and other classes only if the element exists
            if (sectionsClass) {
                sectionsClass.classList.remove('active_link');
                NavBar.classList.remove('show_nav');
    HamburgerIcon.classList.remove('ri-close-line');
    HamburgerIcon.classList.add('ri-menu-2-line');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// button actioon
const contact = document.getElementById('contact');
const project = document.getElementById('project');
const contact_buttons = document.querySelectorAll('.contact_button');
const project_buttons = Array.from(document.getElementsByClassName('project_button'));
const contact_height = contact.offsetTop;
const project_height = project.offsetTop;

function scrollToPosition(position) {
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
}

contact_buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    scrollToPosition(contact_height);
  });
});

project_buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    scrollToPosition(project_height);
  });
});


// animation 

const animation = ScrollReveal({
  origin: 'top',
  distance: '10px',
  duration: 2400,
  delay: 300,
  reset: true
})
animation.reveal('.home_box , #contact , #footer')
animation.reveal('.home_image', {origin:'bottom'})
animation.reveal('.about_image', {origin:'right'})
animation.reveal('.about_box', {origin:'left'})
animation.reveal('#skill_box_left', {origin:'left'})
animation.reveal('#skill_box_right', {origin:'right'})
animation.reveal('.servivice_tab', {interval: 100})
animation.reveal('.project_tab', {interval: 100})

