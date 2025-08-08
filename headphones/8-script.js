const submitBtn = document.querySelector('form');

submitBtn.addEventListener('submit', (e)=>{
  if (e.target.checkValidity()){
    e.preventDefault();
    alert('Form submitted!');
  } else {
  }
})



// hamburger dropdown
const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector('.navlinks')
const icon = document.querySelector('.icon')
const closeicon = document.querySelector('.close')

hamburger.addEventListener('click', ()=>{

    icon.classList.toggle('hiddenicon');
    closeicon.classList.toggle('activeclose');
    navlinks.classList.toggle('activenavlinks');
})




// animation for fade in
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));