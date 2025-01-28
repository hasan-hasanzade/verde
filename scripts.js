var swiper = new Swiper(".mySwiper", {

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  breakpoints: {
    320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      360: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    480: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    640: {
        slidesPerView: 4.5,
        spaceBetween: 0,
      },
    870: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
    1024: {
        slidesPerView: 7.5,
        spaceBetween: 0,
    },
  },
  
  });

  const contentBar = document.querySelector('.menu__list');
const dropdown = document.querySelector('.dropdown-content');
const more = document.querySelector('div.grouped-link');
let selected = '';

function update() {
  const offsetTop = contentBar.offsetTop;
  dropdown.innerHTML = '';
  Array.from(contentBar.children).forEach((a) => {
    if (a.offsetTop > offsetTop) {
      if (a.innerHTML === selected) {
        a.classList.add("active");
        more.innerHTML = a.innerHTML;
        more.classList.add('active');
      }
      const clonedLink = a.cloneNode(true);
      dropdown.appendChild(clonedLink);
    } else if (a.innerHTML === more.innerHTML) {
      more.innerHTML = 'More';
      more.classList.remove('active');
    }
  });
}

contentBar.addEventListener('click', (e) => {
  const menuItem = e.target.closest('.menu__item');
  if (menuItem) {
    contentBar.querySelectorAll('.menu__item').forEach(link => link.classList.remove('active'));
    menuItem.classList.add('active');
    selected = menuItem.innerHTML;
    more.innerHTML = selected;
    more.classList.add('active');
    dropdown.style.display = 'none';
    update();
  }
});

more.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target) && !more.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});

window.addEventListener('resize', update);
update();


const burgerBtn = document.querySelector('.burger__btn');
const closeBtn = document.querySelector('.close-btn');
const burgerMenu = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.add('open');
  overlay.classList.add('open');
  closeBtn.style.display='block'
});

closeBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('open');
  overlay.classList.remove('open');
  closeBtn.style.display='none';
});

overlay.addEventListener('click', () => {
  burgerMenu.classList.remove('open');
  overlay.classList.remove('open');
  closeBtn.style.display='none';
});


const scrollToTopBtn = document.querySelector(".scroll-top-btn");

window.onscroll = () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});