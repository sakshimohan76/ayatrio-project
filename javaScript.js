const arrow = document.querySelector('.arrow');
const extra = document.querySelector('.extra');
const arrow2 = document.querySelector('.arrow2');
const extra2 = document.querySelector('.extra2');
const arrow3 = document.querySelector('.arrow3');
const extra3 = document.querySelector('.extra3');
const arrow4 = document.querySelector('.arrow4');
const extra4 = document.querySelector('.extra4');

arrow.addEventListener('click', function() {
  arrow.classList.toggle('active');
  extra.classList.toggle('active');
});

arrow2.addEventListener('click', function() {
    arrow2.classList.toggle('active');
    extra2.classList.toggle('active');
});
arrow3.addEventListener('click', function() {
    arrow3.classList.toggle('active');
    extra3.classList.toggle('active');
});
arrow4.addEventListener('click', function() {
    arrow4.classList.toggle('active');
    extra4.classList.toggle('active');
});
