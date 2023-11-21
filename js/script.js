function userScroll() {
  const navbar = document.querySelector('.navbar');
  const toTopBtn = document.querySelector('#to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-sticky');
      toTopBtn.classList.add('show');
    } else {
      navbar.classList.remove('navbar-sticky');
      toTopBtn.classList.remove('show');
    }
  });
}

function scrollToTop() {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; 
}

function incrementSats() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      //inner text
      const c = +counter.innerText;

      //increment speed
      const increment = target / 300;

      if (c < target) {
        //round up the value
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementSats);
document.querySelector('#to-top').addEventListener('click', scrollToTop);