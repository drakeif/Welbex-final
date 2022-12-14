const burger = document.getElementById('burger'),
      header = document.getElementById('header'),
      nav = document.getElementById('nav'),
      media = document.getElementById('media');
      

burger.addEventListener("click", (e) => {
    e.target.classList.toggle('active');
    header.classList.toggle('active');
    nav.classList.toggle('active');
    media.classList.toggle('active');
});

closeMenu = document.querySelectorAll('.header__links');
closeSocials = document.querySelectorAll('.header__socials');

closeMenu.forEach(el => el.addEventListener('click', ()=> {
    burger.classList.remove('active');
    header.classList.remove('active');
    nav.classList.remove('active');
    media.classList.remove('active');
  }));

  closeSocials.forEach(el => el.addEventListener('click', ()=> {
    burger.classList.remove('active');
    header.classList.remove('active');
    nav.classList.remove('active');
    media.classList.remove('active');
  }));