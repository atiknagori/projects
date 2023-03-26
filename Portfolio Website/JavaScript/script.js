// Header Toggle

const toggleButton = document.getElementById('MenuBtn')

toggleButton.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('mobile-nav-active');
})

function myFunction(x) {
    x.classList.toggle("fa-xmark");
}

// Typed.JS File (For Typing Effect (Replace It))

let typed = new Typed('.auto-input', {
    strings: ['Front-End Web Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop:true
})

// Active Link State on Scroll

// Get All Links
let  navLinks = document.querySelectorAll('nav ul li a')
// Get All Sections
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY + 20
    sections.forEach (section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});