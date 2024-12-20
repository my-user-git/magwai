document.addEventListener('DOMContentLoaded', function () {
  const adaptiveAction = document.querySelector('.header-content__nav');

  let actions = document.createElement('div');
  let wrap = document.createElement('div');
  let phone = document.createElement('img');
  let button = document.createElement('a');

  actions.className = 'header-content__adaptive';
  wrap.className = 'header-content__adaptive-wrap';
  phone.className = 'header-content__adaptive-phone';
  button.className = 'header-content__adaptive-button';

  phone.src = './img/phone.png';
  button.innerHTML = '<span>Оставить&nbsp;заявку</span>';

  function appendChildren(element, items) {
    items.forEach(function (children) {
      element.appendChild(children);
    });
  }

  appendChildren(wrap, [phone]);
  appendChildren(actions, [wrap, button]);

  adaptiveAction.appendChild(actions);

  // <div class="header-content__actions">
  //   <a class="header-content__phone" href="tel:+78000000000">
  //     <svg width="93" height="60" viewBox="0 0 93 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <g opacity="0.4">
  //         <path d="M0.875027 59.5L19.0667 0.5H92.0202L73.8286 59.5H0.875027Z" stroke="currentColor" />
  //         <path
  //           d="M49.5318 34.2139L51.254 32.491C51.486 32.2618 51.7794 32.1049 52.0988 32.0394C52.4182 31.9739 52.7497 32.0025 53.0531 32.1218L55.152 32.9602C55.4586 33.0847 55.7215 33.2972 55.9076 33.5709C56.0937 33.8447 56.1946 34.1674 56.1976 34.4985V38.3442C56.1958 38.5694 56.1485 38.7919 56.0585 38.9983C55.9685 39.2047 55.8377 39.3908 55.6739 39.5453C55.5101 39.6998 55.3168 39.8195 55.1056 39.8973C54.8943 39.9751 54.6695 40.0093 54.4447 39.9979C39.7368 39.0826 36.7691 26.6224 36.2079 21.8537C36.1818 21.6195 36.2056 21.3825 36.2777 21.1581C36.3498 20.9338 36.4686 20.7273 36.6262 20.5522C36.7838 20.3771 36.9766 20.2374 37.1921 20.1422C37.4076 20.047 37.6407 19.9986 37.8762 20H41.5897C41.9211 20.001 42.2446 20.1011 42.5186 20.2876C42.7927 20.474 43.0047 20.7381 43.1274 21.0461L43.9654 23.1458C44.0886 23.4482 44.1201 23.7801 44.0558 24.1002C43.9915 24.4203 43.8344 24.7144 43.6041 24.9456L41.8819 26.6685C41.8819 26.6685 42.8737 33.3832 49.5318 34.2139Z"
  //           fill="currentColor" />
  //       </g>
  //     </svg>
  //   </a>
  //   <a class="header-content__button">
  //     <span>Оставить&nbsp;заявку</span>
  //   </a>
  // </div>
});
