console.log('burger');

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header-content__burger').addEventListener('click', function () {
    document.querySelector('.header-content__nav').classList.add('header-content__active')
    let htop = document.querySelector('.header-content').clientHeight;
    let hheight = document.querySelector('.hero-content').clientHeight + 28;

    document.querySelector('.header-content__active').style.top = (htop - 20) + 'px';
    document.querySelector('.header-content__active').style.height = hheight + 'px';
  });

  document.addEventListener('click', e => {
    const target = e.target;
    if (!target.closest('.header-content__burger')) {
      document.querySelector('.header-content__nav').classList.remove('header-content__active');
      document.querySelector('.header-content__center-nav').style.height = '';
    };
  });
});
