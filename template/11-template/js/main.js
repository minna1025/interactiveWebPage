const items = document.querySelectorAll('article');
const aside = document.querySelector('aside');
const close = aside.querySelector('span');

for(let el of items) {
  el.addEventListener('mouseenter', e => {
    e.currentTarget.querySelector('video').play();
  });

  el.addEventListener('mouseleave', e => {
    e.currentTarget.querySelector('video').pause();
  });

  el.addEventListener('click', e => {
    let title = e.currentTarget.querySelector('h2').innerText;
    let txt = e.currentTarget.querySelector('p').innerText;
    let videosrc = e.currentTarget.querySelector('video').getAttribute('src');

    aside.querySelector('h1').innerHTML = title;
    aside.querySelector('p').innerHTML = txt;
    aside.querySelector('video').setAttribute('src', videosrc);

    aside.querySelector('video').play();
    aside.classList.add('on');

    close.addEventListener('click', e => {
      aside.classList.remove('on');
      aside.querySelector('video').pause();
    });
  });
}
