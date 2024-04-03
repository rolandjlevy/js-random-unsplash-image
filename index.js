const $ = (selector) => document.querySelector(selector);

document.addEventListener('DOMContentLoaded', (e) => {
  const img = document.createElement('img');
  img.setAttribute('class', 'image show');
  img.addEventListener('click', async (e) => {
    const randomUrl = 'https://source.unsplash.com/random?1';
    const { url } = await fetch(randomUrl);
    e.target.classList.remove('show');
    e.target.addEventListener('transitionend', (e) => {
      e.target.classList.add('show');
      e.target.src = url;
    });
  });
  $('.photo').appendChild(img);

  $('.image').click();
});
