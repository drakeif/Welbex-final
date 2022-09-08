const burger = document.getElementById('burger');

burger.addEventListener("click", (e) => {
    e.target.classList.toggle('active');
});