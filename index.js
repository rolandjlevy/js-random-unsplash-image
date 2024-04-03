const $ = (selector) => document.querySelector(selector);
const randomUrl = 'https://source.unsplash.com/random?1';

document.addEventListener('DOMContentLoaded', (e) => {
  $('.image').addEventListener('click', async (e) => {
    const { url } = await fetch(randomUrl);
    e.target.classList.remove('show');
    e.target.addEventListener('transitionend', (e) => {
      e.target.src = url;
      e.target.classList.add('show');
    });
  });

  $('.image').click();
});
